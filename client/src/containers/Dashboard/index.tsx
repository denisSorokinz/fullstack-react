"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { FILTER_NAMES, FilterOption, FilterValuesType } from "@/types/filters";
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CarListing, LISTING_BODY_TYPES } from "@/types/listings";
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
import { getDefaultFilters, validateRange } from "@/lib/filters";
import Pagination from "@/components/carListings/Pagination";
import { z } from "zod";

const debouncedUpdate = debounceFetcher(updateListing);

type Props = {
  initialFilters: FilterValuesType;
};
const DashboardContent: FC<Props> = ({ initialFilters }) => {
  const {
    setListings,
    pagination,
    setPagination,
    onChangePage,
    selectListings,
  } = useListingsStore((store) => ({
    listings: store.listings,
    setListings: store.setListings,
    pagination: store.pagination,
    setPagination: store.setPagination,
    onChangePage: store.onChangePage,
    selectListings: store.selectListings,
  }));
  const listings = selectListings();

  const {
    filterData,
    setFilterData,
    editListingOptions,
    setIsPendingEdit,
    onToggleEditing,
    populateModelOptions,
  } = useDashboardStore((store) => ({
    filterData: store.filterData,
    setFilterData: store.setFilterData,
    editListingOptions: store.editListingOptions,
    setIsPendingEdit: store.setIsPendingEdit,
    onToggleEditing: store.onToggleEditing,
    populateModelOptions: store.populateModelOptions,
  }));

  // filter form
  const defaultFilters = useMemo(
    () => getDefaultFilters(filterData!, initialFilters),
    [filterData!, initialFilters]
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
          setFilterData(nextFilterData!);
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
    setFilterData(nextFilterData!);

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
        editListingOptions
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
  const validateEntryCb = (
    entry: Pick<CarListing, "id"> & Partial<CarListing>
  ) => {
    // create zod schema for listing validity
    //  (required fields specified + all fields validation)
    const listingSchema = z.object({
      id: z.number(),
      brandId: z.number(),
      modelId: z.number(),
      year: validateRange(filterData!, FILTER_NAMES.YEAR),
      mileage: validateRange(filterData!, FILTER_NAMES.MILEAGE),
      price: validateRange(filterData!, FILTER_NAMES.PRICE),
      brand: z.string(),
      model: z.string(),
      description: z.string().optional(),
      createdAt: z.date().optional(),
      slug: z.string(),
      thumbnailUrl: z.string(),
      bodyType: z.enum(["SUV", "OTHER"]),
      // ...rest
    });

    // check entry against schema
    const parsed = listingSchema.safeParse(entry);

    // return flag
    return parsed.success;
  };

  // edit listings
  const {
    uiList: optimisticListings,
    updateListEntry,
    deleteListEntry,
    transitionPending,
  } = useEditableList(
    listings,
    updateCb,
    deleteCb,
    (listings, nextListing) =>
      updateListingsEntry(listings, nextListing, editListingOptions),
    validateEntryCb
  );

  useEffect(() => {
    const cb = async () => {
      const res = (await fetchCarListings(defaultFilters))!;
      setListings(res.listings!);
    };

    cb();
  }, []);
  useEffect(() => setIsPendingEdit(transitionPending), [transitionPending]);

  return (
    <div className="flex flex-1 flex-col">
      <SearchForm
        filterData={filterData!}
        filters={filters}
        setFilters={setFilters}
        // onSubmit={handleSubmit}
        onChange={handleChange}
        onReset={handleReset}
      />
      <CarListingList
        listings={optimisticListings}
        editingId={editListingOptions.editingListingId}
        allowEdit={true}
        onToggleEditing={async (listing) => {
          await populateModelOptions(listing.brandId);
          onToggleEditing(listing);
        }}
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
