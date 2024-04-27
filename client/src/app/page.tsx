import { fetchCarListings, fetchFilters } from "@/lib";
import {
  FiltersType,
  FilterValuesType,
  IRangeFilter,
  RANGE_MODIFIERS,
  SingleFilterType,
} from "../types/filters";
import { FILTER_SLUGS } from "../constants";
import HomeContainer from "../containers/Home";
import { parseFiltersFromSearch, sanitizeFilters } from "@/lib/filters";
import { getFavorites } from "@/lib/actions";

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

  const listings = await fetchCarListings(filters);

  const favoritesRes = await getFavorites();
  const favoriteListingIds = (favoritesRes.success && favoritesRes.favorites) || [];

  return (
    <HomeContainer
      initialFilterData={filterData!}
      initialFilters={sanitizedFilters}
      listings={listings!}
      favoriteListingIds={favoriteListingIds}
    />
  );
}
