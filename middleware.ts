// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req) {
  // Your custom middleware logic goes here
  const { pathname } = req.nextUrl;
  const loginUrl = new URL("/auth/login", req.url);
  const adminUrl = new URL("/admin", req.url);

  if (!req.auth && pathname.startsWith("/admin"))
    return NextResponse.redirect(loginUrl);

  if (!req.auth && pathname.startsWith("/auth/blocked"))
    return NextResponse.redirect(loginUrl);

  if (req.auth && pathname.startsWith("/auth/login"))
    return NextResponse.redirect(adminUrl);

  return NextResponse.next();
});
