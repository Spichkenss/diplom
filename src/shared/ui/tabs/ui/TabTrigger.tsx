"use client";

import { ComponentProps, forwardRef } from "react";

import { cn } from "@/shared/lib/cn";
import { useTabsContext } from "@/shared/ui/tabs/model/Tabs.context";

interface TabTriggerProps extends Omit<ComponentProps<"button">, "onClick"> {
  index: number;
  onClick?: () => void;
}

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({
    children, className, index, onClick, ...rest
  }, ref) => {
    const { currentIndex, setTabIndex } = useTabsContext();

    const handleClick = () => {
      setTabIndex(index);
      onClick?.();
    };

    return (
      <button
        type="button"
        ref={ref}
        className={cn(
          "bg-secondary flex items-center justify-center rounded-md p-1 outline-none border-none",
          { "bg-secondary-accent": index === currentIndex },
          className,
        )}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

TabTrigger.displayName = "TabTrigger";
