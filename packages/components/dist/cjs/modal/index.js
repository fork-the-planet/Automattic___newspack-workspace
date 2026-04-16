"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _element = require("@wordpress/element");
var _components = require("@wordpress/components");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "size", "hideTitle"];
/**
 * Modal
 */
/**
 * WordPress dependencies.
 */
/**
 * Internal dependencies.
 */
/**
 * External dependencies.
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var sizeClassMap = {
  small: 'newspack-modal--size-small',
  medium: 'newspack-modal--size-medium',
  large: 'newspack-modal--size-large',
  'x-large': 'newspack-modal--size-x-large',
  full: 'newspack-modal--size-full'
};
var getSizeClassName = function getSizeClassName(size) {
  return sizeClassMap[size] || sizeClassMap.medium;
};
function Modal(_ref, ref) {
  var className = _ref.className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    hideTitle = _ref.hideTitle,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var classes = (0, _classnames["default"])('newspack-modal', hideTitle && 'newspack-modal--hide-title',
  // Note: also hides the X close button.
  getSizeClassName(size), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Modal, _objectSpread(_objectSpread({
    className: classes
  }, otherProps), {}, {
    ref: ref
  }));
}
var _default = exports["default"] = (0, _element.forwardRef)(Modal);