"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ = require("../");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Internal dependencies.
 */

var SettingSection = function SettingSection(_ref) {
  var title = _ref.title,
    description = _ref.description,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Grid, {
    columns: 1,
    gutter: 8,
    className: "newspack-settings__section",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "newspack-settings__section__title",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: title
      }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.InfoButton, {
        text: description
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "newspack-settings__section__content",
      children: children
    })]
  });
};
var _default = exports["default"] = SettingSection;