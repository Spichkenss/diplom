import { type PropsWithChildren } from "react";

import { AuthSocialButton } from "@/shared/components/auth-social-button";

interface AuthLayoutProps extends PropsWithChildren {

}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex w-[300px] max-w-xl  flex-col">
      {children}
      <hr className="my-6 h-px w-full border-0 bg-secondary-accent" />
      <div className="flex  flex-col gap-4">
        <AuthSocialButton provider="github" />
        <AuthSocialButton provider="google" />
      </div>
    </div>

  );
}
