import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Action Card
 */

/**
 * WordPress dependencies
 */
import { Draggable, ExternalLink, ToggleControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, check, chevronDown, chevronUp, dragHandle } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Button, Card, Grid, Handoff, Notice, Waiting } from '../';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * ActionCard component
 * @param {ActionCardProps} props Component props.
 * @return {JSX.Element} ActionCard component.
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var ActionCard = function ActionCard(_ref) {
  var badge = _ref.badge,
    badgeLevel = _ref.badgeLevel,
    className = _ref.className,
    checkbox = _ref.checkbox,
    children = _ref.children,
    collapse = _ref.collapse,
    disabled = _ref.disabled,
    title = _ref.title,
    _ref$heading = _ref.heading,
    heading = _ref$heading === void 0 ? 2 : _ref$heading,
    description = _ref.description,
    handoff = _ref.handoff,
    handoffUrl = _ref.handoffUrl,
    bannerText = _ref.bannerText,
    bannerButtonText = _ref.bannerButtonText,
    editLink = _ref.editLink,
    href = _ref.href,
    notification = _ref.notification,
    notificationLevel = _ref.notificationLevel,
    notificationHTML = _ref.notificationHTML,
    actionContent = _ref.actionContent,
    actionText = _ref.actionText,
    secondaryActionText = _ref.secondaryActionText,
    secondaryDestructive = _ref.secondaryDestructive,
    id = _ref.id,
    image = _ref.image,
    imageLink = _ref.imageLink,
    indent = _ref.indent,
    isSmall = _ref.isSmall,
    isMedium = _ref.isMedium,
    simple = _ref.simple,
    onClick = _ref.onClick,
    onSecondaryActionClick = _ref.onSecondaryActionClick,
    isWaiting = _ref.isWaiting,
    titleLink = _ref.titleLink,
    _ref$toggleChecked = _ref.toggleChecked,
    toggleChecked = _ref$toggleChecked === void 0 ? false : _ref$toggleChecked,
    toggleOnChange = _ref.toggleOnChange,
    _ref$togglePosition = _ref.togglePosition,
    togglePosition = _ref$togglePosition === void 0 ? 'leading' : _ref$togglePosition,
    hasGreyHeader = _ref.hasGreyHeader,
    hasWhiteHeader = _ref.hasWhiteHeader,
    noBorder = _ref.noBorder,
    isPending = _ref.isPending,
    _ref$expandable = _ref.expandable,
    expandable = _ref$expandable === void 0 ? false : _ref$expandable,
    isExpanded = _ref.isExpanded,
    _ref$isButtonEnabled = _ref.isButtonEnabled,
    isButtonEnabled = _ref$isButtonEnabled === void 0 ? false : _ref$isButtonEnabled,
    _ref$draggable = _ref.draggable,
    draggable = _ref$draggable === void 0 ? false : _ref$draggable,
    dragIndex = _ref.dragIndex,
    dragWrapperRef = _ref.dragWrapperRef,
    onDragCallback = _ref.onDragCallback;
  var _useState = useState(Boolean(isExpanded)),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dragging = _useState4[0],
    setDragging = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    targetIndex = _useState6[0],
    setTargetIndex = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    dragRef = _useState8[0],
    setDragRef = _useState8[1];
  useEffect(function () {
    if (typeof isExpanded === 'boolean') {
      setExpanded(isExpanded);
    }
  }, [isExpanded]);
  useEffect(function () {
    if (dragWrapperRef && !dragRef) {
      setDragRef(dragWrapperRef);
    }
  }, [dragWrapperRef === null || dragWrapperRef === void 0 ? void 0 : dragWrapperRef.current]);
  useEffect(function () {
    if (collapse && expanded) {
      setExpanded(false);
    }
  }, [collapse]);
  var hasChildren = notification || children;
  var classes = classnames('newspack-action-card', simple && 'newspack-card--is-clickable', hasGreyHeader && 'newspack-card--has-grey-header', hasWhiteHeader && 'newspack-card--has-white-header', hasChildren && 'newspack-card--has-children', indent && 'newspack-card--indent', isSmall && 'is-small', isMedium && 'is-medium', checkbox && 'has-checkbox', expandable && 'is-expandable', draggable && 'is-draggable', actionContent && 'has-action-content', className);
  var backgroundImageStyles = function backgroundImageStyles(url) {
    return url ? {
      backgroundImage: "url(".concat(url, ")")
    } : {};
  };
  var titleProps = toggleOnChange && !titleLink && !disabled ? {
    onClick: function onClick() {
      return toggleOnChange(!toggleChecked);
    },
    tabIndex: '0'
  } : {};
  var togglePositionClass = togglePosition === 'trailing' ? 'is-toggle-trailing' : 'is-toggle-leading';
  var hasInternalLink = href && href.indexOf('http') !== 0;
  var isDisplayingSecondaryAction = secondaryActionText && onSecondaryActionClick;
  var badges = !Array.isArray(badge) && badge ? [badge] : badge;
  var HeadingTag = "h".concat(heading);
  var cardContent = /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: "newspack-action-card__region newspack-action-card__region-top",
      children: [toggleOnChange && /*#__PURE__*/_jsx(ToggleControl, {
        checked: toggleChecked,
        onChange: toggleOnChange,
        disabled: disabled,
        className: togglePositionClass
      }), image && !toggleOnChange && /*#__PURE__*/_jsx("div", {
        className: "newspack-action-card__region newspack-action-card__region-left",
        children: /*#__PURE__*/_jsx("a", {
          href: imageLink,
          children: /*#__PURE__*/_jsx("div", {
            className: "newspack-action-card__image",
            style: backgroundImageStyles(image)
          })
        })
      }), checkbox && !toggleOnChange && /*#__PURE__*/_jsx("div", {
        className: "newspack-action-card__region newspack-action-card__region-left",
        children: /*#__PURE__*/_jsx("span", {
          className: classnames('newspack-checkbox-icon', 'is-primary', 'checked' === checkbox && 'newspack-checkbox-icon--checked', isPending && 'newspack-checkbox-icon--pending'),
          children: 'checked' === checkbox && /*#__PURE__*/_jsx(Icon, {
            icon: check
          })
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "newspack-action-card__region newspack-action-card__region-center",
        children: /*#__PURE__*/_jsxs(Grid, {
          columns: 1,
          gutter: 8,
          noMargin: true,
          children: [/*#__PURE__*/_jsxs(HeadingTag, {
            children: [/*#__PURE__*/_jsxs("span", _objectSpread(_objectSpread({
              className: "newspack-action-card__title"
            }, titleProps), {}, {
              children: [titleLink && /*#__PURE__*/_jsx("a", {
                href: titleLink,
                children: title
              }), !titleLink && expandable && /*#__PURE__*/_jsx(Button, {
                isLink: true,
                onClick: function onClick() {
                  return setExpanded(!expanded);
                },
                children: title
              }), !titleLink && !expandable && title]
            })), (badges === null || badges === void 0 ? void 0 : badges.length) && badges.map(function (badgeText, i) {
              return /*#__PURE__*/_jsx("span", {
                className: "newspack-action-card__badge newspack-action-card__badge-level-".concat(badgeLevel),
                children: badgeText
              }, "badge-".concat(i));
            })]
          }), description && /*#__PURE__*/_jsxs("p", {
            children: [typeof description === 'string' && description, typeof description === 'function' && description()]
          })]
        })
      }), !expandable && (actionText || isDisplayingSecondaryAction || actionContent) && /*#__PURE__*/_jsxs("div", {
        className: "newspack-action-card__region newspack-action-card__region-right",
        children: [actionContent && actionContent, actionText && (handoff ? /*#__PURE__*/_jsx(Handoff, {
          plugin: handoff,
          editLink: editLink,
          bannerText: bannerText,
          bannerButtonText: bannerButtonText,
          compact: true,
          isLink: true,
          children: actionText
        }) : handoffUrl ? /*#__PURE__*/_jsx(Handoff, {
          url: handoffUrl,
          bannerText: bannerText,
          bannerButtonText: bannerButtonText,
          compact: true,
          isLink: true,
          children: actionText
        }) : onClick || hasInternalLink ? /*#__PURE__*/_jsx(Button, {
          disabled: disabled && !isButtonEnabled,
          isLink: true,
          href: href,
          onClick: onClick,
          className: "newspack-action-card__primary_button",
          children: actionText
        }) : href ? /*#__PURE__*/_jsx(ExternalLink, {
          href: href,
          className: "newspack-action-card__primary_button",
          children: actionText
        }) : /*#__PURE__*/_jsxs("div", {
          className: "newspack-action-card__container",
          children: [actionText, isWaiting && /*#__PURE__*/_jsx(Waiting, {
            isRight: true
          })]
        })), isDisplayingSecondaryAction && /*#__PURE__*/_jsx(Button, {
          isLink: true,
          onClick: onSecondaryActionClick,
          className: "newspack-action-card__secondary_button",
          isDestructive: secondaryDestructive,
          children: secondaryActionText
        })]
      }), expandable && /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return setExpanded(!expanded);
        },
        children: /*#__PURE__*/_jsx(Icon, {
          icon: expanded ? chevronUp : chevronDown,
          height: 24,
          width: 24
        })
      })]
    }), notification && /*#__PURE__*/_jsxs("div", {
      className: "newspack-action-card__notification newspack-action-card__region-children",
      children: ['error' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
        noticeText: notification,
        isError: true,
        rawHTML: notificationHTML
      }), 'info' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
        noticeText: notification,
        rawHTML: notificationHTML
      }), 'success' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
        noticeText: notification,
        isSuccess: true,
        rawHTML: notificationHTML
      }), 'warning' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
        noticeText: notification,
        isWarning: true,
        rawHTML: notificationHTML
      })]
    }), children && (expandable && expanded || !expandable) ? /*#__PURE__*/_jsx("div", {
      className: "newspack-action-card__region-children",
      children: children
    }) : null]
  });
  if (draggable && dragRef !== null && dragRef !== void 0 && dragRef.current && typeof dragIndex === 'number' && onDragCallback && id) {
    var wrapperRect = dragRef.current.getBoundingClientRect();
    var draggableCards = Array.prototype.slice.call(dragRef.current.querySelectorAll('.newspack-action-card__draggable-wrapper'));
    var isFirstTarget = dragIndex === 0;
    var isLastTarget = dragIndex === draggableCards.length - 1;
    var handleDragStart = function handleDragStart() {
      draggableCards = Array.prototype.slice.call(dragRef.current.querySelectorAll('.newspack-action-card__draggable-wrapper'));
      wrapperRect = dragRef.current.getBoundingClientRect();
      if (dragging) {
        return;
      }
      setTargetIndex(dragIndex);
      setDragging(true);
    };
    var handleDragEnd = function handleDragEnd() {
      if (targetIndex !== null && targetIndex !== dragIndex) {
        onDragCallback(targetIndex);
      }
      setTargetIndex(null);
      setDragging(false);
    };
    var handleDragOver = function handleDragOver(e) {
      var isDraggingToTop = e.pageY <= wrapperRect.top + window.scrollY;
      var isDraggingToBottom = e.pageY >= wrapperRect.bottom + window.scrollY;
      var target = e.target.closest('.newspack-action-card__draggable-wrapper');
      if (isDraggingToTop || isDraggingToBottom || target) {
        setTargetIndex(draggableCards.indexOf(target));

        // If dragging the element over itself or over an invalid target, cancel the drop.
        if (0 > targetIndex || targetIndex === dragIndex + 1) {
          setTargetIndex(dragIndex);
        }

        // Handle dropping before the first item.
        if (isDraggingToTop) {
          setTargetIndex(0);
        }

        // Handle dropping after the last item.
        if (isDraggingToBottom) {
          setTargetIndex(draggableCards.length);
        }
      }
    };
    return /*#__PURE__*/_jsx("div", {
      className: 'newspack-action-card__draggable-wrapper' + (dragging ? ' is-dragging' : ''),
      id: "draggable-card-".concat(id),
      children: /*#__PURE__*/_jsx(Draggable, {
        elementId: "draggable-card-".concat(id),
        transferData: {},
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        onDragOver: handleDragOver,
        children: function children(_ref2) {
          var onDraggableStart = _ref2.onDraggableStart,
            onDraggableEnd = _ref2.onDraggableEnd;
          return /*#__PURE__*/_jsxs(Card, {
            className: classes,
            onClick: simple && onClick,
            id: id !== null && id !== void 0 ? id : null,
            noBorder: noBorder,
            children: [/*#__PURE__*/_jsxs("div", {
              className: "newspack-action-card__draggable-controls",
              children: [/*#__PURE__*/_jsx("div", {
                className: "drag-handle",
                draggable: true,
                onDragStart: onDraggableStart,
                onDragEnd: onDraggableEnd,
                children: /*#__PURE__*/_jsx(Icon, {
                  icon: dragHandle
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "movers",
                children: [/*#__PURE__*/_jsx(Button, {
                  icon: chevronUp,
                  onClick: function onClick() {
                    return onDragCallback(dragIndex - 1);
                  },
                  disabled: isFirstTarget,
                  label: __('Move one position up', 'newspack-plugin')
                }), /*#__PURE__*/_jsx(Button, {
                  icon: chevronDown,
                  onClick: function onClick() {
                    return onDragCallback(dragIndex + 1);
                  },
                  disabled: isLastTarget,
                  label: __('Move one position down', 'newspack-plugin')
                })]
              })]
            }), cardContent]
          });
        }
      })
    });
  }
  return /*#__PURE__*/_jsx(Card, {
    className: classes,
    onClick: simple && onClick,
    id: id !== null && id !== void 0 ? id : null,
    noBorder: noBorder,
    children: cardContent
  });
};
export default ActionCard;