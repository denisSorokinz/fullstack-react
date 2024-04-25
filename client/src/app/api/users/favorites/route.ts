import { ENDPOINTS } from "@/constants";
import { validateToken } from "@/lib/auth";

export const GET = async (request: Request) => {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  const sessionValid = validateToken(token);
  if (!sessionValid)
    return new Response(JSON.stringify({ message: "provide access token" }), {
      status: 401,
    });

  const endpoint = `${ENDPOINTS.BASE_API_USERS}/favorites`;

  const res = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-cache'
  });
  if (res.status !== 200)
    return Response.json(
      { message: await res.text() },
      {
        status: res.status,
      }
    );

  return Response.json({ ...(await res.json()) }, { status: 200 });
};
