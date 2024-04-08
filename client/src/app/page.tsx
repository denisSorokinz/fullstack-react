import { fetchCarListings, fetchFilters } from "@/lib";
import {
  FiltersType,
  FilterValuesType,
  IRangeFilter,
  RANGE_MODIFIERS,
  SingleFilterType,
} from "../types/filters";
import { FILTER_SLUGS } from "../constants";
import HomeContainer from "../containers/Home";

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
        typeof value !== 'number' ||
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

export default async function Home({
  searchParams,
}: {
  searchParams: { [k in FILTER_SLUGS | string]: string };
}) {
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

  const listings = await fetchCarListings(filters);

  // fetch filters (stateless)
  const filterData = await fetchFilters(filters);

  // clear un-existing filter values
  const sanitizedFilters = sanitizeFilters(filterData, filters);

  console.log({ sanitizedFilters });

  // render filters
  return (
    <HomeContainer
      initialFilterData={filterData}
      initialFilters={sanitizedFilters}
      listings={listings}
    />
  );

  // const parentFilters = filters.filter((f) => f.dependency === undefined);
  // const parentFilterOptions = await Promise.all(
  //   parentFilters.map(async (f) => {
  //     const options = await fetchFilterOptions(f);
  //     return {
  //       id: f.id,
  //       options,
  //     };
  //   })
  // );
  // console.log("[1]");
  // const childFilterOptions = await Promise.all(
  //   activeFilters.map(async ({ filter, value }) => {
  //     const childFilter = FILTERS.find((f) => f.dependency === filter.id);
  //     if (filter.dependency !== undefined || !childFilter) return;

  //     const options = await fetchFilterOptions(childFilter, value);
  //     return {
  //       id: childFilter.id,
  //       options,
  //     };
  //   })
  // );

  // console.log("[2]");

  // [...parentFilterOptions, ...childFilterOptions].forEach((filterOption) => {
  //   if (!filterOption) return;

  //   const f = filters.find((current) => filterOption.id === current.id)!;
  //   f.options = filterOption.options;
  // });

  // const formValues = {} as { [k in FILTER_NAMES]: number | "" };
  // Object.values(FILTER_NAMES).forEach((filterName) => (formValues[filterName] = ""));
  // activeFilters.forEach(({ filter, value }) => {
  //   formValues[filter.name] = value;
  // });

  // return <HomeContainer searchParams={searchParams} formValues={formValues} initialFilters={filters} />;
}
