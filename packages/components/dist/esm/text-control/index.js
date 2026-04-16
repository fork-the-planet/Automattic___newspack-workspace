import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "required", "isWide", "withMargin"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Text Control
 */

/**
 * WordPress dependencies
 */
import { TextControl as BaseComponent } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classNames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
var TextControl = function TextControl(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$isWide = _ref.isWide,
    isWide = _ref$isWide === void 0 ? false : _ref$isWide,
    _ref$withMargin = _ref.withMargin,
    withMargin = _ref$withMargin === void 0 ? true : _ref$withMargin,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var wrapperRef = useRef(null);
  useEffect(function () {
    if (wrapperRef.current === null) {
      return;
    }
    var labelEl = wrapperRef.current.querySelector('label');
    if (labelEl) {
      labelEl.setAttribute('data-required-text', __('(required)', 'newspack-plugin'));
    }
  }, [wrapperRef.current]);
  var classes = classNames('newspack-text-control', {
    'newspack-text-control--wide': isWide,
    'newspack-text-control--with-margin': withMargin
  }, className);
  return required ? /*#__PURE__*/_jsx("div", {
    ref: wrapperRef,
    className: "newspack-text-control--required",
    children: /*#__PURE__*/_jsx(BaseComponent, _objectSpread({
      className: classes,
      required: required
    }, otherProps))
  }) : /*#__PURE__*/_jsx(BaseComponent, _objectSpread({
    className: classes
  }, otherProps));
};
export default TextControl;