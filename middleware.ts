import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    console.log("env tersimpan: ", process.env.AUTH_SECRET);
    console.log("hasil token: ", token);
    const target = new URL("/auth/login", req.url);
    const target2 = new URL("/debug", req.url);
    if (!token) return NextResponse.redirect(target);
    if (!token.user.realId) return NextResponse.redirect(target2);
    return NextResponse.next();
  }

  return NextResponse.next();
}
