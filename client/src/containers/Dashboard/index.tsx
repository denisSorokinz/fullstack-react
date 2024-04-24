"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { FilterOption, FilterValuesType } from "@/types/filters";
import { FC, useCallback, useContext, useEffect } from "react";
import { CarListing } from "@/types/listings";
import { fetchCarListings, fetchFilters, updateListingsEntry } from "@/lib";
import { debounce, debounceFetcher } from "@/lib/utils";
import { DashboardStoreState, useDashboardStore } from "@/stores/dashboard";
import { deleteListing, updateListing } from "@/lib/actions";
import useEditableList from "@/hooks/useEditableList";

const debouncedUpdate = debounceFetcher(updateListing);

type Props = {
  initialFilters: FilterValuesType;
};
const DashboardContent: FC<Props> = ({ initialFilters }) => {
  const { listings, setListings, selectListings, ...dashboardStore } =
    useDashboardStore((store) => store);

  // filter form
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
          dashboardStore.setFilterData(nextFilterData!);
        }

        const nextListings = await fetchCarListings(filters);
        setListings(nextListings!);
      }
    ),
    []
  );
  const handleReset = async () => {
    const nextFilterData = await fetchFilters();
    dashboardStore.setFilterData(nextFilterData!);

    const nextListings = await fetchCarListings();
    setListings(nextListings!);
  };

  const updateCb = async (
    edited: Pick<CarListing, "id"> & Partial<CarListing>
  ) => {
    try {
      const { success, listing } = await debouncedUpdate(edited);
      console.log(success);

      if (!(success && listing)) return false;

      const nextListings = updateListingsEntry(
        listings,
        edited,
        dashboardStore.editListingOptions
      );
      setListings(nextListings);

      return true;
    } catch (err: any) {
      return false;
    }
  };
  const deleteCb = async (listingId: number) => {
    try {
      const { success } = await deleteListing(listingId);
      console.log({ deleteListingSuccess: success });

      if (!success) return false;

      const nextListings = selectListings().filter((l) => l.id !== listingId);
      setListings(nextListings);

      return true;
    } catch (err: any) {
      return false;
    }
  };

  // edit listings
  const {
    uiList: optimisticListings,
    updateListEntry,
    deleteListEntry,
    transitionPending,
  } = useEditableList(listings, updateCb, deleteCb, (listings, nextListing) =>
    updateListingsEntry(
      listings,
      nextListing,
      dashboardStore.editListingOptions
    )
  );
  useEffect(
    () => dashboardStore.setIsPendingEdit(transitionPending),
    [transitionPending]
  );

  return (
    <div className="flex gap-8">
      {listings.length} - {optimisticListings.length}
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
          listings={optimisticListings}
          editingId={dashboardStore.editListingOptions.editingListingId}
          allowEdit={true}
          onToggleEditing={dashboardStore.onToggleEditing}
          onEdit={updateListEntry}
          onDelete={deleteListEntry}
        />
      </div>
    </div>
  );
};

export default DashboardContent;
