"use client";

import React, { FC, useMemo } from "react";
import { FILTER_NAMES } from "@/constants";
import {
  FilterValuesType,
  FiltersType,
  IRangeFilter,
  ISelectFilter,
  RANGE_MODIFIERS,
} from "@/types/filters";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Range from "./ui/Range";

type SearchFormProps = {
  filterData: FiltersType;
  filters: FilterValuesType;
  onFilterChange: (changedFilterName: FILTER_NAMES, value: string) => void;
  onSubmit: (formData: any) => void;
};

const schema = z.object({
  brand: z.number().min(0).max(1000).optional(),
  model: z.number().min(0).max(1000).optional(),
  "year-from": z.number().min(0).max(2024),
  "year-to": z.number().min(0).max(2024),
  "mileage-from": z.number().min(0).max(1_000_000),
  "mileage-to": z.number().min(0).max(1_000_000),
  "price-from": z.number().min(0).max(1_000_000),
  "price-to": z.number().min(0).max(1_000_000),
});

const SearchForm: FC<SearchFormProps> = ({
  filterData,
  filters,
  onFilterChange,
  onSubmit,
}) => {
  const defaultValues = useMemo(() => {
    const res = {} as {
      [k in keyof FilterValuesType]: number | "";
    };

    for (let name in filterData) {
      const tName = name as keyof typeof filterData;
      const filter = filterData[tName];

      if (filter.type === "range") {
        const tFilter = filter as IRangeFilter;

        const keyFrom = `${tFilter.slug}-${RANGE_MODIFIERS.FROM}`;
        const keyTo = `${tFilter.slug}-${RANGE_MODIFIERS.TO}`;

        res[keyFrom] = filters[keyFrom] || 100;
        res[keyTo] = filters[keyTo] || tFilter[RANGE_MODIFIERS.TO];

        continue;
      }

      res[filter.slug] = filters[filter.slug] || 0;
    }

    return res;
  }, [filterData, filters]);

  const { register, handleSubmit, ...methods } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <form
      className="m-auto mb-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4"
      onSubmit={handleSubmit(onSubmit, (err) => {
        console.log({ err });
      })}
    >
      <FormProvider
        {...methods}
        register={register}
        handleSubmit={handleSubmit}
      >
        {Object.keys(filterData)
          .filter((item) => item === FILTER_NAMES.YEAR)
          .map((filterSlug) => {
            const typedFilterSlug = filterSlug as keyof typeof filterData;
            const filter = filterData[typedFilterSlug];
            let input;

            switch (filter.type) {
              case "select": {
                const tFilter = filter as ISelectFilter;
                let options;
                let disabled = true;

                if (tFilter.options.length === 0 && !tFilter.dependency)
                  options = <option value="">0 опцiй</option>;

                if (tFilter.options.length === 0 && tFilter.dependency) {
                  const displayName =
                    filterData[tFilter.dependency].displayName;
                  options = (
                    <option value="">Спочатку оберiть: {displayName}</option>
                  );
                }

                if (tFilter.options.length > 0) {
                  disabled = false;
                  options = (
                    <>
                      <option value="">Оберiть {tFilter.displayName}</option>
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
                    {...register(filter.slug)}
                    onChange={(ev) =>
                      onFilterChange(typedFilterSlug, ev.currentTarget.value)
                    }
                    className="rounded-md border-2 border-slate-300/50 bg-transparent text-primary"
                  >
                    {options}
                  </select>
                );
                break;
              }

              case "range": {
                const tFilter = filter as IRangeFilter;

                input = (
                  <Range
                    slug={tFilter.slug}
                    from={tFilter[RANGE_MODIFIERS.FROM]}
                    to={tFilter[RANGE_MODIFIERS.TO]}
                  />
                );
              }
            }

            // TODO: handle type checkbox

            // TODO: handle type number

            return (
              <div key={filter.slug} className="flex flex-col gap-1">
                <label htmlFor={filter.slug} className="text-primary">
                  {filter.displayName}
                </label>
                {input}
              </div>
            );
          })}
      </FormProvider>

      <button className="col-span-full m-auto rounded-md bg-accent bg-slate-600 px-4 py-2 text-slate-200 transition hover:brightness-90">
        Пошук
      </button>
    </form>
  );
};

export default SearchForm;
