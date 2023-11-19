"use strict";
/* eslint-disable no-shadow, no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceLanguage = exports.localesMap = exports.translationsDirPath = exports.LogType = exports.colors = void 0;
// Console colors
exports.colors = {
    reset: "\x1b[0m",
    fgBlack: "\x1b[30m",
    bgGreen: "\x1b[42m",
    bgRed: "\x1b[41m",
};
var LogType;
(function (LogType) {
    LogType[LogType["success"] = 0] = "success";
    LogType[LogType["error"] = 1] = "error";
})(LogType || (exports.LogType = LogType = {}));
exports.translationsDirPath = "../../../../../public/translations";
exports.localesMap = {
    ru: "Russian",
    en: "English",
};
exports.sourceLanguage = "Russian";
