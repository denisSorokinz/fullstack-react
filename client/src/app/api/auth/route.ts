import { cookies } from "next/headers";
import { decode } from "jsonwebtoken";
import { AuthJWTPayload, AuthResponse } from "@/types/http";
import { AUTH_OPERATIONS, ENDPOINTS } from "@/constants";

export async function POST(request: Request) {
  const { type, email, password } = (await request.json()) as {
    type: AUTH_OPERATIONS;
    email: string;
    password: string;
  };

  const endpoint = ENDPOINTS.AUTH[type];
  console.log({ apiRouteEndPoint: endpoint });

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = (await res.json()) as AuthResponse;

  // if (data.success) {
  //   const payload = decode(data.tokens.refreshToken) as AuthJWTPayload;
  //   cookies().set("refreshToken", data.tokens.refreshToken, {
  //     httpOnly: true,
  //     sameSite: true,
  //     expires: payload.exp * 1000,
  //   });
  // }

  return Response.json(
    { ...data },
    {
      status: res.status,
      headers: {
        Authorization: data.success ? `Bearer ${data.tokens.accessToken}` : ``,
      },
    }
  );
}
