import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import { Navbar } from "@/widgets/navbar";

import { cn } from "@/shared/lib/cn";

import { montserrat } from "../../config/fonts";
import Providers from "../../config/providers";

import "../../config/styles/globals.scss";

export const metadata: Metadata = {
  title: "Planner.io",
};

interface LocaleLayoutProps extends PropsWithChildren {
  params: {
    locale: string
  };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`@/../public/translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("bg-secondary", montserrat.className)}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
