import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * WordPress dependencies.
 */
import { Component, createRef, Fragment, createPortal } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { close, desktop, mobile, tablet, check } from '@wordpress/icons';
import { Button, DropdownMenu, MenuItem } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { Waiting } from '../';
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var PORTAL_PARENT_ID = 'newspack-components-web-preview-wrapper';

/**
 * Web Preview. A component to preview a website in an iframe, with device sizing options.
 */
var WebPreview = /*#__PURE__*/function (_Component) {
  function WebPreview(props) {
    var _this;
    _classCallCheck(this, WebPreview);
    _this = _callSuper(this, WebPreview, [props]);
    _defineProperty(_this, "state", {
      device: 'desktop',
      loaded: false,
      isPreviewVisible: false
    });
    /**
     * Handle keyboard events
     */
    _defineProperty(_this, "handleKeyDown", function (event) {
      if (event.key === 'Escape' && _this.state.isPreviewVisible) {
        _this.closePreview();
      }
    });
    /**
     * Close the preview modal
     */
    _defineProperty(_this, "closePreview", function () {
      var _this$props$onClose = _this.props.onClose,
        onClose = _this$props$onClose === void 0 ? function () {} : _this$props$onClose;
      onClose();
      _this.setState({
        isPreviewVisible: false,
        loaded: false
      });
    });
    /**
     * Create JSX for the modal
     */
    _defineProperty(_this, "getWebPreviewModal", function () {
      var _this$props = _this.props,
        _this$props$beforeLoa = _this$props.beforeLoad,
        beforeLoad = _this$props$beforeLoa === void 0 ? function () {} : _this$props$beforeLoa,
        url = _this$props.url,
        title = _this$props.title;
      var _this$state = _this.state,
        device = _this$state.device,
        loaded = _this$state.loaded,
        isPreviewVisible = _this$state.isPreviewVisible;
      if (!_this.modalDOMElement || !isPreviewVisible) {
        return null;
      }
      var classes = classnames('newspack-web-preview', device, loaded && 'is-loaded');
      var icon = mobile;
      if (device === 'desktop') {
        icon = desktop;
      } else if (device === 'tablet') {
        icon = tablet;
      }
      beforeLoad();
      return createPortal(/*#__PURE__*/_jsx("div", {
        className: classes,
        children: /*#__PURE__*/_jsxs("div", {
          className: "newspack-web-preview__interior",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "newspack-web-preview__toolbar",
            children: [title && /*#__PURE__*/_jsx("div", {
              className: "newspack-web-preview__toolbar-left",
              children: /*#__PURE__*/_jsx("h3", {
                children: title
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "newspack-web-preview__toolbar-right",
              children: [/*#__PURE__*/_jsx(DropdownMenu, {
                icon: icon,
                label: __('Preview Size', 'newspack-plugin'),
                children: function children(_ref) {
                  var onDropdownClose = _ref.onClose;
                  return /*#__PURE__*/_jsxs(_Fragment, {
                    children: [/*#__PURE__*/_jsx(MenuItem, {
                      icon: device === 'desktop' ? check : null,
                      role: "menuitemradio",
                      isSelected: device === 'desktop',
                      onClick: function onClick() {
                        _this.setState({
                          device: 'desktop'
                        });
                        onDropdownClose();
                      },
                      children: __('Desktop', 'newspack-plugin')
                    }), /*#__PURE__*/_jsx(MenuItem, {
                      icon: device === 'tablet' ? check : null,
                      role: "menuitemradio",
                      isSelected: device === 'tablet',
                      onClick: function onClick() {
                        _this.setState({
                          device: 'tablet'
                        });
                        onDropdownClose();
                      },
                      children: __('Tablet', 'newspack-plugin')
                    }), /*#__PURE__*/_jsx(MenuItem, {
                      icon: device === 'phone' ? check : null,
                      role: "menuitemradio",
                      isSelected: device === 'phone',
                      onClick: function onClick() {
                        _this.setState({
                          device: 'phone'
                        });
                        onDropdownClose();
                      },
                      children: __('Phone', 'newspack-plugin')
                    })]
                  });
                }
              }), /*#__PURE__*/_jsx(Button, {
                onClick: _this.closePreview,
                icon: close,
                label: __('Close Preview', 'newspack-plugin')
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "newspack-web-preview__content",
            children: [!loaded && /*#__PURE__*/_jsxs("div", {
              className: "newspack-web-preview__is-waiting",
              children: [/*#__PURE__*/_jsx(Waiting, {
                isLeft: true
              }), __('Loading…', 'newspack-plugin')]
            }), /*#__PURE__*/_jsx("iframe", {
              ref: _this.iframeRef,
              title: "web-preview",
              src: url,
              onLoad: function onLoad() {
                _this.setState({
                  loaded: true
                });
                _this.props.onLoad(_this.iframeRef.current);
              }
            })]
          })]
        })
      }), _this.modalDOMElement);
    });
    _defineProperty(_this, "showPreview", function () {
      _this.setState({
        isPreviewVisible: true
      });
    });
    _this.iframeRef = createRef();
    return _this;
  }

  /**
   * If a div with id PORTAL_PARENT_ID exists, assign it to class field.
   * If not, create it and append to the body.
   */
  _inherits(WebPreview, _Component);
  return _createClass(WebPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var existingDOMElement = document.getElementById(PORTAL_PARENT_ID);
      this.modalDOMElement = existingDOMElement || document.createElement('div');
      if (!existingDOMElement) {
        this.modalDOMElement.id = PORTAL_PARENT_ID;
        document.body.appendChild(this.modalDOMElement);
      }
    }

    /**
     * Add or remove applicable body classes and keyboard event listeners
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.isPreviewVisible === true) {
        document.body.classList.add('newspack-web-preview--open');
        if (prevState.isPreviewVisible === false) {
          // Add event listener when modal opens
          document.addEventListener('keydown', this.handleKeyDown);
        }
      } else {
        document.body.classList.remove('newspack-web-preview--open');
        if (prevState.isPreviewVisible === true) {
          // Remove event listener when modal closes
          document.removeEventListener('keydown', this.handleKeyDown);
        }
      }
    }

    /**
     * Clean up event listeners on unmount
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.body.classList.remove('newspack-web-preview--open');
    }
  }, {
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this$props2 = this.props,
        label = _this$props2.label,
        variant = _this$props2.variant,
        renderButton = _this$props2.renderButton;
      return /*#__PURE__*/_jsxs(Fragment, {
        children: [renderButton ? renderButton({
          showPreview: this.showPreview
        }) : /*#__PURE__*/_jsx(Button, {
          variant: variant,
          onClick: this.showPreview,
          tabIndex: "0",
          children: label
        }), this.getWebPreviewModal()]
      });
    }
  }]);
}(Component);
WebPreview.defaultProps = {
  url: '//newspack.com',
  label: __('Preview', 'newspack-plugin'),
  onLoad: function onLoad() {}
};
export default WebPreview;