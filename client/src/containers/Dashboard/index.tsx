"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { FilterValuesType, FiltersType } from "@/types/filters";
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useOptimistic,
  useState,
  useTransition,
} from "react";
import { CarListing } from "@/types/listings";
import { fetchCarListings, fetchFilters } from "@/lib";
import { debounce, debounceFetcher } from "@/lib/utils";
import { createDashboardStore, useDashboardStore } from "@/stores/dashboard";
import { updateListing } from "@/lib/actions";
import useEditableList from "@/hooks/useEditableList";
import { EditListingFormData } from "@/components/forms/EditListingForm";

const updateEntry = <T extends { id: number }>(
  state: Array<T>,
  nextEntry: Partial<T>
) => {
  const existingIdx = state.findIndex((item) => item.id === nextEntry.id);

  if (existingIdx === -1) return state;

  const nextState = [...state];
  const entryCopy = { ...nextState[existingIdx] };
  nextState[existingIdx] = { ...entryCopy, ...nextEntry };

  return nextState;
};

type Props = {
  initialFilters: FilterValuesType;
};
const DashboardContent: FC<Props> = ({ initialFilters }) => {
  const { listings, setListings, ...dashboardStore } = useDashboardStore(
    (store) => store
  );

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

  const serverAction = useCallback(debounceFetcher(updateListing), []);
  const updateCb = async (
    edited: Pick<CarListing, "id"> & Partial<CarListing>
  ) => {
    try {
      const { success, listing } = await serverAction(edited);
      console.log(success);

      if (!(success && listing)) return false;

      const nextListings = updateEntry(listings, edited);
      setListings(nextListings);

      return true;
    } catch (err: any) {
      return false;
    }
  };

  // edit listings
  const { uiList, updateListEntry } = useEditableList(listings, updateCb);

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
          listings={uiList}
          allowEdit={true}
          onToggleEditing={dashboardStore.onToggleEditing}
          onEdit={updateListEntry}
        />
      </div>
    </div>
  );
};

export default DashboardContent;
