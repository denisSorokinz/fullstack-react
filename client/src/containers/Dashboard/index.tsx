"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { FilterValuesType, FiltersType } from "@/types/filters";
import { FC, useCallback, useContext, useState } from "react";
import { CarListing } from "@/types/listings";
import { fetchCarListings, fetchFilters } from "@/lib";
import { debounce } from "@/lib/utils";
import { createDashboardStore, useDashboardStore } from "@/stores/dashboard";
import { DashboardContext, DashboardProvider } from "@/contexts/dashboard";

type Props = {
  initialFilters: FilterValuesType;
};
const DashboardContent: FC<Props> = ({ initialFilters }) => {
  const { filterData, listings, setFilterData, setListings } =
    useDashboardStore((store) => store);

  const handleSubmit = async (filters: Partial<FilterValuesType>) => {
    const nextListings = await fetchCarListings(filters);
    setListings(nextListings!);
  };
  const handleChange = useCallback(
    debounce(
      1500,
      async (filters: FilterValuesType, isDependencyFilter: boolean) => {
        if (isDependencyFilter) {
          const nextFilterData = await fetchFilters(filters);
          setFilterData(nextFilterData);
        }

        const nextListings = await fetchCarListings(filters);
        setListings(nextListings!);
      }
    ),
    []
  );
  const handleReset = async () => {
    const nextFilterData = await fetchFilters();
    setFilterData(nextFilterData);

    const nextListings = await fetchCarListings();
    setListings(nextListings!);
  };

  return (
    <div className="flex gap-8">
      <aside className="flex-[1] rounded-md bg-slate-300 p-4 dark:bg-slate-500">
        <h6 className="text-2xl">dashboard nav</h6>
      </aside>
      <div className="flex flex-[4] flex-col justify-between">
        <SearchForm
          filterData={filterData!}
          initialFilters={initialFilters}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onReset={handleReset}
        />
        <CarListingList listings={listings} allowEdit={true} />
      </div>
    </div>
  );
};

export default DashboardContent;
