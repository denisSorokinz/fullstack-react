enum FILTER_NAMES {
  "BRAND" = "BRAND",
  "CATEGORY" = "CATEGORY",
  "CITY" = "CITY",
  "MODEL" = "MODEL",
  "REGION" = "REGION",
}

// ENDPOINTS
const BASE_API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
const ENDPOINTS = {
  BASE_API: BASE_API_URL,
  QUERIES: {
    // [FILTER_NAMES.CATEGORY]: "categories",
    // [FILTER_NAMES.STATE]: "states",
    // [FILTER_NAMES.MARK]: "categories/[id]/",
    GET_FILTERS: "filters",
    GET_CAR_LISTINGS: "search",
    GET_CAR_LISTING: "listing",
  },
};

// Filters query params
enum FILTER_SLUGS {
  "categories.main.id" = "categories.main.id",
  "brand.id[0]" = "brand.id[0]",
  "model.id[0]" = "model.id[0]",
  "region.id[0]" = "region.id[0]",
  "city.id[0]" = "city.id[0]",
}

export { FILTER_NAMES, ENDPOINTS, FILTER_SLUGS };
