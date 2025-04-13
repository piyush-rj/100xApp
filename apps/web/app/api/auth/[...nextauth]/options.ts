
import GoogleProvider from "next-auth/providers/google";
import { type AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client"


const db = new PrismaClient();

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null
    }
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      await db.user.upsert({
        where: { email: user.email },
        create: {
          email: user.email,
          fullName: user.name ?? "",
        },
        update: {
          fullName: user.name ?? "",
        },
      });

      return true;
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
};
