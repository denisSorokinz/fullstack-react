import { AuthJWTPayload, AuthResponse } from "@/types/http";
import { decode, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { ExcludeLens } from "./lenses";
import { AUTH_OPERATIONS, ENDPOINTS } from "@/constants";

const validateToken = (accessToken?: string) => {
  if (!accessToken) return false;

  let isTokenValid = true;
  try {
    verify(accessToken || "", process.env.JWT_SECRET);
  } catch {
    isTokenValid = false;
  }
  return isTokenValid;
};

// const getSessionData = (token: string) => {
//   const tokenPayload = decode(token);
//   if (!tokenPayload) return null;

//   const typed = tokenPayload as AuthJWTPayload;

//   const excludeProperties: Array<keyof AuthJWTPayload> = ["iat", "exp"];
//   const lens = ExcludeLens.from(excludeProperties);
//   const sessionData = lens.view(typed) as Omit<AuthJWTPayload, 'exp' | 'iat'>;

//   return { ...sessionData };
// };

const refreshAccessToken = async (
  refreshToken?: string
): Promise<
  | { success: false; message: string }
  | { success: true; nextAccessToken: string }
> => {
  if (!refreshToken) return { success: false, message: "no refresh token" };

  const res = await fetch(ENDPOINTS.AUTH.BASE_NEXT_AUTH, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
    body: JSON.stringify({ type: AUTH_OPERATIONS.REFRESH_TOKEN, refreshToken }),
  });
  const json = (await res.json()) as AuthResponse;

  if (!json.success)
    return {
      success: false,
      message: json.message || "unable to refresh token",
    };

  const { accessToken: nextAccessToken } = json.tokens;

  return { success: true, nextAccessToken };
};

export { validateToken, refreshAccessToken };
