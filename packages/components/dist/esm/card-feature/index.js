/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { DropdownMenu, __experimentalHStack as HStack } from '@wordpress/components'; // eslint-disable-line @wordpress/no-unsafe-wp-apis
import { moreVertical } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import Badge from '../badge';
import Button from '../button';
import Card from '../card';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * CardFeature component.
 *
 * A card for presenting a named feature or setting with a predictable
 * action model: a primary button, an optional "More" dropdown when enabled,
 * and an automatic badge reflecting the current state.
 */
var CardFeature = function CardFeature(_ref) {
  var title = _ref.title,
    description = _ref.description,
    icon = _ref.icon,
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? false : _ref$enabled,
    requirements = _ref.requirements,
    enableLabel = _ref.enableLabel,
    configureLabel = _ref.configureLabel,
    onEnable = _ref.onEnable,
    onConfigure = _ref.onConfigure,
    moreControls = _ref.moreControls,
    badgeText = _ref.badgeText,
    _ref$badgeLevel = _ref.badgeLevel,
    badgeLevel = _ref$badgeLevel === void 0 ? 'success' : _ref$badgeLevel,
    className = _ref.className;
  var isMuted = !!requirements;
  var classes = classnames('newspack-card-feature', className, {
    'newspack-card-feature--muted': isMuted
  });
  var badge;
  if (requirements) {
    badge = {
      text: requirements,
      level: 'error'
    };
  } else if (enabled) {
    badge = {
      text: badgeText !== null && badgeText !== void 0 ? badgeText : __('Enabled', 'newspack-plugin'),
      level: badgeLevel
    };
  }
  var buttonLabel = enabled && !requirements ? configureLabel !== null && configureLabel !== void 0 ? configureLabel : __('Configure', 'newspack-plugin') : enableLabel !== null && enableLabel !== void 0 ? enableLabel : __('Enable', 'newspack-plugin');
  var handleButtonClick = function handleButtonClick() {
    if (enabled && !requirements) {
      onConfigure === null || onConfigure === void 0 || onConfigure();
    } else {
      onEnable === null || onEnable === void 0 || onEnable();
    }
  };
  var iconClasses = icon ? classnames('newspack-card-feature__icon', {
    'newspack-card-feature__icon--radius-small': !!icon.backgroundColor && icon.radius !== 'full',
    'newspack-card-feature__icon--radius-full': icon.radius === 'full'
  }) : undefined;
  return /*#__PURE__*/_jsx(Card, {
    className: classes,
    __experimentalCoreCard: true,
    __experimentalCoreProps: {
      headerStyle: {
        padding: 32
      },
      header: /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(HStack, {
          alignment: "top",
          spacing: 4,
          children: [/*#__PURE__*/_jsxs("div", {
            className: "newspack-card-feature__content",
            children: [/*#__PURE__*/_jsx("h2", {
              className: "newspack-card-feature__title",
              children: title
            }), description && /*#__PURE__*/_jsx("p", {
              className: "newspack-card-feature__description",
              children: description
            })]
          }), icon && /*#__PURE__*/_jsx("div", {
            className: iconClasses,
            style: {
              backgroundColor: icon.backgroundColor,
              color: icon.fill
            },
            children: icon.node
          })]
        }), /*#__PURE__*/_jsxs(HStack, {
          alignment: "edge",
          children: [/*#__PURE__*/_jsxs(HStack, {
            expanded: false,
            spacing: "8px",
            children: [/*#__PURE__*/_jsx(Button, {
              variant: "secondary",
              disabled: isMuted,
              onClick: handleButtonClick,
              children: buttonLabel
            }), enabled && !requirements && !!(moreControls !== null && moreControls !== void 0 && moreControls.length) && /*#__PURE__*/_jsx(DropdownMenu, {
              icon: moreVertical,
              label: __('More', 'newspack-plugin'),
              controls: moreControls
            })]
          }), badge && /*#__PURE__*/_jsx(Badge, {
            text: badge.text,
            level: badge.level
          })]
        })]
      })
    }
  });
};
export default CardFeature;