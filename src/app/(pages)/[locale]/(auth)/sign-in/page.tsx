import { useTranslations } from "next-intl";

import { Pages } from "@/app/config/pages";

import { SignInForm } from "@/features/auth/sign-in";

import { Hyperlink } from "@/shared/ui/hyperlink";
import { Text } from "@/shared/ui/typography";

export default function SignInPage() {
  const t = useTranslations("auth.sign-in");

  return (
    <div className="flex flex-col gap-4">
      <Text className="mb-4 text-center text-4xl font-bold">
        {t("title")}
      </Text>
      <SignInForm />
      <Hyperlink href={Pages.SIGNUP} className="text-center">
        {t("signup-link")}
      </Hyperlink>
    </div>
  );
}
