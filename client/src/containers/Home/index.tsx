"use client";

import { FC, useState } from "react";
import { FILTER_NAMES, FilterValuesType, FiltersType } from "@/types/filters";
import { useRouter } from "next/navigation";
import SearchForm from "@/components/SearchForm";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";
import { fetchFilters } from "@/lib";
import { CarListing } from "@/types/listings";
import CarListingList from "@/components/CarListingList";

export type SearchFormValues = {
  [k in FILTER_NAMES]: number | "";
};

const clearDependencyFilters = (
  filters: FiltersType,
  filterValues: FilterValuesType,
  changedFilterName: FILTER_NAMES
): FilterValuesType => {
  const childFilterName = Object.keys(filters).find((filterSlug) => {
    const typedFilterSlug = filterSlug as keyof typeof filters;
    return (
      filters[typedFilterSlug].dependency?.filterName === changedFilterName
    );
  }) as keyof typeof filters | undefined;

  if (!childFilterName) return filterValues;

  const childFilter = filters[childFilterName];

  filterValues[childFilter.slug] = "";
  return clearDependencyFilters(filters, filterValues, childFilterName);
};

const Home: FC<{
  initialFilters: FiltersType;
  initialFilterValues: FilterValuesType;
  listings: CarListing[];
}> = ({ initialFilters, initialFilterValues, listings }) => {
  const router = useRouter();

  const [filters, setFilters] = useState(initialFilters);
  const [filterValues, setFilterValues] = useState(initialFilterValues);

  const handleFilterChange = async (
    changedFilterName: FILTER_NAMES,
    value: string
  ) => {
    const { slug: changedFilterSlug } = filters[changedFilterName];
    const dirtyFilterValues = {
      ...filterValues,
      [changedFilterSlug]: value,
    } as FilterValuesType;
    const newFilterValues = clearDependencyFilters(
      filters,
      dirtyFilterValues,
      changedFilterName
    );
    const newFilters = await fetchFilters(newFilterValues);

    setFilterValues(newFilterValues);
    setFilters(newFilters);
  };

  const handleSubmit = () => {
    const activeFilterValues = sanitizeObject(filterValues);
    const queryString = decodeHtmlString(
      new URLSearchParams(activeFilterValues).toString()
    );

    router.push(`/?${queryString}`);
  };

  return (
    <>
      <SearchForm
        filters={filters}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
        onSubmit={handleSubmit}
      />
      <CarListingList listings={listings} />
    </>
  );
};

export default Home;
