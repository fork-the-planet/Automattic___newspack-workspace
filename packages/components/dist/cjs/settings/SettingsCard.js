"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ = require("../");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "columns", "gutter", "noBorder", "rowGap"];
/**
 * External dependencies.
 */
/**
 * Internal dependencies.
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SettingsCard = function SettingsCard(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 3 : _ref$columns,
    _ref$gutter = _ref.gutter,
    gutter = _ref$gutter === void 0 ? 32 : _ref$gutter,
    noBorder = _ref.noBorder,
    rowGap = _ref.rowGap,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var classes = (0, _classnames["default"])('newspack-settings__card', noBorder && 'newspack-settings__no-border', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.ActionCard, _objectSpread(_objectSpread({}, props), {}, {
    className: classes,
    notificationLevel: "info",
    noBorder: noBorder,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Grid, {
      columns: columns,
      gutter: gutter,
      rowGap: rowGap,
      children: children
    })
  }));
};
var _default = exports["default"] = SettingsCard;