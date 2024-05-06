import { Prisma } from '@prisma/client';
import { FILTER_NAMES, FilterType } from '../types/filters';

const baseUrl = 'https://auto.ria.com/uk';
const ENDPOINTS = {
  SEARCH_LISTINGS: `${baseUrl}/search`,
  SINGLE_LISTING: baseUrl,
  CITIES_API: 'https://auto.ria.com/api/cities?langId=4',
};

const FILTERS_INITIAL: FiltersType = {
  [FILTER_NAMES.BRAND]: {
    slug: 'brand',
    displayName: 'Марка',
    type: 'select',
    options: [],
    _populateFromDb: {
      model: 'brand',
    },
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'brandId',
      },
    },
  },
  [FILTER_NAMES.MODEL]: {
    slug: 'model',
    displayName: 'Модель',
    type: 'select',
    options: [],
    dependency: FILTER_NAMES.BRAND,
    _populateFromDb: {
      model: 'model',
      dbJoinColumn: 'brandId',
    },
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'modelId',
      },
    },
  },
  [FILTER_NAMES.PRICE]: {
    slug: 'price',
    displayName: 'Ціна',
    type: 'range',
    from: 0,
    to: 100_000,
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'price',
      },
    },
  },
  [FILTER_NAMES.YEAR]: {
    slug: 'year',
    displayName: 'Рік',
    type: 'range',
    from: 1990,
    to: new Date().getFullYear(),
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'year',
      },
    },
  },
  [FILTER_NAMES.MILEAGE]: {
    slug: 'mileage',
    displayName: 'Пробіг (т. км.)',
    type: 'range',
    from: 0,
    to: 500,
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'mileage',
      },
    },
  },
};

export type FiltersType = Record<FILTER_NAMES, FilterType>;

export { baseUrl, ENDPOINTS, FILTERS_INITIAL };
