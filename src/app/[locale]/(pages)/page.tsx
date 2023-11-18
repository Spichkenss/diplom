import { useTranslations } from "next-intl";

import { SignedIn } from "@/features/auth/SignedIn";
import { SignedOut } from "@/features/auth/SignedOut";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="page-wrapper bg-primary text-primary">
      <SignedIn>
        <span>{t("test")}</span>
      </SignedIn>
      <SignedOut>
        <span>Not authed</span>
      </SignedOut>
    </main>
  );
}
