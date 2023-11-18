import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales: Readonly<string[]> = [
  "ru",
  "en",
] as const;

export const {
  Link, redirect, usePathname, useRouter,
} = createSharedPathnamesNavigation({ locales });
