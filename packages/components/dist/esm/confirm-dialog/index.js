import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "size", "hideTitle", "isDestructive", "onConfirm", "onCancel", "when", "isOpen"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Modal
 */

/**
 * WordPress dependencies.
 */
import { __experimentalConfirmDialog as BaseComponent } from '@wordpress/components'; // eslint-disable-line @wordpress/no-unsafe-wp-apis
import { forwardRef, useCallback, useEffect, useRef, useState } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import Router from '../proxied-imports/router';
var useHistory = Router.useHistory;

/**
 * External dependencies.
 */
import classnames from 'classnames';

/*
 * See both https://wordpress.github.io/gutenberg/?path=/docs/components-confirmdialog--docs and
 * https://wordpress.github.io/gutenberg/?path=/docs/components-modal--docs for all supported props.
 */
import { jsx as _jsx } from "react/jsx-runtime";
var sizeClassMap = {
  small: 'newspack-modal--size-small',
  medium: 'newspack-modal--size-medium',
  large: 'newspack-modal--size-large',
  'x-large': 'newspack-modal--size-x-large',
  full: 'newspack-modal--size-full'
};
var noOp = function noOp() {};
function ConfirmDialog(_ref, ref) {
  var className = _ref.className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    hideTitle = _ref.hideTitle,
    isDestructive = _ref.isDestructive,
    _ref$onConfirm = _ref.onConfirm,
    onConfirm = _ref$onConfirm === void 0 ? noOp : _ref$onConfirm,
    _ref$onCancel = _ref.onCancel,
    onCancel = _ref$onCancel === void 0 ? noOp : _ref$onCancel,
    _ref$when = _ref.when,
    when = _ref$when === void 0 ? false : _ref$when,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    showDialog = _useState2[0],
    setShowDialog = _useState2[1];
  var history = useHistory();
  var pendingNavigation = useRef(null);
  var handleOnConfirm = useCallback(function () {
    var _pendingNavigation$cu;
    setShowDialog(false);
    (_pendingNavigation$cu = pendingNavigation.current) === null || _pendingNavigation$cu === void 0 || _pendingNavigation$cu.call(pendingNavigation);
    pendingNavigation.current = null;
    onConfirm();
  }, [onConfirm, pendingNavigation]);
  var handleOnCancel = useCallback(function () {
    setShowDialog(false);
    pendingNavigation.current = null;
    onCancel();
  }, [onCancel, pendingNavigation]);

  // Block navigation when there are unsaved changes.
  useEffect(function () {
    if (!when) {
      return;
    }
    var unblock = history.block(function (location, action) {
      pendingNavigation.current = function () {
        unblock();
        if (action === 'REPLACE') {
          history.replace(location);
        } else {
          history.push(location);
        }
      };
      setShowDialog(true);
      return false;
    });
    return unblock;
  }, [when, history]);

  // Show the dialog imperatively without blocking navigation.
  useEffect(function () {
    if (isOpen) {
      setShowDialog(true);
    }
  }, [isOpen]);
  if (!showDialog) {
    return null;
  }
  var classes = classnames('newspack-modal', sizeClassMap[size], hideTitle && 'newspack-modal--hide-title',
  // Note: also hides the X close button.
  isDestructive && 'newspack-modal--destructive', className);
  return /*#__PURE__*/_jsx(BaseComponent, _objectSpread(_objectSpread({
    className: classes
  }, otherProps), {}, {
    ref: ref,
    onConfirm: handleOnConfirm,
    onCancel: handleOnCancel,
    __experimentalHideHeader: false
  }));
}
export default forwardRef(ConfirmDialog);