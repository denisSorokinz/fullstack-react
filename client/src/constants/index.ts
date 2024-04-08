enum FILTER_NAMES {
  "BRAND" = "BRAND",
  "MODEL" = "MODEL",
  "YEAR" = "YEAR",
  "PRICE" = "PRICE",
  "MILEAGE" = "MILEAGE",
}

// AUTH
enum AUTH_OPERATIONS {
  'LOGIN' = 'login',
  'SIGN_UP' = 'signup',
}

// Filters query params
enum FILTER_SLUGS {
  "brand" = "brand",
  "model" = "model",
  "year" = "year",
  "price" = "price",
  "mileage" = "mileage",
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
  AUTH: {
    [AUTH_OPERATIONS.LOGIN]: `${BASE_API_URL}/auth/login`,
    [AUTH_OPERATIONS.SIGN_UP]: `${BASE_API_URL}/auth/signup`,
  }
};


export { FILTER_NAMES, ENDPOINTS, FILTER_SLUGS, AUTH_OPERATIONS };
