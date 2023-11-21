import { useTranslations } from "next-intl";

import { Link } from "@/app/config/localization/localization-config";
import { Pages } from "@/app/config/pages";

import { Button } from "@/shared/ui/button";
import { Text } from "@/shared/ui/typography";

export default function HomePage() {
  const t = useTranslations("landing");

  return (
    <div className="container">
      <header className="flex flex-col items-center gap-4">
        <Text className="max-w-md text-center text-3xl font-bold">{t("slogan")}</Text>
        <Text className="max-w-xl text-center text-base font-semibold">{t("description")}</Text>
        <Button className="mt-6 max-w-[140px]">
          <Link href={Pages.SIGNUP}>{t("get-started-btn")}</Link>
        </Button>
      </header>
    </div>

  );
}
