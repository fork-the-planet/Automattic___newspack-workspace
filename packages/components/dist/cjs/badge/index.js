"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Internal dependencies
 */

/**
 * External dependencies
 */

/**
 * Badge component
 */
var Badge = function Badge(_ref) {
  var text = _ref.text,
    _ref$level = _ref.level,
    level = _ref$level === void 0 ? 'default' : _ref$level;
  var classes = (0, _classnames["default"])('newspack-badge', "is-".concat(level));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: classes,
    children: text
  });
};
var _default = exports["default"] = Badge;