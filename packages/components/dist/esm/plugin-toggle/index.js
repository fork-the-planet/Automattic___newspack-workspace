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
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { ActionCard, Waiting } from '../';
import './style.scss';

/**
 * Plugin toggle group component.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var PluginToggle = /*#__PURE__*/function (_Component) {
  function PluginToggle() {
    var _this;
    _classCallCheck(this, PluginToggle);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, PluginToggle, [].concat(args));
    _defineProperty(_this, "state", {
      pluginInfo: {}
    });
    _defineProperty(_this, "componentDidMount", function () {
      _this.retrievePluginInfo();
    });
    /**
     * Retrieve complete data about Newspack plugins.
     */
    _defineProperty(_this, "retrievePluginInfo", function () {
      return new Promise(function () {
        apiFetch({
          path: '/newspack/v1/plugins/'
        }).then(function (pluginInfo) {
          return _this.setState({
            pluginInfo: pluginInfo
          });
        });
      });
    });
    /**
     * Install/activate or remove a plugin.
     */
    _defineProperty(_this, "managePlugin", function (plugin, value) {
      var plugins = _this.props.plugins;
      var pluginInfo = _this.state.pluginInfo;
      var action = value ? 'configure' : 'deactivate';
      var params = {
        path: "/newspack/v1/plugins/".concat(plugin, "/").concat(action, "/"),
        method: 'post'
      };
      _this.setState({
        pluginInfo: _objectSpread(_objectSpread({}, pluginInfo), {}, _defineProperty({}, plugin, _objectSpread(_objectSpread({}, pluginInfo[plugin]), {}, {
          inFlight: action
        })))
      }, function () {
        apiFetch(params).then(function (response) {
          var shouldRefreshAfterUpdate = plugins[plugin].shouldRefreshAfterUpdate;
          _this.setState(function (_ref) {
            var currentPluginInfo = _ref.pluginInfo;
            return {
              pluginInfo: _objectSpread(_objectSpread({}, currentPluginInfo), {}, _defineProperty({}, plugin, response))
            };
          }, function () {
            return shouldRefreshAfterUpdate && location.reload();
          });
        })["catch"](function (e) {
          _this.setState({
            pluginInfo: _objectSpread(_objectSpread({}, pluginInfo), {}, _defineProperty({}, plugin, _objectSpread(_objectSpread({}, pluginInfo[plugin]), {}, {
              error: e.message || __('There was an error managing this plugin.', 'newspack-plugin')
            })))
          });
        });
      });
    });
    /**
     * Prepare plugins data for render. Change all keys to camelCase, merge API-fetched data with prop.
     */
    _defineProperty(_this, "prepareDataForRender", function (pluginsFromProps, pluginsFromAPI) {
      return Object.keys(pluginsFromProps).map(function (pluginSlug) {
        return pluginsFromAPI[pluginSlug] ? Object.keys(pluginsFromAPI[pluginSlug]).reduce(function (accumulator, key) {
          return _objectSpread(_objectSpread({}, accumulator), {}, _defineProperty({}, key.charAt(0).toLowerCase() + key.slice(1), pluginsFromAPI[pluginSlug][key]));
        }, {}) : {};
      }).map(function (plugin) {
        return Object.assign(plugin, pluginsFromProps[plugin.slug]);
      });
    });
    /**
     * Generate a classname for the ActionCard based on plugin state. Applies 'in-flight' class if an API is underway and 'loading' if the plugin data is not yet available.
     */
    _defineProperty(_this, "classNameForPlugin", function (plugin) {
      var status = plugin.status,
        inFlight = plugin.inFlight;
      if (inFlight) {
        return 'in-flight';
      }
      if (!status) {
        return 'loading';
      }
    });
    /**
     * Generate the ActionCard action text for a plugin.
     */
    _defineProperty(_this, "actionTextForPlugin", function (plugin) {
      var actionText = plugin.actionText,
        editPath = plugin.editPath,
        href = plugin.href,
        inFlight = plugin.inFlight,
        name = plugin.name;
      // Show spinner when plugin data is unavailable, or when an API call is in flight.
      if ('configure' === inFlight) {
        return /*#__PURE__*/_jsxs(Fragment, {
          children: [__('Installing…', 'newspack-plugin'), " ", /*#__PURE__*/_jsx(Waiting, {
            isRight: true
          })]
        });
      }
      if ('deactivate' === inFlight) {
        return /*#__PURE__*/_jsxs(Fragment, {
          children: [__('Deactivating…', 'newspack-plugin'), " ", /*#__PURE__*/_jsx(Waiting, {
            isRight: true
          })]
        });
      }
      if (!name) {
        return /*#__PURE__*/_jsxs(Fragment, {
          children: [__('Loading…', 'newspack-plugin'), " ", /*#__PURE__*/_jsx(Waiting, {
            isRight: true
          })]
        });
      }
      // No action button at all if the plugin isn't installed and active.
      if (!_this.isPluginInstalledAndActive(plugin)) {
        return null;
      }
      if (href || editPath) {
        return actionText ? actionText : __('Configure', 'newspack-plugin');
      }
    });
    /**
     * Get error message for this plugin.
     */
    _defineProperty(_this, "errorForPlugin", function (plugin) {
      var _pluginInfo$slug;
      var slug = plugin.slug;
      var pluginInfo = _this.state.pluginInfo;
      return ((_pluginInfo$slug = pluginInfo[slug]) === null || _pluginInfo$slug === void 0 ? void 0 : _pluginInfo$slug.error) || null;
    });
    /**
     * Get installation/activation status for a plugin.
     */
    _defineProperty(_this, "isPluginInstalledAndActive", function (plugin) {
      var status = plugin.status;
      return status === 'active';
    });
    return _this;
  }
  _inherits(PluginToggle, _Component);
  return _createClass(PluginToggle, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this2 = this;
      var plugins = this.props.plugins;
      var pluginInfo = this.state.pluginInfo;
      return this.prepareDataForRender(plugins, pluginInfo).map(function (plugin, index) {
        var _plugin$onClick;
        var name = plugin.name,
          description = plugin.description,
          href = plugin.href,
          slug = plugin.slug,
          editPath = plugin.editPath;
        var pluginStatus = _this2.isPluginInstalledAndActive(plugin);
        var handoff = !href && pluginStatus && editPath ? slug : null;
        var error = _this2.errorForPlugin(plugin);
        return /*#__PURE__*/_jsx(ActionCard, {
          className: _this2.classNameForPlugin(plugin),
          title: name,
          description: description,
          actionText: _this2.actionTextForPlugin(plugin),
          handoff: handoff,
          onClick: (_plugin$onClick = plugin.onClick) !== null && _plugin$onClick !== void 0 ? _plugin$onClick : null,
          href: href,
          toggle: true,
          toggleChecked: _this2.isPluginInstalledAndActive(plugin),
          toggleOnChange: function toggleOnChange(value) {
            return _this2.managePlugin(slug, value);
          },
          notification: error,
          notificationHTML: error,
          notificationLevel: "error"
        }, index);
      });
    }
  }]);
}(Component);
export default PluginToggle;