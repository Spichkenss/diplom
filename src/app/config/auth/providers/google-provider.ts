import NextAuthGoogleProvider from "next-auth/providers/google";

export const GoogleProvider = NextAuthGoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID ?? "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
});
