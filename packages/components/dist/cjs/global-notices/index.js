"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _qs = require("qs");
var _ = require("../");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

var GlobalNotices = function GlobalNotices() {
  var notice = (0, _qs.parse)(window.location.search)['newspack-notice'];
  if (!notice) {
    return null;
  }
  return notice.split(',').map(function (text, i) {
    if (text.indexOf('_error_') === 0) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        isError: true,
        noticeText: text.replace('_error_', ''),
        rawHTML: true
      }, i);
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
      isSuccess: true,
      noticeText: text
    }, i);
  });
};
var _default = exports["default"] = GlobalNotices;