import { ComponentProps, forwardRef } from "react";

import { cn } from "@/shared/lib/cn";

import { TabsContextProvider } from "../model/Tabs.context";

interface TabsProps extends ComponentProps<"div"> {}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, ...rest }: TabsProps, ref) => {
    return (
      <TabsContextProvider>
        <div className={cn("flex flex-row bg-secondary p-1 rounded", className)} {...rest} ref={ref}>
          {children}
        </div>
      </TabsContextProvider>
    );
  },
);

Tabs.displayName = "Tabs";
