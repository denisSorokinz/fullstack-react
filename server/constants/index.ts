import { Prisma } from '@prisma/client';
import { FILTERS_ENUM, FilterType } from '../types/filters';

const baseUrl = 'https://auto.ria.com/uk';
const ENDPOINTS = {
  SEARCH_LISTINGS: `${baseUrl}/search`,
  SINGLE_LISTING: baseUrl,
  CITIES_API: 'https://auto.ria.com/api/cities?langId=4',
};

const FILTERS_INITIAL: FiltersType = {
  [FILTERS_ENUM.BRAND]: {
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
  [FILTERS_ENUM.MODEL]: {
    slug: 'model',
    displayName: 'Модель',
    type: 'select',
    options: [],
    _populateFromDb: {
      model: 'model',
      dependency: {
        name: FILTERS_ENUM.BRAND,
        dbJoinColumn: 'brandId',
      },
    },
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'modelId',
      },
    },
  },
  [FILTERS_ENUM.PRICE]: {
    slug: 'price',
    displayName: 'Ціна',
    type: 'range',
    from: 0,
    to: 1_000_000,
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'price',
      },
    },
  },
  [FILTERS_ENUM.YEAR]: {
    slug: 'year',
    displayName: 'Рік',
    type: 'range',
    from: 1930,
    to: new Date().getFullYear(),
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'year',
      },
    },
  },
  [FILTERS_ENUM.MILEAGE]: {
    slug: 'mileage',
    displayName: 'Пробіг',
    type: 'range',
    from: 0,
    to: 1_000_000,
    _queries: {
      [Prisma.ModelName['Listing']]: {
        columnName: 'mileage',
      },
    },
  },
};

export type FiltersType = Record<FILTERS_ENUM, FilterType>;

export { baseUrl, ENDPOINTS, FILTERS_INITIAL };
