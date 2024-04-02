import jwt from 'jsonwebtoken';
import { type Request, type Response, type NextFunction } from 'express';
import { ApiRequest, AuthJWTPayload, AuthResponse, JWTRequest } from '../types/http';
import { ENDPOINTS, FILTERS_INITIAL } from '../constants';
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';
import { FILTER_NAMES, IRangeFilter } from '../types/filters';
import { decodeHtmlString, queryStringToAppliedFiltersTuple, sanitizeFilters } from '../lib/utils';

const validateRange = (filterName: FILTER_NAMES) => {
  const rules = z.coerce
    .number()
    .min((FILTERS_INITIAL[filterName] as IRangeFilter).from)
    .max((FILTERS_INITIAL[filterName] as IRangeFilter).to)
    .optional();

  return rules;
};

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
const validateQuery = (req: Request, res: Response, next: NextFunction) => {
  // parse all query params into object
  const { url: requestUrl } = req;

  const queryString = decodeHtmlString(requestUrl.split('?')[1] || '');

  console.log(queryString);
  

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

export { validateQuery };
