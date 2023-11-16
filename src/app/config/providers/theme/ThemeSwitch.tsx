"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center mt-24">
      <div>
        Current theme:
        {theme}
      </div>
      <button onClick={switchTheme} type="button" className="bg-black text-white p-2 rounded">
        Theme
      </button>
    </div>
  );
};

export default ThemeSwitch;
