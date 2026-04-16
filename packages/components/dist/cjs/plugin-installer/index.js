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
var _apiFetch = _interopRequireDefault(require("@wordpress/api-fetch"));
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Plugin Installer
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */
var PLUGIN_STATE_NONE = 0;
var PLUGIN_STATE_ACTIVE = 1;
var PLUGIN_STATE_INSTALLING = 2;
var PLUGIN_STATE_ERROR = 3;

/**
 * External dependencies.
 */

/**
 * Plugin installer.
 */
var PluginInstaller = /*#__PURE__*/function (_Component) {
  function PluginInstaller() {
    var _this;
    (0, _classCallCheck2["default"])(this, PluginInstaller);
    _this = _callSuper(this, PluginInstaller, arguments);
    (0, _defineProperty2["default"])(_this, "componentDidMount", function () {
      var plugins = _this.props.plugins;
      _this.retrievePluginInfo(plugins).then(function () {
        if (_this.props.autoInstall) {
          _this.installAllPlugins();
        }
      });
    });
    (0, _defineProperty2["default"])(_this, "componentDidUpdate", function (prevProps) {
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
    (0, _defineProperty2["default"])(_this, "retrievePluginInfo", function (plugins) {
      return new Promise(function (resolve) {
        (0, _apiFetch["default"])({
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
    (0, _defineProperty2["default"])(_this, "installAllPlugins", function () {
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
    (0, _defineProperty2["default"])(_this, "installPlugin", function (slug) {
      _this.setInstallationStatus(slug, PLUGIN_STATE_INSTALLING);
      var params = {
        path: "/newspack/v1/plugins/".concat(slug, "/configure/"),
        method: 'post'
      };
      return (0, _apiFetch["default"])(params).then(function (response) {
        var pluginInfo = _this.state.pluginInfo;
        _this.props.onInstalled(slug);
        _this.updatePluginInfo(_objectSpread(_objectSpread({}, pluginInfo), {}, (0, _defineProperty2["default"])({}, slug, _objectSpread(_objectSpread({}, response), {}, {
          installationStatus: PLUGIN_STATE_ACTIVE
        }))));
      })["catch"](function (error) {
        _this.setInstallationStatus(slug, PLUGIN_STATE_ERROR, error.message);
      });
    });
    (0, _defineProperty2["default"])(_this, "setChecked", function (slug, checked) {
      var pluginInfo = _this.state.pluginInfo;
      _this.updatePluginInfo(_objectSpread(_objectSpread({}, pluginInfo), {}, (0, _defineProperty2["default"])({}, slug, _objectSpread(_objectSpread({}, pluginInfo[slug]), {}, {
        checked: checked
      }))));
    });
    (0, _defineProperty2["default"])(_this, "setInstallationStatus", function (slug, installationStatus) {
      var notification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var pluginInfo = _this.state.pluginInfo;
      _this.updatePluginInfo(_objectSpread(_objectSpread({}, pluginInfo), {}, (0, _defineProperty2["default"])({}, slug, _objectSpread(_objectSpread({}, pluginInfo[slug]), {}, {
        installationStatus: installationStatus,
        notification: notification
      }))));
    });
    (0, _defineProperty2["default"])(_this, "updatePluginInfo", function (pluginInfo) {
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
    (0, _defineProperty2["default"])(_this, "classForInstallationStatus", function (status) {
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
  (0, _inherits2["default"])(PluginInstaller, _Component);
  return (0, _createClass2["default"])(PluginInstaller, [{
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
      var buttonText = currentPluginStatuses.every(pluginInstalled) ? (0, _i18n.__)('Activate', 'newspack-plugin') : (0, _i18n.__)('Install', 'newspack-plugin');
      var needsInstall = slugs.some(function (slug) {
        var plugin = pluginInfo[slug];
        return plugin.Status !== 'active' && plugin.installationStatus === PLUGIN_STATE_NONE;
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(!pluginInfo || !Object.keys(pluginInfo).length) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-plugin-installer_is-waiting",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Waiting, {
            isLeft: true
          }), (0, _i18n.__)('Retrieving plugin information…', 'newspack-plugin')]
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
            actionText = 'inactive' === Status ? (0, _i18n.__)('Activating…') : (0, _i18n.__)('Installing…');
          } else if (!installable) {
            actionText = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "newspack-plugin-installer__status",
              children: [isManaged ? (0, _i18n.__)('Contact Newspack support to install', 'newspack-plugin') : (0, _i18n.__)('Plugin must be installed manually', 'newspack-plugin'), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "newspack-checkbox-icon"
              })]
            });
          } else if (Status === 'uninstalled') {
            actionText = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "newspack-plugin-installer__status",
              children: [(0, _i18n.__)('Install', 'newspack'), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "newspack-checkbox-icon"
              })]
            });
          } else if (Status === 'inactive') {
            actionText = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "newspack-plugin-installer__status",
              children: [(0, _i18n.__)('Activate', 'newspack-plugin'), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "newspack-checkbox-icon"
              })]
            });
          } else if (Status === 'active') {
            actionText = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "newspack-plugin-installer__status",
              children: [(0, _i18n.__)('Installed', 'newspack-plugin'), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "newspack-checkbox-icon newspack-checkbox-icon--checked",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
                  icon: _icons.check
                })
              })]
            });
          }
          var classes = (0, _classnames["default"])('newspack-action-card__plugin-installer', _this2.classForInstallationStatus(installationStatus));
          var onClick = isButton ? function () {
            return _this2.installPlugin(slug);
          } : null;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.ActionCard, {
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
        }), !withoutFooterButton && !autoInstall && pluginInfo && slugs.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "newspack-buttons-card",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
            disabled: !needsInstall,
            isPrimary: true,
            onClick: this.installAllPlugins,
            children: buttonText
          })
        })]
      });
    }
  }]);
}(_element.Component);
PluginInstaller.defaultProps = {
  onStatus: function onStatus() {},
  onInstalled: function onInstalled() {}
};
var _default = exports["default"] = PluginInstaller;