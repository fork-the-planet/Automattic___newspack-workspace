import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Plugin Installer
 */

/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, check } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import { ActionCard, Button, Waiting } from '../';
import './style.scss';
var PLUGIN_STATE_NONE = 0;
var PLUGIN_STATE_ACTIVE = 1;
var PLUGIN_STATE_INSTALLING = 2;
var PLUGIN_STATE_ERROR = 3;

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Plugin installer.
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var PluginInstaller = /*#__PURE__*/function (_Component) {
  function PluginInstaller() {
    var _this;
    _classCallCheck(this, PluginInstaller);
    _this = _callSuper(this, PluginInstaller, arguments);
    _defineProperty(_this, "componentDidMount", function () {
      var plugins = _this.props.plugins;
      _this.retrievePluginInfo(plugins).then(function () {
        if (_this.props.autoInstall) {
          _this.installAllPlugins();
        }
      });
    });
    _defineProperty(_this, "componentDidUpdate", function (prevProps) {
      var _this$props = _this.props,
        autoInstall = _this$props.autoInstall,
        plugins = _this$props.plugins;
      var installationInitialized = _this.state.installationInitialized;
      if (plugins !== prevProps.plugins) {
        _this.retrievePluginInfo(plugins);
      }
      if (autoInstall && !installationInitialized) {
        _this.installAllPlugins();
      }
    });
    _defineProperty(_this, "retrievePluginInfo", function (plugins) {
      return new Promise(function (resolve) {
        apiFetch({
          path: '/newspack/v1/plugins/'
        }).then(function (response) {
          var pluginInfo = Object.keys(response).reduce(function (result, slug) {
            if (plugins.indexOf(slug) === -1) {
              return result;
            }
            result[slug] = _objectSpread(_objectSpread({}, response[slug]), {}, {
              installationStatus: response[slug].Status === 'active' ? PLUGIN_STATE_ACTIVE : PLUGIN_STATE_NONE
            });
            return result;
          }, {});
          _this.updatePluginInfo(pluginInfo).then(function () {
            return resolve();
          });
        });
      });
    });
    _defineProperty(_this, "installAllPlugins", function () {
      var pluginInfo = _this.state.pluginInfo;
      _this.setState({
        installationInitialized: true
      });
      var promises = Object.keys(pluginInfo).filter(function (slug) {
        return 'active' !== pluginInfo[slug].Status;
      }).map(function (slug) {
        return function () {
          return _this.installPlugin(slug);
        };
      });
      promises.reduce(function (promise, action) {
        return promise.then(function (result) {
          return action().then(Array.prototype.concat.bind(result));
        });
      }, Promise.resolve([]));
    });
    _defineProperty(_this, "installPlugin", function (slug) {
      _this.setInstallationStatus(slug, PLUGIN_STATE_INSTALLING);
      var params = {
        path: "/newspack/v1/plugins/".concat(slug, "/configure/"),
        method: 'post'
      };
      return apiFetch(params).then(function (response) {
        var pluginInfo = _this.state.pluginInfo;
        _this.props.onInstalled(slug);
        _this.updatePluginInfo(_objectSpread(_objectSpread({}, pluginInfo), {}, _defineProperty({}, slug, _objectSpread(_objectSpread({}, response), {}, {
          installationStatus: PLUGIN_STATE_ACTIVE
        }))));
      })["catch"](function (error) {
        _this.setInstallationStatus(slug, PLUGIN_STATE_ERROR, error.message);
      });
    });
    _defineProperty(_this, "setChecked", function (slug, checked) {
      var pluginInfo = _this.state.pluginInfo;
      _this.updatePluginInfo(_objectSpread(_objectSpread({}, pluginInfo), {}, _defineProperty({}, slug, _objectSpread(_objectSpread({}, pluginInfo[slug]), {}, {
        checked: checked
      }))));
    });
    _defineProperty(_this, "setInstallationStatus", function (slug, installationStatus) {
      var notification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var pluginInfo = _this.state.pluginInfo;
      _this.updatePluginInfo(_objectSpread(_objectSpread({}, pluginInfo), {}, _defineProperty({}, slug, _objectSpread(_objectSpread({}, pluginInfo[slug]), {}, {
        installationStatus: installationStatus,
        notification: notification
      }))));
    });
    _defineProperty(_this, "updatePluginInfo", function (pluginInfo) {
      return new Promise(function (resolve) {
        var onStatus = _this.props.onStatus;
        _this.setState({
          pluginInfo: pluginInfo
        }, function () {
          var complete = Object.values(pluginInfo).every(function (plugin) {
            return 'active' === plugin.Status;
          });
          onStatus({
            complete: complete,
            pluginInfo: pluginInfo
          });
          resolve();
        });
      });
    });
    _defineProperty(_this, "classForInstallationStatus", function (status) {
      switch (status) {
        case PLUGIN_STATE_ACTIVE:
          return 'newspack-plugin-installer__status-active';
        case PLUGIN_STATE_INSTALLING:
          return 'newspack-plugin-installer__status-installing';
        case PLUGIN_STATE_ERROR:
          return 'newspack-plugin-installer__status-error';
        default:
          return 'newspack-plugin-installer__status-none';
      }
    });
    _this.state = {
      pluginInfo: {},
      installationInitialized: false
    };
    return _this;
  }
  _inherits(PluginInstaller, _Component);
  return _createClass(PluginInstaller, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        autoInstall = _this$props2.autoInstall,
        isSmall = _this$props2.isSmall,
        withoutFooterButton = _this$props2.withoutFooterButton;
      var pluginInfo = this.state.pluginInfo;
      var _ref = window.newspack_aux_data || {},
        isManaged = _ref.is_managed;
      var slugs = Object.keys(pluginInfo);

      // Store all plugin status info for installer button text value based on current status.
      var currentPluginStatuses = [];
      slugs.forEach(function (slug) {
        var plugin = pluginInfo[slug];
        currentPluginStatuses.push(plugin.Status);
      });

      // Make sure plugin status falls in either one of these, to handle button text.
      var pluginInstalled = function pluginInstalled(currentStatus) {
        return currentStatus === 'active' || currentStatus === 'inactive';
      };
      var buttonText = currentPluginStatuses.every(pluginInstalled) ? __('Activate', 'newspack-plugin') : __('Install', 'newspack-plugin');
      var needsInstall = slugs.some(function (slug) {
        var plugin = pluginInfo[slug];
        return plugin.Status !== 'active' && plugin.installationStatus === PLUGIN_STATE_NONE;
      });
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [(!pluginInfo || !Object.keys(pluginInfo).length) && /*#__PURE__*/_jsxs("div", {
          className: "newspack-plugin-installer_is-waiting",
          children: [/*#__PURE__*/_jsx(Waiting, {
            isLeft: true
          }), __('Retrieving plugin information…', 'newspack-plugin')]
        }), pluginInfo && slugs.length > 0 && slugs.map(function (slug) {
          var plugin = pluginInfo[slug];
          var Name = plugin.Name,
            Description = plugin.Description,
            Download = plugin.Download,
            Status = plugin.Status,
            installationStatus = plugin.installationStatus,
            notification = plugin.notification;
          var isWaiting = installationStatus === PLUGIN_STATE_INSTALLING;
          var isButton = !isWaiting && Status !== 'active';
          var installable = Download || pluginInstalled(Status);
          var actionText;
          if (installationStatus === PLUGIN_STATE_INSTALLING) {
            actionText = 'inactive' === Status ? __('Activating…') : __('Installing…');
          } else if (!installable) {
            actionText = /*#__PURE__*/_jsxs("span", {
              className: "newspack-plugin-installer__status",
              children: [isManaged ? __('Contact Newspack support to install', 'newspack-plugin') : __('Plugin must be installed manually', 'newspack-plugin'), /*#__PURE__*/_jsx("span", {
                className: "newspack-checkbox-icon"
              })]
            });
          } else if (Status === 'uninstalled') {
            actionText = /*#__PURE__*/_jsxs("span", {
              className: "newspack-plugin-installer__status",
              children: [__('Install', 'newspack'), /*#__PURE__*/_jsx("span", {
                className: "newspack-checkbox-icon"
              })]
            });
          } else if (Status === 'inactive') {
            actionText = /*#__PURE__*/_jsxs("span", {
              className: "newspack-plugin-installer__status",
              children: [__('Activate', 'newspack-plugin'), /*#__PURE__*/_jsx("span", {
                className: "newspack-checkbox-icon"
              })]
            });
          } else if (Status === 'active') {
            actionText = /*#__PURE__*/_jsxs("span", {
              className: "newspack-plugin-installer__status",
              children: [__('Installed', 'newspack-plugin'), /*#__PURE__*/_jsx("span", {
                className: "newspack-checkbox-icon newspack-checkbox-icon--checked",
                children: /*#__PURE__*/_jsx(Icon, {
                  icon: check
                })
              })]
            });
          }
          var classes = classnames('newspack-action-card__plugin-installer', _this2.classForInstallationStatus(installationStatus));
          var onClick = isButton ? function () {
            return _this2.installPlugin(slug);
          } : null;
          return /*#__PURE__*/_jsx(ActionCard, {
            title: Name,
            description: Description,
            disabled: !installable,
            actionText: actionText,
            isSmall: isSmall,
            isWaiting: isWaiting,
            onClick: onClick,
            notification: notification,
            notificationLevel: "error",
            notificationHTML: true,
            className: classes
          }, slug);
        }), !withoutFooterButton && !autoInstall && pluginInfo && slugs.length > 0 && /*#__PURE__*/_jsx("div", {
          className: "newspack-buttons-card",
          children: /*#__PURE__*/_jsx(Button, {
            disabled: !needsInstall,
            isPrimary: true,
            onClick: this.installAllPlugins,
            children: buttonText
          })
        })]
      });
    }
  }]);
}(Component);
PluginInstaller.defaultProps = {
  onStatus: function onStatus() {},
  onInstalled: function onInstalled() {}
};
export default PluginInstaller;