"use client";

import React, { FC, FormEvent, useEffect, useMemo, useState } from "react";
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
import { clearDependencyFilters, getDefaultFilters } from "@/lib/filters";
import { sanitizeObject } from "@/lib/utils";
import { fetchFilters } from "@/lib";

type SearchFormProps = {
  initialFilterData: FiltersType;
  initialFilters: FilterValuesType;
  onSubmit?: (formData: Partial<FilterValuesType>) => void;
  onReset?: () => void;
};

const SearchForm: FC<SearchFormProps> = ({
  initialFilterData,
  initialFilters,
  onSubmit,
  onReset,
}) => {
  const defaultFilters = useMemo(
    () => getDefaultFilters(initialFilterData, initialFilters),
    [initialFilterData, initialFilters]
  );

  const [filterData, setFilterData] = useState(initialFilterData);
  const [filters, setFilters] = useState(defaultFilters);


  const handleFilterChange = async (
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

    setFilters(nextFilters);

    if (isDependencyFilter) {
      const nextFilterData = await fetchFilters(nextFilters);
      setFilterData(nextFilterData!);
    }
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const sanitized = sanitizeObject(filters);

    onSubmit && onSubmit(sanitized);
  };

  const handleReset = async () => {
    const defaultFilterData = await fetchFilters();
    const defaultFilters = getDefaultFilters(initialFilterData);

    setFilterData(defaultFilterData!);
    setFilters(defaultFilters);

    onReset && onReset();
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
      <button onClick={handleReset} type="button">
        Очистити фільтри
      </button>
    </form>
  );
};

export default SearchForm;
