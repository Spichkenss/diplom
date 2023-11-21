"use client";

import { type PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return null;

  return (
    <NextThemeProvider
      attribute="class"
      storageKey="theme"
      disableTransitionOnChange
      enableSystem
      defaultTheme="system"
      enableColorScheme={false}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
