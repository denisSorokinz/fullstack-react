"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/SearchForm";
import { FILTER_NAMES, FilterValuesType, FiltersType } from "@/types/filters";
import { FC, FormEvent, useState } from "react";
import { CarListing } from "@/types/listings";
import { fetchFilters } from "@/lib";

type Props = {
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
  initialListings: CarListing[];
};
const DashboardContent: FC<Props> = ({
  initialFilterData,
  initialFilters,
  initialListings,
}) => {
  const [filterData, setFilterData] = useState(initialFilterData);
  const [filters, setFilters] = useState(initialFilters);

  const [listings, setListings] = useState(initialListings);

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
    console.log("submitted filters:", { filters });
  };
  const handleReset = () => {};

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

export default DashboardContent;
