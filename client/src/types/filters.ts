import { FILTER_NAMES, FILTER_SLUGS } from "../constants";

type FilterValuesType = { [k in FILTER_SLUGS]?: number } & {
  [k in string]: number;
};

type FilterOption = {
  id: number;
  name: string;
};

interface IFilter {
  slug: FILTER_SLUGS;
  displayName: string;
}

interface ISelectFilter extends IFilter {
  type: "select" | "checkbox";
  options: FilterOption[];
  dependency?: FILTER_NAMES;
}

interface IRangeFilter extends IFilter {
  type: "range";
  [RANGE_MODIFIERS.FROM]: number;
  [RANGE_MODIFIERS.TO]: number;
}
enum RANGE_MODIFIERS {
  FROM = "from",
  TO = "to",
}

type SingleFilterType = ISelectFilter | IRangeFilter;

type FiltersType = Record<FILTER_NAMES, SingleFilterType>;

export {
  type SingleFilterType,
  type FilterValuesType,
  type FiltersType,
  type ISelectFilter,
  type IRangeFilter,
  FILTER_NAMES,
  RANGE_MODIFIERS,
};
