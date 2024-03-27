import { Router } from 'express';
import { decodeHtmlString, queryStringToAppliedFiltersTuple, sanitizeFilters, sanitizeObject } from '../../../lib/utils';
import { FILTERS_INITIAL } from '../../../constants';
import PrismaClientSingleton from '../../../prisma/client';
import { Prisma } from '@prisma/client';
import { RANGE_MODIFIERS } from '../../../types/filters';

const prisma = PrismaClientSingleton.getInstance();

const riaApiRouter = Router();

riaApiRouter.get('/filters', async (req, res) => {
  const { url: requestUrl } = req;

  const queryString = decodeHtmlString(requestUrl.split('?')[1] || '');

  const tuple = queryStringToAppliedFiltersTuple(queryString);
  const appliedFilters = sanitizeFilters(FILTERS_INITIAL, tuple);

  console.log({ appliedFilters });

  let filters = { ...FILTERS_INITIAL };

  for (let filterName in filters) {
    const tFilterName = filterName as keyof typeof filters;
    const filter = filters[tFilterName];

    if (!(filter.type === 'select' || filter.type === 'checkbox') || !filter._populateFromDb) continue;

    let query = {};
    if (filter._populateFromDb.dependency) {
      const { name: parentFilterName, dbJoinColumn: columnName } = filter._populateFromDb.dependency;
      const foreignKeyValue = (appliedFilters.find(([name]) => name === parentFilterName) || [])[1];

      if (!(columnName && foreignKeyValue)) continue;

      query = { [columnName]: +foreignKeyValue };
    }

    const options = await (prisma[filter._populateFromDb.model] as any).findMany({ where: query });
    filter.options = options;
  }

  return res.status(200).json({ filters: sanitizeObject(filters) });
});

riaApiRouter.get('/search', async (req, res) => {
  const { url: requestUrl } = req;

  const queryString = decodeHtmlString(requestUrl.split('?')[1] || '');

  const tuple = queryStringToAppliedFiltersTuple(queryString);
  const appliedFilters = sanitizeFilters(FILTERS_INITIAL, tuple);

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

  const data = await prisma.listing.findMany({ where: query });

  console.log({ query });

  res.status(200).send({ query, data });
});

export default riaApiRouter;
