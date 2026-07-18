import { NextResponse } from "next/server";

// This endpoint has been disabled for security reasons.
// One-time DB repair scripts should never be exposed as public API routes.
export async function GET() {
  return NextResponse.json({ error: "Not Found" }, { status: 404 });
}
