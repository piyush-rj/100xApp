import GoogleProvider from "next-auth/providers/google";
import { type AuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      fullName?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id: string;
  }
}

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signin",
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
        if (!user.email || !user.id) return false;

        const response = await fetch("http://localhost:8080/api/auth/oauth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            oauthId: user.id,
            name: user.name || "Anonymous",
            email: user.email,
            image: user.image || "",
          }),
        });

        if (!response.ok) {
          console.error("Failed to sync user with backend.");
          return false;
        }

        return true;
      } catch (err) {
        console.error("Error during signIn callback:", err);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.includes("/signin") || url.includes("/signout")
        ? url
        : `${baseUrl}/dashboard`;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
};
