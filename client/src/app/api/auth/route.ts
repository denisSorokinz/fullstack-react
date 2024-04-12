import { AuthResponse } from "@/types/http";
import { AUTH_OPERATIONS, ENDPOINTS } from "@/constants";
import { cookies } from "next/headers";

const requestInit: RequestInit = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  cache: "no-cache",
};

export async function GET(request: Request) {
  console.log({ testCookie: cookies().get("accessToken")?.value });

  return new Response("ok");
}

export async function POST(request: Request) {
  const { type, email, password, refreshToken } = (await request.json()) as {
    type: AUTH_OPERATIONS;
    email?: string;
    password?: string;
    refreshToken?: string;
  };

  const isSupportedOperation = Object.values(AUTH_OPERATIONS).includes(type);
  if (!isSupportedOperation || type === AUTH_OPERATIONS.LOGOUT)
    return Response.json(
      { success: false, message: "invalid operation type" },
      { status: 400 }
    );

  let requestBody = {};
  if (type === AUTH_OPERATIONS.LOGIN || type === AUTH_OPERATIONS.SIGN_UP)
    requestBody = { email, password };
  if (type === AUTH_OPERATIONS.REFRESH_TOKEN) requestBody = { refreshToken };

  const endpoint = ENDPOINTS.AUTH[type];

  const res = await fetch(endpoint, {
    ...requestInit,
    body: JSON.stringify(requestBody),
  });

  const data = (await res.json()) as AuthResponse;

  return Response.json(
    { ...data },
    {
      status: res.status,
    }
  );
}
