"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
require("./style.scss");
var _GroupedSelectControl = _interopRequireDefault(require("./GroupedSelectControl"));
var _ButtonGroupControl = _interopRequireDefault(require("./ButtonGroupControl"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "optgroups", "buttonOptions", "buttonSmall"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Select Control
 *
 * @deprecated For new features, use the core `SelectControl` (and `__experimentalToggleGroupControl` for
 * grouped/button-style selections) from `@wordpress/components` instead of this wrapper. This component
 * is kept only for existing usages and should not be used in new code.
 */ /**
 * WordPress dependencies
 */ /**
 * External dependencies
 */ /**
 * Internal dependencies
 */
var SelectControl = /*#__PURE__*/function (_Component) {
  function SelectControl() {
    (0, _classCallCheck2["default"])(this, SelectControl);
    return _callSuper(this, SelectControl, arguments);
  }
  (0, _inherits2["default"])(SelectControl, _Component);
  return (0, _createClass2["default"])(SelectControl, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        optgroups = _this$props.optgroups,
        buttonOptions = _this$props.buttonOptions,
        buttonSmall = _this$props.buttonSmall,
        otherProps = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var classes = (0, _classnames["default"])('newspack-select-control', optgroups && 'newspack-grouped-select-control', buttonOptions && 'newspack-buttons-select-control', className);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes,
        children: optgroups ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupedSelectControl["default"], _objectSpread({
          optgroups: optgroups
        }, otherProps)) : buttonOptions ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonGroupControl["default"], _objectSpread({
          buttonOptions: buttonOptions,
          buttonSmall: buttonSmall
        }, otherProps)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SelectControl, _objectSpread({}, otherProps))
      });
    }
  }]);
}(_element.Component);
var _default = exports["default"] = SelectControl;