import { fetchCarListings, fetchFilters } from "@/lib";
import {
  FiltersType,
  FilterValuesType,
  IRangeFilter,
  RANGE_MODIFIERS,
  SingleFilterType,
} from "../types/filters";
import { BASE_NEXT_URL, FILTER_SLUGS } from "../constants";
import HomeContainer from "../containers/Home";
import { parseFiltersFromSearch, sanitizeFilters } from "@/lib/filters";
import { getAuthorizedResource } from "@/lib/actions";
import { CarListing } from "@/types/listings";

export default async function Home({
  searchParams,
}: {
  searchParams: { [k in FILTER_SLUGS | string]: string };
}) {
  const filters = parseFiltersFromSearch(searchParams);

  // fetch filters (stateless)
  const filterData = await fetchFilters(filters);

  // clear un-existing filter values
  const sanitizedFilters = sanitizeFilters(filterData!, filters);

  const { listings, pagination } = (await fetchCarListings(filters))!;

  const favoritesRes = await getAuthorizedResource<{
    favorites: Array<CarListing["id"]>;
  }>(`${BASE_NEXT_URL}/users/favorites`);
  const favoriteListingIds =
    (favoritesRes.success && favoritesRes.data?.favorites) || [];

  return (
    <HomeContainer
      initialFilterData={filterData!}
      initialFilters={sanitizedFilters}
      initialListings={listings!}
      favoriteIds={favoriteListingIds}
      paginationMeta={pagination!}
    />
  );
}
