import { z } from 'zod';
import { FILTERS_INITIAL } from '../constants';
import { FILTER_NAMES, IRangeFilter } from '../types/filters';

const validateRange = (filterName: FILTER_NAMES) => {
  const rules = z.coerce
    .number()
    .min((FILTERS_INITIAL[filterName] as IRangeFilter).from)
    .max((FILTERS_INITIAL[filterName] as IRangeFilter).to)
    .optional();

  return rules;
};

export { validateRange };
