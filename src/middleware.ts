import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import cookies from "@/lib/cookies";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/profile")) {
    const isUser = cookies.checkUser();
    if (!isUser) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/venues/new/:path*"],
};
