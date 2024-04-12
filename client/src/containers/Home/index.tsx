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
import { useRouter, useSearchParams } from "next/navigation";
import SearchForm from "@/components/SearchForm";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";
import { fetchFilters } from "@/lib";
import { CarListing } from "@/types/listings";
import CarListingList from "@/components/carListings/List";
import { useAuthStore } from "@/stores/auth";
import { clearDependencyFilters, getDefaultFilters } from "@/lib/filters";

export type SearchFormValues = {
  [k in FILTER_NAMES]: number | "";
};

type Props = {
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
  listings: CarListing[];
};

const Home: FC<Props> = ({ initialFilterData, initialFilters, listings }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const invalidateSession = useAuthStore((state) => state.invalidateSession);

  const defaultFilters = useMemo(
    () => getDefaultFilters(initialFilterData, initialFilters),
    [initialFilterData, initialFilters]
  );

  const [filterData, setFilterData] = useState(initialFilterData);
  const [filters, setFilters] = useState(defaultFilters);

  const handleFilterChange = async (
    nextFilters: FilterValuesType,
    isDependencyFilter: boolean
  ) => {
    setFilters(nextFilters);

    if (isDependencyFilter) {
      const nextFilterData = await fetchFilters(nextFilters);
      setFilterData(nextFilterData!);
    }
  };

  const handleSubmit = (filters: Partial<FilterValuesType>) => {
    const sanitized = sanitizeObject(filters);

    const queryString = decodeHtmlString(
      new URLSearchParams(sanitized as any).toString()
    );

    router.push(`/?${queryString}`);
  };

  const handleReset = async () => {
    router.push(`/`);

    const defaultFilterData = await fetchFilters();
    const defaultFilters = getDefaultFilters(initialFilterData);

    setFilterData(defaultFilterData!);
    setFilters(defaultFilters);
  };

  useEffect(
    () => void (searchParams.get("auth") === "logout" && invalidateSession()),
    [searchParams]
  );

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
