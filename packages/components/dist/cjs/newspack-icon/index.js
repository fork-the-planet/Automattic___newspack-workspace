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
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Newspack Icon.
 */ /**
 * WordPress dependencies.
 */ /**
 * External dependencies.
 */ /**
 * Internal dependencies.
 */
var NewspackIcon = /*#__PURE__*/function (_Component) {
  function NewspackIcon() {
    (0, _classCallCheck2["default"])(this, NewspackIcon);
    return _callSuper(this, NewspackIcon, arguments);
  }
  (0, _inherits2["default"])(NewspackIcon, _Component);
  return (0, _createClass2["default"])(NewspackIcon, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        simple = _this$props.simple,
        size = _this$props.size,
        white = _this$props.white;
      var classes = (0, _classnames["default"])('newspack-icon', simple && 'newspack-icon--simple', white && 'newspack-icon--white', className);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        height: size,
        width: size,
        viewBox: "0 0 24 24",
        className: classes,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24 12C24 18.6271 18.6271 24 12 24C5.37213 24 0 18.6271 0 12C0 5.3729 5.3729 0 12 0C18.6271 0 24 5.3729 24 12ZM17.4545 17.4546L6.54545 6.54545V17.4545H8.72727V11.8182L14.3636 17.4546H17.4545ZM11.2727 8.18182H17.4545V6.54545H9.63636L11.2727 8.18182ZM17.4545 11.2727H14.3636L12.7273 9.63636H17.4545V11.2727ZM17.4545 12.7273V14.3636L15.8182 12.7273H17.4545Z"
        })
      });
    }
  }]);
}(_element.Component);
NewspackIcon.defaultProps = {
  size: 32
};
var _default = exports["default"] = NewspackIcon;