import { ENDPOINTS, FILTER_SLUGS } from '../constants';
import UsedCarQueryResult from '../types/UsedCarQueryResult';
import UsedCarsQueryResult from '../types/UsedCarsQueryResult';
import { CarListingExpanded, type CarListing } from '../types/listings';
import { FilterValuesType, FiltersType } from '../types/filters';
import { decodeHtmlString, sanitizeObject } from '@/lib/utils';

const fetchRiaApi = async <T = { [key: string]: any }>(endpoint: string, params?: URLSearchParams, requestInit?: RequestInit): Promise<T> => {
  let url = `${ENDPOINTS.BASE_API}/${endpoint}`;
  if (params && params.toString().length > 0) url += `?${decodeHtmlString(params.toString())}`;

  const data = await (await fetch(url, requestInit)).json();
  return data;
};

const fetchFilters = async (filterValues: FilterValuesType) => {
  const activeFilterValues = sanitizeObject(filterValues);

  const searchParams = new URLSearchParams(activeFilterValues);

  const { filters } = await fetchRiaApi<{ filters: FiltersType }>(ENDPOINTS.QUERIES.GET_FILTERS, searchParams, { next: { revalidate: 60000 } });

  return filters;
};

const fetchCarListings = async (filterValues: FilterValuesType) => {
  const activeFilterValues = sanitizeObject(filterValues);

  const searchParams = new URLSearchParams(activeFilterValues);

  const res = await fetchRiaApi<{
    listings: CarListing[];
  }>(ENDPOINTS.QUERIES.GET_CAR_LISTINGS, searchParams, {
    next: { revalidate: 60 },
  });

  return res.listings;
};

const fetchListingDetails = async (id: string) => {
  const { listing } = await fetchRiaApi<{
    listing: CarListingExpanded;
  }>(`${ENDPOINTS.QUERIES.GET_CAR_LISTING}/${id}`, undefined, { next: { revalidate: 1 } });

  return listing;
};

// const fetchFilterOptions = async (filter: FilterType, parentFilterValue?: number) => {
//   let url = filter.endpoint;

//   if (filter.dependency !== undefined) {
//     if (parentFilterValue === undefined) return null;

//     url = url.replace("[id]", parentFilterValue.toString());
//   }

//   const data = (await fetchRiaApi(url)) as FilterOptionsQueryResult;
//   return data;
// };

// const fetchCarListings = async (params: { [k in FILTER_SLUGS]: string }) => {
//   const query = new URLSearchParams(params);
//   const url = `${ENDPOINTS.QUERIES.GET_LISTINGS}?${query}`;

//   const listingData = (await fetchRiaApi(url)) as UsedCarsQueryResult;
//   const listingIDs = listingData.result.search_result.ids;
//   const listings = await Promise.all(listingIDs.map(async (id) => await fetchCarListing(id)));

//   return listings;
// };

// const fetchCarListing = async (listingId: string) => {
//   const url = `${ENDPOINTS.QUERIES.GET_LISTING}?auto_id=${listingId}`;
//   const data = (await fetchRiaApi(url)) as UsedCarQueryResult;

//   return data;
// };

export { fetchRiaApi, fetchFilters, fetchCarListings, fetchListingDetails };
