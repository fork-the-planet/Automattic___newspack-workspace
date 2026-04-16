"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@wordpress/components");
var _data = require("@wordpress/data");
var _store = require("../store");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "position", "type", "actions"];
/**
 * Snackbar.
 */
/**
 * WordPress dependencies.
 */
/**
 * Internal dependencies.
 */
/**
 * External dependencies.
 */
/**
 * WizardSnackbar component.
 *
 * @param {Object}      props          - The component props.
 * @param {Object[]}    props.actions  - The actions to display in the snackbar.
 * @param {JSX.Element} props.children - The component children.
 * @param {Object}      props.props    - The component props. See: https://wordpress.github.io/gutenberg/?path=/docs/components-snackbar--docs
 * @param {string}      props.position - The snackbar position.
 * @param {string}      props.type     - The snackbar type: 'info', 'success', 'warning', or 'error'.
 * @return {JSX.Element} The component.
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var WizardSnackbar = function WizardSnackbar(_ref) {
  var children = _ref.children,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'bottom-left' : _ref$position,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'info' : _ref$type,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var className = (0, _classnames["default"])('newspack-wizard__snackbar', props.className, "newspack-wizard__snackbar--".concat(position), "newspack-wizard__snackbar--".concat(type));
  var _useDispatch = (0, _data.useDispatch)(_store.WIZARD_STORE_NAMESPACE),
    removeNotice = _useDispatch.removeNotice,
    resetNotices = _useDispatch.resetNotices;
  var onRemove = function onRemove() {
    if (props.onRemove) {
      props.onRemove();
    }
    if (props.id) {
      removeNotice(props.id);
    } else {
      resetNotices();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Snackbar, _objectSpread(_objectSpread({
    className: className
  }, props), {}, {
    onRemove: onRemove,
    actions: actions,
    children: children
  }));
};
var _default = exports["default"] = WizardSnackbar;