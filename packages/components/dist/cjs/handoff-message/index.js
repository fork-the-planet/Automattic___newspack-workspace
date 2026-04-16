"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HandoffMessage;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _element = require("@wordpress/element");
var _consts = require("../consts");
var _ = require("../");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * WordPress dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Handoff Message Component.
 */function HandoffMessage() {
  var _useState = (0, _element.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    handoffMessage = _useState2[0],
    setHandoffMessage = _useState2[1];
  (0, _element.useEffect)(function () {
    // Slight delay to allow for localStorage to be updated by RAS component.
    setTimeout(function () {
      var handoff = JSON.parse(localStorage.getItem(_consts.HANDOFF_KEY));
      if (handoff !== null && handoff !== void 0 && handoff.message) {
        setHandoffMessage(handoff.message);
      } else {
        setHandoffMessage(false);
      }

      // Clean up the notification if navigating away from the relevant page.
      if (handoff !== null && handoff !== void 0 && handoff.url && -1 === window.location.href.indexOf(handoff.url)) {
        window.localStorage.removeItem(_consts.HANDOFF_KEY);
        setHandoffMessage(false);
      }
    }, 100);
  }, []);
  if (!handoffMessage) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
    isHandoff: true,
    isDismissible: false,
    rawHTML: true,
    noticeText: handoffMessage
  });
}