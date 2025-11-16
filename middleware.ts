import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  // const loginUrl = new URL("/auth/login", request.url); // redirect to login page
  // const adminUrl = new URL("/admin", request.url); // redirect to admin page
  // const { pathname } = request.nextUrl;

  // // middleware for admin routes (/admin/*)
  // if (pathname.startsWith("/admin")) {
  //   const session = await auth();
  //   if (!session?.user) return NextResponse.redirect(loginUrl);
  //   NextResponse.next();
  // }

  // // middleware for auth routes (/auth/*)
  // if (pathname.startsWith("/auth")) {
  //   const session = await auth();
  //   if (session?.user) return NextResponse.redirect(adminUrl);
  //   NextResponse.next();
  // }

  NextResponse.next();
};
