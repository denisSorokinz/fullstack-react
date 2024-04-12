import { Prisma } from '@prisma/client';
import { UnwrapPromise } from '@prisma/client/runtime/library';

type ListingType = UnwrapPromise<ReturnType<Prisma.ListingDelegate['findUnique']>>;
type BrandType = UnwrapPromise<ReturnType<Prisma.BrandDelegate['findUnique']>>;
type ModelType = UnwrapPromise<ReturnType<Prisma.ModelDelegate['findUnique']>>;

export { type ListingType, type BrandType, type ModelType };
