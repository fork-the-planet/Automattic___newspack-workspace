import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["actions", "actionType", "as", "buttonsCard", "className", "footer", "header", "headerStyle", "childrenStyle", "footerStyle", "icon", "iconBackgroundColor", "isActive", "isDraggable", "isFirstTarget", "isLastTarget", "isNarrow", "isSmall", "dragIndex", "onDragCallback", "onToggle", "onHeaderClick", "noBorder", "noMargin", "children", "hasGreyHeader"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Card using WP Core's Card component.
 * https://wordpress.github.io/gutenberg/?path=/docs/components-card--docs
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Card as CardWrapper, CardHeader, CardFooter, DropdownMenu, MenuItem, ToggleControl } from '@wordpress/components';
import { Icon, chevronDown, chevronRight, chevronUp, dragHandle, moreVertical } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style-core.scss';

/**
 * External dependencies
 */
import classNames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CoreCard = function CoreCard(_ref) {
  var actions = _ref.actions,
    actionType = _ref.actionType,
    as = _ref.as,
    buttonsCard = _ref.buttonsCard,
    className = _ref.className,
    footer = _ref.footer,
    header = _ref.header,
    headerStyle = _ref.headerStyle,
    childrenStyle = _ref.childrenStyle,
    footerStyle = _ref.footerStyle,
    icon = _ref.icon,
    iconBackgroundColor = _ref.iconBackgroundColor,
    isActive = _ref.isActive,
    isDraggable = _ref.isDraggable,
    isFirstTarget = _ref.isFirstTarget,
    isLastTarget = _ref.isLastTarget,
    isNarrow = _ref.isNarrow,
    isSmall = _ref.isSmall,
    dragIndex = _ref.dragIndex,
    _ref$onDragCallback = _ref.onDragCallback,
    onDragCallback = _ref$onDragCallback === void 0 ? function () {} : _ref$onDragCallback,
    _ref$onToggle = _ref.onToggle,
    onToggle = _ref$onToggle === void 0 ? function () {} : _ref$onToggle,
    onHeaderClick = _ref.onHeaderClick,
    noBorder = _ref.noBorder,
    noMargin = _ref.noMargin,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? null : _ref$children,
    hasGreyHeader = _ref.hasGreyHeader,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var classes = classNames('newspack-card--core', className, (buttonsCard || as === 'a') && 'newspack-card--core__buttons-card', (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && 'newspack-card--core__header--has-actions', isDraggable && 'newspack-card--core__is-draggable', isNarrow && 'newspack-card--core__is-narrow', isSmall && 'newspack-card--core__is-small', icon && 'newspack-card--core__has-icon', iconBackgroundColor && 'newspack-card--core__has-icon-background-color', isActive && 'newspack-card--core__is-active', children && 'newspack-card--core__has-children', noMargin && 'newspack-card--core__no-margin', hasGreyHeader && 'newspack-card--core__has-grey-header');
  var sizeProps = isSmall ? 'small' : otherProps.size;
  if (buttonsCard || as === 'a') {
    if (!isSmall) {
      sizeProps = 'large';
    }
    if (as !== 'a') {
      otherProps.as = 'a'; // Render as an anchor tag.
    }
  }
  if (noBorder) {
    otherProps.isBorderless = true;
  }
  return /*#__PURE__*/_jsxs(CardWrapper, _objectSpread(_objectSpread({
    as: as,
    className: classes
  }, otherProps), {}, {
    children: [(header || icon) && /*#__PURE__*/_jsxs(CardHeader, {
      as: onHeaderClick ? 'button' : undefined,
      className: classNames('newspack-card--core__header', isDraggable && 'newspack-card--core__header--is-draggable'),
      style: headerStyle,
      size: sizeProps,
      gap: 4,
      onClick: onHeaderClick,
      children: [isDraggable && /*#__PURE__*/_jsxs("div", {
        className: "newspack-card--core__header__draggable-controls",
        children: [/*#__PURE__*/_jsx("div", {
          className: "newspack-card--core__header__draggable-controls__drag-handle",
          children: /*#__PURE__*/_jsx(Icon, {
            icon: dragHandle
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "newspack-card--core__header__draggable-controls__move-buttons",
          children: [/*#__PURE__*/_jsx(Button, {
            icon: chevronUp,
            onClick: function onClick() {
              return onDragCallback(dragIndex, dragIndex - 1);
            },
            disabled: isFirstTarget,
            label: __('Move one position up', 'newspack-plugin'),
            size: "small"
          }), /*#__PURE__*/_jsx(Button, {
            icon: chevronDown,
            onClick: function onClick() {
              return onDragCallback(dragIndex, dragIndex + 1);
            },
            disabled: isLastTarget,
            label: __('Move one position down', 'newspack-plugin'),
            size: "small"
          })]
        })]
      }), icon && /*#__PURE__*/_jsx("div", {
        className: "newspack-card--core__icon",
        children: /*#__PURE__*/_jsx(Icon, {
          icon: icon,
          height: isSmall ? 24 : 48,
          width: isSmall ? 24 : 48
        })
      }), (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && actionType === 'toggle' && /*#__PURE__*/_jsx(ToggleControl, {
        className: "newspack-card--core__action",
        label: otherProps.title,
        hideLabelFromVision: true,
        checked: isActive,
        onChange: onToggle
      }), header && /*#__PURE__*/_jsx("div", {
        className: "newspack-card--core__header-content",
        children: header
      }), !(actions !== null && actions !== void 0 && actions.length) > 0 && actionType === 'chevron' && /*#__PURE__*/_jsx(Icon, {
        className: "newspack-card--core__action",
        icon: chevronRight,
        height: 24,
        width: 24
      }), !(actions !== null && actions !== void 0 && actions.length) > 0 && actionType === 'toggle' && /*#__PURE__*/_jsx(ToggleControl, {
        className: "newspack-card--core__action",
        label: otherProps.title,
        hideLabelFromVision: true,
        checked: isActive,
        onChange: onToggle
      }), (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && /*#__PURE__*/_jsx(DropdownMenu, {
        icon: moreVertical,
        label: __('More', 'newspack-plugin'),
        children: function children() {
          return actions.map(function (action, index) {
            return /*#__PURE__*/_jsx(MenuItem, {
              icon: action.icon,
              onClick: action.action,
              disabled: action.disabled || false,
              isDestructive: action.destructive || false,
              children: action.label
            }, index);
          });
        }
      })]
    }), children && /*#__PURE__*/_jsx("div", {
      className: "newspack-card--core__body",
      style: childrenStyle,
      children: children
    }), footer && /*#__PURE__*/_jsx(CardFooter, {
      size: sizeProps,
      style: footerStyle,
      children: footer
    })]
  }));
};
export default CoreCard;