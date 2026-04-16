"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PositionControl;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["allowedPositions", "value", "label", "help", "onChange", "size"];
/**
 * WordPress dependencies
 */
/**
 * External dependencies
 */
/**
 * Internal dependencies
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function PositionControl(_ref) {
  var allowedPositions = _ref.allowedPositions,
    value = _ref.value,
    label = _ref.label,
    help = _ref.help,
    onChange = _ref.onChange,
    size = _ref.size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  /**
   * Set layout options
   */
  var options = size === 'full-width' ? [{
    value: 'top',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Top', 'newspack-plugin')
  }, {
    value: 'center',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Center', 'newspack-plugin')
  }, {
    value: 'bottom',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Bottom', 'newspack-plugin')
  }] : [{
    value: 'top_left',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Top Left', 'newspack-plugin')
  }, {
    value: 'top',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Top Center', 'newspack-plugin')
  }, {
    value: 'top_right',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Top Right', 'newspack-plugin')
  }, {
    value: 'center_left',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Center Left', 'newspack-plugin')
  }, {
    value: 'center',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Center', 'newspack-plugin')
  }, {
    value: 'center_right',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Center Right', 'newspack-plugin')
  }, {
    value: 'bottom_left',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Bottom Left', 'newspack-plugin')
  }, {
    value: 'bottom',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Bottom Center', 'newspack-plugin')
  }, {
    value: 'bottom_right',
    /* translators: Overlay Position */
    label: (0, _i18n.__)('Bottom Right', 'newspack-plugin')
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('newspack-position-placement-control', 'size-' + size),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "components-base-control__label",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ButtonGroup, _objectSpread(_objectSpread({
      "aria-label": (0, _i18n.__)('Select Position', 'newspack-plugin')
    }, props), {}, {
      children: options.map(function (option, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: option.value === value ? 'is-selected' : null,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Button, {
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
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "components-base-control__help",
      children: help
    })]
  });
}