import { useLocale } from "next-intl";

import { localesMap } from "@/app/config/localization/localization-config";

import { LocaleSwitcherSelect } from "./LocaleSwitcherSelect";

export const LocaleSwitcher = () => {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {Object.entries(localesMap).map(([code, language]) => (
        <option key={code} value={code}>
          {language}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};
