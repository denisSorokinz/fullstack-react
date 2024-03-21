import { fetchCarListings, fetchFilters } from "@/lib";
import {
  FiltersType,
  FilterValuesType,
  SingleFilterType,
} from "../types/filters";
import { FILTER_SLUGS } from "../constants";
import HomeContainer from "../containers/Home";

/*
persist selected filters state after query submit
issue: fetched filters are not stored anywhere -> on router.push new requests need to be made
solution: requests are (? cached) by react automatically, so I can just fetch them again every time
other solution: make filters client-side state
*/

// const formValues = {
//   [FILTER_NAMES.CATEGORY]: "",
//   [FILTER_NAMES.STATE]: "",
//   [FILTER_NAMES.MARK]: "",
//   [FILTER_NAMES.CITY]: "",
// } as SearchFormValues;

/*
  for each filterSlug in filterValues:
    ft = filters.find(f.slug === filterSlug)

    if(!["select", "checkbox"].includes(ft.type)) return

    if(!ft.options.some(option.name === filterValues[filterSlug]))
      filterValues[filterSlug] = ""
*/
const clearUnexistingFilterValues = (
  filters: FiltersType,
  filterValues: FilterValuesType
) => {
  const clearedFilterValues = { ...filterValues };
  Object.keys(clearedFilterValues).forEach((filterSlug) => {
    const typedFilterSlug = filterSlug as keyof typeof clearedFilterValues;
    const filter = Object.values(filters).find(
      (ft) => ft.slug === typedFilterSlug
    ) as SingleFilterType;

    if (filter.type !== "select" && filter.type !== "checkbox") return;

    if (
      !filter.options.find(
        (opt) => opt.value === clearedFilterValues[typedFilterSlug]
      )
    )
      clearedFilterValues[typedFilterSlug] = "";
  });

  return clearedFilterValues;
};

export default async function Home({
  searchParams,
  ...rest
}: {
  searchParams: { [k in FILTER_SLUGS | string]: string };
}) {
  const filterValues = Object.keys(FILTER_SLUGS).reduce(
    (acc, filterSlug) => ({ ...acc, [filterSlug]: "" }),
    {} as FilterValuesType
  );

  Object.keys(searchParams).forEach((queryParam) => {
    const q = queryParam as keyof typeof searchParams;
    const value = Number.parseInt(searchParams[q]);

    if (!Object.keys(FILTER_SLUGS).includes(q) || isNaN(value)) return;

    const typedKey = q as keyof typeof FILTER_SLUGS;

    filterValues[typedKey] = searchParams[typedKey];
  });

  const listings = await fetchCarListings(filterValues);

  // fetch filters (stateless)
  const filters = await fetchFilters(filterValues);

  // clear un-existing filter values
  const clearedFilterValues = clearUnexistingFilterValues(
    filters,
    filterValues
  );
  // console.log({ filters, filterValues, clearedFilterValues });

  // render filters
  return (
    <HomeContainer
      initialFilters={filters}
      initialFilterValues={clearedFilterValues}
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
