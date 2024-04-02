"use client";

import { FC, useState } from "react";
import {
  FILTER_NAMES,
  FilterValuesType,
  FiltersType,
  ISelectFilter,
} from "@/types/filters";
import { useRouter } from "next/navigation";
import SearchForm from "@/components/SearchForm";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";
import { fetchFilters } from "@/lib";
import { CarListing } from "@/types/listings";
import CarListingList from "@/components/CarListingList";
import Range from "@/components/ui/Range";

export type SearchFormValues = {
  [k in FILTER_NAMES]: number | "";
};

const clearDependencyFilters = (
  filterData: FiltersType,
  filters: FilterValuesType,
  changedFilterName: FILTER_NAMES
): FilterValuesType => {
  const childFilterName = Object.keys(filterData).find((filterSlug) => {
    const tFilterSlug = filterSlug as keyof typeof filterData;

    if (
      !(
        filterData[tFilterSlug].type === "select" ||
        filterData[tFilterSlug].type === "range"
      )
    ) {
      return;
    }

    const tFilter = filterData[tFilterSlug] as ISelectFilter;
    return tFilter.dependency === changedFilterName;
  }) as keyof typeof filterData | undefined;

  if (!childFilterName) return filters;

  const childFilter = filterData[childFilterName];

  delete filters[childFilter.slug];
  return clearDependencyFilters(filterData, filters, childFilterName);
};

const Home: FC<{
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
  listings: CarListing[];
}> = ({ initialFilterData, initialFilters, listings }) => {
  const router = useRouter();
  

  const [filterData, setFilterData] = useState(initialFilterData);
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = async (
    changedFilterName: FILTER_NAMES,
    value: string | number
  ) => {
    const { slug: changedFilterSlug } = filterData[changedFilterName];
    const dirtyFilterValues = {
      ...filters,
      [changedFilterSlug]: value,
    } as FilterValuesType;
    const nextFilters = clearDependencyFilters(
      filterData,
      dirtyFilterValues,
      changedFilterName
    );

    const nextFilterData = await fetchFilters(nextFilters);
    console.log({ nextFilterData });

    setFilters(nextFilters);
    setFilterData(nextFilterData);
  };

  const handleSubmit = () => {
    const queryString = decodeHtmlString(
      new URLSearchParams(filters as any).toString()
    );

    router.push(`/?${queryString}`);
  };

  return (
    <>
      <Range from={0} to={100} />

      <SearchForm
        filterData={filterData}
        filters={filters}
        onFilterChange={handleFilterChange}
        onSubmit={handleSubmit}
      />

      <CarListingList listings={listings} />
    </>
  );
};

export default Home;
