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
var _element = require("@wordpress/element");
var _coreCard = _interopRequireDefault(require("./core-card"));
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["buttonsCard", "className", "headerActions", "isNarrow", "isMedium", "isSmall", "isWhite", "noBorder", "__experimentalCoreCard", "__experimentalCoreProps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Card
 */ /**
 * WordPress dependencies
 */ /**
 * Internal dependencies
 */ /**
 * External dependencies
 */
var Card = /*#__PURE__*/function (_Component) {
  function Card() {
    (0, _classCallCheck2["default"])(this, Card);
    return _callSuper(this, Card, arguments);
  }
  (0, _inherits2["default"])(Card, _Component);
  return (0, _createClass2["default"])(Card, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        buttonsCard = _this$props.buttonsCard,
        className = _this$props.className,
        headerActions = _this$props.headerActions,
        isNarrow = _this$props.isNarrow,
        isMedium = _this$props.isMedium,
        isSmall = _this$props.isSmall,
        isWhite = _this$props.isWhite,
        noBorder = _this$props.noBorder,
        __experimentalCoreCard = _this$props.__experimentalCoreCard,
        _this$props$__experim = _this$props.__experimentalCoreProps,
        __experimentalCoreProps = _this$props$__experim === void 0 ? {
          actionType: null,
          // chevron | toggle | button | link | none
          header: null,
          // Pass a React component to render in a CardHeader component.
          icon: null,
          footer: null,
          // Pass a React component to render in a CardFooter component.
          noMargin: false,
          isDraggable: false,
          dragIndex: null,
          hasGreyHeader: false,
          onDragCallback: function onDragCallback() {}
        } : _this$props$__experim,
        otherProps = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      if (__experimentalCoreCard) {
        var props = _objectSpread(_objectSpread({
          buttonsCard: buttonsCard,
          className: className,
          isMedium: isMedium,
          isNarrow: isNarrow,
          isSmall: isSmall,
          isWhite: isWhite,
          noBorder: noBorder
        }, otherProps), __experimentalCoreProps);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_coreCard["default"], _objectSpread({}, props));
      }
      var classes = (0, _classnames["default"])('newspack-card', className, buttonsCard && 'newspack-card__buttons-card', headerActions && 'newspack-card__header-actions', isMedium && 'newspack-card__is-medium', isNarrow && 'newspack-card__is-narrow', isSmall && 'newspack-card__is-small', isWhite && 'newspack-card__is-white', noBorder && 'newspack-card__no-border');
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
        className: classes
      }, otherProps));
    }
  }]);
}(_element.Component);
var _default = exports["default"] = Card;