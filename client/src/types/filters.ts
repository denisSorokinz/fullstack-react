import { FILTER_NAMES, FILTER_SLUGS } from "../constants";

type FilterValuesType = { [k in FILTER_SLUGS]: string };

type DependencyType = {
  filterName: FILTER_NAMES;
  apiUrl?: string;
};

type FilterOption = {
  name: string;
  value: string;
};

interface IFilter {
  slug: FILTER_SLUGS;
  displayName: string;
  revalidateOnChange: boolean;
  dependency?: DependencyType;
}

interface ISelectFilter extends IFilter {
  type: "select" | "checkbox";
  options: FilterOption[] | [];
}

interface INumberFilter extends IFilter {
  type: "number";
  min: number;
  max: number;
}

type SingleFilterType = ISelectFilter | INumberFilter;

type FiltersType = Record<FILTER_NAMES, SingleFilterType>;

export { type SingleFilterType, type FilterValuesType, type FiltersType, FILTER_NAMES };
