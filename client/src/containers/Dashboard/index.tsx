"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { FilterValuesType, FiltersType } from "@/types/filters";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { CarListing } from "@/types/listings";
import { fetchCarListings, fetchFilters } from "@/lib";
import { debounce } from "@/lib/utils";
import { createDashboardStore, useDashboardStore } from "@/stores/dashboard";
import { updateListing } from "@/lib/actions";

type Props = {
  initialFilters: FilterValuesType;
};
const DashboardContent: FC<Props> = ({ initialFilters }) => {
  const dashboardStore = useDashboardStore((store) => store);

  const handleSubmit = async (filters: Partial<FilterValuesType>) => {
    const nextListings = await fetchCarListings(filters);
    dashboardStore.setListings(nextListings!);
  };
  const handleChange = useCallback(
    debounce(
      1500,
      async (filters: FilterValuesType, isDependencyFilter: boolean) => {
        if (isDependencyFilter) {
          const nextFilterData = await fetchFilters(filters);
          dashboardStore.setFilterData(nextFilterData!);
        }

        const nextListings = await fetchCarListings(filters);
        dashboardStore.setListings(nextListings!);
      }
    ),
    []
  );
  const handleReset = async () => {
    const nextFilterData = await fetchFilters();
    dashboardStore.setFilterData(nextFilterData!);

    const nextListings = await fetchCarListings();
    dashboardStore.setListings(nextListings!);
  };

  const handleEditListing = async (
    edited: Pick<CarListing, "id"> & Partial<CarListing>
  ) => {
    const editedIdx = dashboardStore.listings.findIndex(
      (l) => l.id === edited.id
    );
    if (editedIdx === -1) return;

    const res = await updateListing(edited);
    if (!(res && res.success)) return;

    const nextListingList = [...dashboardStore.listings];
    console.log({ editedListing: res.listing })
    nextListingList.splice(
      editedIdx,
      1,
      res.listing!
    );
    dashboardStore.setListings(nextListingList);
  };

  useEffect(() => {
    console.log("listings state:", { listings: dashboardStore.listings });
  }, [dashboardStore.listings]);

  return (
    <div className="flex gap-8">
      <aside className="flex-[1] rounded-md bg-slate-300 p-4 dark:bg-slate-500">
        <h6 className="text-2xl">dashboard nav</h6>
      </aside>
      <div className="flex flex-[4] flex-col justify-between">
        <SearchForm
          filterData={dashboardStore.filterData!}
          initialFilters={initialFilters}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onReset={handleReset}
        />
        <CarListingList
          listings={dashboardStore.listings}
          allowEdit={true}
          editProps={{
            onToggleEditing: dashboardStore.onToggleEditing,
            onEdit: handleEditListing,
          }}
        />
      </div>
    </div>
  );
};

export default DashboardContent;
