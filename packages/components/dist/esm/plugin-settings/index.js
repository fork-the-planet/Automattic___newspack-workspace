import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { SectionHeader, Notice } from '../';
import SettingsSection from './SettingsSection';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var PluginSettings = /*#__PURE__*/function (_Component) {
  function PluginSettings() {
    var _this;
    _classCallCheck(this, PluginSettings);
    _this = _callSuper(this, PluginSettings, arguments);
    _defineProperty(_this, "fetchSettings", function () {
      var _this$props = _this.props,
        afterFetch = _this$props.afterFetch,
        pluginSlug = _this$props.pluginSlug,
        isWizard = _this$props.isWizard;
      _this.setState({
        inFlight: true
      });
      apiFetch({
        path: isWizard ? "/newspack/v1/wizard/".concat(pluginSlug, "/settings") : "/".concat(pluginSlug, "/v1/settings")
      }).then(function (settings) {
        _this.setState({
          settings: settings,
          error: null
        });
        if ('function' === typeof afterFetch) {
          afterFetch(settings);
        }
      })["catch"](function (error) {
        _this.setState({
          error: error
        });
      })["finally"](function () {
        _this.setState({
          inFlight: false
        });
      });
    });
    _defineProperty(_this, "getSettingsValues", function (sectionKey) {
      var _this$state$settings$;
      return ((_this$state$settings$ = _this.state.settings[sectionKey]) === null || _this$state$settings$ === void 0 ? void 0 : _this$state$settings$.reduce(function (map, setting) {
        map[setting.key] = setting.value;
        return map;
      }, {})) || {};
    });
    _defineProperty(_this, "handleSettingChange", function (sectionKey) {
      return function (key, value) {
        var sectionSettings = _toConsumableArray(_this.state.settings[sectionKey]);
        sectionSettings.forEach(function (setting) {
          if (setting.key === key) {
            setting.value = value;
          }
        });
        _this.setState({
          settings: _objectSpread(_objectSpread({}, _this.state.settings), {}, _defineProperty({}, sectionKey, sectionSettings))
        });
      };
    });
    _defineProperty(_this, "handleSectionUpdate", function (sectionKey) {
      return function (data) {
        var _this$props2 = _this.props,
          afterUpdate = _this$props2.afterUpdate,
          pluginSlug = _this$props2.pluginSlug,
          isWizard = _this$props2.isWizard;
        _this.setState({
          inFlight: true
        });
        apiFetch({
          path: isWizard ? "/newspack/v1/wizard/".concat(pluginSlug, "/settings") : "/".concat(pluginSlug, "/v1/settings"),
          method: 'POST',
          data: {
            section: sectionKey,
            settings: data ? data : _this.getSettingsValues(sectionKey)
          }
        }).then(function (settings) {
          _this.setState({
            settings: _objectSpread(_objectSpread({}, _this.state.settings), {}, _defineProperty({}, sectionKey, settings[sectionKey])),
            error: null
          });
          if ('function' === typeof afterUpdate) {
            afterUpdate(settings);
          }
        })["catch"](function (error) {
          _this.setState({
            error: error
          });
        })["finally"](function () {
          _this.setState({
            inFlight: false
          });
        });
      };
    });
    /**
     * Get the section setting containing section information.
     *
     * @param {string} sectionKey The section name.
     * @return {Object} The section setting.
     */
    _defineProperty(_this, "getSectionInfo", function (sectionKey) {
      var _this$state$settings$2;
      return (_this$state$settings$2 = _this.state.settings[sectionKey]) === null || _this$state$settings$2 === void 0 ? void 0 : _this$state$settings$2.find(function (setting) {
        return !setting.key || setting.key === 'active';
      });
    });
    /**
     * Get the section title.
     *
     * @param {string} sectionKey The section name.
     * @return {string} The section title.
     */
    _defineProperty(_this, "getSectionTitle", function (sectionKey) {
      var _this$getSectionInfo;
      return (_this$getSectionInfo = _this.getSectionInfo(sectionKey)) === null || _this$getSectionInfo === void 0 ? void 0 : _this$getSectionInfo.description;
    });
    /**
     * Get the section description.
     *
     * @param {string} sectionKey The section name.
     * @return {string} The section description.
     */
    _defineProperty(_this, "getSectionDescription", function (sectionKey) {
      var _this$getSectionInfo2;
      return (_this$getSectionInfo2 = _this.getSectionInfo(sectionKey)) === null || _this$getSectionInfo2 === void 0 ? void 0 : _this$getSectionInfo2.help;
    });
    /**
     * Get whether a section is active.
     *
     * @param {string} sectionKey The section name.
     * @return {?boolean} Whether the section is active or not. Null if the section is not found or does not support activation.
     */
    _defineProperty(_this, "isSectionActive", function (sectionKey) {
      var _settings$sectionKey;
      var settings = _this.state.settings;
      var activation = (_settings$sectionKey = settings[sectionKey]) === null || _settings$sectionKey === void 0 ? void 0 : _settings$sectionKey.find(function (setting) {
        return setting.key === 'active';
      });
      if (!activation) {
        return null;
      }
      return activation.value;
    });
    /**
     * Get list of section field settings.
     *
     * @param {string} sectionKey The section name.
     * @return {?Array} List of section fields.
     */
    _defineProperty(_this, "getSectionFields", function (sectionKey) {
      var _this$state$settings$3;
      return (_this$state$settings$3 = _this.state.settings[sectionKey]) === null || _this$state$settings$3 === void 0 ? void 0 : _this$state$settings$3.filter(function (setting) {
        return setting.key && setting.key !== 'active';
      });
    });
    _this.state = {
      inFlight: false,
      settings: {},
      error: null
    };
    return _this;
  }
  _inherits(PluginSettings, _Component);
  return _createClass(PluginSettings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSettings();
    }
  }, {
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        title = _this$props3.title,
        description = _this$props3.description,
        hasGreyHeader = _this$props3.hasGreyHeader,
        children = _this$props3.children,
        _this$props3$titleLev = _this$props3.titleLevel,
        titleLevel = _this$props3$titleLev === void 0 ? 1 : _this$props3$titleLev;
      var _this$state = this.state,
        settings = _this$state.settings,
        inFlight = _this$state.inFlight,
        error = _this$state.error;
      return /*#__PURE__*/_jsxs(Fragment, {
        children: [title && /*#__PURE__*/_jsx(SectionHeader, {
          title: title,
          heading: titleLevel,
          description: description
        }), error && /*#__PURE__*/_jsx(Notice, {
          isError: true,
          noticeText: error.message
        }), /*#__PURE__*/_jsxs("div", {
          className: classnames('newspack-plugin-settings', {
            'newspack-wizard-section__is-loading': inFlight && !Object.keys(settings).length
          }),
          children: [Object.keys(settings).map(function (sectionKey) {
            return /*#__PURE__*/_jsx(SettingsSection, {
              disabled: inFlight,
              id: "plugin-settings-".concat(sectionKey),
              sectionKey: sectionKey,
              title: _this2.getSectionTitle(sectionKey),
              description: _this2.getSectionDescription(sectionKey),
              active: _this2.isSectionActive(sectionKey),
              fields: _this2.getSectionFields(sectionKey),
              onChange: _this2.handleSettingChange(sectionKey),
              onUpdate: _this2.handleSectionUpdate(sectionKey),
              hasGreyHeader: hasGreyHeader
            }, sectionKey);
          }), children]
        })]
      });
    }
  }]);
}(Component);
PluginSettings.defaultProps = {
  title: __('General Settings', 'newspack-plugin')
};
PluginSettings.Section = SettingsSection;
export default PluginSettings;