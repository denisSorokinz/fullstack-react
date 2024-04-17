import { Router } from 'express';
import { fetchDocumentByUrl } from '../../lib/dom';
import { brands, models } from '../../constants/crawler';
import { ExcludeLens } from '../../lib/lenses';
import PrismaClientSingleton from '../../prisma/client';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = PrismaClientSingleton.getInstance();

const baseUrl = 'https://auto.ria.com/uk';

const sleepMs = (delay = 250) => new Promise((res) => setTimeout(res, delay));

type ListingDetails = Omit<Prisma.ListingUncheckedCreateInput, 'brandId' | 'modelId'> & {
  brand: string;
  model: string;
};

const getImagesForSlug = async (slug: string) => {
  const document = await fetchDocumentByUrl(`${baseUrl}/${slug}.html`);
  let imageNodes: NodeListOf<HTMLSourceElement | HTMLImageElement> = document.querySelectorAll<HTMLSourceElement>(
    '#photosBlock .carousel-inner > div picture source'
  );
  if (imageNodes.length === 0) imageNodes = document.querySelectorAll<HTMLImageElement>('#photosBlock .carousel-inner > div picture img');
  const images = Array.from(imageNodes).map((item) => {
    const src = item.srcset || item.src;
    const fullSize = src.replace(/s\./, 'fhd.');
    return fullSize;
  });

  return images;
};

function jsonToCsv(jsonData: any) {
  const csvHeader = 'id,brand_id,model_id,year,price,mileage,createdAt,thumbnailUrl,slug,images';
  const csvRows = jsonData.map((item: any) => {
    // Ensure the entire array is quoted and interal quotes are escaped
    const imagesFormatted = `"{${item.images.map((image: any) => `"${image}"`).join(',')}}"`;
    return `${item.id},${item.brand_id},${item.model_id},${item.year},${item.price},${item.mileage},${item.createdAt},${item.thumbnailUrl},${item.slug},${imagesFormatted}`;
  });

  return csvHeader + '\n' + csvRows.join('\n');
}

const parseListings = async (document: Document) => {
  const carNodes = document.querySelectorAll('#searchResults .ticket-item:not(.paid)');
  const listings = await Promise.all(
    Array.from(carNodes).map((carNode) => {
      const dataNode = carNode.querySelector<HTMLElement>('.hide')!;
      const {
        id,
        markName: brand,
        modelName: model,
        year,
        linkToView,
      } = dataNode.dataset as {
        id: string;
        markName: string;
        modelName: string;
        year: string;
        linkToView: string;
      };

      const dateNode = carNode.querySelector<HTMLSpanElement>('span[data-add-date]')!;
      const { addDate } = dateNode.dataset as { addDate: string };
      const createdAt = new Date(addDate);

      const priceNode = carNode.querySelector<HTMLElement>('.price-ticket')!;
      const { mainPrice: price } = priceNode.dataset as { mainPrice: string };

      const mileageNode = carNode.querySelector<HTMLElement>('.js-race')!;
      mileageNode.querySelector('i')?.remove();
      const mileageInnerHtml = mileageNode.innerHTML.trim();
      const digits = mileageInnerHtml.match(/\d+/);
      const mileage = digits ? digits[0] : mileageInnerHtml;

      const description = carNode.querySelector<HTMLParagraphElement>('.descriptions-ticket > span')?.innerHTML;
      if (!description) console.log({ id, model, year });

      const sourceNode = carNode.querySelector<HTMLImageElement>('img')!;
      const { src: thumbnailUrl } = sourceNode;

      const slug = linkToView.replace(/(\/|\.html)/g, '');

      const carListing = {
        id: +id,
        brand,
        model,
        year: +year,
        price: +price,
        mileage: +mileage,
        createdAt,
        thumbnailUrl,
        slug,
        description,
        images: [],
      } as ListingDetails;

      return carListing;
    })
  );

  for (let item of listings) {
    item.images = await getImagesForSlug(item.slug);
    await sleepMs(50);
  }

  return listings;
};

const mapListings = (listings: ListingDetails[]) => {
  const mappingLens = ExcludeLens.from(['brand', 'model']);

  const mapped = listings
    .map((item) => {
      const brandId = brands.find(({ name }) => name.toLowerCase() === item.brand.toLowerCase())?.id;
      const modelId = models.find(({ name }) => name.toLowerCase() === item.model.toLowerCase())?.id;

      if (!(brandId !== undefined && modelId !== undefined)) return;

      const mapped = mappingLens.view(item) as Prisma.ListingUncheckedCreateInput;

      mapped.brandId = brandId;
      mapped.modelId = modelId;

      return mapped;
    })
    .filter(Boolean) as Prisma.ListingUncheckedCreateInput[];

  return mapped;
};

const crawlerRouter = Router();

crawlerRouter.get('/', async (req, res) => {
  // const url = `https://auto.ria.com/uk/search/?indexName=auto&brand.id%5B0%5D=79&country.import.usa.not=-1&price.currency=1&abroad.not=0&custom.not=1&page=0&size=100`;
  const url = 'https://auto.ria.com/uk/legkovie/bmw/?page=1';

  const document = await fetchDocumentByUrl(url);

  const parsed = await parseListings(document);
  const mapped = mapListings(parsed);

  console.log('mapped', mapped);

  let data;
  if (mapped.length > 0) {
    data = await prisma.listing.createMany({ data: mapped });
  }

  console.log('after-insert');

  res.json({ data });
});

crawlerRouter.get('/query', async (req, res) => {
  const { model } = req.query as { model: any };

  console.log({ model });

  const data = await (prisma[model] as any).findMany();

  res.json({ data });
});

export default crawlerRouter;
