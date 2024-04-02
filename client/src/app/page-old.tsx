import { fetchFilterOptions } from "@/lib";
import { FILTERS, FILTER_NAMES, FilterType, FILTER_SLUGS, QueryParamToFilterName } from "../constants";
import HomeContainer, { SearchFormValues } from "../containers/Home";

/*
persist selected filters state after query submit
issue: fetched filters are not stored anywhere -> on router.push new requests need to be made
solution: requests are (? cached) by react automatically, so I can just fetch them again every time
other solution: make filters client-side state
*/

const formValues = {
  [FILTER_NAMES.CATEGORY]: "",
  [FILTER_NAMES.STATE]: "",
  [FILTER_NAMES.MARK]: "",
  [FILTER_NAMES.CITY]: "",
} as SearchFormValues;

export default async function Home({ searchParams }: { searchParams: { [k in FILTER_SLUGS | string]: string } }) {
  const filters = [...FILTERS];

  const selectedFilters = Object.keys(searchParams)
    .map((queryParam) => {
      const q = queryParam as keyof typeof searchParams;
      const value = Number.parseInt(searchParams[q]);

      if (!Object.keys(FILTER_SLUGS).includes(q) || isNaN(value)) return null;

      const queryParamTyped = q as FILTER_SLUGS;

      const filterName = QueryParamToFilterName[queryParamTyped];
      const filter = FILTERS.find((f) => f.name === filterName) as FilterType;

      return { filter, value };
    })
    .filter(Boolean) as { filter: FilterType; value: number }[];


  const parentFilters = filters.filter((f) => f.dependency === undefined);
  const parentFilterOptions = await Promise.all(
    parentFilters.map(async (f) => {
      const options = await fetchFilterOptions(f);
      return {
        id: f.id,
        options,
      };
    })
  );
  const childFilterOptions = await Promise.all(
    selectedFilters.map(async ({ filter, value }) => {
      const childFilter = FILTERS.find((f) => f.dependency === filter.id);
      if (filter.dependency !== undefined || !childFilter) return;

      const options = await fetchFilterOptions(childFilter, value);
      return {
        id: childFilter.id,
        options,
      };
    })
  );


  [...parentFilterOptions, ...childFilterOptions].forEach((filterOption) => {
    if (!filterOption) return;

    const f = filters.find((current) => filterOption.id === current.id)!;
    f.options = filterOption.options;
  });

  const formValues = {} as { [k in FILTER_NAMES]: number | "" };
  Object.values(FILTER_NAMES).forEach((filterName) => (formValues[filterName] = ""));
  selectedFilters.forEach(({ filter, value }) => {
    formValues[filter.name] = value;
  });

  return <HomeContainer searchParams={searchParams} formValues={formValues} initialFilterData={filters} />;
}
