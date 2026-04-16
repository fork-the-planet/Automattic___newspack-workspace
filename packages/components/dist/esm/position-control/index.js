import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["allowedPositions", "value", "label", "help", "onChange", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ButtonGroup, Button } from '@wordpress/components';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PositionControl(_ref) {
  var allowedPositions = _ref.allowedPositions,
    value = _ref.value,
    label = _ref.label,
    help = _ref.help,
    onChange = _ref.onChange,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
   * Set layout options
   */
  var options = size === 'full-width' ? [{
    value: 'top',
    /* translators: Overlay Position */
    label: __('Top', 'newspack-plugin')
  }, {
    value: 'center',
    /* translators: Overlay Position */
    label: __('Center', 'newspack-plugin')
  }, {
    value: 'bottom',
    /* translators: Overlay Position */
    label: __('Bottom', 'newspack-plugin')
  }] : [{
    value: 'top_left',
    /* translators: Overlay Position */
    label: __('Top Left', 'newspack-plugin')
  }, {
    value: 'top',
    /* translators: Overlay Position */
    label: __('Top Center', 'newspack-plugin')
  }, {
    value: 'top_right',
    /* translators: Overlay Position */
    label: __('Top Right', 'newspack-plugin')
  }, {
    value: 'center_left',
    /* translators: Overlay Position */
    label: __('Center Left', 'newspack-plugin')
  }, {
    value: 'center',
    /* translators: Overlay Position */
    label: __('Center', 'newspack-plugin')
  }, {
    value: 'center_right',
    /* translators: Overlay Position */
    label: __('Center Right', 'newspack-plugin')
  }, {
    value: 'bottom_left',
    /* translators: Overlay Position */
    label: __('Bottom Left', 'newspack-plugin')
  }, {
    value: 'bottom',
    /* translators: Overlay Position */
    label: __('Bottom Center', 'newspack-plugin')
  }, {
    value: 'bottom_right',
    /* translators: Overlay Position */
    label: __('Bottom Right', 'newspack-plugin')
  }];
  return /*#__PURE__*/_jsxs("div", {
    className: classnames('newspack-position-placement-control', 'size-' + size),
    children: [/*#__PURE__*/_jsx("p", {
      className: "components-base-control__label",
      children: label
    }), /*#__PURE__*/_jsx(ButtonGroup, _objectSpread(_objectSpread({
      "aria-label": __('Select Position', 'newspack-plugin')
    }, props), {}, {
      children: options.map(function (option, index) {
        return /*#__PURE__*/_jsx("div", {
          className: option.value === value ? 'is-selected' : null,
          children: /*#__PURE__*/_jsx(Button, {
            isSmall: true,
            title: option.label,
            "aria-label": option.label,
            isPrimary: option.value === value,
            onClick: function onClick() {
              onChange(option.value);
            },
            disabled: (allowedPositions === null || allowedPositions === void 0 ? void 0 : allowedPositions.length) && !allowedPositions.includes(option.value)
          })
        }, "newspack-position-placement-item-".concat(index));
      })
    })), /*#__PURE__*/_jsx("p", {
      className: "components-base-control__help",
      children: help
    })]
  });
}