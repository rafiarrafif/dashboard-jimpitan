import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export const middleware = async (request: NextRequest) => {
  const rootUrl = new URL("/auth/login", request.url);
  const adminUrl = new URL("/admin", request.url);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const session = await auth();
    if (!session?.user) return NextResponse.redirect(rootUrl);
    NextResponse.next();
  }

  if (pathname.startsWith("/auth")) {
    const session = await auth();
    if (session?.user) return NextResponse.redirect(adminUrl);
    NextResponse.next();
  }
};
