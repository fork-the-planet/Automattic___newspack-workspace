"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _ = require("../");
var _actionCardD = require("./action-card.d.ts");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * Action Card
 */ /**
 * WordPress dependencies
 */ /**
 * Internal dependencies
 */ /**
 * External dependencies
 */ /**
 * ActionCard component
 * @param {ActionCardProps} props Component props.
 * @return {JSX.Element} ActionCard component.
 */
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
  var _useState = (0, _element.useState)(Boolean(isExpanded)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = (0, _element.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    dragging = _useState4[0],
    setDragging = _useState4[1];
  var _useState5 = (0, _element.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    targetIndex = _useState6[0],
    setTargetIndex = _useState6[1];
  var _useState7 = (0, _element.useState)(null),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    dragRef = _useState8[0],
    setDragRef = _useState8[1];
  (0, _element.useEffect)(function () {
    if (typeof isExpanded === 'boolean') {
      setExpanded(isExpanded);
    }
  }, [isExpanded]);
  (0, _element.useEffect)(function () {
    if (dragWrapperRef && !dragRef) {
      setDragRef(dragWrapperRef);
    }
  }, [dragWrapperRef === null || dragWrapperRef === void 0 ? void 0 : dragWrapperRef.current]);
  (0, _element.useEffect)(function () {
    if (collapse && expanded) {
      setExpanded(false);
    }
  }, [collapse]);
  var hasChildren = notification || children;
  var classes = (0, _classnames["default"])('newspack-action-card', simple && 'newspack-card--is-clickable', hasGreyHeader && 'newspack-card--has-grey-header', hasWhiteHeader && 'newspack-card--has-white-header', hasChildren && 'newspack-card--has-children', indent && 'newspack-card--indent', isSmall && 'is-small', isMedium && 'is-medium', checkbox && 'has-checkbox', expandable && 'is-expandable', draggable && 'is-draggable', actionContent && 'has-action-content', className);
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
  var cardContent = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "newspack-action-card__region newspack-action-card__region-top",
      children: [toggleOnChange && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ToggleControl, {
        checked: toggleChecked,
        onChange: toggleOnChange,
        disabled: disabled,
        className: togglePositionClass
      }), image && !toggleOnChange && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "newspack-action-card__region newspack-action-card__region-left",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: imageLink,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "newspack-action-card__image",
            style: backgroundImageStyles(image)
          })
        })
      }), checkbox && !toggleOnChange && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "newspack-action-card__region newspack-action-card__region-left",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: (0, _classnames["default"])('newspack-checkbox-icon', 'is-primary', 'checked' === checkbox && 'newspack-checkbox-icon--checked', isPending && 'newspack-checkbox-icon--pending'),
          children: 'checked' === checkbox && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
            icon: _icons.check
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "newspack-action-card__region newspack-action-card__region-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Grid, {
          columns: 1,
          gutter: 8,
          noMargin: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(HeadingTag, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", _objectSpread(_objectSpread({
              className: "newspack-action-card__title"
            }, titleProps), {}, {
              children: [titleLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: titleLink,
                children: title
              }), !titleLink && expandable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                isLink: true,
                onClick: function onClick() {
                  return setExpanded(!expanded);
                },
                children: title
              }), !titleLink && !expandable && title]
            })), (badges === null || badges === void 0 ? void 0 : badges.length) && badges.map(function (badgeText, i) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "newspack-action-card__badge newspack-action-card__badge-level-".concat(badgeLevel),
                children: badgeText
              }, "badge-".concat(i));
            })]
          }), description && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: [typeof description === 'string' && description, typeof description === 'function' && description()]
          })]
        })
      }), !expandable && (actionText || isDisplayingSecondaryAction || actionContent) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "newspack-action-card__region newspack-action-card__region-right",
        children: [actionContent && actionContent, actionText && (handoff ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Handoff, {
          plugin: handoff,
          editLink: editLink,
          bannerText: bannerText,
          bannerButtonText: bannerButtonText,
          compact: true,
          isLink: true,
          children: actionText
        }) : handoffUrl ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Handoff, {
          url: handoffUrl,
          bannerText: bannerText,
          bannerButtonText: bannerButtonText,
          compact: true,
          isLink: true,
          children: actionText
        }) : onClick || hasInternalLink ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
          disabled: disabled && !isButtonEnabled,
          isLink: true,
          href: href,
          onClick: onClick,
          className: "newspack-action-card__primary_button",
          children: actionText
        }) : href ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ExternalLink, {
          href: href,
          className: "newspack-action-card__primary_button",
          children: actionText
        }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-action-card__container",
          children: [actionText, isWaiting && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Waiting, {
            isRight: true
          })]
        })), isDisplayingSecondaryAction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
          isLink: true,
          onClick: onSecondaryActionClick,
          className: "newspack-action-card__secondary_button",
          isDestructive: secondaryDestructive,
          children: secondaryActionText
        })]
      }), expandable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
        onClick: function onClick() {
          return setExpanded(!expanded);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
          icon: expanded ? _icons.chevronUp : _icons.chevronDown,
          height: 24,
          width: 24
        })
      })]
    }), notification && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "newspack-action-card__notification newspack-action-card__region-children",
      children: ['error' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        noticeText: notification,
        isError: true,
        rawHTML: notificationHTML
      }), 'info' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        noticeText: notification,
        rawHTML: notificationHTML
      }), 'success' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        noticeText: notification,
        isSuccess: true,
        rawHTML: notificationHTML
      }), 'warning' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
        noticeText: notification,
        isWarning: true,
        rawHTML: notificationHTML
      })]
    }), children && (expandable && expanded || !expandable) ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: 'newspack-action-card__draggable-wrapper' + (dragging ? ' is-dragging' : ''),
      id: "draggable-card-".concat(id),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Draggable, {
        elementId: "draggable-card-".concat(id),
        transferData: {},
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        onDragOver: handleDragOver,
        children: function children(_ref2) {
          var onDraggableStart = _ref2.onDraggableStart,
            onDraggableEnd = _ref2.onDraggableEnd;
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Card, {
            className: classes,
            onClick: simple && onClick,
            id: id !== null && id !== void 0 ? id : null,
            noBorder: noBorder,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "newspack-action-card__draggable-controls",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "drag-handle",
                draggable: true,
                onDragStart: onDraggableStart,
                onDragEnd: onDraggableEnd,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
                  icon: _icons.dragHandle
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "movers",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                  icon: _icons.chevronUp,
                  onClick: function onClick() {
                    return onDragCallback(dragIndex - 1);
                  },
                  disabled: isFirstTarget,
                  label: (0, _i18n.__)('Move one position up', 'newspack-plugin')
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                  icon: _icons.chevronDown,
                  onClick: function onClick() {
                    return onDragCallback(dragIndex + 1);
                  },
                  disabled: isLastTarget,
                  label: (0, _i18n.__)('Move one position down', 'newspack-plugin')
                })]
              })]
            }), cardContent]
          });
        }
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Card, {
    className: classes,
    onClick: simple && onClick,
    id: id !== null && id !== void 0 ? id : null,
    noBorder: noBorder,
    children: cardContent
  });
};
var _default = exports["default"] = ActionCard;