import { Router } from 'express';
import { decodeHtmlString, deepClone, queryStringToAppliedFiltersTuple, sanitizeFilters, sanitizeObject } from '../../../lib/utils';
import { FILTERS_INITIAL, ENDPOINTS } from '../../../constants';
import PrismaClientSingleton from '../../../prisma/client';
import { Prisma, PrismaClient } from '@prisma/client';
import { FILTER_NAMES, RANGE_MODIFIERS } from '../../../types/filters';
import { ApiRequest } from '../../../types/http';
import { ExcludeLens } from '../../../lib/lenses';
import { UnwrapPromise } from '@prisma/client/runtime/library';
import { fetchDocumentByUrl } from '../../../lib/dom';
import { mapListingFields } from '../../../lib/listings';

// const prisma = PrismaClientSingleton.getInstance();
const prisma = new PrismaClient();

const riaApiRouter = Router();

let brands: UnwrapPromise<ReturnType<Prisma.BrandDelegate['findMany']>>;
let models: UnwrapPromise<ReturnType<Prisma.ModelDelegate['findMany']>>;
prisma.brand.findMany().then((res) => (brands = res));
prisma.model.findMany().then((res) => (models = res));

riaApiRouter.get('/filters', async (req, res) => {
  const appliedFilters = (req as ApiRequest).filters;

  let filters = deepClone(FILTERS_INITIAL);

  for (let filterName in filters) {
    const tFilterName = filterName as keyof typeof filters;
    const filter = filters[tFilterName];

    if (!(filter.type === 'select' || filter.type === 'checkbox') || !filter._populateFromDb) continue;

    let query = {};

    if (filter.dependency) {
      const parentFilterName = filter.dependency;
      const { dbJoinColumn: columnName } = filter._populateFromDb;

      const foreignKeyValue = (appliedFilters.find(([name]) => name === parentFilterName) || [])[1];

      if (!(columnName && foreignKeyValue)) continue;

      query = { [columnName]: +foreignKeyValue };
    }

    const options = (await (prisma[filter._populateFromDb.model] as any).findMany({ where: query })) as { id: number; name: string }[];
    filter.options = options;
  }

  return res.status(200).json({ filters: sanitizeObject(filters) });
});

riaApiRouter.get('/search', async (req, res) => {
  const appliedFilters = (req as ApiRequest).filters;

  let page = Number((req.params as { page?: string }).page) || 0;
  if (page < 0) page = 0;

  let itemsPerPage = Number((req.params as { 'per-page'?: string })['per-page']) || 20;
  if (itemsPerPage <= 0) itemsPerPage = 20;

  const query = {} as Prisma.ListingWhereInput;
  for (let [filterName, value, rangeModifier] of appliedFilters) {
    const queryField = FILTERS_INITIAL[filterName]._queries[Prisma.ModelName.Listing]?.columnName;

    if (queryField) {
      if (rangeModifier) {
        let columnModifier;
        if (rangeModifier === RANGE_MODIFIERS.FROM) columnModifier = 'gte';
        if (rangeModifier === RANGE_MODIFIERS.TO) columnModifier = 'lte';

        let existingModifiers = query[queryField] || {};
        query[queryField] = Object.assign({}, existingModifiers as any, { [columnModifier!]: value });

        continue;
      }

      query[queryField] = value;
    }
  }

  const listings = await prisma.listing.findMany({ where: query, take: itemsPerPage, skip: page * itemsPerPage });

  // todo: replace w/ mapListingFields() call
  const listingsUI = listings.map((l) => {
    const noIds = ExcludeLens.from(['brandId', 'modelId']);
    const item = noIds.view(l);

    const { name: brand } = brands.find((brand) => brand.id === l.brandId)!;
    const { name: model } = models.find((model) => model.id === l.modelId)!;

    return { ...item, brand, model };
  });

  res.status(200).send({ data: listingsUI });
});

riaApiRouter.get('/listing/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (id === undefined) return res.status(400).send({ success: false, message: 'please provide listing id' });

  const listing = await prisma.listing.findUnique({ where: { id } });
  if (!listing) return res.status(404).send({ success: false, message: 'listing not found' });

  const mapped = mapListingFields(listing);

  return res.status(200).send({ listing: mapped });
});

export default riaApiRouter;
