"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _element = require("@wordpress/element");
var _hooks = require("@wordpress/hooks");
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _ = require("../");
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * Ads Settings Section.
 */ /**
 * WordPress dependencies
 */ /**
 * Internal dependencies
 */
var isSelectControl = function isSelectControl(setting) {
  return Array.isArray(setting.options) && setting.options.length;
};
var getControlComponent = function getControlComponent(setting) {
  if (isSelectControl(setting)) {
    return _.SelectControl;
  }
  switch (setting.type) {
    case 'checkbox':
    case 'boolean':
      return _components.CheckboxControl;
    default:
      return _.TextControl;
  }
};
var getControlType = function getControlType(setting) {
  switch (setting.type) {
    case 'int':
    case 'integer':
    case 'float':
    case 'number':
      return 'number';
    case 'string':
    case 'text':
      return 'text';
    case 'password':
      return 'password';
    case 'boolean':
    case 'checkbox':
      return 'checkbox';
    default:
      return null;
  }
};
var SettingsSection = function SettingsSection(props) {
  var _props$id;
  var _useState = (0, _element.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    saveDisabled = _useState2[0],
    setSaveDisabled = _useState2[1];
  var error = props.error,
    sectionKey = props.sectionKey,
    active = props.active,
    title = props.title,
    description = props.description,
    fields = props.fields,
    disabled = props.disabled,
    _onChange = props.onChange,
    onUpdate = props.onUpdate;
  var getControlProps = function getControlProps(setting) {
    var _setting$options;
    return {
      disabled: disabled,
      name: "".concat(setting.section, "_").concat(setting.key),
      type: getControlType(setting),
      label: setting.description,
      help: setting.help || null,
      options: ((_setting$options = setting.options) === null || _setting$options === void 0 ? void 0 : _setting$options.map(function (option) {
        return {
          value: option.value,
          label: option.name || option.label
        };
      })) || null,
      value: setting.value,
      multiple: isSelectControl(setting) && setting.multiple ? true : null,
      checked: setting.type === 'boolean' ? !!setting.value : null,
      onChange: function onChange(value) {
        _onChange(setting.key, value);
        setSaveDisabled(false);
      }
    };
  };
  var createFilter = function createFilter(name) {
    var defaultComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return (0, _hooks.applyFilters)("newspack.settingSection.".concat(sectionKey, ".").concat(name), defaultComponent, props);
  };
  var columns = 2;
  if (fields.length % 3 === 0) {
    columns = 3;
  } else if (fields.length === 1) {
    columns = 1;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.ActionCard, {
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : null,
    isMedium: true,
    disabled: disabled,
    title: title,
    description: description,
    toggleChecked: active,
    hasGreyHeader: active || null === active,
    toggleOnChange: active !== null ? function (value) {
      return onUpdate({
        active: value
      });
    } : null,
    actionContent: (active || null === active) && createFilter('buttons', /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
      variant: "primary",
      disabled: disabled || saveDisabled,
      onClick: function onClick() {
        onUpdate();
        setSaveDisabled(true);
      },
      children: (0, _i18n.__)('Save Settings', 'newspack')
    })),
    children: (active || active === null) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
      children: [(error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        noticeText: error.message,
        isError: true
      }), createFilter('beforeControls'), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Grid, {
        columns: columns,
        gutter: 32,
        children: fields.map(function (setting) {
          var Control = getControlComponent(setting); // eslint-disable-line @wordpress/no-unused-vars-before-return, no-unused-vars
          return (0, _hooks.applyFilters)("newspack.settingsSection.".concat(sectionKey, ".control"), /*#__PURE__*/(0, _jsxRuntime.jsx)(Control, _objectSpread({}, getControlProps(setting)), setting.key), {
            sectionKey: sectionKey,
            setting: setting,
            onChange: _onChange
          });
        })
      })]
    })
  });
};
var _default = exports["default"] = SettingsSection;