import { type IconType } from "react-icons";
import { IoIosDesktop } from "react-icons/io";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

interface ITheme {
  value: string;
  icon: IconType;
}

export const themes: ITheme[] = [
  { value: "light", icon: IoSunnyOutline },
  { value: "dark", icon: IoMoonOutline },
  { value: "system", icon: IoIosDesktop }
];
