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
var _excluded = ["alignment", "className", "marginBottom", "marginTop", "variant"];
/**
 * Divider
 */
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Divider = function Divider(_ref) {
  var _ref$alignment = _ref.alignment,
    alignment = _ref$alignment === void 0 ? 'none' : _ref$alignment,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? undefined : _ref$className,
    _ref$marginBottom = _ref.marginBottom,
    marginBottom = _ref$marginBottom === void 0 ? 64 : _ref$marginBottom,
    _ref$marginTop = _ref.marginTop,
    marginTop = _ref$marginTop === void 0 ? 64 : _ref$marginTop,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var classes = (0, _classnames["default"])('newspack-divider', className, alignment && "newspack-divider--alignment-".concat(alignment), variant && "newspack-divider--variant-".concat(variant));
  var style = {
    '--divider-margin-bottom': typeof marginBottom === 'number' ? "".concat(marginBottom, "px") : marginBottom,
    '--divider-margin-top': typeof marginTop === 'number' ? "".concat(marginTop, "px") : marginTop
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", _objectSpread({
    className: classes,
    style: style
  }, otherProps));
};
var _default = exports["default"] = Divider;