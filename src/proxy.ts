import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const accessToken = req.cookies.get("access_token")?.value;
  const role = req.cookies.get("role")?.value?.toUpperCase(); // ADMIN | USER

  if (pathname.startsWith("/admin") || pathname.startsWith("/user")) {
    if (!accessToken) return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (pathname.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/user/dashboard", req.url));
  }

  if (pathname.startsWith("/user") && role !== "USER") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }
  return NextResponse.next();
}

export const config = {
matcher: ["/admin/:path*", "/user/:path*"]
};