"use client";

import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

import ThemeProvider from "@/app/config/providers/ui/ThemeProvider";

interface ProvidersProps extends PropsWithChildren {}

const Index = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Index;
