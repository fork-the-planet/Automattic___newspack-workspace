"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _element = require("@wordpress/element");
var _icons = require("@wordpress/icons");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Notice
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */ /**
 * External dependencies.
 */
var Notice = /*#__PURE__*/function (_Component) {
  function Notice() {
    (0, _classCallCheck2["default"])(this, Notice);
    return _callSuper(this, Notice, arguments);
  }
  (0, _inherits2["default"])(Notice, _Component);
  return (0, _createClass2["default"])(Notice, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        debugMode = _this$props.debugMode,
        isError = _this$props.isError,
        isHandoff = _this$props.isHandoff,
        isHelp = _this$props.isHelp,
        isSuccess = _this$props.isSuccess,
        isWarning = _this$props.isWarning,
        noticeText = _this$props.noticeText,
        rawHTML = _this$props.rawHTML,
        _this$props$style = _this$props.style,
        style = _this$props$style === void 0 ? {} : _this$props$style,
        _this$props$children = _this$props.children,
        children = _this$props$children === void 0 ? null : _this$props$children;
      var classes = (0, _classnames["default"])('newspack-notice', className, debugMode && 'newspack-notice__is-debug', isError && 'newspack-notice__is-error', isHandoff && 'newspack-notice__is-handoff', isHelp && 'newspack-notice__is-help', isSuccess && 'newspack-notice__is-success', isWarning && 'newspack-notice__is-warning');
      var noticeIcon;
      if (isHelp) {
        noticeIcon = _icons.help;
      } else if (isSuccess) {
        noticeIcon = _icons.check;
      } else if (debugMode) {
        noticeIcon = _icons.bug;
      } else {
        noticeIcon = _icons.info;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classes,
        style: style,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
          icon: noticeIcon
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-notice__content",
          children: [rawHTML ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_element.RawHTML, {
            children: noticeText
          }) : noticeText, children || null]
        })]
      });
    }
  }]);
}(_element.Component);
var _default = exports["default"] = Notice;