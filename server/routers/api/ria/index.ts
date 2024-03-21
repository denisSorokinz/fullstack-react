import { Router } from 'express';
import { decodeHtmlString, queryStringToAppliedFiltersTuple } from '../../../lib/utils';
import { ENDPOINTS } from '../../../constants';
import { fetchDocumentByUrl, sanitizeFilters, getFilters, fetchFilterOptionsFromAPI } from '../../../lib/dom';
import { FILTER_NAMES, ISelectFilter } from '../../../types/filters';
import { CarListing, CarListingSchema, CarListingExpanded } from '../../../types/listings';

const riaApiRouter = Router();

riaApiRouter.get('/filters', async (req, res) => {
  const { url: requestUrl } = req;
  const queryString = decodeHtmlString(requestUrl.split('?')[1] || '');

  let documentUrl = ENDPOINTS.SEARCH_LISTINGS;
  if (queryString) documentUrl = `${documentUrl}?${queryString}`;

  const filtersTuple = queryStringToAppliedFiltersTuple(queryString);
  const appliedFilters = filtersTuple.map(([filter]) => filter);

  const document = await fetchDocumentByUrl(documentUrl);
  let filters = sanitizeFilters(await getFilters(document), appliedFilters);
  // let filters = await getFilters(document);

  if (!queryString) return res.status(200).json({ filters });

  for (const filterName of Object.keys(filters)) {
    const typedFilterName = filterName as FILTER_NAMES;
    const filter = filters[typedFilterName] as ISelectFilter;
    if (appliedFilters.includes(typedFilterName) || !filter.dependency?.apiUrl) continue;

    const { filterName: parentFilterName } = filter.dependency;
    const parentFilter = filtersTuple.find(([filterId]) => filterId === parentFilterName);

    if (!parentFilter) continue;

    const [_, parentFilterValue] = parentFilter;

    const optionsUrl = filter.dependency.apiUrl.replace('[value]', parentFilterValue);
    const options = await fetchFilterOptionsFromAPI(optionsUrl);

    filter.options = options;
  }

  return res.status(200).json({ filters });
});

riaApiRouter.get('/search', async (req, res) => {
  let url = ENDPOINTS.SEARCH_LISTINGS;
  const queryParams = req.originalUrl.split('?')[1] || 'indexName=auto';
  console.log('[queryParams]', queryParams);
  url += `?${queryParams}`;

  console.log('url', url);

  const document = await fetchDocumentByUrl(url);

  // parse car data from document
  const carNodes = document.querySelectorAll('#searchResults .ticket-item');

  const carData = Array.from(carNodes).map((carNode) => {
    const dataNode = carNode.querySelector('.hide') as HTMLElement;
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

    const priceNode = carNode.querySelector('.price-ticket') as HTMLElement;
    const { mainPrice: priceUsd } = priceNode.dataset as { mainPrice: string };

    const mileageNode = carNode.querySelector('.js-race') as HTMLElement;
    mileageNode.querySelector('i')?.remove();
    const mileageInnerHtml = mileageNode.innerHTML.trim();
    const mileage = mileageInnerHtml.match(/\d+/) ? mileageInnerHtml.match(/\d+/)![0] : mileageInnerHtml;

    const sourceNode = carNode.querySelector('img') as HTMLImageElement;
    const { src: thumbnailUrl } = sourceNode;

    const slug = linkToView.replace(/(\/|\.html)/g, '');

    const carListing = { id, brand, model, year, priceUsd, mileage, thumbnailUrl, slug } as CarListing;

    return carListing;
  });

  res.status(200).send({ listings: carData });
});

riaApiRouter.get('/listing/:slug', async (req, res) => {
  let url = ENDPOINTS.SINGLE_LISTING;
  const { slug } = req.params as { slug: string };

  const document = await fetchDocumentByUrl(`${url}/${slug}.html`);

  const id = (document.body.dataset as { autoId: string }).autoId;

  const dataNode = (document.querySelector('#ldJson2') as HTMLScriptElement) || null;
  const {
    brand: { name: brand },
    model,
    productionDate: year,
    offers: { price: priceUsd },
    mileageFromOdometer: { value: mileage },
    description,
  } = JSON.parse(dataNode?.innerHTML) as CarListingSchema;

  let imageNodes: NodeListOf<HTMLSourceElement | HTMLImageElement> = document.querySelectorAll<HTMLSourceElement>(
    '#photosBlock .carousel-inner > div picture source'
  );
  if (imageNodes.length === 0) imageNodes = document.querySelectorAll<HTMLImageElement>('#photosBlock .carousel-inner > div picture img');
  const images = Array.from(imageNodes).map((item) => {
    const src = item.srcset || item.src;
    const fullSize = src.replace(/s\./, 'f.');
    return fullSize;
  });

  const listing = { id, brand, model, year: `${year}`, priceUsd, mileage: `${mileage}`, description, images } as CarListingExpanded;

  res.status(200).send({ listing });
});

export default riaApiRouter;
