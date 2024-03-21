import { FILTER_NAMES, FilterType } from '../types/filters';

const baseUrl = 'https://auto.ria.com/uk';
const ENDPOINTS = {
  SEARCH_LISTINGS: `${baseUrl}/search`,
  SINGLE_LISTING: baseUrl,
  CITIES_API: 'https://auto.ria.com/api/cities?langId=4',
};

const FILTERS: FiltersType = {
  [FILTER_NAMES.CATEGORY]: {
    slug: 'categories.main.id',
    displayName: 'Тип транспорта',
    revalidateOnChange: false,
    type: 'select',
    options: [],
  },
  [FILTER_NAMES.BRAND]: {
    slug: 'brand.id[0]',
    displayName: 'Марка',
    revalidateOnChange: true,
    type: 'select',
    dependency: {
      filterName: FILTER_NAMES.CATEGORY,
    },
    options: [],
  },
  [FILTER_NAMES.MODEL]: {
    slug: 'model.id[0]',
    displayName: 'Модель',
    revalidateOnChange: false,
    type: 'select',
    dependency: {
      filterName: FILTER_NAMES.BRAND,
    },
    options: [],
  },
  [FILTER_NAMES.REGION]: {
    slug: 'region.id[0]',
    displayName: 'Область',
    revalidateOnChange: true,
    type: 'select',
    // dependency: {
    //   filterName: FILTER_NAMES.CITY,
    //   apiUrl: "https://auto.ria.com/api/suggest/cities?q=[value]&langId=4&empty=true&fields=name,value,state",
    // },
    options: [],
  },
  [FILTER_NAMES.CITY]: {
    slug: 'city.id[0]',
    displayName: 'Місто',
    revalidateOnChange: true,
    type: 'select',
    dependency: {
      filterName: FILTER_NAMES.REGION,
      apiUrl: 'https://auto.ria.com/api/states/[value]/cities?langId=4',
    },
    options: [],
  },
};

export type FiltersType = Record<FILTER_NAMES, FilterType>;

export { baseUrl, ENDPOINTS, FILTERS };
