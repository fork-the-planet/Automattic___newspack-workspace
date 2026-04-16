import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Steps List Item
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var StepsListItem = /*#__PURE__*/function (_Component) {
  function StepsListItem() {
    _classCallCheck(this, StepsListItem);
    return _callSuper(this, StepsListItem, arguments);
  }
  _inherits(StepsListItem, _Component);
  return _createClass(StepsListItem, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        listItemCount = _this$props.listItemCount,
        listItemText = _this$props.listItemText,
        _this$props$style = _this$props.style,
        style = _this$props$style === void 0 ? {} : _this$props$style;
      var classes = classnames('steps-list-item', className);
      return /*#__PURE__*/_jsxs("div", {
        className: classes,
        style: style,
        children: [/*#__PURE__*/_jsx("div", {
          className: "steps-list-item__number",
          children: listItemCount
        }), /*#__PURE__*/_jsx("div", {
          className: "steps-list-item__content",
          dangerouslySetInnerHTML: {
            __html: listItemText
          }
        })]
      });
    }
  }]);
}(Component);
export default StepsListItem;