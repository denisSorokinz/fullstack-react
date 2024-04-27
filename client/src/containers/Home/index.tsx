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
import SearchForm from "@/components/forms/SearchForm";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";
import { fetchFilters } from "@/lib";
import { CarListing } from "@/types/listings";
import CarListingList from "@/components/carListings/List";
import { useAuthStore } from "@/stores/auth";
import { clearDependencyFilters, getDefaultFilters } from "@/lib/filters";
import { toggleListingFavorites } from "@/lib/actions";

export type SearchFormValues = {
  [k in FILTER_NAMES]: number | "";
};

type Props = {
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
  listings: CarListing[];
  favoriteListingIds: number[];
};

const Home: FC<Props> = ({
  initialFilterData,
  initialFilters,
  listings,
  favoriteListingIds,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const invalidateSession = useAuthStore((state) => state.invalidateSession);
  const [favorites, setFavorites] = useState(favoriteListingIds);

  const [filterData, setFilterData] = useState(initialFilterData);

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
      new URLSearchParams(sanitized as any).toString()
    );

    router.push(`/?${queryString}`);
  };

  const handleReset = async () => {
    router.push(`/`);
  };

  useEffect(
    () => void (searchParams.get("auth") === "logout" && invalidateSession()),
    [searchParams]
  );

  const handleToggleFavorite = async (listingId: number) => {
    const { success, message, data } = await toggleListingFavorites(listingId);

    if (!(success && data)) return;

    const nextFavorites = favorites.filter((id) => id !== listingId);
    if (data.isFavorited) nextFavorites.push(listingId);

    setFavorites(nextFavorites);
  };

  return (
    <>
      <SearchForm
        filterData={filterData}
        initialFilters={initialFilters}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />

      <CarListingList
        listings={listings}
        favoriteListingIds={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
};

export default Home;
