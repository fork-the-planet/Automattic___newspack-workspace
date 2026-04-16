"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "required", "isWide", "withMargin"];
/**
 * Text Control
 */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextControl = function TextControl(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$isWide = _ref.isWide,
    isWide = _ref$isWide === void 0 ? false : _ref$isWide,
    _ref$withMargin = _ref.withMargin,
    withMargin = _ref$withMargin === void 0 ? true : _ref$withMargin,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var wrapperRef = (0, _element.useRef)(null);
  (0, _element.useEffect)(function () {
    if (wrapperRef.current === null) {
      return;
    }
    var labelEl = wrapperRef.current.querySelector('label');
    if (labelEl) {
      labelEl.setAttribute('data-required-text', (0, _i18n.__)('(required)', 'newspack-plugin'));
    }
  }, [wrapperRef.current]);
  var classes = (0, _classnames["default"])('newspack-text-control', {
    'newspack-text-control--wide': isWide,
    'newspack-text-control--with-margin': withMargin
  }, className);
  return required ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: wrapperRef,
    className: "newspack-text-control--required",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextControl, _objectSpread({
      className: classes,
      required: required
    }, otherProps))
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextControl, _objectSpread({
    className: classes
  }, otherProps));
};
var _default = exports["default"] = TextControl;