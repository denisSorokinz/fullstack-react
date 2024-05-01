"use server";

import { UserRole } from "./../../../server/types/http";
import { AuthFormData } from "@/components/forms/AuthForm";
import { AUTH_OPERATIONS, BASE_NEXT_URL, ENDPOINTS } from "@/constants";
import {
  AuthJWTPayload,
  AuthResponse,
  CarApiOperations,
  CarApiResponse,
} from "@/types/http";
import { decode, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { ExcludeLens } from "./lenses";
import { AuthStoreState } from "@/stores/auth";
import { refreshAccessToken, validateToken } from "./auth";
import { NextResponse } from "next/server";
import { CarListing } from "@/types/listings";
import { sleepMs } from "./utils";

// AUTH
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
  const res = await fetch(ENDPOINTS.AUTH.BASE_NEXT_AUTH, {
    ...requestInit,
    body: JSON.stringify({ type, email, password }),
  });

  const data = (await res.json()) as AuthResponse;

  if (!data.success)
    return {
      success: false,
      message: data.message || data.error?.message || `Unable to authenticate`,
    };

  const { accessToken, refreshToken } = data.tokens;
  const cookieOptions = {
    sameSite: true,
    httpOnly: true,
  };

  const session = decode(accessToken) as AuthJWTPayload;
  console.log("authenticated-user", session);
  cookies().set("accessToken", accessToken, {
    ...cookieOptions,
    expires: session.exp * 1000,
  });

  const refreshTokenPayload = decode(refreshToken) as AuthJWTPayload;
  cookies().set("refreshToken", refreshToken, {
    ...cookieOptions,
    expires: refreshTokenPayload.exp * 1000,
  });

  // const user = getSessionData(accessToken);
  return { success: true, user: session };
};

// const isAuthenticated = () => {
//   const accessToken = cookies().get("accessToken")?.value;
//   const isAuthenticated = validateToken(accessToken);

//   return isAuthenticated
// }

const getSession = () => {
  const accessToken = cookies().get("accessToken")?.value;
  const isAuthenticated = validateToken(accessToken);

  if (!isAuthenticated) return null;

  const session = decode(accessToken!) as AuthJWTPayload;
  return session;
};

const validateAndRefreshSession = async () => {
  const session = getSession();
  if (!session) {
    console.log("[session-invalid]");
    const refreshToken = cookies().get("refreshToken")?.value;
    const res = await refreshAccessToken(refreshToken);

    if (!res.success) return null;

    const session = decode(res.nextAccessToken) as AuthJWTPayload;
    console.log("[session-refreshed]", session);

    cookies().set("accessToken", res.nextAccessToken, {
      expires: session.exp * 1000,
    });

    return session;
  }

  return session;
};

const roleToAccessLevel: { [k in UserRole]: number } = {
  USER: 1,
  ADMIN: 2,
};
const pageViewPermissions: { [k: string]: UserRole } = {
  "/dashboard/*": "USER",
  "/dashboard/edit": "ADMIN",
};

const isAuthorizedFor = async ({
  shouldRefreshSession = false,
  ...args
}: { shouldRefreshSession?: boolean } & (
  | {
      action: "view:page";
      payload: keyof typeof pageViewPermissions | string;
    }
  | { action: "edit:listing" }
)): Promise<{ isAuthorized: boolean; message?: string }> => {
  let result = { isAuthorized: false };

  if (args.action === "view:page") {
    const path = args.payload;
    const authorizedRole = pageViewPermissions[path];
    const requiredAccessLevel = roleToAccessLevel[authorizedRole];

    if (requiredAccessLevel === undefined) return { isAuthorized: true };

    const session = shouldRefreshSession
      ? await validateAndRefreshSession()
      : getSession();

    if (!session)
      return { isAuthorized: false, message: "Please authenticate" };

    const accessLevel = roleToAccessLevel[session.role];
    if (accessLevel >= requiredAccessLevel) result = { isAuthorized: true };
  }

  if (args.action === "edit:listing") {
    const sessionValid = await validateAndRefreshSession();
    if (!sessionValid) return { isAuthorized: false, message: "no access" };
  }

  return result;
};

const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");

  return { success: true };
};

const protectedAction = <T extends <R>(...args: any[]) => any>(fn: T) => {
  return async (
    ...args: Parameters<T>
  ): Promise<Awaited<ReturnType<T>> | { success: false; message: string }> => {
    const session = await validateAndRefreshSession();
    if (!session) return { success: false, message: "not authorized" };

    return await fn(...args);
  };
};

// LISTINGS
const updateListing = protectedAction(
  async (edited: Pick<CarListing, "id"> & Partial<CarListing>) => {
    const token = cookies().get("accessToken")?.value;
    if (!token) return { success: false };

    const res = await fetch(`${ENDPOINTS.BASE_NEXT_LISTINGS}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...edited }),
    });
    const json =
      (await res.json()) as CarApiResponse<CarApiOperations.updateListing>;

    if (!json.success) return { ...json };

    return {
      success: true,
      listing: json.data[CarApiOperations.updateListing]!,
    };
  }
);

const deleteListing = protectedAction(async (id: CarListing["id"]) => {
  // todo
  const token = cookies().get("accessToken")?.value;
  if (!token) return { success: false };

  const res = await fetch(`${ENDPOINTS.BASE_NEXT_LISTINGS}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ id }),
  });

  return { success: res.status === 204 };
});

const toggleListingFavorites = async (listingId: number) => {
  const token = cookies().get("accessToken")?.value;
  if (!token) return { success: false };

  const res = await fetch(
    `${BASE_NEXT_URL}/users/favorites/${listingId}/toggle`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-cache",
    }
  );
  if (res.status !== 200) return { success: false, message: await res.text() };

  const data = (await res.json()) as {
    listingId: number;
    favoriteCount: number;
    isFavorited: boolean;
  };
  return { success: true, data };
};

const getAuthorizedResource = async <T>(url: string) => {
  const session = getSession();
  if (!session) return { success: false };

  const token = cookies().get("accessToken")!.value;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-cache",
  });
  if (res.status !== 200) return { success: false, message: await res.text() };

  const data = (await res.json()) as T;
  return { success: true, data };
};

// const getFavorites = async () => {
//   const endpoint = `${BASE_NEXT_URL}/users/favorites`;

//   const res = await fetch(endpoint);
//   if (res.status !== 200) return { success: false, message: await res.text() };

//   const data = (await res.json()) as { favorites: Array<CarListing["id"]> };
//   console.log('[getFavorites]', { data });

//   return { success: true, favorites: data.favorites };
// };

export {
  authenticate,
  logout,
  validateAndRefreshSession,
  isAuthorizedFor,
  getAuthorizedResource,
  updateListing,
  deleteListing,
  toggleListingFavorites,
};
