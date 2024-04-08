"use client";

import { FC, FormEvent, useEffect, useMemo, useState } from "react";
import {
  FILTER_NAMES,
  FilterValuesType,
  FiltersType,
  IRangeFilter,
  ISelectFilter,
  RANGE_MODIFIERS,
} from "@/types/filters";
import { useRouter } from "next/navigation";
import SearchForm from "@/components/SearchForm";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";
import { fetchFilters } from "@/lib";
import { CarListing } from "@/types/listings";
import CarListingList from "@/components/carListings/List";

export type SearchFormValues = {
  [k in FILTER_NAMES]: number | "";
};

type Props = {
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
  listings: CarListing[];
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

const getDefaultFilters = (
  initialFilterData: Props["initialFilterData"],
  initialFilters?: Props["initialFilters"]
) => {
  const res = {} as {
    [k in keyof FilterValuesType]: number | "";
  };

  for (let name in initialFilterData) {
    const tName = name as keyof typeof initialFilterData;
    const filter = initialFilterData[tName];

    if (filter.type === "range") {
      const tFilter = filter as IRangeFilter;

      const keyFrom = `${tFilter.slug}-${RANGE_MODIFIERS.FROM}`;
      const keyTo = `${tFilter.slug}-${RANGE_MODIFIERS.TO}`;

      res[keyFrom] =
        (initialFilters && initialFilters[keyFrom]) ||
        tFilter[RANGE_MODIFIERS.FROM];
      res[keyTo] =
        (initialFilters && initialFilters[keyTo]) ||
        tFilter[RANGE_MODIFIERS.TO];

      continue;
    }

    res[filter.slug] = (initialFilters && initialFilters[filter.slug]) || "";
  }

  return res;
};

const Home: FC<Props> = ({ initialFilterData, initialFilters, listings }) => {
  const router = useRouter();

  const defaultFilters = useMemo(
    () => getDefaultFilters(initialFilterData, initialFilters),
    [initialFilterData, initialFilters]
  );

  const [filterData, setFilterData] = useState(initialFilterData);
  const [filters, setFilters] = useState(defaultFilters);

  const handleFilterChange = async (
    changedFilterName: FILTER_NAMES,
    value: number | number[]
  ) => {
    const { slug: changedFilterSlug } = filterData[changedFilterName];
    const dirtyFilterValues = {
      ...filters,
    } as FilterValuesType;

    if (
      filterData[changedFilterName].type === "range" &&
      Array.isArray(value)
    ) {
      const [nextFrom, nextTo] = value;

      dirtyFilterValues[`${changedFilterSlug}-${RANGE_MODIFIERS.FROM}`] =
        nextFrom;
      dirtyFilterValues[`${changedFilterSlug}-${RANGE_MODIFIERS.TO}`] = nextTo;
    }

    if (
      filterData[changedFilterName].type !== "range" &&
      typeof value === "number"
    ) {
      dirtyFilterValues[changedFilterSlug] = value;
    }

    const nextFilters = clearDependencyFilters(
      filterData,
      dirtyFilterValues,
      changedFilterName
    );

    const isDependencyFilter = !!Object.values(filterData).find(
      (filter) =>
        filter.type !== "range" && filter.dependency === changedFilterName
    );

    setFilters(nextFilters);

    if (isDependencyFilter) {
      const nextFilterData = await fetchFilters(nextFilters);
      setFilterData(nextFilterData);
    }
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const sanitized = sanitizeObject(filters);

    const queryString = decodeHtmlString(
      new URLSearchParams(sanitized as any).toString()
    );

    router.push(`/?${queryString}`);
  };

  const handleReset = () => {
    router.push(`/`);

    const defaultFilters = getDefaultFilters(initialFilterData);
    setFilters(defaultFilters);
  };

  return (
    <>
      <SearchForm
        filterData={filterData}
        filters={filters}
        onFilterChange={handleFilterChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />

      <CarListingList listings={listings} />
    </>
  );
};

export default Home;
