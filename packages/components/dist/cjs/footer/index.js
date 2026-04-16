"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Footer
 */

/**
 * WordPress dependencies.
 */

/**
 * Internal dependencies.
 */

var Footer = function Footer(_ref) {
  var _ref$simple = _ref.simple,
    simple = _ref$simple === void 0 ? undefined : _ref$simple;
  var _ref2 = window.newspack_urls || {},
    _ref2$components_demo = _ref2.components_demo,
    componentsDemo = _ref2$components_demo === void 0 ? false : _ref2$components_demo,
    _ref2$support = _ref2.support,
    support = _ref2$support === void 0 ? false : _ref2$support,
    _ref2$setup_wizard = _ref2.setup_wizard,
    setupWizard = _ref2$setup_wizard === void 0 ? false : _ref2$setup_wizard,
    _ref2$reset_url = _ref2.reset_url,
    resetUrl = _ref2$reset_url === void 0 ? false : _ref2$reset_url,
    _ref2$plugin_version = _ref2.plugin_version,
    pluginVersion = _ref2$plugin_version === void 0 ? {
      label: 'Newspack'
    } : _ref2$plugin_version,
    _ref2$remove_starter_ = _ref2.remove_starter_content,
    removeStarterContent = _ref2$remove_starter_ === void 0 ? false : _ref2$remove_starter_,
    supportEmail = _ref2.support_email;
  var footerElements = [{
    label: pluginVersion.label,
    url: 'https://newspack.com/category/release-notes/',
    external: true
  }, {
    label: (0, _i18n.__)('About', 'newspack-plugin'),
    url: 'https://newspack.com/',
    external: true
  }, {
    label: (0, _i18n.__)('Documentation', 'newspack-plugin'),
    url: support,
    external: true
  }];
  if (componentsDemo) {
    footerElements.push({
      label: (0, _i18n.__)('Components Demo', 'newspack-plugin'),
      url: componentsDemo
    });
  }
  if (setupWizard) {
    footerElements.push({
      label: (0, _i18n.__)('Setup Wizard', 'newspack-plugin'),
      url: setupWizard
    });
  }
  if (resetUrl) {
    footerElements.push({
      label: (0, _i18n.__)('Reset Newspack', 'newspack-plugin'),
      url: resetUrl
    });
  }
  if (removeStarterContent) {
    footerElements.push({
      label: (0, _i18n.__)('Remove Starter Content', 'newspack-plugin'),
      url: removeStarterContent
    });
  }
  if (supportEmail) {
    footerElements.push({
      label: (0, _i18n.__)('Contact Support', 'newspack-plugin'),
      url: "mailto:".concat(supportEmail)
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "newspack-footer",
    children: !simple && /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      children: footerElements.map(function (_ref3, index) {
        var url = _ref3.url,
          label = _ref3.label,
          external = _ref3.external;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: external ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ExternalLink, {
            href: url,
            children: label
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: url,
            children: label
          })
        }, index);
      })
    })
  });
};
var _default = exports["default"] = Footer;