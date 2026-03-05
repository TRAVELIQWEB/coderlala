import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  console.log("🔵 PROXY IS WORKING!", req.nextUrl.pathname);
  console.log("🔵 Time:", new Date().toISOString());
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
