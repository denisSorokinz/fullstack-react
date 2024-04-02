import { FILTERS_INITIAL, FiltersType } from '../constants';
import { FILTER_NAMES, ISelectFilter, RANGE_MODIFIERS } from '../types/filters';
import { AbstractObject } from '../types/utilities';

const decodeHtmlString = (str: string) => str.replaceAll('%5B', '[').replaceAll('%5D', ']');

const queryStringToAppliedFiltersTuple = (queryString: string) => {
  let filterToValue = [] as [FILTER_NAMES, number, RANGE_MODIFIERS | null][];

  const params = queryString.split('&').map((param) => param.split('='));
  if (params && params.length > 0) {
    filterToValue = params
      .map(([paramName, value]) => {
        let tParamName = paramName!;
        let tValue = value!;

        let rangeModifier = null;
        if (tParamName.includes('-from')) {
          rangeModifier = RANGE_MODIFIERS.FROM;
          tParamName = tParamName.replace('-from', '');
        }
        if (tParamName.includes('-to')) {
          rangeModifier = RANGE_MODIFIERS.TO;
          tParamName = tParamName.replace('-to', '');
        }

        const filterName = Object.keys(FILTERS_INITIAL).find((filterName) => {
          const typedFilterName = filterName as FILTER_NAMES;
          const filter = FILTERS_INITIAL[typedFilterName];

          return filter.slug === tParamName;
        }) as keyof typeof FILTERS_INITIAL;

        if (!filterName) return null;

        if (FILTERS_INITIAL[filterName].type === 'range') return rangeModifier ? [filterName, +tValue, rangeModifier] : null;

        return [filterName, +tValue, null];
      })
      .filter(Boolean) as typeof filterToValue;
  }

  return filterToValue;
};

const sanitizeFilters = (filters: FiltersType, appliedFilters: [FILTER_NAMES, number, RANGE_MODIFIERS | null][]): typeof appliedFilters => {
  const sanitized = [...appliedFilters];

  for (let idx in sanitized) {
    const [filterName] = sanitized[idx]!;

    if (filters[filterName].type === 'range') {
      const rangeValueIdx = appliedFilters.findIndex(([name, _, rangeModifier]) => name === filterName && rangeModifier !== null);

      if (rangeValueIdx === -1) {
        sanitized.splice(+idx, 1);
        return sanitizeFilters(filters, sanitized);
      }
    }

    if (filters[filterName].type === 'select' || filters[filterName].type === 'checkbox') {
      const filter = filters[filterName] as ISelectFilter;

      const parentFilterName = filter.dependency;
      if (!parentFilterName) continue;

      const isParentActive = !!appliedFilters.find(([name]) => name === parentFilterName);

      if (!isParentActive) {
        sanitized.splice(+idx, 1);
        return sanitizeFilters(filters, sanitized);
      }
    }
  }

  return sanitized;
};

const sanitizeObject = (obj: { [key: string]: unknown }) => {
  const res = {} as AbstractObject;

  for (let key in obj) {
    if (key.startsWith('_')) continue;

    const isObject = typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null;

    res[key] = !isObject ? obj[key] : sanitizeObject(obj[key] as AbstractObject);
  }

  return res;
};

const deepClone = <T = Object>(obj: T): T => JSON.parse(JSON.stringify(obj));

export { decodeHtmlString, queryStringToAppliedFiltersTuple, sanitizeFilters, sanitizeObject, deepClone };
