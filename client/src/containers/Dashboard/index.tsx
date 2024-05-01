"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { FilterOption, FilterValuesType } from "@/types/filters";
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CarListing } from "@/types/listings";
import { fetchCarListings, fetchFilters, updateListingsEntry } from "@/lib";
import { debounce, debounceFetcher } from "@/lib/utils";
import { DashboardStoreState, useDashboardStore } from "@/stores/dashboard";
import {
  toggleListingFavorites,
  deleteListing,
  updateListing,
} from "@/lib/actions";
import useEditableList from "@/hooks/useEditableList";
import Link from "next/link";
import { useListingsStore } from "@/stores/listings";
import { getDefaultFilters } from "@/lib/filters";
import Pagination from "@/components/carListings/Pagination";

const debouncedUpdate = debounceFetcher(updateListing);

type Props = {
  initialFilters: FilterValuesType;
};
const DashboardContent: FC<Props> = ({ initialFilters }) => {
  const { listings, setListings, pagination, setPagination, onChangePage } = useListingsStore(
    (store) => ({
      listings: store.listings,
      setListings: store.setListings,
      pagination: store.pagination,
      setPagination: store.setPagination,
      onChangePage: store.onChangePage
    })
  );

  const { ...dashboardStore } = useDashboardStore((store) => store);

  // filter form
  const defaultFilters = useMemo(
    () => getDefaultFilters(dashboardStore.filterData!, initialFilters),
    [dashboardStore.filterData!, initialFilters]
  );
  const [filters, setFilters] = useState(defaultFilters);
  // const handleSubmit = async (filters: Partial<FilterValuesType>) => {
  //   const { listings: nextListings, pagination: nextPagination } =
  //     (await fetchCarListings(filters, { ...pagination, page: 1 }))!;

  //   setListings(nextListings!);
  //   setPagination(nextPagination!);
  // };
  const handleChange = useCallback(
    debounce(
      1500,
      async (filters: FilterValuesType, isDependencyFilter: boolean) => {
        if (isDependencyFilter) {
          const nextFilterData = await fetchFilters(filters);
          dashboardStore.setFilterData(nextFilterData!);
        }

        const { listings: nextListings, pagination: nextPagination } =
          (await fetchCarListings(filters, pagination))!;

        setListings(nextListings!);
        setPagination(nextPagination!);
      }
    ),
    []
  );
  const handleReset = async () => {
    const nextFilterData = await fetchFilters();
    dashboardStore.setFilterData(nextFilterData!);

    const { listings: nextListings, pagination: nextPagination } =
      (await fetchCarListings(undefined, { ...pagination, page: 1 }))!;

    setListings(nextListings!);
    setPagination(nextPagination!);
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

      const nextListings = listings.filter((l) => l.id !== listingId);
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
    <div className="flex flex-[4] flex-col">
      <SearchForm
        filterData={dashboardStore.filterData!}
        filters={filters}
        setFilters={setFilters}
        // onSubmit={handleSubmit}
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
       <Pagination
        currentPage={pagination.page}
        totalItems={pagination.totalItems}
        onPaginate={(nextPage) => onChangePage(nextPage, filters)}
        pageSize={pagination.pageSize}
      />
    </div>
  );
};

export default DashboardContent;
