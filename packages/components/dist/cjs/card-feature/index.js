"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _icons = require("@wordpress/icons");
var _badge = _interopRequireDefault(require("../badge"));
var _button = _interopRequireDefault(require("../button"));
var _card = _interopRequireDefault(require("../card"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

// eslint-disable-line @wordpress/no-unsafe-wp-apis

/**
 * Internal dependencies
 */

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
  var classes = (0, _classnames["default"])('newspack-card-feature', className, {
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
      text: badgeText !== null && badgeText !== void 0 ? badgeText : (0, _i18n.__)('Enabled', 'newspack-plugin'),
      level: badgeLevel
    };
  }
  var buttonLabel = enabled && !requirements ? configureLabel !== null && configureLabel !== void 0 ? configureLabel : (0, _i18n.__)('Configure', 'newspack-plugin') : enableLabel !== null && enableLabel !== void 0 ? enableLabel : (0, _i18n.__)('Enable', 'newspack-plugin');
  var handleButtonClick = function handleButtonClick() {
    if (enabled && !requirements) {
      onConfigure === null || onConfigure === void 0 || onConfigure();
    } else {
      onEnable === null || onEnable === void 0 || onEnable();
    }
  };
  var iconClasses = icon ? (0, _classnames["default"])('newspack-card-feature__icon', {
    'newspack-card-feature__icon--radius-small': !!icon.backgroundColor && icon.radius !== 'full',
    'newspack-card-feature__icon--radius-full': icon.radius === 'full'
  }) : undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_card["default"], {
    className: classes,
    __experimentalCoreCard: true,
    __experimentalCoreProps: {
      headerStyle: {
        padding: 32
      },
      header: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.__experimentalHStack, {
          alignment: "top",
          spacing: 4,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "newspack-card-feature__content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              className: "newspack-card-feature__title",
              children: title
            }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "newspack-card-feature__description",
              children: description
            })]
          }), icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: iconClasses,
            style: {
              backgroundColor: icon.backgroundColor,
              color: icon.fill
            },
            children: icon.node
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.__experimentalHStack, {
          alignment: "edge",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.__experimentalHStack, {
            expanded: false,
            spacing: "8px",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
              variant: "secondary",
              disabled: isMuted,
              onClick: handleButtonClick,
              children: buttonLabel
            }), enabled && !requirements && !!(moreControls !== null && moreControls !== void 0 && moreControls.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DropdownMenu, {
              icon: _icons.moreVertical,
              label: (0, _i18n.__)('More', 'newspack-plugin'),
              controls: moreControls
            })]
          }), badge && /*#__PURE__*/(0, _jsxRuntime.jsx)(_badge["default"], {
            text: badge.text,
            level: badge.level
          })]
        })]
      })
    }
  });
};
var _default = exports["default"] = CardFeature;