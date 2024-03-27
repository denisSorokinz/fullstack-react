import { Prisma } from '@prisma/client';

enum FILTERS_ENUM {
  BRAND = 'BRAND',
  MODEL = 'MODEL',
  YEAR = 'YEAR',
  PRICE = 'PRICE',
  MILEAGE = 'MILEAGE',
}

type FilterOption = {
  name: string;
  value: string;
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
  options: [];
  _populateFromDb: {
    model: Prisma.TypeMap['meta']['modelProps'];
    dependency?: {
      name: FILTERS_ENUM;
      dbJoinColumn: 'brandId' | 'modelId'; // DB foreign keys
    };
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

export { FILTERS_ENUM, type FilterOption, type FilterType, ISelectFilter, IRangeFilter, RANGE_MODIFIERS };
