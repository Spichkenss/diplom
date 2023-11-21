import { createElement } from "react";
import { type IconType } from "react-icons";

import { IconContextProvider } from "@/shared/ui/icon/model/Icon.context";

interface IconProps {
  icon: IconType;
  size?: string;
  color?: string;
  className?: string;
}

export const Icon = ({
  icon, size, color, className
}: IconProps) => {
  return (
    <IconContextProvider value={{ size, color, className }}>
      {createElement(icon)}
    </IconContextProvider>
  );
};
