"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

export const SignInButton = () => {
  const t = useTranslations("auth");

  return (
    <button type="button" onClick={() => signIn("github")}>
      {t("sign-in")}
    </button>
  );
};
