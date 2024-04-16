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
  filterData: FiltersType;
  initialFilters: FilterValuesType;
  onSubmit?: (formData: Partial<FilterValuesType>) => void;
  onChange?: (formData: FilterValuesType, isDependencyFilter: boolean) => void;
  onReset?: () => void;
};

const SearchForm: FC<SearchFormProps> = ({
  filterData,
  initialFilters,
  onSubmit,
  onChange,
  onReset,
}) => {
  const defaultFilters = useMemo(
    () => getDefaultFilters(filterData, initialFilters),
    [filterData, initialFilters]
  );

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

    onChange && onChange(nextFilters, isDependencyFilter);
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const sanitized = sanitizeObject(filters);

    onSubmit && onSubmit(sanitized);
  };

  const handleReset = async () => {
    const defaultFilters = getDefaultFilters(filterData);
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
      {onReset && (
        <button onClick={handleReset} type="button">
          Очистити фільтри
        </button>
      )}
    </form>
  );
};

export default SearchForm;
