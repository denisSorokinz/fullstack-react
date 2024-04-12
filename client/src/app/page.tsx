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

export default async function Home({
  searchParams,
}: {
  searchParams: { [k in FILTER_SLUGS | string]: string };
}) {
  const filters = parseFiltersFromSearch(searchParams);

  const listings = await fetchCarListings(filters);

  // fetch filters (stateless)
  const filterData = await fetchFilters(filters);

  // clear un-existing filter values
  const sanitizedFilters = sanitizeFilters(filterData!, filters);

  console.log({ sanitizedFilters });

  return (
    <HomeContainer
      initialFilterData={filterData!}
      initialFilters={sanitizedFilters}
      listings={listings!}
    />
  );
}
