import NextAuthGitHubProvider from "next-auth/providers/github";

export const GitHubProvider = NextAuthGitHubProvider({
  clientId: process.env.GITHUB_ID ?? "",
  clientSecret: process.env.GITHUB_SECRET ?? ""
});
