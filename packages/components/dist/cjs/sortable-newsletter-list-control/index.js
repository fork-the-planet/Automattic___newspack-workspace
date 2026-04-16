"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SortableNewsletterListControl;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _icons = require("@wordpress/icons");
var _components = require("@wordpress/components");
var _i18n = require("@wordpress/i18n");
var _actionCard = _interopRequireDefault(require("../action-card"));
var _button = _interopRequireDefault(require("../button"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

function SortableNewsletterListControl(_ref) {
  var lists = _ref.lists,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? [] : _ref$selected,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  if (!Array.isArray(lists) && lists.errors) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Notice, {
      status: "error",
      isDismissible: false,
      children: Object.values(lists.errors).join(', ')
    });
  }
  var getList = function getList(id) {
    return lists.find(function (list) {
      return list.id === id;
    });
  };
  var getAvailableLists = function getAvailableLists() {
    return lists.filter(function (list) {
      return list.active && !selected.find(function (_ref2) {
        var id = _ref2.id;
        return id === list.id;
      });
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "newspack__newsletter-list-control",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "newspack__newsletter-list-control__selected",
      children: selected.map(function (selectedList) {
        var list = getList(selectedList.id);
        if (!list) {
          return null;
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_actionCard["default"], {
          title: list.name,
          description: function description() {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.CheckboxControl, {
                label: (0, _i18n.__)('Checked by default', 'newspack-plugin'),
                checked: selectedList.checked,
                onChange: function onChange() {
                  var index = selected.findIndex(function (_ref3) {
                    var id = _ref3.id;
                    return id === selectedList.id;
                  });
                  var newSelected = (0, _toConsumableArray2["default"])(selected);
                  newSelected[index].checked = !newSelected[index].checked;
                  _onChange(newSelected);
                }
              })
            });
          },
          isSmall: true,
          hasWhiteHeader: true,
          actionText: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
              onClick: function onClick() {
                return _onChange(selected.filter(function (_ref4) {
                  var id = _ref4.id;
                  return id !== selectedList.id;
                }));
              },
              label: (0, _i18n.__)('Remove', 'newspack-plugin'),
              icon: _icons.trash,
              isDestructive: true
            })
          }),
          children: selected.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "newspack__newsletter-list-control__sort-handle",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              onClick: function onClick() {
                var index = selected.findIndex(function (_ref5) {
                  var id = _ref5.id;
                  return id === selectedList.id;
                });
                if (index === 0) {
                  return;
                }
                var newSelected = (0, _toConsumableArray2["default"])(selected);
                newSelected.splice(index, 1);
                newSelected.splice(index - 1, 0, selectedList);
                _onChange(newSelected);
              },
              className: selected.findIndex(function (_ref6) {
                var id = _ref6.id;
                return id === selectedList.id;
              }) === 0 ? 'disabled' : '',
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
                icon: _icons.chevronUp
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              onClick: function onClick() {
                var index = selected.findIndex(function (_ref7) {
                  var id = _ref7.id;
                  return id === selectedList.id;
                });
                var newSelected = (0, _toConsumableArray2["default"])(selected);
                newSelected.splice(index, 1);
                newSelected.splice(index + 1, 0, selectedList);
                _onChange(newSelected);
              },
              className: selected.findIndex(function (_ref8) {
                var id = _ref8.id;
                return id === selectedList.id;
              }) === selected.length - 1 ? 'disabled' : '',
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
                icon: _icons.chevronDown
              })
            })]
          })
        }, "selected-".concat(selectedList.id));
      })
    }), getAvailableLists().length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: "newspack__newsletter-list-control__lists",
      children: [selected.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: (0, _i18n.__)('Add more lists:', 'newspack-plugin')
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: (0, _i18n.__)('Select lists:', 'newspack-plugin')
      }), ' ', getAvailableLists().map(function (list) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          variant: "secondary",
          onClick: function onClick() {
            return _onChange([].concat((0, _toConsumableArray2["default"])(selected), [{
              id: list.id,
              checked: true
            }]));
          },
          children: list.name
        }, list.id);
      })]
    })]
  });
}