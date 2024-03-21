enum FILTER_NAMES {
  CATEGORY = "CATEGORY",
  BRAND = "BRAND",
  MODEL = "MODEL",
  REGION = "REGION",
  CITY = "CITY",
}

type DependencyType = {
  filterName: FILTER_NAMES;
  apiUrl?: string;
};

type FilterOption = {
  name: string;
  value: string;
};

interface IFilter {
  slug: string;
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

type FilterType = ISelectFilter | INumberFilter;

export { FILTER_NAMES, type FilterOption, type FilterType, ISelectFilter };
