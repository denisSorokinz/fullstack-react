import { refreshAccessToken, validateToken } from "@/lib/auth";
import { decode } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { AuthJWTPayload } from "./types/http";

const protectedRoutes = ["/dashboard"];

export default async function middleware(request: NextRequest) {
  if (!protectedRoutes.includes(request.nextUrl.pathname)) return;

  const accessToken = request.cookies.get("accessToken")?.value;
  const isAuthenticated = validateToken(accessToken);

  console.log("[middleware]", { accessToken, isAuthenticated });

  if (!isAuthenticated) {
    const refreshToken = request.cookies.get("refreshToken")?.value;
    const res = await refreshAccessToken(refreshToken);

    if (!res.success) {
      return NextResponse.redirect(
        new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/?auth=logout`)
      );
    }

    const accessTokenPayload = decode(res.nextAccessToken) as AuthJWTPayload;

    const response = NextResponse.next();
    response.cookies.set("accessToken", res.nextAccessToken, {
      expires: accessTokenPayload.exp * 1000,
    });

    return response;
  }
}

export const config = {
  matcher: "/unexisting/",
};

// export const config = {
//   matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
// };
