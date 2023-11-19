const fs = require("fs");
const path = require("path");
const readline = require("readline");
const Reverso = require("reverso-api");
const {
  colors, localesMap, LogType, sourceLanguage, translationsDirPath,
} = require("./config");

const reverso = new Reverso({ attempts: 1 });

const log = (message, type) => {
  const bgColor = {
    [LogType.error]: colors.bgRed,
    [LogType.success]: colors.bgGreen,
  };
  // eslint-disable-next-line no-console
  console.log(bgColor[type], colors.fgBlack, message, colors.reset);
};

const prompt = (welcomeText) => {
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

const setNestedValue = (obj, keys, value) => {
  const key = keys.shift();

  if (!key) {
    return value;
  }

  try {
    // eslint-disable-next-line no-param-reassign
    obj[key] = setNestedValue(obj[key] || {}, keys, value);
  } catch (err) {
    log("Cannot replace string value with object. Key is busy!", LogType.error);
    throw new Error();
  }

  return obj;
};

const addToJsonFile = (filePath, keys, value) => {
  let jsonData = {};

  if (!fs.existsSync(filePath)) {
    const emptyJson = JSON.stringify({});
    fs.writeFileSync(filePath, emptyJson, "utf-8");
  }

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    jsonData = JSON.parse(fileData);
  } catch (error) {
    log(`Error reading ${filePath}`, LogType.error);
  }

  try {
    jsonData = setNestedValue(jsonData, keys.split("."), value);
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
  } catch (error) {
    log(`Error writing ${filePath}`, LogType.error);
    throw new Error();
  }
};

const translateFromSourceLanguage = async (text, targetLanguage) => {
  const source = sourceLanguage.toLowerCase();
  const target = targetLanguage.toLowerCase();

  if (source === target) return new Promise((resolve) => { resolve(text); });

  return new Promise((resolve, reject) => {
    reverso.getTranslation(
      text,
      source,
      target,
      (error, response) => {
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

  // eslint-disable-next-line no-restricted-syntax
  for (const [locale, language] of Object.entries(localesMap)) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const translatedValue = await translateFromSourceLanguage(value, language);
      addToJsonFile(path.join(__dirname, translationsDirPath, `${locale}.json`), keys, translatedValue);
    } catch (error) {
      log(`Error translating for ${locale}`, LogType.error);
      break;
    }
  }
};

main();
