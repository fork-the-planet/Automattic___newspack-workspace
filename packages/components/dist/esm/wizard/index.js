import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { DropdownMenu, MenuItem } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState, forwardRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { category, chevronLeft, moreVertical } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Footer, Notice, Button, NewspackIcon, TabbedNavigation, PluginInstaller, SectionHeader, HandoffMessage } from '../';
import Router from '../proxied-imports/router';
import registerStore, { WIZARD_STORE_NAMESPACE } from './store';
import WizardSnackbar from './components/WizardSnackbar';
import WizardError from './components/WizardError';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
registerStore();

/**
 * Icon registry for resolving icon name strings passed through the data store.
 * React elements from @wordpress/icons can't cross webpack entry point boundaries
 * because each bundle has its own copy of the icon primitives.
 */
var ICON_REGISTRY = {
  chevronLeft: chevronLeft,
  category: category,
  moreVertical: moreVertical
};
var resolveIcon = function resolveIcon(icon) {
  if (typeof icon === 'string') {
    return ICON_REGISTRY[icon] || null;
  }
  return icon;
};
var HashRouter = Router.HashRouter,
  Redirect = Router.Redirect,
  Route = Router.Route,
  Switch = Router.Switch,
  useLocation = Router.useLocation;

/**
 * Reset the header data when a new section is rendered.
 */
var ResetHeaderData = function ResetHeaderData() {
  var location = useLocation();
  var _useDispatch = useDispatch(WIZARD_STORE_NAMESPACE),
    resetHeaderData = _useDispatch.resetHeaderData;
  useEffect(function () {
    resetHeaderData();
    window.scrollTo(0, 0);
  }, [location.pathname, resetHeaderData]);
  return null;
};

/**
 * @typedef  {Object}     WizardProps
 * @property {string}     headerText                The header text.
 * @property {string}     [subHeaderText]           The sub-header text, optional.
 * @property {string}     [apiSlug]                 The API slug, optional.
 * @property {string}     [className]               CSS classes, optional.
 * @property {any[]}      sections                  Array of sections.
 * @property {boolean}    [hasSimpleFooter]         Indicates if a simple footer is used, optional.
 * @property {() => void} [renderAboveSections]     Function to render content above sections, optional.
 * @property {string[]}   [requiredPlugins]         Array of required plugin strings, optional.
 * @property {boolean}    [isInitialFetchTriggered] Indicates if the initial fetch should be triggered, optional.
 */

/**
 * Wizard Component
 *
 * Provides a tabbed UI with history.
 *
 * @param {WizardProps} props
 * @return {JSX.Element} Wizard component
 */
var Wizard = function Wizard(_ref, ref) {
  var _ref$sections = _ref.sections,
    sections = _ref$sections === void 0 ? [] : _ref$sections,
    headerText = _ref.headerText,
    apiSlug = _ref.apiSlug,
    _ref$sharedProps = _ref.sharedProps,
    sharedProps = _ref$sharedProps === void 0 ? {} : _ref$sharedProps,
    subHeaderText = _ref.subHeaderText,
    hasSimpleFooter = _ref.hasSimpleFooter,
    className = _ref.className,
    renderAboveSections = _ref.renderAboveSections,
    _ref$requiredPlugins = _ref.requiredPlugins,
    requiredPlugins = _ref$requiredPlugins === void 0 ? [] : _ref$requiredPlugins,
    _ref$isInitialFetchTr = _ref.isInitialFetchTriggered,
    isInitialFetchTriggered = _ref$isInitialFetchTr === void 0 ? true : _ref$isInitialFetchTr,
    _ref$fixedHeader = _ref.fixedHeader,
    fixedHeader = _ref$fixedHeader === void 0 ? false : _ref$fixedHeader;
  var isLoading = useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).isLoading();
  });
  var isQuietLoading = useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).isQuietLoading();
  });
  var headerData = useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).getHeaderData();
  });
  var notices = useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).getNotices();
  });
  var actions = headerData.actions,
    backNav = headerData.backNav,
    badges = headerData.badges,
    sectionDescription = headerData.sectionDescription,
    sectionMenu = headerData.sectionMenu,
    sectionName = headerData.sectionName,
    sectionTitle = headerData.sectionTitle,
    sectionPrimaryAction = headerData.sectionPrimaryAction,
    sectionSecondaryAction = headerData.sectionSecondaryAction;
  var mainActions = actions === null || actions === void 0 ? void 0 : actions.filter(function (action) {
    return action.type === 'primary' || action.type === 'secondary';
  });
  var moreActions = actions === null || actions === void 0 ? void 0 : actions.filter(function (action) {
    return action.type === 'more';
  });

  // Trigger initial data fetch. Some sections might not use the wizard data,
  // but for consistency, fetching is triggered regardless of the section.
  useSelect(function (select) {
    return isInitialFetchTriggered && select(WIZARD_STORE_NAMESPACE).getWizardAPIData(apiSlug);
  });
  var displayedSections = sections.filter(function (section) {
    return !section.isHidden;
  });
  var _useState = useState(requiredPlugins.length === 0),
    _useState2 = _slicedToArray(_useState, 2),
    pluginRequirementsSatisfied = _useState2[0],
    setPluginRequirementsSatisfied = _useState2[1];
  if (!pluginRequirementsSatisfied) {
    headerText = requiredPlugins.length > 1 ? __('Required plugins', 'newspack-plugin') : __('Required plugin', 'newspack-plugin');
    displayedSections = [{
      path: '/',
      render: function render() {
        return /*#__PURE__*/_jsx(PluginInstaller, {
          plugins: requiredPlugins,
          onStatus: function onStatus(_ref2) {
            var complete = _ref2.complete;
            return setPluginRequirementsSatisfied(complete);
          }
        });
      }
    }];
  }

  // When plugins are required but not yet satisfied, `displayedSections` is replaced with
  // the PluginInstaller. Use it for routing so the installer actually mounts and runs.
  var routedSections = pluginRequirementsSatisfied ? sections : displayedSections;
  var urlWithoutHash = window.location.href.split('#')[0];
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    children: [/*#__PURE__*/_jsxs("div", {
      className: classnames(isLoading ? 'newspack-wizard__is-loading' : 'newspack-wizard__is-loaded', {
        'newspack-wizard__is-loading-quiet': isQuietLoading,
        'newspack-wizard__fixed-header': fixedHeader
      }),
      children: [/*#__PURE__*/_jsxs(HashRouter, {
        hashType: "slash",
        children: [newspack_aux_data.is_debug_mode && /*#__PURE__*/_jsx(Notice, {
          debugMode: true
        }), /*#__PURE__*/_jsxs("div", {
          className: "newspack-wizard__header",
          children: [/*#__PURE__*/_jsx("div", {
            className: "newspack-wizard__header__inner",
            children: /*#__PURE__*/_jsxs("div", {
              className: "newspack-wizard__title",
              children: [newspack_urls.dashboard !== urlWithoutHash ? /*#__PURE__*/_jsx(Button, {
                isLink: true,
                href: newspack_urls.dashboard,
                label: __('Return to Dashboard', 'newspack-plugin'),
                showTooltip: true,
                icon: category,
                iconSize: 36,
                children: /*#__PURE__*/_jsx(NewspackIcon, {
                  size: 36
                })
              }) : /*#__PURE__*/_jsx(NewspackIcon, {
                size: 36
              }), /*#__PURE__*/_jsxs("div", {
                children: [headerText && /*#__PURE__*/_jsxs("h2", {
                  className: "newspack-wizard__header__title",
                  children: [headerText, sectionName && /*#__PURE__*/_jsxs("span", {
                    className: "newspack-wizard__header__section",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "newspack-wizard__header__section__separator",
                      children: " / "
                    }), " ", sectionName]
                  })]
                }), subHeaderText && /*#__PURE__*/_jsx("span", {
                  children: subHeaderText
                })]
              })]
            })
          }), (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && /*#__PURE__*/_jsxs("div", {
            className: "newspack-wizard__header__actions",
            children: [mainActions.map(function (action, index) {
              return /*#__PURE__*/_jsx(Button, {
                className: "newspack-wizard__header__actions__main",
                href: action.href,
                icon: resolveIcon(action.icon),
                variant: action.type,
                onClick: action.action,
                disabled: action.disabled || false,
                isDestructive: action.destructive || false,
                children: action.label
              }, index);
            }), /*#__PURE__*/_jsx(DropdownMenu, {
              className: (moreActions === null || moreActions === void 0 ? void 0 : moreActions.length) === 0 ? 'newspack-wizard__header__actions__more--primary-only' : '',
              icon: moreVertical,
              label: __('More', 'newspack-plugin'),
              popoverProps: {
                className: 'newspack-wizard__header__actions__more'
              },
              children: function children() {
                return actions.map(function (action, index) {
                  return /*#__PURE__*/_jsx(MenuItem, {
                    className: action.type === 'primary' || action.type === 'secondary' ? 'newspack-wizard__header__actions__more__main' : 'newspack-wizard__header__actions__more__more',
                    icon: action.icon,
                    href: action.href,
                    onClick: action.action,
                    disabled: action.disabled || false,
                    isDestructive: action.destructive || false,
                    children: action.label
                  }, index);
                });
              }
            })]
          })]
        }), displayedSections.length > 1 && /*#__PURE__*/_jsx(TabbedNavigation, {
          items: displayedSections,
          children: /*#__PURE__*/_jsx(WizardError, {})
        }), /*#__PURE__*/_jsx(HandoffMessage, {}), sections.length > 1 && /*#__PURE__*/_jsx(ResetHeaderData, {}), /*#__PURE__*/_jsx("div", {
          className: "newspack-wizard__main",
          children: /*#__PURE__*/_jsxs(Switch, {
            children: [routedSections.map(function (section, index) {
              var _section$exact;
              var SectionComponent = section.render;
              var sectionProps = section.props || {};
              return /*#__PURE__*/_jsx(Route, {
                exact: (_section$exact = section.exact) !== null && _section$exact !== void 0 ? _section$exact : false,
                path: section.path,
                render: function render(routerProps) {
                  return /*#__PURE__*/_jsxs("div", {
                    className: classnames('newspack-wizard__content', className, {
                      'newspack-wizard__content--full-width': section.fullWidth
                    }),
                    children: ['function' === typeof renderAboveSections ? renderAboveSections() : null, (sectionTitle || section.title) && /*#__PURE__*/_jsx(SectionHeader, {
                      className: "newspack-wizard__section-header",
                      backNav: backNav || section.backNav,
                      title: sectionTitle || section.title,
                      description: sectionDescription || section.description,
                      badges: badges || section.badges,
                      menu: sectionMenu || section.menu,
                      primaryAction: sectionPrimaryAction || section.primaryAction,
                      secondaryAction: sectionSecondaryAction || section.secondaryAction,
                      heading: 1,
                      noMargin: true
                    }), /*#__PURE__*/_jsx(SectionComponent, _objectSpread(_objectSpread(_objectSpread({}, routerProps), sectionProps), sharedProps))]
                  });
                }
              }, index);
            }), /*#__PURE__*/_jsx(Redirect, {
              to: displayedSections[0].path
            })]
          })
        })]
      }), (notices === null || notices === void 0 ? void 0 : notices.length) > 0 && notices.map(function (notice, index) {
        return /*#__PURE__*/_jsx(WizardSnackbar, {
          type: notice.type,
          id: notice.id,
          actions: notice.actions,
          children: notice.message
        }, notice.id || index);
      })]
    }), !isLoading && /*#__PURE__*/_jsx(Footer, {
      simple: hasSimpleFooter
    })]
  });
};
export default forwardRef(Wizard);