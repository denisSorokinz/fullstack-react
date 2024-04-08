"use client";

import React, { FC, useEffect, useMemo } from "react";
import { FILTER_NAMES } from "@/constants";
import {
  FilterValuesType,
  FiltersType,
  IRangeFilter,
  ISelectFilter,
  RANGE_MODIFIERS,
} from "@/types/filters";
import Range from "@/components/ui/Range";
import FormFilters from "./FormFilters";

type SearchFormProps = {
  filterData: FiltersType;
  filters: FilterValuesType;
  onFilterChange: (
    changedFilterName: FILTER_NAMES,
    value: number | number[]
  ) => void;
  onSubmit: (formData: any) => void;
  onReset: () => void;
};

const SearchForm: FC<SearchFormProps> = ({
  filterData,
  filters,
  onFilterChange,
  onSubmit,
  onReset,
}) => {
  useEffect(() => console.log({ formFilters: filters }), [filters]);

  return (
    <form
      className="m-auto mb-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4"
      onSubmit={onSubmit}
    >
      <FormFilters
        filterData={filterData}
        filters={filters}
        onFilterChange={onFilterChange}
      />

      <button
        type="submit"
        className="col-span-full m-auto rounded-md bg-accent bg-slate-600 px-4 py-2 text-slate-200 transition hover:brightness-90"
      >
        Пошук
      </button>
      <button onClick={onReset} type="button">
        Очистити фільтри
      </button>
    </form>
  );
};

export default SearchForm;
