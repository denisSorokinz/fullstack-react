import jwt from 'jsonwebtoken';
import { type Request, type Response, type NextFunction } from 'express';
import { AuthJWTPayload, AuthResponse, JWTRequest } from '../types/express';

const authenticate = (req: JWTRequest, res: Response, next: NextFunction) => {
  const accessToken = req.headers['Authorization'] || '';
  const refreshToken = req.cookies['refreshToken'] || '';

  if (!accessToken && !refreshToken) {
    return res.status(401).send({ success: false, message: 'Access denied. No refresh or access token provided.' } as AuthResponse);
  }

  try {
    const decoded = jwt.verify(accessToken, process.env['JWT_SECRET']!) as AuthJWTPayload;
    req.userId = decoded.id;
    return next();
  } catch {
    // refresh accessToken if refreshToken valid
  }
};
