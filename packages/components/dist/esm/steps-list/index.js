import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Steps List
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import { StepsListItem } from '../';
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
var StepsList = /*#__PURE__*/function (_Component) {
  function StepsList() {
    _classCallCheck(this, StepsList);
    return _callSuper(this, StepsList, arguments);
  }
  _inherits(StepsList, _Component);
  return _createClass(StepsList, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        stepsListItems = _this$props.stepsListItems,
        narrowList = _this$props.narrowList,
        _this$props$style = _this$props.style,
        style = _this$props$style === void 0 ? {} : _this$props$style;
      var classes = classnames('steps-list', className, narrowList && 'steps-list__narrow-list');
      return /*#__PURE__*/_jsx("div", {
        className: classes,
        style: style,
        children: stepsListItems.map(function (listItem, index) {
          return /*#__PURE__*/_jsx(StepsListItem, {
            listItemCount: index + 1,
            listItemText: listItem
          }, index);
        })
      });
    }
  }]);
}(Component);
export default StepsList;