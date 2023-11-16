"use client";

import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

import { Icon } from "@/shared/ui/icon";
import { Tabs, TabTrigger } from "@/shared/ui/tabs";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Tabs>
      <TabTrigger index={0} onClick={() => setTheme("light")}>
        <Icon icon={IoSunnyOutline} size="1.2rem" color="white" />
      </TabTrigger>
      <TabTrigger index={1} onClick={() => setTheme("dark")}>
        <Icon icon={IoMoonOutline} size="1.2rem" color="white" />
      </TabTrigger>
    </Tabs>
  );
};

export default ThemeSwitch;
