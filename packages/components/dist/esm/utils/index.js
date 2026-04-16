import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * WordPress dependencies.
 */
import { ENTER } from '@wordpress/keycodes';
import { jsx as _jsx } from "react/jsx-runtime";
var InteractiveDiv = function InteractiveDiv(_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    tabIndex: "0",
    role: "button",
    onKeyDown: function onKeyDown(event) {
      return ENTER === event.keyCode && props.onClick();
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
export default {
  InteractiveDiv: InteractiveDiv,
  confirmAction: confirmAction
};