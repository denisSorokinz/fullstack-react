import jwt from 'jsonwebtoken';
import { type Request, type Response, type NextFunction } from 'express';
import { AuthJWTPayload, AuthResponse, JWTRequest } from '../types/http';
import { ENDPOINTS, FILTERS_INITIAL } from '../constants';
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';
import { IRangeFilter } from '../types/filters';

// Listings API
const validateQuery = (req: Request, res: Response, next: NextFunction) => {
  const cb = validateRequest({
    query: z.object({
      [FILTERS_INITIAL.BRAND.slug]: z.coerce.number().optional(),
      [FILTERS_INITIAL.MODEL.slug]: z.coerce.number().optional(),
      [FILTERS_INITIAL.MILEAGE.slug]: z.coerce
        .number()
        .min((FILTERS_INITIAL.MILEAGE as IRangeFilter).from)
        .max((FILTERS_INITIAL.MILEAGE as IRangeFilter).to)
        .optional(),
      [FILTERS_INITIAL.YEAR.slug]: z.coerce
        .number()
        .min((FILTERS_INITIAL.YEAR as IRangeFilter).from)
        .max((FILTERS_INITIAL.YEAR as IRangeFilter).to)
        .optional(),
      [FILTERS_INITIAL.PRICE.slug]: z.coerce
        .number()
        .min((FILTERS_INITIAL.PRICE as IRangeFilter).from)
        .max((FILTERS_INITIAL.PRICE as IRangeFilter).to)
        .optional(),
    }),
  });

  return cb(req as any, res, next);
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
