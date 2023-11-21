import bcrypt from "bcrypt";
import NextAuthCredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/shared/lib/prisma/client";

export const CredentialsProvider = NextAuthCredentialsProvider({
  type: "credentials",
  name: "credentials",
  credentials: {
    email: { label: "email", type: "email" },
    password: { label: "password", type: "password" }
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }
    const existingUser = await prisma.user.findUnique({
      where: { email: credentials.email }
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    const passwordMatched = await bcrypt.compare(
      credentials.password,
      existingUser.hashedPassword || ""
    );

    if (!passwordMatched) {
      return null;
    }

    return existingUser;
  }
});
