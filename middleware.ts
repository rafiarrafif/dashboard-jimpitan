import { NextResponse } from "next/server";
// import { auth } from "./auth";

// export default auth((req) => {
//   const { pathname } = req.nextUrl;

//   if (!req.auth && pathname.startsWith("/admin")) {
//     const newUrl = new URL("/auth/login", req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }

//   NextResponse.next();
// });

export const middleware = () => {
  NextResponse.next();
};
