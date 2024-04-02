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
  const sanitized = { ...filters };
  Object.keys(sanitized).forEach((filterSlug) => {
    const key = filterSlug as keyof typeof sanitized;

    const slugNoModifier = filterSlug.split("-")[0] as keyof typeof sanitized;

    const filter = Object.values(filterData).find(
      (ft) => ft.slug === slugNoModifier
    ) as SingleFilterType;

    if (filter.type === "range") {
      const hasRangeModifier = Object.values(RANGE_MODIFIERS).some(
        (modifier) => filterSlug.split("-")[1] === modifier
      );
      if (!hasRangeModifier) {
        delete sanitized[key];
        return;
      }

      const tFilter = filter as IRangeFilter;

      let modifier = RANGE_MODIFIERS.FROM;
      if (filterSlug.includes(RANGE_MODIFIERS.TO))
        modifier = RANGE_MODIFIERS.TO;

      const value = sanitized[key];
      const limit = tFilter[modifier];

      if (
        (modifier === RANGE_MODIFIERS.FROM && value < limit) ||
        (modifier === RANGE_MODIFIERS.TO && value > limit)
      ) {
        const keys = Object.values(RANGE_MODIFIERS).map(
          (modifier) => `${slugNoModifier}-${modifier}`
        );
        keys.forEach((k) => delete (sanitized as any)[k]);
      }
    }

    if (filter.type === "select" || filter.type === "checkbox") {
      const isValidOption = filter.options.find(
        (opt) => opt.id === sanitized[slugNoModifier]
      );
      if (!isValidOption) delete sanitized[slugNoModifier];
    }
  });

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
