"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _apiFetch = _interopRequireDefault(require("@wordpress/api-fetch"));
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _ = require("../");
var _assign = _interopRequireDefault(require("lodash/assign"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "children", "compact", "useModal", "modalTitle", "modalBody", "onReady", "editLink", "bannerText", "bannerButtonText", "url"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Handoff
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */ /**
 * External dependencies.
 */
var Handoff = /*#__PURE__*/function (_Component) {
  function Handoff() {
    var _this;
    (0, _classCallCheck2["default"])(this, Handoff);
    _this = _callSuper(this, Handoff, arguments);
    (0, _defineProperty2["default"])(_this, "componentDidMount", function () {
      _this._isMounted = true;
      var _this$props = _this.props,
        plugin = _this$props.plugin,
        url = _this$props.url;
      if (plugin && !url) {
        _this.retrievePluginInfo(plugin);
      }
    });
    (0, _defineProperty2["default"])(_this, "componentWillUnmount", function () {
      _this._isMounted = false;
    });
    (0, _defineProperty2["default"])(_this, "retrievePluginInfo", function (plugin) {
      var onReady = _this.props.onReady;
      (0, _apiFetch["default"])({
        path: '/newspack/v1/plugins/' + plugin
      }).then(function (pluginInfo) {
        if (_this._isMounted) {
          onReady(pluginInfo);
          _this.setState({
            pluginInfo: pluginInfo
          });
        }
      });
    });
    (0, _defineProperty2["default"])(_this, "textForPlugin", function (pluginInfo) {
      var defaults = {
        modalBody: null,
        modalTitle: pluginInfo.Name && "".concat((0, _i18n.__)('Manage', 'newspack-plugin'), " ").concat(pluginInfo.Name),
        primaryButton: pluginInfo.Name && "".concat((0, _i18n.__)('Manage', 'newspack-plugin'), " ").concat(pluginInfo.Name),
        primaryModalButton: (0, _i18n.__)('Manage', 'newspack-plugin'),
        dismissModalButton: (0, _i18n.__)('Dismiss', 'newspack-plugin')
      };
      return (0, _assign["default"])(defaults, _this.props);
    });
    (0, _defineProperty2["default"])(_this, "goToUrl", function () {
      var _this$props2 = _this.props,
        url = _this$props2.url,
        showOnBlockEditor = _this$props2.showOnBlockEditor,
        bannerText = _this$props2.bannerText,
        bannerButtonText = _this$props2.bannerButtonText;
      (0, _apiFetch["default"])({
        path: '/newspack/v1/handoff',
        method: 'POST',
        data: {
          destinationUrl: url,
          handoffReturnUrl: window && window.location.href,
          showOnBlockEditor: showOnBlockEditor ? true : false,
          bannerText: bannerText,
          bannerButtonText: bannerButtonText
        }
      }).then(function (response) {
        window.location.href = response.HandoffLink;
      });
    });
    (0, _defineProperty2["default"])(_this, "goToPlugin", function (plugin) {
      var _this$props3 = _this.props,
        editLink = _this$props3.editLink,
        showOnBlockEditor = _this$props3.showOnBlockEditor,
        bannerText = _this$props3.bannerText,
        bannerButtonText = _this$props3.bannerButtonText;
      (0, _apiFetch["default"])({
        path: '/newspack/v1/plugins/' + plugin + '/handoff',
        method: 'POST',
        data: {
          editLink: editLink,
          handoffReturnUrl: window && window.location.href,
          showOnBlockEditor: showOnBlockEditor ? true : false,
          bannerText: bannerText,
          bannerButtonText: bannerButtonText
        }
      }).then(function (response) {
        window.location.href = response.HandoffLink;
      });
    });
    _this.state = {
      pluginInfo: [],
      showModal: false
    };
    return _this;
  }
  (0, _inherits2["default"])(Handoff, _Component);
  return (0, _createClass2["default"])(Handoff, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        className = _this$props4.className,
        children = _this$props4.children,
        compact = _this$props4.compact,
        useModal = _this$props4.useModal,
        _modalTitle = _this$props4.modalTitle,
        _modalBody = _this$props4.modalBody,
        onReady = _this$props4.onReady,
        editLink = _this$props4.editLink,
        bannerText = _this$props4.bannerText,
        bannerButtonText = _this$props4.bannerButtonText,
        url = _this$props4.url,
        otherProps = (0, _objectWithoutProperties2["default"])(_this$props4, _excluded);
      var _this$state = this.state,
        pluginInfo = _this$state.pluginInfo,
        showModal = _this$state.showModal;
      var _this$textForPlugin = this.textForPlugin(pluginInfo),
        modalBody = _this$textForPlugin.modalBody,
        modalTitle = _this$textForPlugin.modalTitle,
        primaryButton = _this$textForPlugin.primaryButton,
        primaryModalButton = _this$textForPlugin.primaryModalButton,
        dismissModalButton = _this$textForPlugin.dismissModalButton;
      var Configured = pluginInfo.Configured,
        Name = pluginInfo.Name,
        Slug = pluginInfo.Slug,
        Status = pluginInfo.Status;
      var classes = (0, _classnames["default"])(Configured && 'is-configured', className);
      var goTo = function goTo() {
        return url ? _this2.goToUrl() : _this2.goToPlugin(Slug);
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
        children: [url && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          onClick: function onClick() {
            return useModal && children ? _this2.setState({
              showModal: true
            }) : goTo();
          },
          children: children ? children : primaryButton
        })), !url && Name && 'active' === Status && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          onClick: function onClick() {
            return useModal ? _this2.setState({
              showModal: true
            }) : goTo();
          },
          children: children ? children : primaryButton
        })), !url && Name && 'active' !== Status && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
          className: classes,
          variant: "secondary",
          disabled: true
        }, otherProps), {}, {
          children: Name + (0, _i18n.__)(' not installed', 'newspack-plugin')
        })), !url && !Name && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
            children: [!compact && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Waiting, {
              isLeft: true
            }), (0, _i18n.__)('Retrieving Plugin Info', 'newspack-plugin')]
          })
        })), showModal && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Modal, {
          title: modalTitle,
          onRequestClose: function onRequestClose() {
            return _this2.setState({
              showModal: false
            });
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: modalBody
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Card, {
            buttonsCard: true,
            noBorder: true,
            className: "justify-end",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              variant: "secondary",
              onClick: function onClick() {
                return _this2.setState({
                  showModal: false
                });
              },
              children: dismissModalButton
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              variant: "primary",
              onClick: goTo,
              children: primaryModalButton
            })]
          })]
        })]
      });
    }
  }]);
}(_element.Component);
Handoff.defaultProps = {
  onReady: function onReady() {}
};
var _default = exports["default"] = Handoff;