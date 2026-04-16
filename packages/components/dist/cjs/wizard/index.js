"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var _components = require("@wordpress/components");
var _data = require("@wordpress/data");
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _ = require("../");
var _router = _interopRequireDefault(require("../proxied-imports/router"));
var _store = _interopRequireWildcard(require("./store"));
var _WizardSnackbar = _interopRequireDefault(require("./components/WizardSnackbar"));
var _WizardError = _interopRequireDefault(require("./components/WizardError"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * External dependencies.
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies
 */
(0, _store["default"])();

/**
 * Icon registry for resolving icon name strings passed through the data store.
 * React elements from @wordpress/icons can't cross webpack entry point boundaries
 * because each bundle has its own copy of the icon primitives.
 */
var ICON_REGISTRY = {
  chevronLeft: _icons.chevronLeft,
  category: _icons.category,
  moreVertical: _icons.moreVertical
};
var resolveIcon = function resolveIcon(icon) {
  if (typeof icon === 'string') {
    return ICON_REGISTRY[icon] || null;
  }
  return icon;
};
var HashRouter = _router["default"].HashRouter,
  Redirect = _router["default"].Redirect,
  Route = _router["default"].Route,
  Switch = _router["default"].Switch,
  useLocation = _router["default"].useLocation;

/**
 * Reset the header data when a new section is rendered.
 */
var ResetHeaderData = function ResetHeaderData() {
  var location = useLocation();
  var _useDispatch = (0, _data.useDispatch)(_store.WIZARD_STORE_NAMESPACE),
    resetHeaderData = _useDispatch.resetHeaderData;
  (0, _element.useEffect)(function () {
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
  var isLoading = (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).isLoading();
  });
  var isQuietLoading = (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).isQuietLoading();
  });
  var headerData = (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).getHeaderData();
  });
  var notices = (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).getNotices();
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
  (0, _data.useSelect)(function (select) {
    return isInitialFetchTriggered && select(_store.WIZARD_STORE_NAMESPACE).getWizardAPIData(apiSlug);
  });
  var displayedSections = sections.filter(function (section) {
    return !section.isHidden;
  });
  var _useState = (0, _element.useState)(requiredPlugins.length === 0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    pluginRequirementsSatisfied = _useState2[0],
    setPluginRequirementsSatisfied = _useState2[1];
  if (!pluginRequirementsSatisfied) {
    headerText = requiredPlugins.length > 1 ? (0, _i18n.__)('Required plugins', 'newspack-plugin') : (0, _i18n.__)('Required plugin', 'newspack-plugin');
    displayedSections = [{
      path: '/',
      render: function render() {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PluginInstaller, {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])(isLoading ? 'newspack-wizard__is-loading' : 'newspack-wizard__is-loaded', {
        'newspack-wizard__is-loading-quiet': isQuietLoading,
        'newspack-wizard__fixed-header': fixedHeader
      }),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(HashRouter, {
        hashType: "slash",
        children: [newspack_aux_data.is_debug_mode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
          debugMode: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-wizard__header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "newspack-wizard__header__inner",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "newspack-wizard__title",
              children: [newspack_urls.dashboard !== urlWithoutHash ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                isLink: true,
                href: newspack_urls.dashboard,
                label: (0, _i18n.__)('Return to Dashboard', 'newspack-plugin'),
                showTooltip: true,
                icon: _icons.category,
                iconSize: 36,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.NewspackIcon, {
                  size: 36
                })
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_.NewspackIcon, {
                size: 36
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [headerText && /*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
                  className: "newspack-wizard__header__title",
                  children: [headerText, sectionName && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    className: "newspack-wizard__header__section",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "newspack-wizard__header__section__separator",
                      children: " / "
                    }), " ", sectionName]
                  })]
                }), subHeaderText && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: subHeaderText
                })]
              })]
            })
          }), (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "newspack-wizard__header__actions",
            children: [mainActions.map(function (action, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                className: "newspack-wizard__header__actions__main",
                href: action.href,
                icon: resolveIcon(action.icon),
                variant: action.type,
                onClick: action.action,
                disabled: action.disabled || false,
                isDestructive: action.destructive || false,
                children: action.label
              }, index);
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DropdownMenu, {
              className: (moreActions === null || moreActions === void 0 ? void 0 : moreActions.length) === 0 ? 'newspack-wizard__header__actions__more--primary-only' : '',
              icon: _icons.moreVertical,
              label: (0, _i18n.__)('More', 'newspack-plugin'),
              popoverProps: {
                className: 'newspack-wizard__header__actions__more'
              },
              children: function children() {
                return actions.map(function (action, index) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MenuItem, {
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
        }), displayedSections.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.TabbedNavigation, {
          items: displayedSections,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WizardError["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.HandoffMessage, {}), sections.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(ResetHeaderData, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "newspack-wizard__main",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Switch, {
            children: [routedSections.map(function (section, index) {
              var _section$exact;
              var SectionComponent = section.render;
              var sectionProps = section.props || {};
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(Route, {
                exact: (_section$exact = section.exact) !== null && _section$exact !== void 0 ? _section$exact : false,
                path: section.path,
                render: function render(routerProps) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: (0, _classnames["default"])('newspack-wizard__content', className, {
                      'newspack-wizard__content--full-width': section.fullWidth
                    }),
                    children: ['function' === typeof renderAboveSections ? renderAboveSections() : null, (sectionTitle || section.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.SectionHeader, {
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
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SectionComponent, _objectSpread(_objectSpread(_objectSpread({}, routerProps), sectionProps), sharedProps))]
                  });
                }
              }, index);
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Redirect, {
              to: displayedSections[0].path
            })]
          })
        })]
      }), (notices === null || notices === void 0 ? void 0 : notices.length) > 0 && notices.map(function (notice, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WizardSnackbar["default"], {
          type: notice.type,
          id: notice.id,
          actions: notice.actions,
          children: notice.message
        }, notice.id || index);
      })]
    }), !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Footer, {
      simple: hasSimpleFooter
    })]
  });
};
var _default = exports["default"] = (0, _element.forwardRef)(Wizard);