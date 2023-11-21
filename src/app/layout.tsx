import { type PropsWithChildren } from "react";

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
