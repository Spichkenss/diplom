import { PrismaAdapter } from "@auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";

import prisma from "@/shared/lib/prisma/client";

import { CredentialsProvider } from "./providers/credentials-provider";
import { GitHubProvider } from "./providers/github-provider";
import { GoogleProvider } from "./providers/google-provider";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/sign-in"
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider,
    GoogleProvider,
    CredentialsProvider
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    }
  }
};
