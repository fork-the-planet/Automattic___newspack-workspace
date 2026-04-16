import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["help", "label", "onChange", "optgroups", "className", "hideLabelFromVision"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * WordPress dependencies
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Icon, chevronDown } from '@wordpress/icons';

/**
 * External dependencies
 */
import classnames from 'classnames';
import find from 'lodash/find';
import some from 'lodash/some';

/**
 * Internal dependencies
 */
import { hooks } from '..';

/**
 * SelectControl with optgroup support
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function GroupedSelectControl(_ref) {
  var help = _ref.help,
    label = _ref.label,
    onChange = _ref.onChange,
    _ref$optgroups = _ref.optgroups,
    optgroups = _ref$optgroups === void 0 ? [] : _ref$optgroups,
    className = _ref.className,
    hideLabelFromVision = _ref.hideLabelFromVision,
    props = _objectWithoutProperties(_ref, _excluded);
  var onChangeValue = function onChangeValue(event) {
    var value = event.target.value;
    var optgroup = find(optgroups, function (group) {
      return some(group.options, ['value', value]);
    });
    onChange(value, optgroup);
  };
  var id = hooks.useUniqueId('group-select');
  return /*#__PURE__*/_jsx(BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: classnames(className, 'components-select-control'),
    children: /*#__PURE__*/_jsxs("div", {
      className: "relative",
      children: [/*#__PURE__*/_jsxs("select", _objectSpread(_objectSpread({
        id: id,
        className: "components-select-control__input",
        onChange: onChangeValue,
        "aria-describedby": !!help ? "".concat(id, "__help") : undefined
      }, props), {}, {
        children: [/*#__PURE__*/_jsx("option", {
          value: "",
          children: __('-- Select --', 'newspack-plugin')
        }), optgroups.map(function (_ref2, optgroupIndex) {
          var optgroupLabel = _ref2.label,
            options = _ref2.options;
          return /*#__PURE__*/_jsx("optgroup", {
            label: optgroupLabel,
            children: options.map(function (option, optionIndex) {
              return /*#__PURE__*/_jsx("option", {
                value: option.value,
                disabled: option.disabled,
                children: option.label
              }, "".concat(option.label, "-").concat(option.value, "-").concat(optionIndex));
            })
          }, optgroupIndex);
        })]
      })), /*#__PURE__*/_jsx("div", {
        className: "components-select-control__arrow-wrapper",
        children: /*#__PURE__*/_jsx(Icon, {
          icon: chevronDown,
          size: 18
        })
      })]
    })
  });
}