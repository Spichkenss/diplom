import { ReactNode } from "react";
import type { Metadata } from "next";

import { montserrat } from "../config/fonts";
import Providers from "../config/providers";

import "../config/styles/globals.scss";

export const metadata: Metadata = {
  title: "Planner.io",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
