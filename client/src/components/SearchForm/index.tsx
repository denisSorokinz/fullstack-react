"use client";

import React, { FC, FormEvent, useEffect, useMemo } from "react";
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
import { clearDependencyFilters } from "@/lib/filters";
import { sanitizeObject } from "@/lib/utils";

type SearchFormProps = {
  filterData: FiltersType;
  filters: FilterValuesType;
  onFilterChange: (
    nextFilters: FilterValuesType,
    isDependencyFilter: boolean
  ) => void;
  onSubmit: (formData: Partial<FilterValuesType>) => void;
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

  const handleFilterChange = (
    changedFilterName: FILTER_NAMES,
    value: number | number[]
  ) => {
    const { slug: changedFilterSlug } = filterData[changedFilterName];
    const dirtyFilterValues = {
      ...filters,
    } as FilterValuesType;

    if (
      filterData[changedFilterName].type === "range" &&
      Array.isArray(value)
    ) {
      const [nextFrom, nextTo] = value;

      dirtyFilterValues[`${changedFilterSlug}-${RANGE_MODIFIERS.FROM}`] =
        nextFrom;
      dirtyFilterValues[`${changedFilterSlug}-${RANGE_MODIFIERS.TO}`] = nextTo;
    }

    if (
      filterData[changedFilterName].type !== "range" &&
      typeof value === "number"
    ) {
      dirtyFilterValues[changedFilterSlug] = value;
    }

    const nextFilters = clearDependencyFilters(
      filterData,
      dirtyFilterValues,
      changedFilterName
    );

    const isDependencyFilter = !!Object.values(filterData).find(
      (filter) =>
        filter.type !== "range" && filter.dependency === changedFilterName
    );

    onFilterChange(nextFilters, isDependencyFilter);
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const sanitized = sanitizeObject(filters);

    onSubmit(sanitized);
  };

  return (
    <form
      className="m-auto mb-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4"
      onSubmit={handleSubmit}
    >
      <FormFilters
        filterData={filterData}
        filters={filters}
        onFilterChange={handleFilterChange}
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
