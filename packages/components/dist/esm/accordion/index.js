import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { Icon, chevronRight } from '@wordpress/icons';

/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Accordion = function Accordion(_ref) {
  var children = _ref.children,
    title = _ref.title;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/_jsxs("details", {
    className: classNames('newspack-accordion', {
      'newspack-accordion--is-open': isOpen
    }),
    children: [/*#__PURE__*/_jsxs("summary", {
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      },
      children: [title, /*#__PURE__*/_jsx(Icon, {
        className: "newspack-accordion__icon",
        icon: chevronRight,
        size: 24
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "newspack-accordion__content",
      children: children
    })]
  });
};
export default Accordion;