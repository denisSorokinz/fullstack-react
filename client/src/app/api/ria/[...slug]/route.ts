import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { slug: string[] } }) {
  const url = new URL(req.url);
  const path = url.pathname.replace("/api/ria/", "");
  const query = new URLSearchParams(url.search);
  query.append("api_key", process.env.API_KEY)

  console.log(`fetching ${process.env.API_URL}/${path}?${query}`)
  const r = await fetch(`${process.env.API_URL}/${path}?${query}`);
  const data = await r.json();

  return NextResponse.json(data);
}
