"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GroupedSelectControl;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@wordpress/components");
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _classnames = _interopRequireDefault(require("classnames"));
var _find = _interopRequireDefault(require("lodash/find"));
var _some = _interopRequireDefault(require("lodash/some"));
var _ = require("..");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["help", "label", "onChange", "optgroups", "className", "hideLabelFromVision"];
/**
 * WordPress dependencies
 */
/**
 * External dependencies
 */
/**
 * Internal dependencies
 */
/**
 * SelectControl with optgroup support
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function GroupedSelectControl(_ref) {
  var help = _ref.help,
    label = _ref.label,
    onChange = _ref.onChange,
    _ref$optgroups = _ref.optgroups,
    optgroups = _ref$optgroups === void 0 ? [] : _ref$optgroups,
    className = _ref.className,
    hideLabelFromVision = _ref.hideLabelFromVision,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var onChangeValue = function onChangeValue(event) {
    var value = event.target.value;
    var optgroup = (0, _find["default"])(optgroups, function (group) {
      return (0, _some["default"])(group.options, ['value', value]);
    });
    onChange(value, optgroup);
  };
  var id = _.hooks.useUniqueId('group-select');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: (0, _classnames["default"])(className, 'components-select-control'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("select", _objectSpread(_objectSpread({
        id: id,
        className: "components-select-control__input",
        onChange: onChangeValue,
        "aria-describedby": !!help ? "".concat(id, "__help") : undefined
      }, props), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: "",
          children: (0, _i18n.__)('-- Select --', 'newspack-plugin')
        }), optgroups.map(function (_ref2, optgroupIndex) {
          var optgroupLabel = _ref2.label,
            options = _ref2.options;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("optgroup", {
            label: optgroupLabel,
            children: options.map(function (option, optionIndex) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: option.value,
                disabled: option.disabled,
                children: option.label
              }, "".concat(option.label, "-").concat(option.value, "-").concat(optionIndex));
            })
          }, optgroupIndex);
        })]
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "components-select-control__arrow-wrapper",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
          icon: _icons.chevronDown,
          size: 18
        })
      })]
    })
  });
}