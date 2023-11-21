"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";

const brandName = {
  github: "Github",
  google: "Google"
};

const brandColor = {
  github: "bg-[#333333]",
  google: "bg-[#EA4335]"
};

type Provider = "github" | "google"

interface AuthSocialButtonProps {
  provider: Provider;
}

export const AuthSocialButton = ({ provider }: AuthSocialButtonProps) => {
  const t = useTranslations("auth");

  return (
    <Button
      type="button"
      onClick={() => signIn(provider)}
      className={cn("px-2 py-1 rounded-md flex items-center justify-center", brandColor[provider])}
    >
      <span className="text-white">
        {t("via-social")}
        &nbsp;
        {brandName[provider]}
      </span>
    </Button>
  );
};
