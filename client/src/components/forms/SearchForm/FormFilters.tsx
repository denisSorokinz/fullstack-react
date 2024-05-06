"use client";

import { FC, useMemo } from "react";
import Range from "@/components/ui/Range";
import {
  FILTER_NAMES,
  FilterValuesType,
  FiltersType,
  IRangeFilter,
  ISelectFilter,
  RANGE_MODIFIERS,
} from "@/types/filters";

type Props = {
  filterData: FiltersType;
  filters: FilterValuesType;
  onFilterChange: (
    changedFilterName: FILTER_NAMES,
    value: number | number[]
  ) => void;
};

const FormFilters: FC<Props> = ({ filterData, filters, onFilterChange }) => {
  return (
    <>
      {Object.keys(filterData).map((filterName) => {
        const tFilterName = filterName as keyof typeof filterData;
        const filter = filterData[tFilterName];
        let input;

        switch (filter.type) {
          case "select": {
            const tFilter = filter as ISelectFilter;
            let options;
            let disabled = true;

            if (tFilter.options.length === 0 && !tFilter.dependency)
              options = <option value="">0 опцiй</option>;

            if (tFilter.options.length === 0 && tFilter.dependency) {
              const displayName = filterData[tFilter.dependency].displayName;
              options = (
                <option value="">Спочатку оберiть: {displayName}</option>
              );
            }

            if (tFilter.options.length > 0) {
              disabled = false;
              options = (
                <>
                  <option value="-1">
                    Оберiть {tFilter.displayName}
                  </option>
                  {tFilter.options.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </>
              );
            }

            input = (
              <select
                id={filter.slug}
                disabled={disabled}
                onChange={(ev) =>
                  onFilterChange(tFilterName, +ev.currentTarget.value)
                }
                value={filters[filter.slug]}
                className="rounded-md border-2 border-slate-300/50 bg-transparent text-primary"
              >
                {options}
              </select>
            );
            break;
          }

          case "range": {
            const tFilter = filter as IRangeFilter;
            const keyFrom = `${tFilter.slug}-${RANGE_MODIFIERS.FROM}`;
            const keyTo = `${tFilter.slug}-${RANGE_MODIFIERS.TO}`;

            input = (
              <Range
                min={tFilter[RANGE_MODIFIERS.FROM]}
                max={tFilter[RANGE_MODIFIERS.TO]}
                from={filters[keyFrom] as number}
                to={filters[keyTo] as number}
                onChange={(nextValue) => {
                  onFilterChange(tFilterName, nextValue);
                }}
              />
            );
          }
        }

        // (?)TODO: handle type checkbox

        return (
          <div key={filter.slug} className="flex min-w-72 flex-col gap-1">
            <label htmlFor={filter.slug} className="text-primary">
              {filter.displayName}
            </label>
            {input}
          </div>
        );
      })}
    </>
  );
};

export default FormFilters;
