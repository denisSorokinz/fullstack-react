import { FILTER_NAMES, FILTER_SLUGS } from "@/constants";
import {
  FilterValuesType,
  FiltersType,
  IRangeFilter,
  ISelectFilter,
  RANGE_MODIFIERS,
  SingleFilterType,
} from "@/types/filters";

const parseFiltersFromSearch = (searchParams: {
  [k in FILTER_SLUGS | string]: string;
}) => {
  const filters = {} as FilterValuesType;

  Object.keys(searchParams).forEach((queryParam) => {
    const tQueryParam = queryParam as keyof typeof searchParams;
    const value = Number.parseInt(searchParams[tQueryParam]);

    const queryNoModifier = tQueryParam.split("-")[0];

    if (!Object.keys(FILTER_SLUGS).includes(queryNoModifier) || isNaN(value))
      return;

    const typedKey = tQueryParam as keyof typeof FILTER_SLUGS;

    filters[typedKey] = value;
  });

  return filters;
};

const getDefaultFilters = (
  initialFilterData: FiltersType,
  initialFilters?: FilterValuesType
) => {
  const res = {} as {
    [k in keyof FilterValuesType]: number | "";
  };

  for (let name in initialFilterData) {
    const tName = name as keyof typeof initialFilterData;
    const filter = initialFilterData[tName];

    if (filter.type === "range") {
      const tFilter = filter as IRangeFilter;

      const keyFrom = `${tFilter.slug}-${RANGE_MODIFIERS.FROM}`;
      const keyTo = `${tFilter.slug}-${RANGE_MODIFIERS.TO}`;

      res[keyFrom] =
        (initialFilters && initialFilters[keyFrom]) ||
        tFilter[RANGE_MODIFIERS.FROM];
      res[keyTo] =
        (initialFilters && initialFilters[keyTo]) ||
        tFilter[RANGE_MODIFIERS.TO];

      continue;
    }

    res[filter.slug] = (initialFilters && initialFilters[filter.slug]) || "";
  }

  return res;
};

const sanitizeFilters = (
  filterData: FiltersType,
  filters: FilterValuesType
) => {
  let sanitized = {} as typeof filters;
  for (let slug in filters) {
    const tSlug = slug as keyof typeof filters;
    const slugNoModifier = tSlug.split("-")[0] as keyof typeof sanitized;

    const isRange = Object.values(filterData).find(
      (ft) => ft.slug === slugNoModifier && ft.type === "range"
    );

    if (isRange) {
      const modifier = Object.values(RANGE_MODIFIERS).find(
        (r) => r === tSlug.split("-")[1]
      );

      if (!modifier) continue;
    }

    sanitized[tSlug] = filters[tSlug];
  }

  for (let slug in sanitized) {
    const tSlug = slug as keyof typeof sanitized;
    const slugNoModifier = slug.split("-")[0] as keyof typeof sanitized;

    const filter = Object.values(filterData).find(
      (ft) => ft.slug === slugNoModifier
    ) as SingleFilterType;

    if (filter.type === "range") {
      const tFilter = filter as IRangeFilter;

      let modifier = RANGE_MODIFIERS.FROM;
      if (slug.includes(RANGE_MODIFIERS.TO)) modifier = RANGE_MODIFIERS.TO;

      let value = sanitized[tSlug];
      const limit = tFilter[modifier];

      if (
        typeof value !== "number" ||
        (modifier === RANGE_MODIFIERS.FROM && value < limit) ||
        (modifier === RANGE_MODIFIERS.TO && value! > limit)
      ) {
        delete sanitized[tSlug];
      }

      continue;
    }

    if (filter.type === "select" || filter.type === "checkbox") {
      const isValidOption = filter.options.find(
        (opt) => opt.id === sanitized[slugNoModifier]
      );
      if (!isValidOption) delete sanitized[slugNoModifier];
    }
  }

  return sanitized;
};

const clearDependencyFilters = (
  filterData: FiltersType,
  filters: FilterValuesType,
  changedFilterName: FILTER_NAMES
): FilterValuesType => {
  const childFilterName = Object.keys(filterData).find((filterSlug) => {
    const tFilterSlug = filterSlug as keyof typeof filterData;

    if (
      !(
        filterData[tFilterSlug].type === "select" ||
        filterData[tFilterSlug].type === "range"
      )
    ) {
      return;
    }

    const tFilter = filterData[tFilterSlug] as ISelectFilter;
    return tFilter.dependency === changedFilterName;
  }) as keyof typeof filterData | undefined;

  if (!childFilterName) return filters;

  const childFilter = filterData[childFilterName];

  delete filters[childFilter.slug];
  return clearDependencyFilters(filterData, filters, childFilterName);
};

export { parseFiltersFromSearch, getDefaultFilters, sanitizeFilters, clearDependencyFilters };
