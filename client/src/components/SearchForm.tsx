"use client";

import React, { FC } from "react";
import { FILTER_NAMES } from "../constants";
import { FilterValuesType, FiltersType } from "../types/filters";
import { useForm } from "react-hook-form";

type SearchFormProps = {
  filters: FiltersType;
  filterValues: FilterValuesType;
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

const SearchForm: FC<SearchFormProps> = ({ filters, filterValues, onFilterChange, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: filterValues,
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
    <form className="grid gap-x-6 gap-y-4 grid-cols-2 max-w-2xl m-auto mb-12" onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(filters).map((filterSlug) => {
        const typedFilterSlug = filterSlug as keyof typeof filters;
        const f = filters[typedFilterSlug];
        let input;

        switch (f.type) {
          case "select": {
            let options;
            let disabled = true;

            if (f.options.length === 0 && !f.dependency) options = <option value="">0 опцiй</option>;

            if (f.options.length === 0 && f.dependency) {
              const displayName = filters[f.dependency.filterName].displayName;
              options = <option value="">Спочатку оберiть: {displayName}</option>;
            }

            if (f.options.length > 0) {
              disabled = false;
              options = (
                <>
                  <option value="">Оберiть {f.displayName}</option>
                  {f.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.name}
                    </option>
                  ))}
                </>
              );
            }

            input = (
              <select
                id={f.slug}
                disabled={disabled}
                {...register(f.slug)}
                onChange={(ev) => onFilterChange(typedFilterSlug, ev.currentTarget.value)}
                className="text-primary bg-transparent rounded-md border-slate-300/50 border-2"
              >
                {options}
              </select>
            );
          }
        }

        // TODO: handle type checkbox

        // TODO: handle type number

        return (
          <div key={f.slug} className="flex flex-col gap-1">
            <label htmlFor={f.slug} className="text-primary">
              {f.displayName}
            </label>
            {input}
          </div>
        );
      })}

      <button className="col-span-full m-auto px-4 py-2 bg-accent rounded-md text-white hover:brightness-90 transition">
        Пошук
      </button>
    </form>
  );
};

export default SearchForm;
