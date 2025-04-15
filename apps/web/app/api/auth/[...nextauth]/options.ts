import GoogleProvider from "next-auth/providers/google";
import { JWT, type AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient();

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
  
  interface JWT {
    id: string;
  }
}

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/signin"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        if (!user.email) {
          return false;
        }

        const dbUser = await db.user.upsert({
          where: { 
            email: user.email 
          },
          create: {
            email: user.email,
            fullName: user.name ?? "",
          },
          update: {
            fullName: user.name ?? "",
          },
        });
        
        user.id = dbUser.id;
        
        return true;
      } catch (error) {
        console.error("Error during sign in:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
};