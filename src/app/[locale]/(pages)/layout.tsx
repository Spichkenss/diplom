import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import { locales } from "@/app/config/localization/localization-config";

import { Navbar } from "@/widgets/navbar";

import { cn } from "@/shared/lib/cn";

import { montserrat } from "../../config/fonts";
import Providers from "../../config/providers";

import "../../config/styles/globals.scss";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Planner.io",
};

interface RootLayoutProps extends PropsWithChildren {
  params: Params;
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("bg-secondary", montserrat.className)}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
