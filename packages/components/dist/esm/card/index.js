import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
var _excluded = ["buttonsCard", "className", "headerActions", "isNarrow", "isMedium", "isSmall", "isWhite", "noBorder", "__experimentalCoreCard", "__experimentalCoreProps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Card
 */

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import CoreCard from './core-card';
import './style.scss';

/**
 * External dependencies
 */
import classNames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
var Card = /*#__PURE__*/function (_Component) {
  function Card() {
    _classCallCheck(this, Card);
    return _callSuper(this, Card, arguments);
  }
  _inherits(Card, _Component);
  return _createClass(Card, [{
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
        otherProps = _objectWithoutProperties(_this$props, _excluded);
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
        return /*#__PURE__*/_jsx(CoreCard, _objectSpread({}, props));
      }
      var classes = classNames('newspack-card', className, buttonsCard && 'newspack-card__buttons-card', headerActions && 'newspack-card__header-actions', isMedium && 'newspack-card__is-medium', isNarrow && 'newspack-card__is-narrow', isSmall && 'newspack-card__is-small', isWhite && 'newspack-card__is-white', noBorder && 'newspack-card__no-border');
      return /*#__PURE__*/_jsx("div", _objectSpread({
        className: classes
      }, otherProps));
    }
  }]);
}(Component);
export default Card;