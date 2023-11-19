/*
 eslint-disable no-console,
 no-shadow,
 no-unused-vars,
 no-param-reassign,
 no-await-in-loop,
 no-restricted-syntax
*/

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import * as Reverso from "reverso-api";

import {
  colors, Language, localesMap, LogType, sourceLanguage, translationsDirPath,
} from "./config";

const reverso = new Reverso({ attempts: 1 });

const log = (message: string, type: LogType): void => {
  const bgColor: Record<LogType, string> = {
    [LogType.error]: colors.bgRed,
    [LogType.success]: colors.bgGreen,
  };
  console.log(bgColor[type], colors.fgBlack, message, colors.reset);
};

const prompt = (welcomeText: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(welcomeText, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const setNestedValue = (obj: any, keys: string[], value: string) => {
  const key = keys.shift();

  if (!key) {
    return value;
  }

  try {
    obj[key] = setNestedValue(obj[key] || {}, keys, value);
  } catch (err) {
    log("Cannot replace string value with object. Key is busy!", LogType.error);
    throw new Error();
  }

  return obj;
};

const addToJsonFile = (filePath: string, keys: string, value: string) => {
  let jsonData = {};

  if (!fs.existsSync(filePath)) {
    const emptyJson = JSON.stringify({});
    fs.writeFileSync(filePath, emptyJson, "utf-8");
  }

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    jsonData = JSON.parse(fileData);
  } catch (error: any) {
    log(`Error reading ${filePath}`, LogType.error);
  }

  try {
    jsonData = setNestedValue(jsonData, keys.split("."), value);
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
  } catch (error: any) {
    log(`Error writing ${filePath}`, LogType.error);
    throw new Error();
  }
};

const translateFromSourceLanguage = async (
  text: string,
  targetLanguage: Language,
): Promise<string> => {
  const source = sourceLanguage.toLowerCase();
  const target = targetLanguage.toLowerCase();

  if (source === target) return new Promise((resolve) => { resolve(text); });

  return new Promise((resolve, reject) => {
    reverso.getTranslation(
      text,
      source,
      target,
      (error: any, response: any) => {
        if (error) reject(error);
        else resolve(response.translations[0]);
      },
    );
  });
};

const main = async () => {
  log("Use dot notation for nested keys. (a.b -> {a: {b: ...}})", LogType.success);

  const keys = await prompt("• Enter keys: ");
  const value = await prompt("• Enter value: ");

  for (const [locale, language] of Object.entries(localesMap)) {
    try {
      const translatedValue = await translateFromSourceLanguage(value, language);
      addToJsonFile(path.join(__dirname, translationsDirPath, `${locale}.json`), keys, translatedValue);
    } catch (error) {
      log(`Error translating for ${locale}`, LogType.error);
      break;
    }
  }
};

main();
