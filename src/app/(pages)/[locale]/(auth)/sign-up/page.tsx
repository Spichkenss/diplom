import { useTranslations } from "next-intl";

import { Pages } from "@/app/config/pages";

import { SignUpForm } from "@/features/auth/sign-up";

import { Hyperlink } from "@/shared/ui/hyperlink";
import { Text } from "@/shared/ui/typography";

export default function SignUpPage() {
  const t = useTranslations("auth.sign-up");

  return (
    <div className="flex flex-col gap-4">
      <Text className="mb-4 text-center text-4xl font-bold">
        {t("title")}
      </Text>
      <SignUpForm />
      <Hyperlink href={Pages.SIGNIN} className="text-center">
        {t("signin-link")}
      </Hyperlink>
    </div>
  );
}
