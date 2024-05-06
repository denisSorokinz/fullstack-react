import { EditableField } from "@/types/forms";

enum FILTER_NAMES {
  "BRAND" = "BRAND",
  "MODEL" = "MODEL",
  "YEAR" = "YEAR",
  "PRICE" = "PRICE",
  "MILEAGE" = "MILEAGE",
}

// AUTH
enum AUTH_OPERATIONS {
  "LOGIN" = "login",
  "SIGN_UP" = "signup",
  "LOGOUT" = "logout",
  "REFRESH_TOKEN" = "refreshToken",
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
export const BASE_NEXT_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;
const ENDPOINTS = {
  CARS_API: `${BASE_API_URL}/cars`,
  BASE_API_USERS: `${BASE_API_URL}/users`,
  BASE_API_LISTINGS: `${BASE_API_URL}/cars/listings`,
  BASE_NEXT_LISTINGS: `${BASE_NEXT_URL}/listings`,
  QUERIES: {
    // [FILTER_NAMES.CATEGORY]: "categories",
    // [FILTER_NAMES.STATE]: "states",
    // [FILTER_NAMES.MARK]: "categories/[id]/",
    GET_FILTERS: "filters",
    GET_CAR_LISTINGS: "search",
    GET_CAR_LISTING: "listings/:listingId",
    GET_BRANDS: "brands",
    GET_MODELS_BY_BRAND: "brands/:brandId/models",
  },
  MUTATIONS: {
    LISTING_UPDATE: "listings/:listingId",
  },
  AUTH: {
    BASE_NEXT_AUTH: `${BASE_NEXT_URL}/auth`,
    [AUTH_OPERATIONS.LOGIN]: `${BASE_API_URL}/auth/login`,
    [AUTH_OPERATIONS.SIGN_UP]: `${BASE_API_URL}/auth/signup`,
    [AUTH_OPERATIONS.REFRESH_TOKEN]: `${BASE_API_URL}/auth/refreshAccessToken`,
  },
};

// Listing editable fields
const editableListingFields = {
  brandId: {
    type: "select",
    displayName: "Марка",
    dashboardStoreOptionsKey: "brands",
    dependencyField: "modelId",
  },
  modelId: {
    type: "select",
    displayName: "Модель",
    dashboardStoreOptionsKey: "models",
    parentField: "brandId",
  },
  year: {
    type: "number",
    displayName: "Рiк",
  },
  mileage: {
    type: "number",
    displayName: "Пробiг",
  },
  price: {
    type: "number",
    displayName: "Цiна",
  },
  description: {
    type: "textarea",
    displayName: "Iнформацiя",
  },
} satisfies Record<string, EditableField>;

export {
  FILTER_NAMES,
  ENDPOINTS,
  FILTER_SLUGS,
  AUTH_OPERATIONS,
  editableListingFields,
};
