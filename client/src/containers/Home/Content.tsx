"use client";

import { fetchCarListings, fetchFilters } from "@/lib";
import { useAuthStore } from "@/stores/auth";
import { FilterValuesType, FiltersType } from "@/types/filters";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC, useEffect, useMemo, useState } from "react";
import { decodeHtmlString, sanitizeObject } from "../../../../server/lib/utils";
import SearchForm from "@/components/forms/SearchForm";
import CarListingList from "@/components/carListings/List";
import { useListingsStore } from "@/stores/listings";
import { cn } from "@/lib/utils";
import { getDefaultFilters } from "@/lib/filters";
import Pagination from "@/components/carListings/Pagination";

type Props = {
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
};
const HomepageContent: FC<Props> = ({ initialFilterData, initialFilters }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const invalidateSession = useAuthStore((state) => state.invalidateSession);

  const [filterData, setFilterData] = useState(initialFilterData);
  const defaultFilters = useMemo(
    () => getDefaultFilters(filterData, initialFilters),
    [filterData, initialFilters]
  );
  const [filters, setFilters] = useState(defaultFilters);

  const { listings, setListings, pagination, setPagination, onChangePage } =
    useListingsStore((store) => ({
      listings: store.listings,
      pagination: store.pagination,
      setListings: store.setListings,
      setPagination: store.setPagination,
      onChangePage: store.onChangePage,
    }));

  const handleChange = async (
    nextFilters: FilterValuesType,
    isDependencyFilter: boolean
  ) => {
    if (!isDependencyFilter) return;

    const nextFilterData = await fetchFilters(nextFilters)!;
    setFilterData(nextFilterData!);
  };

  const handleSubmit = (filters: Partial<FilterValuesType>) => {
    const sanitized = sanitizeObject(filters);
    const queryString = decodeHtmlString(
      new URLSearchParams({
        ...sanitized,
        page: 1,
        "page-size": pagination.pageSize,
      } as any).toString()
    );

    router.push(`/?${queryString}`);

    return filters;
  };

  const handleReset = () => {
    router.push(`/`);
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
        setFilters={setFilters}
        onChange={handleChange}
        onSubmit={async (filters) => {
          handleSubmit(filters);

          const { listings: nextListings, pagination: nextPagination } =
            (await fetchCarListings(filters, { ...pagination, page: 1 }))!;

          setListings(nextListings!);
          setPagination(nextPagination!);
        }}
        onReset={async () => {
          handleReset();

          const nextFilterData = await fetchFilters();
          setFilterData(nextFilterData!);

          const { listings: nextListings, pagination: nextPagination } =
            (await fetchCarListings())!;

          setListings(nextListings!);
          setPagination(nextPagination!);
        }}
      />
      <CarListingList listings={listings} />
      <Pagination
        currentPage={pagination.page}
        totalItems={pagination.totalItems}
        onPaginate={(nextPage) => onChangePage(nextPage, filters)}
        pageSize={pagination.pageSize}
      />
    </>
  );
};

export default HomepageContent;
