"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _keycodes = require("@wordpress/keycodes");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["style"];
/**
 * WordPress dependencies.
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InteractiveDiv = function InteractiveDiv(_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    tabIndex: "0",
    role: "button",
    onKeyDown: function onKeyDown(event) {
      return _keycodes.ENTER === event.keyCode && props.onClick();
    },
    style: _objectSpread({
      cursor: 'pointer'
    }, style)
  }, props));
};
var confirmAction = function confirmAction(message) {
  // eslint-disable-next-line no-alert
  if (confirm(message)) {
    return true;
  }
  return false;
};
var _default = exports["default"] = {
  InteractiveDiv: InteractiveDiv,
  confirmAction: confirmAction
};