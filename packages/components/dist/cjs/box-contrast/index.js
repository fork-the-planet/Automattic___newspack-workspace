"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _color = require("../utils/color");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["hexColor", "isInverted", "children"];
/**
 * Box Contrast
 *
 * can be used to dynamically assign black or white color/background-color based on a hex color.
 * Black/white can be assigned to either text or background-color.
 */
/**
 * Dependencies
 */
/**
 * Box Contrast component
 *
 * @return JSX.Element
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BoxContrast = function BoxContrast(_ref) {
  var hexColor = _ref.hexColor,
    _ref$isInverted = _ref.isInverted,
    isInverted = _ref$isInverted === void 0 ? false : _ref$isInverted,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var contrastColor;
  if (hexColor === '#f0f0f0') {
    contrastColor = '#1e1e1e';
  } else {
    contrastColor = (0, _color.getContrast)(hexColor);
  }
  var style = isInverted ? {
    color: hexColor,
    backgoundColor: contrastColor
  } : {
    backgroundColor: hexColor,
    color: contrastColor
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
    style: style,
    children: children
  }));
};
var _default = exports["default"] = BoxContrast;