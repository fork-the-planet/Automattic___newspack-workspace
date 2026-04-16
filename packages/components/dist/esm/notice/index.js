import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Notice
 */

/**
 * WordPress dependencies.
 */
import { Component, RawHTML } from '@wordpress/element';
import { Icon, bug, check, help, info } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Notice = /*#__PURE__*/function (_Component) {
  function Notice() {
    _classCallCheck(this, Notice);
    return _callSuper(this, Notice, arguments);
  }
  _inherits(Notice, _Component);
  return _createClass(Notice, [{
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
      var classes = classnames('newspack-notice', className, debugMode && 'newspack-notice__is-debug', isError && 'newspack-notice__is-error', isHandoff && 'newspack-notice__is-handoff', isHelp && 'newspack-notice__is-help', isSuccess && 'newspack-notice__is-success', isWarning && 'newspack-notice__is-warning');
      var noticeIcon;
      if (isHelp) {
        noticeIcon = help;
      } else if (isSuccess) {
        noticeIcon = check;
      } else if (debugMode) {
        noticeIcon = bug;
      } else {
        noticeIcon = info;
      }
      return /*#__PURE__*/_jsxs("div", {
        className: classes,
        style: style,
        children: [/*#__PURE__*/_jsx(Icon, {
          icon: noticeIcon
        }), /*#__PURE__*/_jsxs("div", {
          className: "newspack-notice__content",
          children: [rawHTML ? /*#__PURE__*/_jsx(RawHTML, {
            children: noticeText
          }) : noticeText, children || null]
        })]
      });
    }
  }]);
}(Component);
export default Notice;