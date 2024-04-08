import { ENDPOINTS } from "../constants";
import { CarListingExpanded, type CarListing } from "../types/listings";
import { FilterValuesType, FiltersType } from "../types/filters";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";

const fetchRiaApi = async <T = { [key: string]: any }>(
  endpoint: string,
  params?: URLSearchParams,
  requestInit?: RequestInit
): Promise<T> => {
  let url = `${ENDPOINTS.CARS_API}/${endpoint}`;

  if (params && params.toString().length > 0)
    url += `?${decodeHtmlString(params.toString())}`;

  const data = await (
    await fetch(url, {
      ...requestInit,
      cache: "no-cache",
      next: {
        revalidate: 0,
      },
    })
  ).json();
  return data;
};

const fetchFilters = async (filterValues: FilterValuesType) => {
  const activeFilterValues = sanitizeObject(filterValues);

  const searchParams = new URLSearchParams(activeFilterValues as any);

  const { filters } = await fetchRiaApi<{ filters: FiltersType }>(
    ENDPOINTS.QUERIES.GET_FILTERS,
    searchParams,
    { next: { revalidate: 60000 } }
  );

  return filters;
};

const fetchCarListings = async (filterValues: FilterValuesType) => {
  const activeFilterValues = sanitizeObject(filterValues);

  const searchParams = new URLSearchParams(activeFilterValues as any);

  const res = await fetchRiaApi<{
    data: CarListing[];
  }>(ENDPOINTS.QUERIES.GET_CAR_LISTINGS, searchParams, {
    next: { revalidate: 60 },
  });

  return res.data;
};

const fetchListingDetails = async (id: string) => {
  const { listing } = await fetchRiaApi<{
    listing: CarListingExpanded;
  }>(`${ENDPOINTS.QUERIES.GET_CAR_LISTING}/${id}`, undefined, {
    next: { revalidate: 1 },
  });

  return listing;
};

const getArmyScore = ({ price, mileage, year }: CarListing) => {
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
  getArmyScore,
};
