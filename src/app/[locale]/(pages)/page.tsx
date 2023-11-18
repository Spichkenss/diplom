import { useTranslations } from "next-intl";

import { SignedIn } from "@/features/auth/SignedIn";
import { SignedOut } from "@/features/auth/SignedOut";

import { Text } from "@/shared/ui/typography";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="page-wrapper bg-primary text-primary">
      <SignedIn>
        <Text>{t("test")}</Text>
      </SignedIn>
      <SignedOut>
        <Text>Not authed</Text>
      </SignedOut>
    </main>
  );
}
