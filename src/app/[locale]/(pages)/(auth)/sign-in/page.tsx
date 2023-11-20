import { useTranslations } from "next-intl";

import { SignInForm } from "@/features/auth/sign-in";

import { AuthSocialButton } from "@/shared/components/auth-social-button";
import { Text } from "@/shared/ui/typography";

export default function SignInPage() {
  const t = useTranslations("auth");

  return (
    <main className="page-wrapper gap-4">
      <Text className="text-4xl font-semibold">{t("sign-in")}</Text>
      <SignInForm />
      <AuthSocialButton provider="github" />
      <AuthSocialButton provider="google" />
    </main>
  );
}
