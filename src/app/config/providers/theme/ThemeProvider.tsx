import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
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
