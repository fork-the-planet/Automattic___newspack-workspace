"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _icons = require("@wordpress/icons");
var _components = require("@wordpress/components");
var _ = require("..");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var ButtonGroupControl = function ButtonGroupControl(_ref) {
  var buttonOptions = _ref.buttonOptions,
    buttonSmall = _ref.buttonSmall,
    className = _ref.className,
    help = _ref.help,
    hideLabelFromVision = _ref.hideLabelFromVision,
    label = _ref.label,
    onChange = _ref.onChange,
    value = _ref.value;
  var id = _.hooks.useUniqueId('button-group');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.BaseControl, {
    label: label,
    help: help,
    hideLabelFromVision: hideLabelFromVision,
    id: id.current,
    className: (0, _classnames["default"])(className, 'components-select-control'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ButtonGroup, {
      children: buttonOptions.map(function (option) {
        var isSelected = value === option.value;
        var Label = function Label() {
          return option.label;
        };
        if (option.icon) {
          // eslint-disable-next-line react/display-name
          Label = function Label() {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
              icon: option.icon
            });
          };
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Button, {
          variant: isSelected ? 'primary' : null,
          isPressed: isSelected,
          onClick: function onClick() {
            return onChange(option.value);
          },
          isSmall: buttonSmall,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Label, {})
        }, option.value);
      })
    })
  });
};
var _default = exports["default"] = ButtonGroupControl;