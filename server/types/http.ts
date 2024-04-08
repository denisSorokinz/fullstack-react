import { type Request } from 'express';
import { sanitizeFilters } from '../lib/utils';
import { ZodError } from 'zod';

export type ApiRequest = Request & {
  filters: ReturnType<typeof sanitizeFilters>;
};

export type AuthResponse = {
  success: boolean;
  message?: string;
  tokens?: { accessToken: string; refreshToken: string };
  error?: ZodError;
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
