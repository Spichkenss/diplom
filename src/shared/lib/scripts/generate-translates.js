/* eslint-disable */

const fs = require("fs");
const path = require("path");
const Reverso = require("reverso-api");

const reverso = new Reverso();

// Конфиг
const sourceFilePath = path.join(__dirname, "../../../../", "translations", "ru.json"); // Путь до файла-источника
const outputFolderPath = path.join(__dirname, "../../../../", "translations"); // Путь до папки для сохранения переводов

const getSourceObject = () => {
  const file = fs.readFileSync(sourceFilePath);
  return JSON.parse(file);
};

async function translateObject(object) {
  const translatedObject = {};

  for (const key in object) {
    if (typeof object[key] === "object") {
      translatedObject[key] = await translateObject(object[key]);
    } else {
      const { translations } = await reverso.getTranslation(
        object[key],
        "russian",
        "english",
        (err) => {
          if (err) throw new Error(err.message);
        },
      );
      translatedObject[key] = translations[0];
    }
  }
  return translatedObject;
}

const translations = getSourceObject();

translateObject(translations)
  .then((res) => {
    fs.writeFileSync(path.join(outputFolderPath, `en.json`), JSON.stringify(res, null, 2))
  });
