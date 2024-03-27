const baseUrl = 'https://auto.ria.com/uk';

const sleepMs = (delay = 250) => new Promise((res) => setTimeout(res, delay));

const getImagesForSlug = async (slug) => {
  const singleListingPageHtml = await (await fetch(`${baseUrl}/${slug}.html`)).text();
  const domParser = new DOMParser();
  const dom = domParser.parseFromString(singleListingPageHtml, 'text/html');
  let imageNodes = dom.querySelectorAll('#photosBlock .carousel-inner > div picture source');
  if (imageNodes.length === 0) imageNodes = document.querySelectorAll('#photosBlock .carousel-inner > div picture img');
  const images = Array.from(imageNodes).map((item) => {
    const src = item.srcset || item.src;
    const fullSize = src.replace(/s\./, 'fhd.');
    return fullSize;
  });

  return images;
};

function jsonToCsv(jsonData) {
  const csvHeader = 'id,brand_id,model_id,year,price,mileage,createdAt,thumbnailUrl,slug,images';
  const csvRows = jsonData.map((item) => {
    // Ensure the entire array is quoted and interal quotes are escaped
    const imagesFormatted = `"{${item.images.map((image) => `"${image}"`).join(',')}}"`;
    return `${item.id},${item.brand_id},${item.model_id},${item.year},${item.price},${item.mileage},${item.createdAt},${item.thumbnailUrl},${item.slug},${imagesFormatted}`;
  });

  return csvHeader + '\n' + csvRows.join('\n');
}

const parseCarData = async (document) => {
  const carNodes = document.querySelectorAll('#searchResults .ticket-item:not(.paid)');
  const carData = await Promise.all(
    Array.from(carNodes).map((carNode) => {
      const dataNode = carNode.querySelector('.hide');
      const { id, markName: brand, modelName: model, year, linkToView } = dataNode.dataset;
      if (!linkToView) {
        console.log({ carNode });
      }

      const createdAt = new Date(carNode.querySelector('span[data-add-date]')?.dataset.addDate);

      const priceNode = carNode.querySelector('.price-ticket');
      const { mainPrice: price } = priceNode.dataset;

      const mileageNode = carNode.querySelector('.js-race');
      mileageNode.querySelector('i')?.remove();
      const mileageInnerHtml = mileageNode.innerHTML.trim();
      const mileage = mileageInnerHtml.match(/\d+/) ? mileageInnerHtml.match(/\d+/)[0] : mileageInnerHtml;

      // todo: description
      const description = carNode.querySelector('.descriptions-ticket')?.innerText;

      const sourceNode = carNode.querySelector('img');
      const { src: thumbnailUrl } = sourceNode;

      const slug = linkToView.replace(/(\/|\.html)/g, '');

      const carListing = {
        id,
        brand,
        model,
        year,
        price,
        mileage,
        createdAt,
        thumbnailUrl,
        slug,
        description,
      };

      return carListing;
    })
  );

  for (let item of carData) {
    item.images = await getImagesForSlug(item.slug);
    await sleepMs(50);
  }

  return carData;
};

const mapCarData = (carData) =>
  carData.map((item) => {
    const res = { ...item };
    res['brand_id'] = brands.find(({ brand }) => brand.toLowerCase() === item.brand.toLowerCase()).id;
    res['model_id'] = models.find(({ name }) => name.toLowerCase() === item.model.toLowerCase()).id;

    delete res['brand'];
    delete res['model'];

    return res;
  });

const parsed = await parseCarData();
const mapped = mapCarData(parsed);
const csv = jsonToCsv(mapped);

console.log({ carData });
