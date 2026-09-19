import { NextResponse } from "next/server";
import { INSTAGRAM_DESTINATION_URL } from "../config";

/**
 * Final hop (mirrors visit.clickylo.co/<slug>/go?l=<id>):
 * a plain 302 to the real destination.
 */
export function GET() {
  return NextResponse.redirect(INSTAGRAM_DESTINATION_URL, {
    status: 302,
    headers: { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" },
  });
}
