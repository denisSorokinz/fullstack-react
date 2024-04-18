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
  'LOGOUT' = 'logout',
  'REFRESH_TOKEN' = 'refreshToken'
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
const NEXT_BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;
const ENDPOINTS = {
  CARS_API: `${BASE_API_URL}/cars`,
  QUERIES: {
    // [FILTER_NAMES.CATEGORY]: "categories",
    // [FILTER_NAMES.STATE]: "states",
    // [FILTER_NAMES.MARK]: "categories/[id]/",
    GET_FILTERS: "filters",
    GET_CAR_LISTINGS: "search",
    GET_CAR_LISTING: "listing",
    GET_BRANDS: "brands",
    GET_MODELS_BY_BRAND: "brands/:brandId/models",
  },
  MUTATIONS: {
    UPDATE_LISTING: "/listing/:listingId"
  },
  AUTH: {
    NEXT_BASE_AUTH: `${NEXT_BASE_URL}/auth`,
    [AUTH_OPERATIONS.LOGIN]: `${BASE_API_URL}/auth/login`,
    [AUTH_OPERATIONS.SIGN_UP]: `${BASE_API_URL}/auth/signup`,
    [AUTH_OPERATIONS.REFRESH_TOKEN]: `${BASE_API_URL}/auth/refreshAccessToken`,
  }
};


export { FILTER_NAMES, ENDPOINTS, FILTER_SLUGS, AUTH_OPERATIONS };
