import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "children", "compact", "useModal", "modalTitle", "modalBody", "onReady", "editLink", "bannerText", "bannerButtonText", "url"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Handoff
 */

/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { Button, Card, Modal, Waiting } from '../';

/**
 * External dependencies.
 */
import assign from 'lodash/assign';
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Handoff = /*#__PURE__*/function (_Component) {
  function Handoff() {
    var _this;
    _classCallCheck(this, Handoff);
    _this = _callSuper(this, Handoff, arguments);
    _defineProperty(_this, "componentDidMount", function () {
      _this._isMounted = true;
      var _this$props = _this.props,
        plugin = _this$props.plugin,
        url = _this$props.url;
      if (plugin && !url) {
        _this.retrievePluginInfo(plugin);
      }
    });
    _defineProperty(_this, "componentWillUnmount", function () {
      _this._isMounted = false;
    });
    _defineProperty(_this, "retrievePluginInfo", function (plugin) {
      var onReady = _this.props.onReady;
      apiFetch({
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
    _defineProperty(_this, "textForPlugin", function (pluginInfo) {
      var defaults = {
        modalBody: null,
        modalTitle: pluginInfo.Name && "".concat(__('Manage', 'newspack-plugin'), " ").concat(pluginInfo.Name),
        primaryButton: pluginInfo.Name && "".concat(__('Manage', 'newspack-plugin'), " ").concat(pluginInfo.Name),
        primaryModalButton: __('Manage', 'newspack-plugin'),
        dismissModalButton: __('Dismiss', 'newspack-plugin')
      };
      return assign(defaults, _this.props);
    });
    _defineProperty(_this, "goToUrl", function () {
      var _this$props2 = _this.props,
        url = _this$props2.url,
        showOnBlockEditor = _this$props2.showOnBlockEditor,
        bannerText = _this$props2.bannerText,
        bannerButtonText = _this$props2.bannerButtonText;
      apiFetch({
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
    _defineProperty(_this, "goToPlugin", function (plugin) {
      var _this$props3 = _this.props,
        editLink = _this$props3.editLink,
        showOnBlockEditor = _this$props3.showOnBlockEditor,
        bannerText = _this$props3.bannerText,
        bannerButtonText = _this$props3.bannerButtonText;
      apiFetch({
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
  _inherits(Handoff, _Component);
  return _createClass(Handoff, [{
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
        otherProps = _objectWithoutProperties(_this$props4, _excluded);
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
      var classes = classnames(Configured && 'is-configured', className);
      var goTo = function goTo() {
        return url ? _this2.goToUrl() : _this2.goToPlugin(Slug);
      };
      return /*#__PURE__*/_jsxs(Fragment, {
        children: [url && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          onClick: function onClick() {
            return useModal && children ? _this2.setState({
              showModal: true
            }) : goTo();
          },
          children: children ? children : primaryButton
        })), !url && Name && 'active' === Status && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          onClick: function onClick() {
            return useModal ? _this2.setState({
              showModal: true
            }) : goTo();
          },
          children: children ? children : primaryButton
        })), !url && Name && 'active' !== Status && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
          className: classes,
          variant: "secondary",
          disabled: true
        }, otherProps), {}, {
          children: Name + __(' not installed', 'newspack-plugin')
        })), !url && !Name && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          children: /*#__PURE__*/_jsxs(Fragment, {
            children: [!compact && /*#__PURE__*/_jsx(Waiting, {
              isLeft: true
            }), __('Retrieving Plugin Info', 'newspack-plugin')]
          })
        })), showModal && /*#__PURE__*/_jsxs(Modal, {
          title: modalTitle,
          onRequestClose: function onRequestClose() {
            return _this2.setState({
              showModal: false
            });
          },
          children: [/*#__PURE__*/_jsx("p", {
            children: modalBody
          }), /*#__PURE__*/_jsxs(Card, {
            buttonsCard: true,
            noBorder: true,
            className: "justify-end",
            children: [/*#__PURE__*/_jsx(Button, {
              variant: "secondary",
              onClick: function onClick() {
                return _this2.setState({
                  showModal: false
                });
              },
              children: dismissModalButton
            }), /*#__PURE__*/_jsx(Button, {
              variant: "primary",
              onClick: goTo,
              children: primaryModalButton
            })]
          })]
        })]
      });
    }
  }]);
}(Component);
Handoff.defaultProps = {
  onReady: function onReady() {}
};
export default Handoff;