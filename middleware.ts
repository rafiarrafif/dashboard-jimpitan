import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export const middleware = async (request: NextRequest) => {
  const loginUrl = new URL("/auth/login", request.url); // redirect to login page
  const adminUrl = new URL("/admin", request.url); // redirect to admin page
  const { pathname } = request.nextUrl;
  const session = getSessionCookie(request);

  // middleware for admin routes (/admin/*)
  if (pathname.startsWith("/admin")) {
    if (!session) return NextResponse.redirect(loginUrl);
    NextResponse.next();
  }

  // middleware for auth routes (/auth/*)
  if (pathname.startsWith("/auth")) {
    if (session) return NextResponse.redirect(adminUrl);
    NextResponse.next();
  }

  NextResponse.next();
};
