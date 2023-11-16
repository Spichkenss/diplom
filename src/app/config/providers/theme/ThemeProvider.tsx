import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider
      defaultTheme="dark"
      attribute="class"
      storageKey="theme"
      disableTransitionOnChange
      enableSystem
      enableColorScheme={false}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
