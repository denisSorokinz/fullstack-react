import { ZodError } from "zod";

export type AuthResponse =
  | { success: true; tokens: { accessToken: string; refreshToken: string } }
  | { success: false; message?: string; error?: ZodError };

export type AuthJWTPayload = {
  id: number;
  email: string;
  exp: number;
  iat: number;
};
