"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Icon } from "@/shared/ui/icon";
import { Tabs, TabTrigger } from "@/shared/ui/tabs";

import { themes } from "./themes";

const getStoredThemeValue = () => {
  return localStorage.getItem("theme") || "system";
};

const ThemeSwitch = () => {
  const { setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return null;

  const initialIndex = themes.findIndex((item) => item.value === getStoredThemeValue());

  return (
    <Tabs initialTabIndex={initialIndex}>
      {themes.map(({ icon, value }, index) => (
        <TabTrigger
          key={value}
          index={index}
          onClick={() => setTheme(value)}
        >
          <Icon icon={icon} size="1.5rem" className="text-icon" />
        </TabTrigger>
      ))}
    </Tabs>
  );
};

export default ThemeSwitch;
