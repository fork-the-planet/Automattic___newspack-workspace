import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Image Upload
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { Button } from '../';
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var ImageUpload = /*#__PURE__*/function (_Component) {
  /**
   * Constructor.
   */
  function ImageUpload() {
    var _this;
    _classCallCheck(this, ImageUpload);
    _this = _callSuper(this, ImageUpload, arguments);
    /**
     * Open the WP media modal.
     */
    _defineProperty(_this, "openModal", function () {
      if (_this.state.frame) {
        _this.state.frame.open();
        return;
      }
      _this.setState({
        frame: wp.media({
          title: __('Select or upload image'),
          button: {
            text: __('Select')
          },
          library: {
            type: 'image'
          },
          multiple: false
        })
      }, function () {
        _this.state.frame.on('select', _this.handleImageSelect);
        _this.state.frame.open();
      });
    });
    /**
     * Update the state when an image is selected from the media modal.
     */
    _defineProperty(_this, "handleImageSelect", function () {
      var onChange = _this.props.onChange;
      var attachment = _this.state.frame.state().get('selection').first().toJSON();
      onChange(attachment);
    });
    /**
     * Render.
     */
    _defineProperty(_this, "render", function () {
      var _this$props = _this.props,
        buttonLabel = _this$props.buttonLabel,
        className = _this$props.className,
        disabled = _this$props.disabled,
        help = _this$props.help,
        image = _this$props.image,
        isCovering = _this$props.isCovering,
        label = _this$props.label,
        onChange = _this$props.onChange,
        _this$props$style = _this$props.style,
        style = _this$props$style === void 0 ? {} : _this$props$style;
      var classes = classnames('newspack-image-upload__image', {
        'newspack-image-upload__image--has-image': image
      }, {
        'newspack-image-upload__image--covering': isCovering
      });
      return /*#__PURE__*/_jsxs(BaseControl, {
        __nextHasNoMarginBottom: true,
        className: classnames('newspack-image-upload', className),
        help: help,
        children: [label && /*#__PURE__*/_jsx(BaseControl.VisualLabel, {
          children: label
        }), /*#__PURE__*/_jsx("div", {
          className: classes,
          style: style,
          children: image !== null && image !== void 0 && image.url ? /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsx("img", {
              "data-testid": "image-upload",
              src: image.url,
              alt: __('Image preview', 'newspack-plugin')
            }), /*#__PURE__*/_jsxs("div", {
              className: "newspack-image-upload__controls",
              children: [/*#__PURE__*/_jsx(Button, {
                disabled: disabled,
                onClick: _this.openModal,
                variant: "tertiary",
                children: __('Replace', 'newspack-plugin')
              }), /*#__PURE__*/_jsx(Button, {
                disabled: disabled,
                onClick: function onClick() {
                  return onChange(null);
                },
                variant: "tertiary",
                isDestructive: true,
                children: __('Remove', 'newspack-plugin')
              })]
            })]
          }) : /*#__PURE__*/_jsx(Button, {
            disabled: disabled,
            onClick: _this.openModal,
            variant: "tertiary",
            children: buttonLabel ? buttonLabel : __('Upload', 'newspack-plugin')
          })
        })]
      });
    });
    _this.state = {
      frame: false
    };
    return _this;
  }
  _inherits(ImageUpload, _Component);
  return _createClass(ImageUpload);
}(Component);
export default ImageUpload;