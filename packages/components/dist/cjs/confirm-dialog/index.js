"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _router = _interopRequireDefault(require("../proxied-imports/router"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "size", "hideTitle", "isDestructive", "onConfirm", "onCancel", "when", "isOpen"];
/**
 * Modal
 */
/**
 * WordPress dependencies.
 */
// eslint-disable-line @wordpress/no-unsafe-wp-apis
/**
 * Internal dependencies.
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useHistory = _router["default"].useHistory;

/**
 * External dependencies.
 */

/*
 * See both https://wordpress.github.io/gutenberg/?path=/docs/components-confirmdialog--docs and
 * https://wordpress.github.io/gutenberg/?path=/docs/components-modal--docs for all supported props.
 */

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
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _element.useState)(isOpen),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showDialog = _useState2[0],
    setShowDialog = _useState2[1];
  var history = useHistory();
  var pendingNavigation = (0, _element.useRef)(null);
  var handleOnConfirm = (0, _element.useCallback)(function () {
    var _pendingNavigation$cu;
    setShowDialog(false);
    (_pendingNavigation$cu = pendingNavigation.current) === null || _pendingNavigation$cu === void 0 || _pendingNavigation$cu.call(pendingNavigation);
    pendingNavigation.current = null;
    onConfirm();
  }, [onConfirm, pendingNavigation]);
  var handleOnCancel = (0, _element.useCallback)(function () {
    setShowDialog(false);
    pendingNavigation.current = null;
    onCancel();
  }, [onCancel, pendingNavigation]);

  // Block navigation when there are unsaved changes.
  (0, _element.useEffect)(function () {
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
  (0, _element.useEffect)(function () {
    if (isOpen) {
      setShowDialog(true);
    }
  }, [isOpen]);
  if (!showDialog) {
    return null;
  }
  var classes = (0, _classnames["default"])('newspack-modal', sizeClassMap[size], hideTitle && 'newspack-modal--hide-title',
  // Note: also hides the X close button.
  isDestructive && 'newspack-modal--destructive', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.__experimentalConfirmDialog, _objectSpread(_objectSpread({
    className: classes
  }, otherProps), {}, {
    ref: ref,
    onConfirm: handleOnConfirm,
    onCancel: handleOnCancel,
    __experimentalHideHeader: false
  }));
}
var _default = exports["default"] = (0, _element.forwardRef)(ConfirmDialog);