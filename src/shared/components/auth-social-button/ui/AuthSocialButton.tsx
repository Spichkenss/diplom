"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/cn";

const brandName = {
  github: "Github",
  google: "Google",
};

const brandColor = {
  github: "bg-[#333333]",
  google: "bg-[#EA4335]",
};

type Provider = "github" | "google"

interface AuthSocialButtonProps {
  provider: Provider;
}

export const AuthSocialButton = ({ provider }: AuthSocialButtonProps) => {
  const t = useTranslations("auth");

  return (
    <button
      type="button"
      onClick={() => signIn(provider, { callbackUrl: "http://localhost:3000/ru/dashboard" })}
      className={cn("px-2 py-1 rounded-md flex items-center justify-center w-[280px]", brandColor[provider])}
    >
      <span className="text-white">
        {t("via-social")}
        &nbsp;
        {brandName[provider]}
      </span>
    </button>
  );
};
