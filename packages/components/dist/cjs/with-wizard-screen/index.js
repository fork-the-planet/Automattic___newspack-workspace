"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withWizardScreen;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _ = require("../");
var _buttonProps = require("../button-props");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies
 */ /**
 * External dependencies
 */ /**
 * Higher-Order Component to provide plugin management and error handling to Newspack Wizards.
 */
function withWizardScreen(WrappedComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    hidePrimaryButton = _ref.hidePrimaryButton;
  var WrappedWithWizardScreen = function WrappedWithWizardScreen(props) {
    var className = props.className,
      buttonText = props.buttonText,
      buttonAction = props.buttonAction,
      buttonDisabled = props.buttonDisabled,
      headerText = props.headerText,
      subHeaderText = props.subHeaderText,
      tabbedNavigation = props.tabbedNavigation,
      secondaryButtonText = props.secondaryButtonText,
      secondaryButtonAction = props.secondaryButtonAction,
      renderAboveContent = props.renderAboveContent,
      disableUpcomingInTabbedNavigation = props.disableUpcomingInTabbedNavigation;
    var retrievedButtonProps = (0, _buttonProps.buttonProps)(buttonAction);
    var retrievedSecondaryButtonProps = (0, _buttonProps.buttonProps)(secondaryButtonAction);
    var SecondaryCTAComponent = retrievedSecondaryButtonProps.plugin ? _.Handoff : _.Button;
    var shouldRenderPrimaryButton = buttonText && buttonAction;
    var shouldRenderSecondaryButton = secondaryButtonText && secondaryButtonAction;
    var renderPrimaryButton = function renderPrimaryButton() {
      var overridingProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return retrievedButtonProps.plugin ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Handoff, _objectSpread(_objectSpread(_objectSpread({
        isPrimary: true
      }, retrievedButtonProps), overridingProps), {}, {
        children: buttonText
      })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
        isPrimary: !buttonDisabled,
        isSecondary: !!buttonDisabled,
        disabled: buttonDisabled
        // Allow overridingProps to set children.
        // eslint-disable-next-line react/no-children-prop
        ,
        children: buttonText
      }, retrievedButtonProps), overridingProps));
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [newspack_aux_data.is_debug_mode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        debugMode: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "newspack-wizard__header",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "newspack-wizard__header__inner",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "newspack-wizard__title",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              isLink: true,
              href: newspack_urls.dashboard,
              label: (0, _i18n.__)('Return to Dashboard', 'newspack-plugin'),
              showTooltip: true,
              icon: _icons.category,
              iconSize: 36,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.NewspackIcon, {
                size: 36
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [headerText && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
                children: headerText
              }), subHeaderText && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: subHeaderText
              })]
            })]
          })
        })
      }), tabbedNavigation && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.TabbedNavigation, {
        disableUpcoming: disableUpcomingInTabbedNavigation,
        items: tabbedNavigation.filter(function (item) {
          return !item.isHiddenInNav;
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.HandoffMessage, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])('newspack-wizard newspack-wizard__content', className),
        children: [typeof renderAboveContent === 'function' ? renderAboveContent() : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, _objectSpread(_objectSpread({}, props), {}, {
          renderPrimaryButton: renderPrimaryButton
        })), (shouldRenderPrimaryButton || shouldRenderSecondaryButton) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-buttons-card",
          children: [shouldRenderPrimaryButton && !hidePrimaryButton && renderPrimaryButton(), shouldRenderSecondaryButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(SecondaryCTAComponent, _objectSpread(_objectSpread({
            isSecondary: true
          }, retrievedSecondaryButtonProps), {}, {
            children: secondaryButtonText
          }))]
        })]
      })]
    });
  };
  return WrappedWithWizardScreen;
}