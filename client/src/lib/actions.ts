"use server";

import { AuthFormData } from "@/components/AuthForm";
import { AUTH_OPERATIONS, ENDPOINTS } from "@/constants";
import { AuthJWTPayload, AuthResponse } from "@/types/http";
import { decode, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { ExcludeLens } from "./lenses";
import { AuthStoreState } from "@/stores/auth";
import { getSessionData, refreshAccessToken, validateToken } from "./auth";
import { NextResponse } from "next/server";

const requestInit: RequestInit = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  cache: "no-cache",
};

const authenticate = async ({
  type,
  email,
  password,
}: {
  type: AUTH_OPERATIONS;
} & AuthFormData) => {
  const res = await fetch(ENDPOINTS.AUTH.NEXT_BASE_AUTH, {
    ...requestInit,
    body: JSON.stringify({ type, email, password }),
  });

  const data = (await res.json()) as AuthResponse;

  if (!data.success) return data;

  const { accessToken, refreshToken } = data.tokens;
  const cookieOptions = {
    sameSite: true,
    httpOnly: true,
  };

  const accessTokenPayload = decode(accessToken) as AuthJWTPayload;
  cookies().set("accessToken", accessToken, {
    ...cookieOptions,
    expires: accessTokenPayload.exp * 1000,
  });

  const refreshTokenPayload = decode(refreshToken) as AuthJWTPayload;
  cookies().set("refreshToken", refreshToken, {
    ...cookieOptions,
    expires: refreshTokenPayload.exp * 1000,
  });

  const user = getSessionData(accessToken);
  return { success: true, user };
};

const isAuthenticated = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  const isAuthenticated = validateToken(accessToken);

  if (!isAuthenticated) {
    const refreshToken = cookies().get("refreshToken")?.value;
    const res = await refreshAccessToken(refreshToken);

    if (!res.success) {
      return false;
    }

    const accessTokenPayload = decode(res.nextAccessToken) as AuthJWTPayload;

    cookies().set("accessToken", res.nextAccessToken, {
      expires: accessTokenPayload.exp * 1000,
    });

    return true;
  }

  return true;
};

const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");

  return { success: true };
};

export { authenticate, logout, isAuthenticated };
