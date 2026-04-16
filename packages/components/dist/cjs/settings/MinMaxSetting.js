"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _ = require("../");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["min", "max", "onChangeMin", "onChangeMax", "minPlaceholder", "maxPlaceholder"];
/**
 * WordPress dependencies.
 */
/**
 * Internal dependencies.
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MinMaxSetting = function MinMaxSetting(_ref) {
  var min = _ref.min,
    max = _ref.max,
    onChangeMin = _ref.onChangeMin,
    onChangeMax = _ref.onChangeMax,
    minPlaceholder = _ref.minPlaceholder,
    maxPlaceholder = _ref.maxPlaceholder,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "newspack-settings__min-max",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.CheckboxControl, {
        checked: min > 0,
        onChange: function onChange(value) {
          return onChangeMin(value ? 1 : 0);
        },
        label: (0, _i18n.__)('Min', 'newspack-plugin')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.TextControl, {
        "data-testid": "min",
        type: "number",
        value: min,
        placeholder: minPlaceholder,
        onChange: function onChange(value) {
          return onChangeMin(value > 0 ? value : 0);
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "newspack-settings__min-max",
      "data-testid": "max",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.CheckboxControl, {
        checked: max > 0,
        onChange: function onChange(value) {
          return onChangeMax(value ? min || 1 : 0);
        },
        label: (0, _i18n.__)('Max', 'newspack-plugin')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.TextControl, {
        "data-testid": "max",
        type: "number",
        value: max,
        placeholder: maxPlaceholder,
        onChange: function onChange(value) {
          return onChangeMax(value > 0 ? value : 0);
        }
      })]
    })]
  }));
};
var _default = exports["default"] = MinMaxSetting;