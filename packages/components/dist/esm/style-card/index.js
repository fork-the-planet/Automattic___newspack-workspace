import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Style Card
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { WebPreview } from '../';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var StyleCard = /*#__PURE__*/function (_Component) {
  function StyleCard() {
    _classCallCheck(this, StyleCard);
    return _callSuper(this, StyleCard, arguments);
  }
  _inherits(StyleCard, _Component);
  return _createClass(StyleCard, [{
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
      var classes = classnames('newspack-style-card', isActive && 'newspack-style-card__is-active', className);
      return /*#__PURE__*/_jsxs("div", {
        className: classes,
        id: id,
        children: [/*#__PURE__*/_jsxs("div", {
          className: "newspack-style-card__image",
          children: [imageType === 'html' ? /*#__PURE__*/_jsx("div", {
            className: "newspack-style-card__image-html",
            dangerouslySetInnerHTML: image
          }) : /*#__PURE__*/_jsx("img", {
            src: image,
            alt: cardTitle + ' ' + __('Thumbnail', 'newspack-plugin')
          }), /*#__PURE__*/_jsxs("div", {
            className: "newspack-style-card__actions",
            children: [isActive ? /*#__PURE__*/_jsx("span", {
              className: "newspack-style-card__actions__badge",
              children: __('Selected', 'newspack-plugin')
            }) : /*#__PURE__*/_jsx(Button, {
              variant: "link",
              onClick: onClick,
              "aria-label": ariaLabel ? ariaLabel : __('Select', 'newspack-plugin') + ' ' + cardTitle,
              tabIndex: "0",
              children: __('Select', 'newspack-plugin')
            }), url && /*#__PURE__*/_jsx(WebPreview, {
              url: url,
              label: __('View Demo', 'newspack-plugin'),
              variant: "link"
            })]
          })]
        }), cardTitle && /*#__PURE__*/_jsx("div", {
          className: "newspack-style-card__title",
          children: cardTitle
        })]
      });
    }
  }]);
}(Component);
export default StyleCard;