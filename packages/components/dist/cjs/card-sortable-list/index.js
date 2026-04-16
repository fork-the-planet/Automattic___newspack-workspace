"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * Card - Sortable list component.
 */ /**
 * WordPress dependencies.
 */ // eslint-disable-line @wordpress/no-unsafe-wp-apis
/**
 * Internal dependencies
 */ /**
 * External dependencies
 */
var DROP_ANIMATION_DURATION = 400; // ms — must match $drop-duration in style.scss
var BUTTON_MOVE_DURATION = 200; // ms — must match $shift-duration in style.scss

var CardSortableList = function CardSortableList(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$onDragCallback = _ref.onDragCallback,
    onDragCallback = _ref$onDragCallback === void 0 ? function () {} : _ref$onDragCallback;
  var _useState = (0, _element.useState)(items),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    sortedItems = _useState2[0],
    setSortedItems = _useState2[1];
  var _useState3 = (0, _element.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    draggingIndex = _useState4[0],
    setDraggingIndex = _useState4[1];
  var _useState5 = (0, _element.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    hoverIndex = _useState6[0],
    setHoverIndex = _useState6[1];
  var _useState7 = (0, _element.useState)(null),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    droppedIndex = _useState8[0],
    setDroppedIndex = _useState8[1];
  var _useState9 = (0, _element.useState)(null),
    _useState0 = (0, _slicedToArray2["default"])(_useState9, 2),
    measurements = _useState0[0],
    setMeasurements = _useState0[1];
  var listRef = (0, _element.useRef)(null);
  var itemRefs = (0, _element.useRef)([]);
  var dropAnimationTimer = (0, _element.useRef)(null);
  var buttonMoveTimer = (0, _element.useRef)(null);
  var buttonFlipRef = (0, _element.useRef)(null);
  var _useState1 = (0, _element.useState)(0),
    _useState10 = (0, _slicedToArray2["default"])(_useState1, 2),
    buttonMoveId = _useState10[0],
    setButtonMoveId = _useState10[1];
  var documentDragOverRef = (0, _element.useRef)(null);

  // Keep sortedItems in sync when the items prop changes externally (e.g. after a save).
  (0, _element.useEffect)(function () {
    setSortedItems(items);
  }, [items]);

  // Clean up any pending animation timer on unmount.
  (0, _element.useEffect)(function () {
    return function () {
      if (dropAnimationTimer.current) {
        clearTimeout(dropAnimationTimer.current);
      }
      if (buttonMoveTimer.current) {
        clearTimeout(buttonMoveTimer.current);
      }
      if (documentDragOverRef.current) {
        document.removeEventListener('dragover', documentDragOverRef.current);
      }
    };
  }, []);

  /**
   * Handle a chevron-button move. Records item positions before the reorder so
   * the FLIP animation can play after React commits the new DOM order.
   */
  var handleButtonMove = function handleButtonMove(fromIndex, toIndex) {
    if (toIndex < 0 || toIndex >= sortedItems.length) {
      return;
    }
    var fromEl = itemRefs.current[fromIndex];
    var toEl = itemRefs.current[toIndex];
    if (!fromEl || !toEl) {
      return;
    }
    var stride = Math.abs(toEl.getBoundingClientRect().top - fromEl.getBoundingClientRect().top);
    var direction = toIndex > fromIndex ? 1 : -1;
    buttonFlipRef.current = {
      fromIndex: fromIndex,
      toIndex: toIndex,
      stride: stride,
      direction: direction
    };
    var reordered = (0, _toConsumableArray2["default"])(sortedItems);
    var _reordered$splice = reordered.splice(fromIndex, 1),
      _reordered$splice2 = (0, _slicedToArray2["default"])(_reordered$splice, 1),
      moved = _reordered$splice2[0];
    reordered.splice(toIndex, 0, moved);
    setSortedItems(reordered);
    setButtonMoveId(function (id) {
      return id + 1;
    });
  };

  /**
   * FLIP Invert+Play step: runs synchronously after React commits the reordered
   * DOM. Animate each swapped item from its previous position to its new one
   * using inline CSS transitions (no CSS classes, to avoid creating a new
   * containing block that would break position:fixed on the Draggable clone).
   */
  (0, _element.useLayoutEffect)(function () {
    var flipData = buttonFlipRef.current;
    if (!flipData) {
      return;
    }
    buttonFlipRef.current = null;
    var fromIndex = flipData.fromIndex,
      toIndex = flipData.toIndex,
      stride = flipData.stride,
      direction = flipData.direction;
    var startAnimation = function startAnimation(el, startY) {
      if (!el) {
        return;
      }
      // Snap to the starting position with no transition.
      el.style.transition = 'none';
      el.style.transform = "translateY(".concat(startY, "px)");
      // Force a reflow so the browser registers the starting position
      // before we switch to the animated transition.
      el.getBoundingClientRect();
      // Animate from startY back to 0 (its new natural position).
      el.style.transition = "transform ".concat(BUTTON_MOVE_DURATION, "ms ease-out");
      el.style.transform = '';
    };

    // Moved item is now at toIndex: animate it in from its old position.
    startAnimation(itemRefs.current[toIndex], -direction * stride);
    // Displaced item is now at fromIndex: animate it in from its old position.
    startAnimation(itemRefs.current[fromIndex], direction * stride);
    if (buttonMoveTimer.current) {
      clearTimeout(buttonMoveTimer.current);
    }
    buttonMoveTimer.current = setTimeout(function () {
      // Clear inline animation styles before calling the external callback so
      // the subsequent React re-render doesn't fight a live animation.
      [fromIndex, toIndex].forEach(function (i) {
        var el = itemRefs.current[i];
        if (el) {
          el.style.transition = '';
          el.style.transform = '';
        }
      });

      // Move focus to the matching chevron button on the card at toIndex.
      // Focus before onDragCallback so a parent rerender can't steal focus.
      var targetEl = itemRefs.current[toIndex];
      if (targetEl) {
        var moveButtons = targetEl.querySelectorAll('.newspack-card--core__header__draggable-controls__move-buttons button');
        // direction > 0 = moved down → prefer the down button (index 1).
        // direction < 0 = moved up   → prefer the up   button (index 0).
        var preferred = direction > 0 ? moveButtons[1] : moveButtons[0];
        var fallback = direction > 0 ? moveButtons[0] : moveButtons[1];
        if (preferred && !preferred.disabled) {
          preferred.focus();
        } else if (fallback && !fallback.disabled) {
          fallback.focus();
        }
      }
      onDragCallback(fromIndex, toIndex);
      buttonMoveTimer.current = null;
    }, BUTTON_MOVE_DURATION);
  }, [buttonMoveId]); // eslint-disable-line react-hooks/exhaustive-deps

  var handleDragStart = function handleDragStart(index) {
    // Cancel any in-progress button-move animation so no item wrapper keeps
    // an inline transform. A transformed ancestor breaks position:fixed on
    // the Draggable clone (CSS spec: fixed positioning is relative to the
    // nearest ancestor with a transform/filter/perspective).
    if (buttonMoveTimer.current) {
      clearTimeout(buttonMoveTimer.current);
      buttonMoveTimer.current = null;
      itemRefs.current.forEach(function (el) {
        if (el) {
          el.style.transition = '';
          el.style.transform = '';
        }
      });
    }
    var listEl = listRef.current;
    if (listEl) {
      var _rects$index$height, _rects$index;
      var itemEls = itemRefs.current;
      var rects = itemEls.map(function (el) {
        return el === null || el === void 0 ? void 0 : el.getBoundingClientRect();
      });

      // Stride = item height + gap to next item (difference between consecutive tops).
      var itemStrides = rects.map(function (rect, i) {
        if (!rect) {
          return 0;
        }
        var nextRect = rects[i + 1];
        return nextRect ? nextRect.top - rect.top : rect.height;
      });
      setMeasurements({
        lockedHeight: listEl.getBoundingClientRect().height,
        sourceHeight: (_rects$index$height = (_rects$index = rects[index]) === null || _rects$index === void 0 ? void 0 : _rects$index.height) !== null && _rects$index$height !== void 0 ? _rects$index$height : 0,
        itemStrides: itemStrides,
        itemTops: rects.map(function (rect) {
          var _rect$top;
          return (_rect$top = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _rect$top !== void 0 ? _rect$top : 0;
        })
      });
    }
    // Make the entire document a valid drop target so the browser skips
    // its snap-back animation when the cursor is released outside the list.
    var preventSnapback = function preventSnapback(e) {
      return e.preventDefault();
    };
    document.addEventListener('dragover', preventSnapback);
    documentDragOverRef.current = preventSnapback;
    setDraggingIndex(index);
    setDroppedIndex(null);
  };
  var clearDragState = function clearDragState() {
    if (documentDragOverRef.current) {
      document.removeEventListener('dragover', documentDragOverRef.current);
      documentDragOverRef.current = null;
    }
    setDraggingIndex(null);
    setHoverIndex(null);
    setMeasurements(null);
  };

  /**
   * Determine the drop target index from cursor coordinates and the item
   * top positions snapshotted at drag start. Mirrors the midpoint logic
   * previously used in getDropIndex but works without a live event target.
   */
  var getDropIndexFromCursor = function getDropIndexFromCursor(clientY, m, sourceIndex) {
    var itemTops = m.itemTops,
      itemStrides = m.itemStrides,
      sourceHeight = m.sourceHeight;
    for (var i = 0; i < itemTops.length; i++) {
      var movingDown = sourceIndex > i;
      var midpoint = itemTops[i] + (movingDown ? itemStrides[i] : itemStrides[i] - sourceHeight);
      if (clientY < midpoint) {
        return i;
      }
    }
    return itemTops.length; // below all items
  };
  var handleDragEnd = function handleDragEnd(event) {
    // Take a local copy of measurements before clearDragState nulls it.
    var m = measurements;
    var sourceIndex = draggingIndex;
    clearDragState();
    if (m === null || sourceIndex === null) {
      return;
    }
    var dropIndex = getDropIndexFromCursor(event.clientY, m, sourceIndex);

    // Compute the destination index in the post-removal array.
    // After splicing out the dragged item, indices above it shift down by one.
    var insertIndex = dropIndex > sourceIndex ? dropIndex - 1 : dropIndex;
    if (insertIndex === sourceIndex) {
      return;
    }
    var reordered = (0, _toConsumableArray2["default"])(sortedItems);
    var _reordered$splice3 = reordered.splice(sourceIndex, 1),
      _reordered$splice4 = (0, _slicedToArray2["default"])(_reordered$splice3, 1),
      moved = _reordered$splice4[0];
    reordered.splice(insertIndex, 0, moved);

    // First render: show items in their new order with no animation.
    // The dragging CSS classes are already cleared by clearDragState() above,
    // so no transitions will fire on this paint.
    setSortedItems(reordered);

    // Next frame: trigger the drop animation on the newly-positioned item,
    // then call onDragCallback after the animation completes.
    requestAnimationFrame(function () {
      setDroppedIndex(insertIndex);
      dropAnimationTimer.current = setTimeout(function () {
        setDroppedIndex(null);
        onDragCallback(sourceIndex, insertIndex);
      }, DROP_ANIMATION_DURATION);
    });
  };
  var handleDragOver = function handleDragOver(event, index) {
    event.preventDefault();
    if (!measurements) {
      return;
    }
    var rect = event.currentTarget.getBoundingClientRect();
    var midpoint = rect.top + rect.height / 2;
    setHoverIndex(event.clientY < midpoint ? index : index + 1);
  };

  /**
   * Compute the translateY for a non-source item at `index` given the current
   * draggingIndex and hoverIndex, so that items visually shift to show the gap
   * while the container's layout height stays fixed.
   *
   * The source item has been visually hidden but still occupies its layout slot.
   * Items between the source and the hover position need to slide by the source
   * item's stride (height + gap) to either fill the vacated source slot or make
   * room for the incoming gap at the hover position.
   */
  var getTranslateY = function getTranslateY(index) {
    var _itemStrides$dragging;
    if (draggingIndex === null || hoverIndex === null || !measurements) {
      return 0;
    }
    if (index === draggingIndex) {
      return 0;
    }
    var itemStrides = measurements.itemStrides,
      sourceHeight = measurements.sourceHeight;
    var sourceStride = (_itemStrides$dragging = itemStrides[draggingIndex]) !== null && _itemStrides$dragging !== void 0 ? _itemStrides$dragging : sourceHeight;
    if (hoverIndex > draggingIndex) {
      // Dragging downward: items strictly between source and hover position slide up.
      if (index > draggingIndex && index < hoverIndex) {
        return -sourceStride;
      }
    } else if (index >= hoverIndex && index < draggingIndex) {
      // Dragging upward: items between hover position and source slide down.
      return sourceStride;
    }
    return 0;
  };
  var isDragging = draggingIndex !== null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.__experimentalVStack, {
    ref: listRef,
    className: (0, _classnames["default"])('newspack-card--core--sortable-list', disabled && 'newspack-card--core--sortable-list__is-disabled', isDragging && 'newspack-card--core--sortable-list__is-dragging'),
    style: measurements ? {
      height: measurements.lockedHeight
    } : undefined,
    spacing: 4,
    children: sortedItems.map(function (item, index) {
      var translateY = getTranslateY(index);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Disabled, {
        isDisabled: disabled,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          ref: function ref(el) {
            itemRefs.current[index] = el;
          },
          className: (0, _classnames["default"])('newspack-card--core--sortable-list__item', {
            'is-source': draggingIndex === index,
            'is-dropped': droppedIndex === index
          }),
          style: translateY ? {
            transform: "translateY(".concat(translateY, "px)")
          } : {
            transition: !isDragging ? 'none' : undefined
          },
          id: "draggable-card-".concat(index),
          onDragOver: function onDragOver(e) {
            return handleDragOver(e, index);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Draggable, {
            transferData: {},
            cloneClassname: "newspack-card--core--sortable-list__item__clone",
            elementId: "draggable-card-".concat(index),
            onDragStart: function onDragStart() {
              return handleDragStart(index);
            },
            onDragEnd: handleDragEnd,
            appendToOwnerDocument: true,
            children: function children(_ref2) {
              var onDraggableStart = _ref2.onDraggableStart,
                onDraggableEnd = _ref2.onDraggableEnd;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Card, {
                isSmall: true,
                draggable: true,
                onDragStart: onDraggableStart,
                onDragEnd: onDraggableEnd,
                __experimentalCoreCard: true,
                __experimentalCoreProps: _objectSpread(_objectSpread({
                  header: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
                      children: [item.title, /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Badge, {
                        level: item.badgeLevel,
                        text: item.badgeText
                      })]
                    }), item.description && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                      children: item.description
                    })]
                  }),
                  isDraggable: true,
                  isFirstTarget: index === 0,
                  isLastTarget: index === sortedItems.length - 1,
                  dragIndex: index,
                  onDragCallback: handleButtonMove
                }, item.onToggleChange !== undefined && {
                  actionType: 'toggle',
                  isActive: item.toggleChecked,
                  onToggle: item.onToggleChange
                }), item.actions !== undefined && {
                  actions: item.actions
                })
              });
            }
          })
        })
      }, item.id);
    })
  });
};
var _default = exports["default"] = CardSortableList;