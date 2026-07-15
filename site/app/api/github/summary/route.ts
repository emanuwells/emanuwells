import { NextResponse } from "next/server";
import { fetchGitHubSummary } from "@/lib/github/summary";

export const revalidate = 3600;

export async function GET() {
  const payload = await fetchGitHubSummary();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
    },
  });
}
