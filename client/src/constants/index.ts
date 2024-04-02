enum FILTER_NAMES {
  "BRAND" = "BRAND",
  "MODEL" = "MODEL",
  "YEAR" = "YEAR",
  "PRICE" = "PRICE",
  "MILEAGE" = "MILEAGE",
}

// ENDPOINTS
const BASE_API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
const ENDPOINTS = {
  CARS_API: `${BASE_API_URL}/cars`,
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
  "brand" = "brand",
  "model" = "model",
  "year" = "year",
  "price" = "price",
  "mileage" = "mileage",
}

export { FILTER_NAMES, ENDPOINTS, FILTER_SLUGS };
