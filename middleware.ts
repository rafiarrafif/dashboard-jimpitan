import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const loginUrl = new URL("/auth/login", req.url);
  const adminUrl = new URL("/admin", req.url);
  const blockedUrl = new URL("/auth/blocked", req.url);

  // Route to admin page (only authorized account)
  if (pathname.startsWith("/admin")) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!token) return NextResponse.redirect(loginUrl);
    if (!token.realId) return NextResponse.redirect(blockedUrl);
    return NextResponse.next();
  }

  // Route to account blocked page (only login user without realId)
  if (pathname.startsWith("/auth/blocked")) {
    if (!token) return NextResponse.redirect(loginUrl);
    if (token?.realId) return NextResponse.redirect(adminUrl);
    return NextResponse.next();
  }

  // Route to auth login page (only unauthenticated user)
  if (pathname.startsWith("/auth/login")) {
    if (token) return NextResponse.redirect(adminUrl);
    NextResponse.next();
  }

  return NextResponse.next();
}
