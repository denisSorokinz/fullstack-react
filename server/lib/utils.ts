import { FILTERS } from "../constants";
import { FILTER_NAMES } from "../types/filters";

const decodeHtmlString = (str: string) => str.replaceAll('%5B', '[').replaceAll('%5D', ']');

const queryStringToAppliedFiltersTuple = (queryString: string) => {
  let filterToValue = [] as [FILTER_NAMES, string][] | [];

  const params = queryString.split('&').map((param) => param.split('='));
  if (params && params.length > 0) {
    filterToValue = params
      .map(([paramName, value]) => {
        const filterName = Object.keys(FILTERS).find((filterName) => {
          const typedFilterName = filterName as FILTER_NAMES;
          const filter = FILTERS[typedFilterName];

          return filter.slug === paramName;
        });

        return filterName ? [filterName, value] : null;
      })
      .filter(Boolean) as [FILTER_NAMES, string][] | [];
  }

  return filterToValue;
};

export { decodeHtmlString, queryStringToAppliedFiltersTuple }
