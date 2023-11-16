import { PropsWithChildren } from "react";
import { IconContext } from "react-icons";

interface IconContextProviderProps extends PropsWithChildren {
  value: IconContext;
}

export const IconContextProvider = ({ children, value }: IconContextProviderProps) => {
  return (
    <IconContext.Provider value={value}>
      {children}
    </IconContext.Provider>
  );
};
