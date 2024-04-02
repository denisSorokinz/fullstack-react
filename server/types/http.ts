import { type Request } from 'express';
import { sanitizeFilters } from '../lib/utils';

export type ApiRequest = Request & {
  filters: ReturnType<typeof sanitizeFilters>;
};

export type AuthResponse = {
  success: boolean;
  message?: string;
  data?: any;
};

export type AuthJWTPayload = {
  id: number;
  email: string;
};

export type JWTRequest = Request & {
  cookies: {
    refreshToken?: string;
  };
  userId?: AuthJWTPayload['id'];
};
