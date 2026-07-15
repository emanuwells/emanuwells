import { NextResponse } from "next/server";
import { buildPulseResponse } from "@/lib/maia/pulse";

export const dynamic = "force-dynamic";

export async function GET() {
  const payload = await buildPulseResponse();
  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
