/**
 * Card - Settings group component.
 */

/**
 * Internal dependencies
 */
import { Card } from '../';
import './style.scss';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var CardSettingsGroup = function CardSettingsGroup(_ref) {
  var _ref$actionType = _ref.actionType,
    actionType = _ref$actionType === void 0 ? 'none' : _ref$actionType,
    children = _ref.children,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '' : _ref$description,
    _ref$isActive = _ref.isActive,
    isActive = _ref$isActive === void 0 ? false : _ref$isActive,
    _ref$onEnable = _ref.onEnable,
    onEnable = _ref$onEnable === void 0 ? function () {} : _ref$onEnable;
  return /*#__PURE__*/_jsx(Card, {
    className: "newspack-card--core--settings-group",
    actionType: actionType,
    isSmall: true,
    __experimentalCoreCard: true,
    __experimentalCoreProps: {
      header: /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("h3", {
          children: title
        }), description && /*#__PURE__*/_jsx("p", {
          children: description
        })]
      }),
      onHeaderClick: onEnable,
      icon: icon,
      iconBackgroundColor: true,
      isActive: isActive,
      title: title
    },
    children: isActive && children
  });
};
export default CardSettingsGroup;