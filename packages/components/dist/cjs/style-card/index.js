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
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Style Card
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies
 */ /**
 * External dependencies
 */
var StyleCard = /*#__PURE__*/function (_Component) {
  function StyleCard() {
    (0, _classCallCheck2["default"])(this, StyleCard);
    return _callSuper(this, StyleCard, arguments);
  }
  (0, _inherits2["default"])(StyleCard, _Component);
  return (0, _createClass2["default"])(StyleCard, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        className = _this$props.className,
        cardTitle = _this$props.cardTitle,
        url = _this$props.url,
        image = _this$props.image,
        imageType = _this$props.imageType,
        isActive = _this$props.isActive,
        onClick = _this$props.onClick,
        id = _this$props.id;
      var classes = (0, _classnames["default"])('newspack-style-card', isActive && 'newspack-style-card__is-active', className);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classes,
        id: id,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-style-card__image",
          children: [imageType === 'html' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "newspack-style-card__image-html",
            dangerouslySetInnerHTML: image
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: image,
            alt: cardTitle + ' ' + (0, _i18n.__)('Thumbnail', 'newspack-plugin')
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "newspack-style-card__actions",
            children: [isActive ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "newspack-style-card__actions__badge",
              children: (0, _i18n.__)('Selected', 'newspack-plugin')
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Button, {
              variant: "link",
              onClick: onClick,
              "aria-label": ariaLabel ? ariaLabel : (0, _i18n.__)('Select', 'newspack-plugin') + ' ' + cardTitle,
              tabIndex: "0",
              children: (0, _i18n.__)('Select', 'newspack-plugin')
            }), url && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.WebPreview, {
              url: url,
              label: (0, _i18n.__)('View Demo', 'newspack-plugin'),
              variant: "link"
            })]
          })]
        }), cardTitle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "newspack-style-card__title",
          children: cardTitle
        })]
      });
    }
  }]);
}(_element.Component);
var _default = exports["default"] = StyleCard;