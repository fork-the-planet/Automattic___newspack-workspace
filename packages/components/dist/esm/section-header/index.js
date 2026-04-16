/**
 * Section Header
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import { DropdownMenu, MenuItem, Tooltip, __experimentalHStack as HStack } from '@wordpress/components'; // eslint-disable-line @wordpress/no-unsafe-wp-apis
import { Icon, chevronLeft, moreVertical } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Badge, Button, Grid } from '..';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Represents a section header component.
 *
 * @typedef {Object} SectionHeaderProps
 * @property {string}             [backNav='']       - URL to navigate back to.
 * @property {string|string[]}    [badge]            - Badge to display in the header.
 * @property {string}             [badgeLevel]       - Badge level, e.g., 'success', 'info', 'warning', 'error'.
 * @property {boolean}            [centered=false]   - Indicates if the header is centered.
 * @property {?string}            [className=null]   - Additional CSS class name.
 * @property {string|Function|*}  [description]      - Description of the section.
 * @property {number}             [heading=2]        - HTML heading level, e.g., 1 for h1, 2 for h2, etc.
 * @property {string|Function|*}  [icon]             - Icon to display in the header.
 * @property {boolean}            [isWhite=false]    - Indicates if the header should use a white theme.
 * @property {boolean}            [noMargin=false]   - Indicates if the header should have no margin.
 * @property {boolean}            [pageHeader=false] - Indicates if the header is used as a page header.
 * @property {string}             title              - The title of the section.
 * @property {?string}            [id=null]          - Optional ID for the header element.
 * @property {?string|Function|*} [children=null]    - Optional children to display in the header.
 */

/**
 * Creates a section header.
 *
 * @param {SectionHeaderProps} props - The properties for the section header.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SectionHeader = function SectionHeader(_ref) {
  var _ref$backNav = _ref.backNav,
    backNav = _ref$backNav === void 0 ? '' : _ref$backNav,
    badges = _ref.badges,
    _ref$centered = _ref.centered,
    centered = _ref$centered === void 0 ? false : _ref$centered,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? null : _ref$className,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '' : _ref$description,
    _ref$heading = _ref.heading,
    heading = _ref$heading === void 0 ? 2 : _ref$heading,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$isWhite = _ref.isWhite,
    isWhite = _ref$isWhite === void 0 ? false : _ref$isWhite,
    _ref$noMargin = _ref.noMargin,
    noMargin = _ref$noMargin === void 0 ? false : _ref$noMargin,
    _ref$pageHeader = _ref.pageHeader,
    pageHeader = _ref$pageHeader === void 0 ? false : _ref$pageHeader,
    title = _ref.title,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id,
    menu = _ref.menu,
    primaryAction = _ref.primaryAction,
    secondaryAction = _ref.secondaryAction,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? null : _ref$children;
  // If id is in the URL as a scrollTo param, scroll to it on render.
  var ref = useRef();
  useEffect(function () {
    var params = new Proxy(new URLSearchParams(window.location.search), {
      get: function get(searchParams, prop) {
        return searchParams.get(prop);
      }
    });
    var scrollToId = params.scrollTo;
    if (scrollToId && scrollToId === id) {
      // Let parent scroll action run before running this.
      window.setTimeout(function () {
        return ref.current.scrollIntoView({
          behavior: 'smooth'
        });
      }, 250);
    }
  }, []);
  var classes = classnames('newspack-section-header', centered && 'newspack-section-header--is-centered', isWhite && 'newspack-section-header--is-white', noMargin && 'newspack-section-header--no-margin', pageHeader && 'newspack-section-header--page-header');
  var HeadingTag = pageHeader ? 'h1' : "h".concat(heading);
  var titleContent = null;
  if (typeof title === 'string') {
    titleContent = /*#__PURE__*/_jsxs("div", {
      className: "newspack-section-header__title-container",
      children: [/*#__PURE__*/_jsxs(HeadingTag, {
        children: [title, badges !== null && badges !== void 0 && badges.length ? badges.map(function (badge, i) {
          return /*#__PURE__*/_jsx(Badge, {
            text: badge.label,
            level: badge.level || 'default'
          }, i);
        }) : null]
      }), (menu === null || menu === void 0 ? void 0 : menu.length) > 0 && /*#__PURE__*/_jsx(DropdownMenu, {
        className: "newspack-section-header__menu",
        icon: moreVertical,
        label: __('More options', 'newspack-plugin'),
        children: function children() {
          return menu.map(function (item, index) {
            return /*#__PURE__*/_jsx(MenuItem, {
              icon: item.icon,
              href: item.href,
              onClick: item.action,
              disabled: item.disabled || false,
              isDestructive: item.destructive || false,
              children: item.label
            }, index);
          });
        }
      }), secondaryAction && /*#__PURE__*/_jsx("div", {
        className: "newspack-section-header__secondary-action",
        children: /*#__PURE__*/_jsx(Button, {
          variant: "link",
          href: secondaryAction.href,
          onClick: secondaryAction.action,
          children: secondaryAction.label
        })
      })]
    });
  } else if (typeof title === 'function') {
    titleContent = /*#__PURE__*/_jsx(HeadingTag, {
      children: title()
    });
  }
  return /*#__PURE__*/_jsxs("div", {
    id: id,
    className: classnames('newspack-section-header__container', backNav && 'newspack-section-header--has-back-nav', primaryAction && 'newspack-section-header--has-primary-action', className),
    ref: ref,
    children: [/*#__PURE__*/_jsxs(Grid, {
      columns: 1,
      gutter: 8,
      className: classes,
      children: [icon && /*#__PURE__*/_jsx("div", {
        className: "newspack-section-header__icon",
        children: /*#__PURE__*/_jsx(Icon, {
          icon: icon,
          size: 48
        })
      }), backNav ? /*#__PURE__*/_jsxs(HStack, {
        alignment: "left",
        style: {
          position: 'relative'
        },
        children: [/*#__PURE__*/_jsx("div", {
          className: "newspack-section-header__back-nav",
          children: /*#__PURE__*/_jsx(Tooltip, {
            text: __('Go back', 'newspack-plugin'),
            children: /*#__PURE__*/_jsx(Button, {
              href: backNav,
              icon: chevronLeft,
              variant: "tertiary"
            })
          })
        }), titleContent]
      }) : titleContent, description && typeof description === 'string' && /*#__PURE__*/_jsx("p", {
        children: description
      }), typeof description === 'function' && /*#__PURE__*/_jsx("p", {
        children: description()
      }), description && typeof description !== 'string' && typeof description !== 'function' && /*#__PURE__*/_jsx("p", {
        children: description
      }), children && /*#__PURE__*/_jsx("div", {
        className: "newspack-section-header__children",
        children: children
      })]
    }), primaryAction && /*#__PURE__*/_jsx("div", {
      className: "newspack-section-header__primary-action",
      children: /*#__PURE__*/_jsx(Button, {
        href: primaryAction.href,
        variant: "primary",
        onClick: primaryAction.action,
        children: primaryAction.label
      })
    })]
  });
};
export default SectionHeader;