import { useTranslations } from "next-intl";

import { SignUpForm } from "@/features/auth/sign-ui";

import { Text } from "@/shared/ui/typography";

export default function SignUpPage() {
  const t = useTranslations("auth");

  return (
    <div className="flex flex-col items-center gap-4">
      <Text className="text-4xl font-semibold">{t("sign-up")}</Text>
      <SignUpForm />
    </div>
  );
}
