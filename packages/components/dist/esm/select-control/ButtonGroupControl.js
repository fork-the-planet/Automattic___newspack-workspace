/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/icons';
import { BaseControl, Button, ButtonGroup } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { hooks } from '..';
import { jsx as _jsx } from "react/jsx-runtime";
var ButtonGroupControl = function ButtonGroupControl(_ref) {
  var buttonOptions = _ref.buttonOptions,
    buttonSmall = _ref.buttonSmall,
    className = _ref.className,
    help = _ref.help,
    hideLabelFromVision = _ref.hideLabelFromVision,
    label = _ref.label,
    onChange = _ref.onChange,
    value = _ref.value;
  var id = hooks.useUniqueId('button-group');
  return /*#__PURE__*/_jsx(BaseControl, {
    label: label,
    help: help,
    hideLabelFromVision: hideLabelFromVision,
    id: id.current,
    className: classnames(className, 'components-select-control'),
    children: /*#__PURE__*/_jsx(ButtonGroup, {
      children: buttonOptions.map(function (option) {
        var isSelected = value === option.value;
        var Label = function Label() {
          return option.label;
        };
        if (option.icon) {
          // eslint-disable-next-line react/display-name
          Label = function Label() {
            return /*#__PURE__*/_jsx(Icon, {
              icon: option.icon
            });
          };
        }
        return /*#__PURE__*/_jsx(Button, {
          variant: isSelected ? 'primary' : null,
          isPressed: isSelected,
          onClick: function onClick() {
            return onChange(option.value);
          },
          isSmall: buttonSmall,
          children: /*#__PURE__*/_jsx(Label, {})
        }, option.value);
      })
    })
  });
};
export default ButtonGroupControl;