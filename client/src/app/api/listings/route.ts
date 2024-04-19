import { ENDPOINTS } from "@/constants";
import { validateToken } from "@/lib/auth";
import { CarListing } from "@/types/listings";

export const PUT = async (request: Request, response: Response) => {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  const sessionValid = validateToken(token);
  if (!sessionValid) {
    return Response.json(
      { success: false, message: "no access token provided" },
      { status: 401 }
    );
  }

  console.log("[route-1]");
  const editedListing = (await request.json()) as CarListing;
  console.log("[route-2]", editedListing);

  console.log(
    "[route-3]",
    `${ENDPOINTS.BASE_API_LISTINGS}/${editedListing.id}`
  );

  const res = await fetch(
    `${ENDPOINTS.BASE_API_LISTINGS}/${editedListing.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...editedListing }),
    }
  );

  const data = await res.json();
  return Response.json({ ...data }, { status: res.status });
};
