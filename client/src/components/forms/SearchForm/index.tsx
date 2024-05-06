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
  filters: FilterValuesType;
  setFilters: React.Dispatch<React.SetStateAction<FilterValuesType>>;
  onSubmit?: (formData: Partial<FilterValuesType>) => void;
  onChange?: (formData: FilterValuesType, isDependencyFilter: boolean) => void;
  onReset?: () => void;
};

const SearchForm: FC<SearchFormProps> = ({
  filterData,
  filters,
  setFilters,
  onSubmit,
  onChange,
  onReset,
}) => {
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

    const sanitized = {} as typeof filters;
    for (let key in sanitizeObject(filters)) {
      const typedKey = key as keyof typeof filters;

      if (!isNaN(+filters[typedKey]) && +filters[typedKey] > 0) {
        console.log({ adding: typedKey, value: filters[typedKey] });

        sanitized[typedKey] = +filters[typedKey];
      }
    }

    console.log({ sanitized });

    onSubmit && onSubmit(sanitized);
  };

  const handleReset = async () => {
    const defaultFilters = getDefaultFilters(filterData);
    setFilters(defaultFilters);

    onReset && onReset();
  };

  return (
    <form
      className="mx-auto mb-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4"
      onSubmit={handleSubmit}
    >
      <FormFilters
        filterData={filterData}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <div className="col-span-full flex justify-end gap-2">
        {onSubmit && (
          <button
            type="submit"
            className="rounded-md bg-slate-700 px-4 py-2 text-slate-100 transition hover:brightness-90"
          >
            Пошук
          </button>
        )}
        {onReset && (
          <button
            onClick={handleReset}
            type="button"
            className="block rounded-md bg-slate-700 p-2 text-slate-100 transition hover:brightness-90"
          >
            Очистити фільтри
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
