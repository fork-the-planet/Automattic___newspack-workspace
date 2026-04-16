import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "size", "hideTitle"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Modal
 */

/**
 * WordPress dependencies.
 */
import { forwardRef } from '@wordpress/element';
import { Modal as BaseComponent } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
var sizeClassMap = {
  small: 'newspack-modal--size-small',
  medium: 'newspack-modal--size-medium',
  large: 'newspack-modal--size-large',
  'x-large': 'newspack-modal--size-x-large',
  full: 'newspack-modal--size-full'
};
var getSizeClassName = function getSizeClassName(size) {
  return sizeClassMap[size] || sizeClassMap.medium;
};
function Modal(_ref, ref) {
  var className = _ref.className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    hideTitle = _ref.hideTitle,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var classes = classnames('newspack-modal', hideTitle && 'newspack-modal--hide-title',
  // Note: also hides the X close button.
  getSizeClassName(size), className);
  return /*#__PURE__*/_jsx(BaseComponent, _objectSpread(_objectSpread({
    className: classes
  }, otherProps), {}, {
    ref: ref
  }));
}
export default forwardRef(Modal);