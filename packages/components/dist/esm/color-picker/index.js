import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * WordPress dependencies.
 */
import { BaseControl, ColorPicker as ColorPickerComponent } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { useState, useRef } from '@wordpress/element';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

/**
 * Internal dependencies.
 */
import hooks from '../hooks';
import utils from '../utils';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
extend([a11yPlugin]);
var InteractiveDiv = utils.InteractiveDiv;

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
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var ref = useRef();
  var id = useInstanceId(_ColorPicker, 'newspack-color-picker');
  var labelId = "".concat(id, "-label");
  var colordColor = colord(color);
  hooks.useOnClickOutside(ref, function () {
    return setIsExpanded(false);
  });
  return /*#__PURE__*/_jsxs(BaseControl, {
    id: id,
    className: classnames('newspack-color-picker', className),
    help: help,
    __nextHasNoMarginBottom: true,
    children: [/*#__PURE__*/_jsx(BaseControl.VisualLabel, {
      id: labelId,
      children: label
    }), /*#__PURE__*/_jsx(InteractiveDiv, {
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
    }), /*#__PURE__*/_jsx("div", {
      className: "newspack-color-picker__main",
      ref: ref,
      children: isExpanded && /*#__PURE__*/_jsx(ColorPickerComponent, {
        color: color,
        onChange: onChange,
        enableAlpha: false
      })
    })]
  });
};
export default _ColorPicker;