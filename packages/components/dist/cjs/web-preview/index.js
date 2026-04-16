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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _components = require("@wordpress/components");
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */ /**
 * External dependencies.
 */
var PORTAL_PARENT_ID = 'newspack-components-web-preview-wrapper';

/**
 * Web Preview. A component to preview a website in an iframe, with device sizing options.
 */
var WebPreview = /*#__PURE__*/function (_Component) {
  function WebPreview(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, WebPreview);
    _this = _callSuper(this, WebPreview, [props]);
    (0, _defineProperty2["default"])(_this, "state", {
      device: 'desktop',
      loaded: false,
      isPreviewVisible: false
    });
    /**
     * Handle keyboard events
     */
    (0, _defineProperty2["default"])(_this, "handleKeyDown", function (event) {
      if (event.key === 'Escape' && _this.state.isPreviewVisible) {
        _this.closePreview();
      }
    });
    /**
     * Close the preview modal
     */
    (0, _defineProperty2["default"])(_this, "closePreview", function () {
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
    (0, _defineProperty2["default"])(_this, "getWebPreviewModal", function () {
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
      var classes = (0, _classnames["default"])('newspack-web-preview', device, loaded && 'is-loaded');
      var icon = _icons.mobile;
      if (device === 'desktop') {
        icon = _icons.desktop;
      } else if (device === 'tablet') {
        icon = _icons.tablet;
      }
      beforeLoad();
      return (0, _element.createPortal)(/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-web-preview__interior",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "newspack-web-preview__toolbar",
            children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "newspack-web-preview__toolbar-left",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                children: title
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "newspack-web-preview__toolbar-right",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DropdownMenu, {
                icon: icon,
                label: (0, _i18n.__)('Preview Size', 'newspack-plugin'),
                children: function children(_ref) {
                  var onDropdownClose = _ref.onClose;
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MenuItem, {
                      icon: device === 'desktop' ? _icons.check : null,
                      role: "menuitemradio",
                      isSelected: device === 'desktop',
                      onClick: function onClick() {
                        _this.setState({
                          device: 'desktop'
                        });
                        onDropdownClose();
                      },
                      children: (0, _i18n.__)('Desktop', 'newspack-plugin')
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MenuItem, {
                      icon: device === 'tablet' ? _icons.check : null,
                      role: "menuitemradio",
                      isSelected: device === 'tablet',
                      onClick: function onClick() {
                        _this.setState({
                          device: 'tablet'
                        });
                        onDropdownClose();
                      },
                      children: (0, _i18n.__)('Tablet', 'newspack-plugin')
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MenuItem, {
                      icon: device === 'phone' ? _icons.check : null,
                      role: "menuitemradio",
                      isSelected: device === 'phone',
                      onClick: function onClick() {
                        _this.setState({
                          device: 'phone'
                        });
                        onDropdownClose();
                      },
                      children: (0, _i18n.__)('Phone', 'newspack-plugin')
                    })]
                  });
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Button, {
                onClick: _this.closePreview,
                icon: _icons.close,
                label: (0, _i18n.__)('Close Preview', 'newspack-plugin')
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "newspack-web-preview__content",
            children: [!loaded && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "newspack-web-preview__is-waiting",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Waiting, {
                isLeft: true
              }), (0, _i18n.__)('Loading…', 'newspack-plugin')]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
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
    (0, _defineProperty2["default"])(_this, "showPreview", function () {
      _this.setState({
        isPreviewVisible: true
      });
    });
    _this.iframeRef = (0, _element.createRef)();
    return _this;
  }

  /**
   * If a div with id PORTAL_PARENT_ID exists, assign it to class field.
   * If not, create it and append to the body.
   */
  (0, _inherits2["default"])(WebPreview, _Component);
  return (0, _createClass2["default"])(WebPreview, [{
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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
        children: [renderButton ? renderButton({
          showPreview: this.showPreview
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Button, {
          variant: variant,
          onClick: this.showPreview,
          tabIndex: "0",
          children: label
        }), this.getWebPreviewModal()]
      });
    }
  }]);
}(_element.Component);
WebPreview.defaultProps = {
  url: '//newspack.com',
  label: (0, _i18n.__)('Preview', 'newspack-plugin'),
  onLoad: function onLoad() {}
};
var _default = exports["default"] = WebPreview;