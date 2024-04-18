import { UnwrapPromise } from '@prisma/client/runtime/library';
import jwt from 'jsonwebtoken';
import { type Request, type Response, type NextFunction } from 'express';
import { ApiRequest, AuthJWTPayload, AuthResponse, JWTRequest } from '../types/http';
import { ENDPOINTS, FILTERS_INITIAL } from '../constants';
import { validateRequest } from 'zod-express-middleware';
import { ZodAny, ZodNumber, ZodOptional, ZodString, ZodType, z } from 'zod';
import { FILTER_NAMES, IRangeFilter } from '../types/filters';
import { decodeHtmlString, queryStringToAppliedFiltersTuple, sanitizeFilters } from '../lib/utils';
import { Prisma } from '@prisma/client';
import { ListingType } from '../types/data';
import { CarApiOperations, CarApiResponse } from '../routers/api/cars';
import { validateRange } from '../lib/filters';

// const schema = z.object({
//   [FILTERS_INITIAL.BRAND.slug]: z.coerce.number().optional(),
//   [FILTERS_INITIAL.MODEL.slug]: z.coerce.number().optional(),
//   ...validateRange(FILTER_NAMES.MILEAGE),
//   ...validateRange(FILTER_NAMES.YEAR),
//   ...validateRange(FILTER_NAMES.PRICE),
// });

const schema = {
  [FILTER_NAMES.BRAND]: z.number().optional(),
  [FILTER_NAMES.MODEL]: z.number().optional(),
  [FILTER_NAMES.MILEAGE]: validateRange(FILTER_NAMES.MILEAGE),
  [FILTER_NAMES.YEAR]: validateRange(FILTER_NAMES.YEAR),
  [FILTER_NAMES.PRICE]: validateRange(FILTER_NAMES.PRICE),
} as { [k in FILTER_NAMES]: z.ZodOptional<z.ZodNumber> };

// Listings API
const validateQueryString = (req: Request, res: Response, next: NextFunction) => {
  // parse all query params into object
  const { url: requestUrl } = req;

  const queryString = decodeHtmlString(requestUrl.split('?')[1] || '');

  // exclude all un-existing values
  const tuple = queryStringToAppliedFiltersTuple(queryString);

  const appliedFilters = sanitizeFilters(FILTERS_INITIAL, tuple);

  // schema.parse(filters)
  const validFilters = appliedFilters.filter(([filterName, value]) => {
    const rules = schema[filterName];

    const isValid = rules.safeParse(value) !== undefined;
    return isValid;
  });

  (req as ApiRequest).filters = validFilters;

  // if error -> next()

  // if !error -> req.filters = filters, next()

  next();
};

const validateAuthRequest = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as { email: string; password: string };

  const schema = z.object({
    email: z.string().email('Please provide a valid email'),
    password: z.string().min(4, 'Password must be 4+ characters long'),
  });

  const parsed = schema.safeParse({ email, password });
  if (!parsed.success) {
    return res.status(400).send({ success: false, error: parsed.error } as AuthResponse);
  }

  return next();
};

const validateEditListingRequest = (req: Request, res: Response, next: NextFunction) => {
  const params = req.params as { id: string };
  const id = params.id && Number(params.id);

  if (!id) return res.status(400).send({ success: false, message: 'no id provided' } as CarApiResponse<CarApiOperations.updateListing>);

  const nextListing = req.body as Partial<UnwrapPromise<ReturnType<Prisma.ListingDelegate['findUnique']>>>;
  if (!nextListing) return res.status(400).send({ success: false, message: 'no input provided' } as CarApiResponse<CarApiOperations.updateListing>);

  const schema = z.object({
    brandId: z.number().optional(),
    modelId: z.number().optional(),
    description: z.string().optional(),
    year: validateRange(FILTER_NAMES.YEAR),
    mileage: validateRange(FILTER_NAMES.MILEAGE),
    price: validateRange(FILTER_NAMES.PRICE),
  } as { [k in keyof typeof nextListing]?: ZodNumber | ZodString | ZodOptional<ZodNumber | ZodString> });

  const parsed = schema.safeParse(nextListing);
  if (!parsed.success) {
    return res.status(400).send({ success: false, error: parsed.error } as CarApiResponse<CarApiOperations.updateListing>);
  }

  return next();
};

const validateDeleteListingRequest = (req: Request, res: Response, next: NextFunction) => {
  const params = req.params as { id: string };
  const id = params.id && Number(params.id);

  if (!id) return res.status(400).send({ success: false, message: 'no id provided' } as CarApiResponse<CarApiOperations.updateListing>);

  const schema = z.number().min(0, 'id is required');

  const parsed = schema.safeParse(id);
  if (!parsed.success) {
    return res.status(400).send({ success: false, error: parsed.error } as AuthResponse);
  }

  return next();
};

const authGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) return res.status(400).json({ success: false, message: 'no access token provided' } as AuthResponse);

  try {
    const payload = jwt.verify(token, process.env['JWT_SECRET']!) as AuthJWTPayload;
    (req as any).user = { ...payload };
  } catch {
    return res.status(400).json({ success: false, message: 'invalid access token' } as AuthResponse);
  }

  return next();
};

// AUTH
// const authenticate = (req: JWTRequest, res: Response, next: NextFunction) => {
//   const accessToken = req.headers['Authorization'] || '';
//   const refreshToken = req.cookies['refreshToken'] || '';

//   if (!accessToken && !refreshToken) {
//     return res.status(401).send({ success: false, message: 'Access denied. No refresh or access token provided.' } as AuthResponse);
//   }

//   try {
//     const decoded = jwt.verify(accessToken, process.env['JWT_SECRET']!) as AuthJWTPayload;
//     req.userId = decoded.id;
//     return next();
//   } catch {
//     // refresh accessToken if refreshToken valid
//   }
// };

export { validateQueryString, validateAuthRequest, authGuard, validateEditListingRequest, validateDeleteListingRequest };
