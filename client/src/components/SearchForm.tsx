"use client";

import React, { FC } from "react";
import { FILTER_NAMES } from "@/constants";
import { FilterValuesType, FiltersType, IRangeFilter, ISelectFilter } from "@/types/filters";
import { useForm } from "react-hook-form";
import Range from "./ui/Range";

type SearchFormProps = {
  filterData: FiltersType;
  filters: FilterValuesType;
  onFilterChange: (changedFilterName: FILTER_NAMES, value: string) => void;
  onSubmit: () => void;
};

// const formValuesToQuery = (formData: typeof defaultValues) => {
//   debugger;
//   const sanitized = sanitizeObject(formData);

//   const params = new URLSearchParams();
//   let key: keyof typeof sanitized;
//   for (key in sanitized) {
//     const value = sanitized[key];

//     const paramName = FilterToQueryParam[key];
//     params.append(paramName, value);
//   }

//   return params.toString();
// };

const SearchForm: FC<SearchFormProps> = ({
  filterData,
  filters,
  onFilterChange,
  onSubmit,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: filters,
  });

  // fetch dependency filters (if any)
  // const handleChange = async (ev: React.ChangeEvent<HTMLSelectElement>, changedFilter: FilterType) => {
  //   // find child filter that depends on current changed
  //   const newFilters = [...filters];
  //   const childFilter = newFilters.find((ft) => ft.dependency === changedFilter.id);
  //   if (!childFilter) return;

  //   // fetch child filter options
  //   const params = new URLSearchParams();
  //   const queryParam = FilterToQueryParam[changedFilter.name];
  //   params.append(queryParam, ev.target.value);

  //   const url = `${changedFilter.name}/${ev.target.value}/${childFilter.name}`;
  //   console.log(`[SearchForm Fetch] ${url}`);
  //   const res = await fetchRiaApi(url);

  //   // update filters state
  //   childFilter.options = res;
  //   setFilters(newFilters);
  // };

  // const onSubmit: SubmitHandler<typeof defaultValues> = (formValues) => onSubmit(formValuesToQuery(formValues));
  return (
    <form
      className="m-auto mb-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {Object.keys(filterData).map((filterSlug) => {
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
            input = <Range from={tFilter.from} to={tFilter.to} />
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

      <button className="col-span-full m-auto rounded-md bg-accent px-4 py-2 bg-slate-600 text-slate-200 transition hover:brightness-90">
        Пошук
      </button>
    </form>
  );
};

export default SearchForm;
