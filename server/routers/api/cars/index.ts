import { Router } from 'express';
import { decodeHtmlString, deepClone, queryStringToAppliedFiltersTuple, sanitizeFilters, sanitizeObject } from '../../../lib/utils';
import { FILTERS_INITIAL, ENDPOINTS, FiltersType } from '../../../constants';
import PrismaClientSingleton from '../../../prisma/client';
import { Prisma, PrismaClient } from '@prisma/client';
import { FILTER_NAMES, FilterOption, RANGE_MODIFIERS } from '../../../types/filters';
import { ApiRequest } from '../../../types/http';
import { ExcludeLens } from '../../../lib/lenses';
import { UnwrapPromise } from '@prisma/client/runtime/library';
import { fetchDocumentByUrl } from '../../../lib/dom';
import { mapListingFields } from '../../../lib/listings';
import { authGuard, validateDeleteListingRequest, validateEditListingRequest } from '../../../middlewares';
import { BrandType, ListingType, ModelType } from '../../../types/data';
import { ZodError } from 'zod';

// const prisma = PrismaClientSingleton.getInstance();
const prisma = new PrismaClient();

const riaApiRouter = Router();

let brands: BrandType[];
let models: ModelType[];
prisma.brand.findMany().then((res) => (brands = res));
prisma.model.findMany().then((res) => (models = res));

export enum CarApiOperations {
  getFilters = 'filters',
  getListing = 'listing',
  updateListing = 'listing',
  deleteListing = 'listing',
  getListings = 'listings',
  getBrands = 'brands',
  getModelsByBrand = 'models',
}
export type CarApiResponse<T> =
  | { success: false; message?: string; error?: ZodError }
  | {
      success: true;
      data: {
        [CarApiOperations.getFilters]?: T extends CarApiOperations.getFilters ? FiltersType : undefined;
        [CarApiOperations.getListing]?: T extends CarApiOperations.getListing ? ListingType : undefined;
        [CarApiOperations.updateListing]?: T extends CarApiOperations.updateListing ? ListingType : undefined;
        [CarApiOperations.getListings]?: T extends CarApiOperations.getListings ? Array<ListingType> : undefined;
        [CarApiOperations.getBrands]?: T extends CarApiOperations.getBrands ? Array<FilterOption> : undefined;
        [CarApiOperations.getModelsByBrand]?: T extends CarApiOperations.getModelsByBrand ? Array<FilterOption> : undefined;
      };
    };

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

  return res.status(200).json({ success: true, data: { filters: sanitizeObject(filters) } } as CarApiResponse<CarApiOperations.getFilters>);
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

  const mapped = listings
    .map(mapListingFields)
    .map((item) => ({ ...item, images: item.images.slice(0, 10) }))
    // .slice(0, 1);

  res.status(200).json({ success: true, data: { listings: mapped } } as CarApiResponse<CarApiOperations.getListings>);
});

riaApiRouter.get('/brands', async (req, res) => {
  // fetch all brands from Prisma
  const brands = await prisma.brand.findMany();
  if (brands.length === 0)
    return res.status(400).send({ success: false, message: 'no brands available' } as CarApiResponse<CarApiOperations.getBrands>);

  // return response
  return res.status(200).send({ success: true, data: { brands } } as CarApiResponse<CarApiOperations.getBrands>);
});
riaApiRouter.get('/brands/:brandId/models', async (req, res) => {
  const brandId = Number(req.params.brandId);

  if (isNaN(brandId))
    return res.status(400).send({ success: false, message: 'no brand id provided' } as CarApiResponse<CarApiOperations.getModelsByBrand>);

  // fetch all models for brandId in Prisma
  const models = await prisma.model.findMany({ where: { brandId } });
  if (models.length === 0)
    return res.status(400).send({ success: false, message: 'mo models available' } as CarApiResponse<CarApiOperations.getModelsByBrand>);

  // return response
  return res.status(200).send({ success: true, data: { models } } as CarApiResponse<CarApiOperations.getModelsByBrand>);
});

riaApiRouter.get('/listings/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (id === undefined) return res.status(400).send({ success: false, message: 'please provide listing id' });

  const listing = await prisma.listing.findUnique({ where: { id } });
  if (!listing) return res.status(404).send({ success: false, message: 'listing not found' });

  const mapped = mapListingFields(listing);

  return res.status(200).send({ success: true, data: { listing: mapped } });
});

riaApiRouter.put('/listings/:id', authGuard, validateEditListingRequest, async (req, res) => {
  const params = req.params as { id: string };
  const id = Number(params.id);

  const nextListing = req.body as Partial<NonNullable<ListingType>>;
  console.log('[server-edit-listing]', { id, nextListing });

  const listingExists = await prisma.listing.findUnique({ where: { id } });
  if (!listingExists)
    return res.status(400).send({ success: false, message: 'listing does not exist' } as CarApiResponse<CarApiOperations.updateListing>);

  const noIdLens = ExcludeLens.from('id');
  const updatedProperties = noIdLens.view(nextListing);
  const updated = await prisma.listing.update({ data: { ...updatedProperties }, where: { id } });

  const mapped = mapListingFields(updated);

  return res.status(200).send({ success: true, data: { listing: mapped } } as CarApiResponse<CarApiOperations.updateListing>);
});

riaApiRouter.delete('/listings/:id', authGuard, validateDeleteListingRequest, async (req, res) => {
  const params = req.params as { id: string };
  const id = Number(params.id);

  const listingExists = await prisma.listing.findUnique({ where: { id } });
  if (!listingExists)
    return res.status(400).send({ success: false, message: 'listing does not exist' } as CarApiResponse<CarApiOperations.updateListing>);

  await prisma.listing.delete({ where: { id } });

  return res.sendStatus(204);
});

export default riaApiRouter;
