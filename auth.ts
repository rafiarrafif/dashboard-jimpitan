import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./shared/libs/database/prisma/connector";
import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "./auth.config";

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
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const collector = await prisma.collector.findUnique({
          where: { email: user.email ?? "" },
          select: {
            id: true,
            name: true,
          },
        });

        token.realId = collector?.id ?? null;
        token.realName = collector?.name ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.realId = (token?.realId as string) ?? null;
      session.user.realName = (token?.realName as string) ?? null;
      return session;
    },
  },
  ...authConfig,
});
