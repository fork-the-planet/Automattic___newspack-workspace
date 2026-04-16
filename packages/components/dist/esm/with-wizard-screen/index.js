import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { category } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Button, Handoff, NewspackIcon, Notice, HandoffMessage, TabbedNavigation } from '../';
import { buttonProps } from '../button-props';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Higher-Order Component to provide plugin management and error handling to Newspack Wizards.
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function withWizardScreen(WrappedComponent) {
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
    var retrievedButtonProps = buttonProps(buttonAction);
    var retrievedSecondaryButtonProps = buttonProps(secondaryButtonAction);
    var SecondaryCTAComponent = retrievedSecondaryButtonProps.plugin ? Handoff : Button;
    var shouldRenderPrimaryButton = buttonText && buttonAction;
    var shouldRenderSecondaryButton = secondaryButtonText && secondaryButtonAction;
    var renderPrimaryButton = function renderPrimaryButton() {
      var overridingProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return retrievedButtonProps.plugin ? /*#__PURE__*/_jsx(Handoff, _objectSpread(_objectSpread(_objectSpread({
        isPrimary: true
      }, retrievedButtonProps), overridingProps), {}, {
        children: buttonText
      })) : /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
        isPrimary: !buttonDisabled,
        isSecondary: !!buttonDisabled,
        disabled: buttonDisabled
        // Allow overridingProps to set children.
        // eslint-disable-next-line react/no-children-prop
        ,
        children: buttonText
      }, retrievedButtonProps), overridingProps));
    };
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [newspack_aux_data.is_debug_mode && /*#__PURE__*/_jsx(Notice, {
        debugMode: true
      }), /*#__PURE__*/_jsx("div", {
        className: "newspack-wizard__header",
        children: /*#__PURE__*/_jsx("div", {
          className: "newspack-wizard__header__inner",
          children: /*#__PURE__*/_jsxs("div", {
            className: "newspack-wizard__title",
            children: [/*#__PURE__*/_jsx(Button, {
              isLink: true,
              href: newspack_urls.dashboard,
              label: __('Return to Dashboard', 'newspack-plugin'),
              showTooltip: true,
              icon: category,
              iconSize: 36,
              children: /*#__PURE__*/_jsx(NewspackIcon, {
                size: 36
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [headerText && /*#__PURE__*/_jsx("h2", {
                children: headerText
              }), subHeaderText && /*#__PURE__*/_jsx("span", {
                children: subHeaderText
              })]
            })]
          })
        })
      }), tabbedNavigation && /*#__PURE__*/_jsx(TabbedNavigation, {
        disableUpcoming: disableUpcomingInTabbedNavigation,
        items: tabbedNavigation.filter(function (item) {
          return !item.isHiddenInNav;
        })
      }), /*#__PURE__*/_jsx(HandoffMessage, {}), /*#__PURE__*/_jsxs("div", {
        className: classnames('newspack-wizard newspack-wizard__content', className),
        children: [typeof renderAboveContent === 'function' ? renderAboveContent() : null, /*#__PURE__*/_jsx(WrappedComponent, _objectSpread(_objectSpread({}, props), {}, {
          renderPrimaryButton: renderPrimaryButton
        })), (shouldRenderPrimaryButton || shouldRenderSecondaryButton) && /*#__PURE__*/_jsxs("div", {
          className: "newspack-buttons-card",
          children: [shouldRenderPrimaryButton && !hidePrimaryButton && renderPrimaryButton(), shouldRenderSecondaryButton && /*#__PURE__*/_jsx(SecondaryCTAComponent, _objectSpread(_objectSpread({
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