import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./shared/libs/database/prisma/connector";
import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      realName: string | null;
      realId: string | null;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      const collector = await prisma.collector.findUnique({
        where: { email: session.user.email ?? "" },
        select: {
          id: true,
          name: true,
        },
      });
      session.user.realName = collector?.name ?? null;
      session.user.realId = collector?.id ?? null;
      return session;
    },
  },
});
