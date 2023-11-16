import { ComponentProps, forwardRef } from "react";

import { cn } from "@/shared/lib/cn";

import { TabsContextProvider } from "../model/Tabs.context";

interface TabsProps extends ComponentProps<"div"> {
  initialTabIndex: number;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({
    children, className, initialTabIndex, ...rest
  }: TabsProps, ref) => {
    return (
      <TabsContextProvider initialTabIndex={initialTabIndex}>
        <div className={cn("flex flex-row bg-primary p-1 rounded-md", className)} {...rest} ref={ref}>
          {children}
        </div>
      </TabsContextProvider>
    );
  },
);

Tabs.displayName = "Tabs";
