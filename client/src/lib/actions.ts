"use server";

import { AuthFormData } from "@/components/AuthForm";
import { AUTH_OPERATIONS, ENDPOINTS } from "@/constants";
import { AuthJWTPayload, AuthResponse } from "@/types/http";
import { decode } from "jsonwebtoken";
import { cookies } from "next/headers";

const authenticate = async ({
  type,
  email,
  password,
}: {
  type: AUTH_OPERATIONS;
} & AuthFormData) => {
  const endpoint = `http://localhost:3000/api/auth`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, email, password }),
    cache: "no-cache",
  });

  const data = (await res.json()) as AuthResponse;
  if (data.success) {
    const payload = decode(data.tokens.refreshToken) as AuthJWTPayload;
    cookies().set("refreshToken", data.tokens.refreshToken, {
      httpOnly: true,
      sameSite: true,
      expires: payload.exp * 1000,
    });
  }

  return data;

  // return Response.json(
  //   { ...data },
  //   {
  //     status: res.status,
  //     headers: {
  //       Authorization: data.success ? `Bearer ${data.tokens.accessToken}` : ``,
  //     },
  //   }
  // );
};

export { authenticate };
