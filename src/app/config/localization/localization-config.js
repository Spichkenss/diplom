"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = exports.usePathname = exports.redirect = exports.Link = exports.locales = exports.localesMap = void 0;
var navigation_1 = require("next-intl/navigation");
exports.localesMap = {
    ru: "Russian",
    en: "English",
};
exports.locales = Object.keys(exports.localesMap);
exports.Link = (_a = (0, navigation_1.createSharedPathnamesNavigation)({ locales: exports.locales }), _a.Link), exports.redirect = _a.redirect, exports.usePathname = _a.usePathname, exports.useRouter = _a.useRouter;
