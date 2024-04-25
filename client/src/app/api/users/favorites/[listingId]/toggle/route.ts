import { ENDPOINTS } from "@/constants";
import { validateToken } from "@/lib/auth";

export const PUT = async (
  request: Request,
  { params }: { params: { listingId: number } }
) => {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  const sessionValid = validateToken(token);
  if (!sessionValid)
    return new Response(JSON.stringify({ message: "provide access token" }), {
      status: 401,
    });

  const { listingId } = params;
  const endpoint = `${ENDPOINTS.BASE_API_USERS}/favorites/${listingId}/toggle`;

  const res = await fetch(endpoint, {
    method: "PUT",
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
