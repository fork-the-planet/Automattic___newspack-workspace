"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "borders", "columns", "gutter", "noMargin", "rowGap"];
/**
 * Grid
 */
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Grid = function Grid(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$borders = _ref.borders,
    borders = _ref$borders === void 0 ? false : _ref$borders,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 2 : _ref$columns,
    _ref$gutter = _ref.gutter,
    gutter = _ref$gutter === void 0 ? 32 : _ref$gutter,
    _ref$noMargin = _ref.noMargin,
    noMargin = _ref$noMargin === void 0 ? false : _ref$noMargin,
    _ref$rowGap = _ref.rowGap,
    rowGap = _ref$rowGap === void 0 ? 0 : _ref$rowGap,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var classes = (0, _classnames["default"])('newspack-grid', borders && 'newspack-grid__borders', noMargin && 'newspack-grid--no-margin', columns && 'newspack-grid__columns-' + columns, gutter && 'newspack-grid__gutter-' + gutter, rowGap && 'newspack-grid__row-gap-' + rowGap, className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    className: classes
  }, otherProps));
};
var _default = exports["default"] = Grid;