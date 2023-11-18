import { useLocale } from "next-intl";

import { locales } from "@/app/config/localization/localization-config";

import { LocaleSwitcherSelect } from "./LocaleSwitcherSelect";

export const LocaleSwitcher = () => {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};
