import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localesMap: Readonly<Record<string, string>> = {
  ru: "Russian",
  en: "English",
} as const;

export const locales = Object.keys(localesMap);

export const {
  Link, redirect, usePathname, useRouter,
} = createSharedPathnamesNavigation({ locales });
