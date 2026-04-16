"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _components = require("@wordpress/components");
var _compose = require("@wordpress/compose");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _colord = require("colord");
var _a11y = _interopRequireDefault(require("colord/plugins/a11y"));
var _hooks = _interopRequireDefault(require("../hooks"));
var _utils = _interopRequireDefault(require("../utils"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * WordPress dependencies.
 */

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

(0, _colord.extend)([_a11y["default"]]);
var InteractiveDiv = _utils["default"].InteractiveDiv;

/**
 * ColorPicker component.
 *
 * @param {Object}             props             - Component props.
 * @param {JSX.Element|string} props.label       - Label for the color picker.
 * @param {JSX.Element|string} props.help        - Help text for the color picker.
 * @param {string}             [props.color]     - Default color.
 * @param {Function}           props.onChange    - Function to call when the color changes.
 * @param {string}             [props.className] - Additional class name.
 * @return {JSX.Element} ColorPicker component.
 */
var _ColorPicker = function ColorPicker(_ref) {
  var label = _ref.label,
    help = _ref.help,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#ffffff' : _ref$color,
    onChange = _ref.onChange,
    className = _ref.className;
  var _useState = (0, _element.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var ref = (0, _element.useRef)();
  var id = (0, _compose.useInstanceId)(_ColorPicker, 'newspack-color-picker');
  var labelId = "".concat(id, "-label");
  var colordColor = (0, _colord.colord)(color);
  _hooks["default"].useOnClickOutside(ref, function () {
    return setIsExpanded(false);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.BaseControl, {
    id: id,
    className: (0, _classnames["default"])('newspack-color-picker', className),
    help: help,
    __nextHasNoMarginBottom: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.BaseControl.VisualLabel, {
      id: labelId,
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(InteractiveDiv, {
      id: id,
      "aria-labelledby": labelId,
      "aria-describedby": help ? "".concat(id, "__help") : undefined,
      "aria-expanded": isExpanded,
      className: 'newspack-color-picker__expander',
      onClick: function onClick() {
        return setIsExpanded(!isExpanded);
      },
      style: {
        backgroundColor: color,
        color: colordColor.contrast() > colordColor.contrast('#000000') ? '#ffffff' : '#000000'
      },
      children: color
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "newspack-color-picker__main",
      ref: ref,
      children: isExpanded && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        color: color,
        onChange: onChange,
        enableAlpha: false
      })
    })]
  });
};
var _default = exports["default"] = _ColorPicker;