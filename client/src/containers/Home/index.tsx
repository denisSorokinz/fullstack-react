"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FILTER_NAMES, FilterValuesType, FiltersType } from "@/types/filters";
import { useRouter, useSearchParams } from "next/navigation";
import SearchForm from "@/components/forms/SearchForm";
import { decodeHtmlString, sanitizeObject } from "@/lib/utils";
import { fetchCarListings, fetchFilters } from "@/lib";
import { CarListing } from "@/types/listings";
import CarListingList from "@/components/carListings/List";
import { useAuthStore } from "@/stores/auth";
import { ListingsContext, ListingsProvider } from "@/contexts/listings";
import { PaginationMeta } from "@/types/http";
import HomepageContent from "./Content";

export type SearchFormValues = {
  [k in FILTER_NAMES]: number | "";
};

type Props = {
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
  initialListings: CarListing[];
  favoriteIds: number[];
  paginationMeta: PaginationMeta;
};
const Home: FC<Props> = ({
  initialFilterData,
  initialFilters,
  initialListings,
  favoriteIds,
  paginationMeta,
}) => {
  return (
    <ListingsProvider>
      <HomepageContent
        initialFilterData={initialFilterData}
        initialFilters={initialFilters}
      />
    </ListingsProvider>
  );
};

export default Home;
