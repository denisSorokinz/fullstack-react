import { type Request } from 'express';
import { sanitizeFilters } from '../lib/utils';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

export type UserRole = NonNullable<Prisma.UserCreateInput['role']>

export type ApiRequest = Request & {
  filters: ReturnType<typeof sanitizeFilters>;
  user?: AuthJWTPayload
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
  role: UserRole
};

export type JWTRequest = Request & {
  cookies: {
    refreshToken?: string;
  };
  userId?: AuthJWTPayload['id'];
};
