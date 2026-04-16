"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _i18n = require("@wordpress/i18n");
var _data = require("@wordpress/data");
var _ = require("../..");
var _store = require("../store");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * WordPress dependencies.
 */

/**
 * Internal dependencies.
 */

var parseError = function parseError(_ref) {
  var data = _ref.data,
    message = _ref.message,
    code = _ref.code;
  var level = 'fatal';
  if (!!data && 'level' in data) {
    level = data.level;
  } else if ('rest_invalid_param' === code) {
    level = 'notice';
  }
  return {
    message: message,
    level: level
  };
};
var WizardError = function WizardError() {
  var error = (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).getError();
  });
  if (!error) {
    return null;
  }
  var _parseError = parseError(error),
    level = _parseError.level,
    message = _parseError.message;
  if ('fatal' === level) {
    var fallbackURL = typeof newspack_urls !== 'undefined' && newspack_urls.dashboard;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Modal, {
      title: (0, _i18n.__)('Unrecoverable error'),
      onRequestClose: fallbackURL ? function () {
        return window.location = fallbackURL;
      } : undefined,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        noticeText: message,
        isError: true,
        rawHTML: true
      }), fallbackURL && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Card, {
        buttonsCard: true,
        noBorder: true,
        className: "justify-end",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
          isPrimary: true,
          href: fallbackURL,
          children: (0, _i18n.__)('Return to Dashboard', 'newspack-plugin')
        })
      })]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
    isError: true,
    className: "newspack-wizard__above-header",
    noticeText: message,
    rawHTML: true
  });
};
var _default = exports["default"] = WizardError;