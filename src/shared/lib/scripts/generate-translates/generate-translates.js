"use strict";
/* eslint-disable no-console,
 no-shadow,
 no-unused-vars,
 no-param-reassign,
 no-await-in-loop,
 no-restricted-syntax */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var Reverso = require("reverso-api");
var config_1 = require("./config");
var reverso = new Reverso({ attempts: 1 });
var log = function (message, type) {
    var _a;
    var bgColor = (_a = {},
        _a[config_1.LogType.error] = config_1.colors.bgRed,
        _a[config_1.LogType.success] = config_1.colors.bgGreen,
        _a);
    console.log(bgColor[type], config_1.colors.fgBlack, message, config_1.colors.reset);
};
var prompt = function (welcomeText) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        rl.question(welcomeText, function (answer) {
            rl.close();
            resolve(answer);
        });
    });
};
var setNestedValue = function (obj, keys, value) {
    var key = keys.shift();
    if (!key) {
        return value;
    }
    try {
        obj[key] = setNestedValue(obj[key] || {}, keys, value);
    }
    catch (err) {
        log("Cannot replace string value with object. Key is busy!", config_1.LogType.error);
        throw new Error();
    }
    return obj;
};
var addToJsonFile = function (filePath, keys, value) {
    var jsonData = {};
    if (!fs.existsSync(filePath)) {
        var emptyJson = JSON.stringify({});
        fs.writeFileSync(filePath, emptyJson, "utf-8");
    }
    try {
        var fileData = fs.readFileSync(filePath, "utf-8");
        jsonData = JSON.parse(fileData);
    }
    catch (error) {
        log("Error reading ".concat(filePath), config_1.LogType.error);
    }
    try {
        jsonData = setNestedValue(jsonData, keys.split("."), value);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
    }
    catch (error) {
        log("Error writing ".concat(filePath), config_1.LogType.error);
        throw new Error();
    }
};
var translateFromSourceLanguage = function (text, targetLanguage) { return __awaiter(void 0, void 0, void 0, function () {
    var source, target;
    return __generator(this, function (_a) {
        source = config_1.sourceLanguage.toLowerCase();
        target = targetLanguage.toLowerCase();
        if (source === target)
            return [2 /*return*/, new Promise(function (resolve, reject) { resolve(text); })];
        return [2 /*return*/, new Promise(function (resolve, reject) {
                reverso.getTranslation(text, source, target, function (error, response) {
                    if (error)
                        reject(error);
                    else
                        resolve(response.translations[0]);
                });
            })];
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var keys, value, _i, _a, _b, locale, language, translatedValue, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                log("Use dot notation for nested keys. (a.b -> {a: {b: ...}})", config_1.LogType.success);
                return [4 /*yield*/, prompt("• Enter keys: ")];
            case 1:
                keys = _c.sent();
                return [4 /*yield*/, prompt("• Enter value: ")];
            case 2:
                value = _c.sent();
                _i = 0, _a = Object.entries(config_1.localesMap);
                _c.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                _b = _a[_i], locale = _b[0], language = _b[1];
                _c.label = 4;
            case 4:
                _c.trys.push([4, 6, , 7]);
                return [4 /*yield*/, translateFromSourceLanguage(value, language)];
            case 5:
                translatedValue = _c.sent();
                addToJsonFile(path.join(__dirname, config_1.translationsDirPath, "".concat(locale, ".json")), keys, translatedValue);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _c.sent();
                log("Error translating for ".concat(locale), config_1.LogType.error);
                return [3 /*break*/, 8];
            case 7:
                _i++;
                return [3 /*break*/, 3];
            case 8: return [2 /*return*/];
        }
    });
}); };
main();
