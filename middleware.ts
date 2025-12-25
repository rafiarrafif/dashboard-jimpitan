import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!token) return NextResponse.redirect(new URL("/auth/login", req.url));
    if (!token.realId) return NextResponse.redirect(new URL("/debug", req.url));
    return NextResponse.next();
  }

  return NextResponse.next();
}
