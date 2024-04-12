"use client";

import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/SearchForm";
import { FilterValuesType, FiltersType } from "@/types/filters";
import { FC, useState } from "react";
import { CarListing } from "@/types/listings";
import { fetchCarListings } from "@/lib";

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
  const [listings, setListings] = useState(initialListings);

  const handleSubmit = async (filters: Partial<FilterValuesType>) => {
    const nextListings = await fetchCarListings(filters);
    setListings(nextListings!);
  };
  const handleReset = async () => {
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
          initialFilterData={initialFilterData}
          initialFilters={initialFilters}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />

        <CarListingList listings={listings} />
      </div>
    </div>
  );
};

export default DashboardContent;
