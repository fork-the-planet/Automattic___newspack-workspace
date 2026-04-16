"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _element = require("@wordpress/element");
var _icons = require("@wordpress/icons");
var _classnames = _interopRequireDefault(require("classnames"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
    title = _ref.title;
  var _useState = (0, _element.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("details", {
    className: (0, _classnames["default"])('newspack-accordion', {
      'newspack-accordion--is-open': isOpen
    }),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("summary", {
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      },
      children: [title, /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
        className: "newspack-accordion__icon",
        icon: _icons.chevronRight,
        size: 24
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "newspack-accordion__content",
      children: children
    })]
  });
};
var _default = exports["default"] = Accordion;