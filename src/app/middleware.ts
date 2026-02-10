import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const accessToken = req.cookies.get("access_token")?.value;
  const role = req.cookies.get("role")?.value; // ADMIN | AGENT

  // ✅ protect admin + agent pages
  if (pathname.startsWith("/admin") || pathname.startsWith("/agent")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // ✅ role based route protection
  console.log("ROLE =>", role);
  console.log("PATHNAME =>", pathname);
  console.log("ACCESS TOKEN =>", accessToken);

  if (pathname.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/agent/dashboard", req.url));
  }

  if (pathname.startsWith("/agent") && role !== "AGENT") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/agent/:path*"],
};
