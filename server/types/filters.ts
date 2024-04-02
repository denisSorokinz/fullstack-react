import { Prisma } from '@prisma/client';

enum FILTER_NAMES {
  BRAND = 'BRAND',
  MODEL = 'MODEL',
  YEAR = 'YEAR',
  PRICE = 'PRICE',
  MILEAGE = 'MILEAGE',
}

type FilterOption = {
  id: number;
  name: string;
};

interface IFilter {
  slug: string;
  displayName: string;
  _queries: {
    [k in Prisma.ModelName]?: {
      columnName: Prisma.ListingScalarFieldEnum;
    };
  };
}

interface ISelectFilter extends IFilter {
  type: 'select' | 'checkbox';
  options: FilterOption[];
  dependency?: FILTER_NAMES,
  _populateFromDb: {
    model: Prisma.TypeMap['meta']['modelProps'];
    dbJoinColumn?: 'brandId' | 'modelId'; // DB foreign keys
  };
}

interface IRangeFilter extends IFilter {
  type: 'range';
  from: number;
  to: number;
}
enum RANGE_MODIFIERS {
  FROM = 'FROM',
  TO = 'TO',
}

type FilterType = ISelectFilter | IRangeFilter;

export { FILTER_NAMES, type FilterOption, type FilterType, ISelectFilter, IRangeFilter, RANGE_MODIFIERS };
