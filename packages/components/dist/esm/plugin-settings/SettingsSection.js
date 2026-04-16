import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Ads Settings Section.
 */

/**
 * WordPress dependencies
 */
import { Fragment, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { CheckboxControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { ActionCard, Button, Grid, Notice, SelectControl, TextControl } from '../';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var isSelectControl = function isSelectControl(setting) {
  return Array.isArray(setting.options) && setting.options.length;
};
var getControlComponent = function getControlComponent(setting) {
  if (isSelectControl(setting)) {
    return SelectControl;
  }
  switch (setting.type) {
    case 'checkbox':
    case 'boolean':
      return CheckboxControl;
    default:
      return TextControl;
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
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
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
    return applyFilters("newspack.settingSection.".concat(sectionKey, ".").concat(name), defaultComponent, props);
  };
  var columns = 2;
  if (fields.length % 3 === 0) {
    columns = 3;
  } else if (fields.length === 1) {
    columns = 1;
  }
  return /*#__PURE__*/_jsx(ActionCard, {
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
    actionContent: (active || null === active) && createFilter('buttons', /*#__PURE__*/_jsx(Button, {
      variant: "primary",
      disabled: disabled || saveDisabled,
      onClick: function onClick() {
        onUpdate();
        setSaveDisabled(true);
      },
      children: __('Save Settings', 'newspack')
    })),
    children: (active || active === null) && /*#__PURE__*/_jsxs(Fragment, {
      children: [(error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/_jsx(Notice, {
        noticeText: error.message,
        isError: true
      }), createFilter('beforeControls'), /*#__PURE__*/_jsx(Grid, {
        columns: columns,
        gutter: 32,
        children: fields.map(function (setting) {
          var Control = getControlComponent(setting); // eslint-disable-line @wordpress/no-unused-vars-before-return, no-unused-vars
          return applyFilters("newspack.settingsSection.".concat(sectionKey, ".control"), /*#__PURE__*/_jsx(Control, _objectSpread({}, getControlProps(setting)), setting.key), {
            sectionKey: sectionKey,
            setting: setting,
            onChange: _onChange
          });
        })
      })]
    })
  });
};
export default SettingsSection;