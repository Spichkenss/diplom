"use client";

import {
  createContext, type PropsWithChildren, useContext, useMemo, useState
} from "react";

import { type TabsContextProps } from "./Tabs.types";

const TabsContext = createContext<TabsContextProps | null>(null);

interface TabsContextProviderProps extends PropsWithChildren {
  initialTabIndex: number
}

export const TabsContextProvider = ({ children, initialTabIndex }: TabsContextProviderProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabIndex);

  const setTabIndex = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const memoizedContextValue = useMemo(() => ({ currentIndex, setTabIndex }), [currentIndex]);

  return (
    <TabsContext.Provider value={memoizedContextValue}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Cannot use tabs context outside Tabs component");

  return ctx;
};
