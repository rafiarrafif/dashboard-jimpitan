import * as arctic from "arctic";

export const GoogleAuth = new arctic.Google(
  process.env.AUTH_GOOGLE_ID!,
  process.env.AUTH_GOOGLE_SECRET!,
  process.env.AUTH_GOOGLE_CALLBACK!
);
