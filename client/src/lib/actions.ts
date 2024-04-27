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
import { getSessionData, refreshAccessToken, validateToken } from "./auth";
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

// todo: decouple into validateSession() and refreshSession
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

const roleToAccessLevel: { [k in UserRole]: number } = {
  USER: 1,
  ADMIN: 2,
};
const pageViewPermissions: { [k: string]: UserRole } = {
  "/dashboard/*": "USER",
  "/dashboard/edit": "ADMIN",
};
const isAuthorizedFor = async ({
  action,
  payload,
}: {
  action: "view:page" | "edit:listing";
  payload: keyof typeof pageViewPermissions | string;
}): Promise<{ isAuthorized: boolean; message?: string }> => {
  let result = { isAuthorized: false };

  if (action === "view:page") {
    const path = payload;
    const authorizedRole = pageViewPermissions[path];
    const requiredAccessLevel = roleToAccessLevel[authorizedRole];

    if (requiredAccessLevel === undefined) return { isAuthorized: true };

    // todo: replace w/ isAuthenticated
    const accessToken = cookies().get("accessToken")?.value || "";
    const isAuthenticated = validateToken(accessToken);

    console.log({ isAuthenticated });

    if (!isAuthenticated)
      return { isAuthorized: false, message: "Please authenticate" };

    const sessionData = getSessionData(accessToken);
    if (!sessionData)
      return { isAuthorized: false, message: "Unable to authenticate" };

    console.log({ sessionData });

    const accessLevel = roleToAccessLevel[sessionData.role];
    if (accessLevel >= requiredAccessLevel) result = { isAuthorized: true };
  }

  console.log({ forPath: payload, result });

  return result;
};

const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");

  return { success: true };
};

// LISTINGS
const updateListing = async (
  edited: Pick<CarListing, "id"> & Partial<CarListing>
) => {
  const sessionValid = await isAuthenticated();
  if (!sessionValid) return { success: false, message: "no access" };

  const token = cookies().get("accessToken")!.value;

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
};

const deleteListing = async (id: CarListing["id"]) => {
  const sessionValid = await isAuthenticated();
  if (!sessionValid) return { success: false, message: "no access" };

  const token = cookies().get("accessToken")!.value;

  const res = await fetch(`${ENDPOINTS.BASE_NEXT_LISTINGS}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ id }),
  });

  return { success: res.status === 204 };
};

const toggleListingFavorites = async (listingId: number) => {
  const sessionValid = await isAuthenticated();
  if (!sessionValid) return { success: false, message: "no access" };

  const token = cookies().get("accessToken")!.value;

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
  const token = cookies().get("accessToken")?.value;
  const sessionValid = validateToken(token);

  if (!sessionValid) return { success: false };

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-cache",
  });
  if (res.status !== 200) return { success: false, message: await res.text() };

  const data = (await res.json()) as T;
  return { success: true, data };
};

const getFavorites = async () => {
  const endpoint = `${BASE_NEXT_URL}/users/favorites`;

  const res = await getAuthorizedResource<{
    favorites: Array<CarListing["id"]>;
  }>(endpoint);

  if (!res.success) return { success: false };

  return { success: true, favorites: res.data!.favorites };
};

export {
  authenticate,
  logout,
  isAuthenticated,
  isAuthorizedFor,
  getFavorites,
  updateListing,
  deleteListing,
  toggleListingFavorites,
};
