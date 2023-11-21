import { useTranslations } from "next-intl";

import { SignInForm } from "@/features/auth/sign-in";

import { Text } from "@/shared/ui/typography";

export default function SignInPage() {
  const t = useTranslations("auth");

  return (
    <div className="flex flex-col items-center gap-4">
      <Text className="text-4xl font-semibold">{t("sign-in")}</Text>
      <SignInForm />
    </div>
  );
}
