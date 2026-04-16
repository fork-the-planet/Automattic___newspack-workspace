import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["min", "max", "onChangeMin", "onChangeMax", "minPlaceholder", "maxPlaceholder"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { CheckboxControl } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { TextControl } from '../';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var MinMaxSetting = function MinMaxSetting(_ref) {
  var min = _ref.min,
    max = _ref.max,
    onChangeMin = _ref.onChangeMin,
    onChangeMax = _ref.onChangeMax,
    minPlaceholder = _ref.minPlaceholder,
    maxPlaceholder = _ref.maxPlaceholder,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: "newspack-settings__min-max",
      children: [/*#__PURE__*/_jsx(CheckboxControl, {
        checked: min > 0,
        onChange: function onChange(value) {
          return onChangeMin(value ? 1 : 0);
        },
        label: __('Min', 'newspack-plugin')
      }), /*#__PURE__*/_jsx(TextControl, {
        "data-testid": "min",
        type: "number",
        value: min,
        placeholder: minPlaceholder,
        onChange: function onChange(value) {
          return onChangeMin(value > 0 ? value : 0);
        }
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "newspack-settings__min-max",
      "data-testid": "max",
      children: [/*#__PURE__*/_jsx(CheckboxControl, {
        checked: max > 0,
        onChange: function onChange(value) {
          return onChangeMax(value ? min || 1 : 0);
        },
        label: __('Max', 'newspack-plugin')
      }), /*#__PURE__*/_jsx(TextControl, {
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
export default MinMaxSetting;