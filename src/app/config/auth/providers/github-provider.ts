import NextAuthGitHubProvider from "next-auth/providers/github";

export const GitHubProvider = NextAuthGitHubProvider({
  name: "github",
  clientId: process.env.GITHUB_ID ?? "",
  clientSecret: process.env.GITHUB_SECRET ?? ""
});
