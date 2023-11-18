import { useTranslations } from "next-intl";

import { Link } from "@/app/config/localization/localization-config";
import { Pages } from "@/app/config/pages";

import { Button } from "@/shared/ui/button";
import { Text } from "@/shared/ui/typography";

export default function HomePage() {
  const t = useTranslations("landing");

  return (
    <main className="page-wrapper center bg-primary text-primary !m-0 !p-0">
      <div className="container">
        <header className="flex flex-col items-center gap-4">
          <Text className="max-w-md text-3xl font-bold text-center">{t("slogan")}</Text>
          <Text className="max-w-xl text-base text-center font-semibold">{t("description")}</Text>
          <Button>
            <Link href={Pages.SIGNIN}>{t("get-started-btn")}</Link>
          </Button>
        </header>
      </div>
    </main>
  );
}
