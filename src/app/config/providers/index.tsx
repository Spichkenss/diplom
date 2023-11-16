"use client";

import { PropsWithChildren } from "react";

import ThemeProvider from "./theme/ThemeProvider";

interface ProvidersProps extends PropsWithChildren {}

const Index = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Index;
