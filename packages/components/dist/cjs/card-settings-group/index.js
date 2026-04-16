"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ = require("../");
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Card - Settings group component.
 */

/**
 * Internal dependencies
 */

var CardSettingsGroup = function CardSettingsGroup(_ref) {
  var _ref$actionType = _ref.actionType,
    actionType = _ref$actionType === void 0 ? 'none' : _ref$actionType,
    children = _ref.children,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '' : _ref$description,
    _ref$isActive = _ref.isActive,
    isActive = _ref$isActive === void 0 ? false : _ref$isActive,
    _ref$onEnable = _ref.onEnable,
    onEnable = _ref$onEnable === void 0 ? function () {} : _ref$onEnable;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Card, {
    className: "newspack-card--core--settings-group",
    actionType: actionType,
    isSmall: true,
    __experimentalCoreCard: true,
    __experimentalCoreProps: {
      header: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: title
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: description
        })]
      }),
      onHeaderClick: onEnable,
      icon: icon,
      iconBackgroundColor: true,
      isActive: isActive,
      title: title
    },
    children: isActive && children
  });
};
var _default = exports["default"] = CardSettingsGroup;