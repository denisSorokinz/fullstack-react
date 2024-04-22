import { ENDPOINTS } from "../constants";
import { CarListingExpanded, type CarListing } from "../types/listings";
import { FilterOption, FilterValuesType, FiltersType } from "../types/filters";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";
import { CarApiOperations, CarApiResponse } from "@/types/http";
import { DashboardStoreState } from "@/stores/dashboard";

const fetchRiaApi = async <T>(
  endpoint: string,
  queryParams?: URLSearchParams,
  requestInit?: RequestInit,
  pathParams?: string[]
): Promise<CarApiResponse<T>> => {
  let url = `${ENDPOINTS.CARS_API}/${endpoint}`;

  const urlPathParams = endpoint.match(/(\:\w+)/g);

  if (urlPathParams) {
    if (!pathParams || urlPathParams.length !== pathParams.length) {
      return Promise.resolve({
        success: false,
        message: "invalid path params",
      } as CarApiResponse<T>);
    }

    urlPathParams.forEach(
      (param, idx) => (url = url.replace(param, pathParams[idx]))
    );
  }

  if (queryParams && queryParams.toString().length > 0)
    url += `?${decodeHtmlString(queryParams.toString())}`;

  const data = (await (
    await fetch(url, {
      ...requestInit,
      cache: "no-cache",
      next: {
        revalidate: 0,
      },
    })
  ).json()) as CarApiResponse<T>;

  return data;
};

const fetchFilters = async (filterValues?: FilterValuesType) => {
  const activeFilterValues = sanitizeObject(filterValues);

  const searchParams = new URLSearchParams(activeFilterValues as any);

  const res = await fetchRiaApi<CarApiOperations.getFilters>(
    ENDPOINTS.QUERIES.GET_FILTERS,
    searchParams,
    {
      next: { revalidate: 60000 },
    }
  );
  if (!res.success) return null;

  return res.data[CarApiOperations.getFilters];
};

const fetchCarListings = async (filterValues?: Partial<FilterValuesType>) => {
  const activeFilterValues = sanitizeObject(filterValues);

  const searchParams = new URLSearchParams(activeFilterValues as any);

  const res = await fetchRiaApi<CarApiOperations.getListings>(
    ENDPOINTS.QUERIES.GET_CAR_LISTINGS,
    searchParams,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.success) return null;

  return res.data[CarApiOperations.getListings];
};

const fetchListingDetails = async (id: string) => {
  const res = await fetchRiaApi<CarApiOperations.getListing>(
    `${ENDPOINTS.QUERIES.GET_CAR_LISTING}`,
    undefined,
    {
      next: { revalidate: 1 },
    },
    [`${id}`]
  );
  if (!res.success) return null;

  return res.data[CarApiOperations.getListing];
};

const fetchBrands = async () => {
  const res = await fetchRiaApi<CarApiOperations.getBrands>(
    `${ENDPOINTS.QUERIES.GET_BRANDS}`,
    undefined,
    { next: { revalidate: 60 } }
  );

  if (!res.success) return null;

  return res.data[CarApiOperations.getBrands];
};

const fetchModelsByBrand = async (brandId: number) => {
  const res = await fetchRiaApi<CarApiOperations.getModelsByBrand>(
    `${ENDPOINTS.QUERIES.GET_MODELS_BY_BRAND}`,
    undefined,
    { next: { revalidate: 60 } },
    [`${brandId}`]
  );

  if (!res.success) return null;

  return res.data[CarApiOperations.getModelsByBrand];
};

const mapListingToUI = (
  listing: CarListing,
  brands: FilterOption[],
  models: Map<CarListing["brandId"], FilterOption[]>
) => {
  const { name: brand } = brands.find((brand) => brand.id === listing.brandId)!;

  const brandModels = models.get(listing.brandId)!;
  const { name: model } = brandModels.find(
    (model) => model.id === listing.modelId
  )!;

  return { ...listing, brand, model } as CarListing;
};

const updateListingsEntry = (
  state: CarListing[],
  nextEntry: Pick<CarListing, "id"> & Partial<CarListing>,
  { brands, models }: DashboardStoreState["editListingOptions"]
) => {
  const existingIdx = state.findIndex((item) => item.id === nextEntry.id);

  if (existingIdx === -1) return state;

  const nextState = [...state];

  const updated = { ...nextState[existingIdx], ...nextEntry } as CarListing;
  const mapped = mapListingToUI(updated, brands, models);

  nextState[existingIdx] = mapped;
  console.log({ next: mapped });

  return nextState;
};

const getArmyScore = ({ price, mileage, year }: CarListing) => {
  if (mileage === undefined) return 0;

  // todo: adjust data & remove
  mileage = mileage * 1000 < 1_000_000 ? mileage * 1000 : mileage;

  let score = 10;

  const THRESHOLDS: {
    [k in keyof CarListing]?: {
      [k in "exclude" | "bad" | "okay" | "good"]: number;
    };
  } = {
    mileage: {
      exclude: 500_000,
      bad: 400_000,
      okay: 300_000,
      good: 200_000,
    },
    price: {
      exclude: 20_000,
      bad: 15_000,
      okay: 10_000,
      good: 8_000,
    },
    year: {
      exclude: 1990,
      bad: 2000,
      okay: 2010,
      good: 2009,
    },
  };

  if (price >= THRESHOLDS.price!.exclude) {
    score -= 10;
  } else if (price >= THRESHOLDS.price!.bad) {
    score -= 4;
  } else if (price >= THRESHOLDS.price!.okay) {
    score -= 2;
  } else if (price >= THRESHOLDS.price!.good) {
    score -= 1;
  }

  if (mileage >= THRESHOLDS.mileage!.exclude) {
    score -= 10;
  } else if (mileage >= THRESHOLDS.mileage!.bad) {
    score -= 4;
  } else if (mileage >= THRESHOLDS.mileage!.okay) {
    score -= 2;
  } else if (mileage >= THRESHOLDS.mileage!.good) {
    score -= 1;
  }

  if (year <= THRESHOLDS.year!.exclude) {
    score -= 10;
  } else if (year <= THRESHOLDS.year!.bad) {
    score -= 4;
  } else if (year <= THRESHOLDS.year!.good) {
    score = score;
  } else if (year >= THRESHOLDS.year!.okay) {
    score -= 1;
  }

  return Math.max(score, 0);
};

export {
  fetchRiaApi,
  fetchFilters,
  fetchCarListings,
  fetchListingDetails,
  fetchBrands,
  fetchModelsByBrand,
  getArmyScore,
  mapListingToUI,
  updateListingsEntry
};
