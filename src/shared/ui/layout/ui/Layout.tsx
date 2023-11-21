import { type PropsWithChildren } from "react";

import { Navbar } from "@/widgets/navbar";

interface LayoutProps extends PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">
        {children}
      </main>
    </>
  );
};
