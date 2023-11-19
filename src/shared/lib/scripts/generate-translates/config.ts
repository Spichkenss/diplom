/* eslint-disable no-shadow, no-unused-vars */

// Console colors

export const colors = {
  reset: "\x1b[0m",
  fgBlack: "\x1b[30m",
  bgGreen: "\x1b[42m",
  bgRed: "\x1b[41m",
};

export enum LogType {
  success, error
}

export const translationsDirPath: string = "../../../../../public/translations";

export const localesMap = {
  ru: "Russian",
  en: "English",
} as const;

export type Language = typeof localesMap[keyof typeof localesMap];

export const sourceLanguage: Language = "Russian";
