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
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Steps List
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */ /**
 * External dependencies.
 */
var StepsList = /*#__PURE__*/function (_Component) {
  function StepsList() {
    (0, _classCallCheck2["default"])(this, StepsList);
    return _callSuper(this, StepsList, arguments);
  }
  (0, _inherits2["default"])(StepsList, _Component);
  return (0, _createClass2["default"])(StepsList, [{
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
      var classes = (0, _classnames["default"])('steps-list', className, narrowList && 'steps-list__narrow-list');
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes,
        style: style,
        children: stepsListItems.map(function (listItem, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.StepsListItem, {
            listItemCount: index + 1,
            listItemText: listItem
          }, index);
        })
      });
    }
  }]);
}(_element.Component);
var _default = exports["default"] = StepsList;