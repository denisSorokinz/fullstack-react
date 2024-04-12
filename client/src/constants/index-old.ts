// FILTERS
enum FILTER_NAMES {
  CATEGORY = "categories",
  STATE = "states",
  MARK = "marks",
  CITY = "cities",
  YEAR = "year",
  PAGINATION_PAGE = "paginationPage",
  RESULTS_PER_PAGE = "resultsPerPage",
}

// ENDPOINTS
const BASE_API = `${process.env.NEXT_PUBLIC_API_URL}/api/ria`;
const ENDPOINTS = {
  BASE_API,
  QUERIES: {
    // [FILTER_NAMES.CATEGORY]: "categories",
    // [FILTER_NAMES.STATE]: "states",
    // [FILTER_NAMES.MARK]: "categories/[id]/",
    GET_LISTINGS: "search",
    GET_LISTING: "info",
  },
};

// FILTER OPTIONS
const FILTERS = [
  {
    id: 0,
    name: FILTER_NAMES.CATEGORY,
    endpoint: "categories",
    options: null,
  },
  {
    id: 1,
    name: FILTER_NAMES.STATE,
    endpoint: "states",
    options: null,
  },
  {
    id: 2,
    name: FILTER_NAMES.MARK,
    endpoint: "categories/[id]/marks",
    options: null,
    dependency: 0,
  },
  {
    id: 3,
    name: FILTER_NAMES.CITY,
    endpoint: "states/[id]/cities",
    options: null,
    dependency: 1,
  },
] as Array<FilterType>;

type FilterType = {
  id: number;
  name: FILTER_NAMES;
  endpoint: string;
  options: Array<FilterOptionType> | null;
  dependency?: number;
};

type FilterOptionType = {
  name: string;
  value: number;
};

enum FILTER_SLUGS {
  "category_id" = "category_id",
  "state" = "state",
  "marka_id" = "marka_id",
  "city" = "city",
  "s_yers" = "s_yers",
  "page" = "page",
  "countpage" = "countpage",
}

const FilterNameToQueryParam = {
  [FILTER_NAMES.CATEGORY]: FILTER_SLUGS["category_id"],
  [FILTER_NAMES.STATE]: FILTER_SLUGS["state"],
  [FILTER_NAMES.MARK]: FILTER_SLUGS["marka_id"],
  [FILTER_NAMES.CITY]: FILTER_SLUGS["city"],
  [FILTER_NAMES.YEAR]: FILTER_SLUGS["s_yers"],
  [FILTER_NAMES.PAGINATION_PAGE]: FILTER_SLUGS["page"],
  [FILTER_NAMES.RESULTS_PER_PAGE]: FILTER_SLUGS["countpage"],
} as { [k in FILTER_NAMES]: FILTER_SLUGS };

const QueryParamToFilterName = {
  [FILTER_SLUGS["category_id"]]: FILTER_NAMES.CATEGORY,
  [FILTER_SLUGS["state"]]: FILTER_NAMES.STATE,
  [FILTER_SLUGS["marka_id"]]: FILTER_NAMES.MARK,
  [FILTER_SLUGS["city"]]: FILTER_NAMES.CITY,
  [FILTER_SLUGS["s_yers"]]: FILTER_NAMES.YEAR,
  [FILTER_SLUGS["page"]]: FILTER_NAMES.PAGINATION_PAGE,
  [FILTER_SLUGS["countpage"]]: FILTER_NAMES.RESULTS_PER_PAGE,
} as { [k in FILTER_SLUGS]: FILTER_NAMES };

export {
  FILTERS,
  FILTER_NAMES,
  type FilterType,
  type FilterOptionType,
  FilterNameToQueryParam,
  QueryParamToFilterName,
  FILTER_SLUGS,
  ENDPOINTS,
};
