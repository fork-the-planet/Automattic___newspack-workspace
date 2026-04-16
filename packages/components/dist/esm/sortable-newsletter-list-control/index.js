import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
/**
 * WordPress dependencies
 */
import { Icon, chevronUp, chevronDown, trash } from '@wordpress/icons';
import { CheckboxControl, Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ActionCard from '../action-card';
import Button from '../button';
import './style.scss';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default function SortableNewsletterListControl(_ref) {
  var lists = _ref.lists,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? [] : _ref$selected,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  if (!Array.isArray(lists) && lists.errors) {
    return /*#__PURE__*/_jsx(Notice, {
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
  return /*#__PURE__*/_jsxs("div", {
    className: "newspack__newsletter-list-control",
    children: [/*#__PURE__*/_jsx("div", {
      className: "newspack__newsletter-list-control__selected",
      children: selected.map(function (selectedList) {
        var list = getList(selectedList.id);
        if (!list) {
          return null;
        }
        return /*#__PURE__*/_jsx(ActionCard, {
          title: list.name,
          description: function description() {
            return /*#__PURE__*/_jsx(_Fragment, {
              children: /*#__PURE__*/_jsx(CheckboxControl, {
                label: __('Checked by default', 'newspack-plugin'),
                checked: selectedList.checked,
                onChange: function onChange() {
                  var index = selected.findIndex(function (_ref3) {
                    var id = _ref3.id;
                    return id === selectedList.id;
                  });
                  var newSelected = _toConsumableArray(selected);
                  newSelected[index].checked = !newSelected[index].checked;
                  _onChange(newSelected);
                }
              })
            });
          },
          isSmall: true,
          hasWhiteHeader: true,
          actionText: /*#__PURE__*/_jsx(_Fragment, {
            children: /*#__PURE__*/_jsx(Button, {
              onClick: function onClick() {
                return _onChange(selected.filter(function (_ref4) {
                  var id = _ref4.id;
                  return id !== selectedList.id;
                }));
              },
              label: __('Remove', 'newspack-plugin'),
              icon: trash,
              isDestructive: true
            })
          }),
          children: selected.length > 1 && /*#__PURE__*/_jsxs("span", {
            className: "newspack__newsletter-list-control__sort-handle",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                var index = selected.findIndex(function (_ref5) {
                  var id = _ref5.id;
                  return id === selectedList.id;
                });
                if (index === 0) {
                  return;
                }
                var newSelected = _toConsumableArray(selected);
                newSelected.splice(index, 1);
                newSelected.splice(index - 1, 0, selectedList);
                _onChange(newSelected);
              },
              className: selected.findIndex(function (_ref6) {
                var id = _ref6.id;
                return id === selectedList.id;
              }) === 0 ? 'disabled' : '',
              children: /*#__PURE__*/_jsx(Icon, {
                icon: chevronUp
              })
            }), /*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                var index = selected.findIndex(function (_ref7) {
                  var id = _ref7.id;
                  return id === selectedList.id;
                });
                var newSelected = _toConsumableArray(selected);
                newSelected.splice(index, 1);
                newSelected.splice(index + 1, 0, selectedList);
                _onChange(newSelected);
              },
              className: selected.findIndex(function (_ref8) {
                var id = _ref8.id;
                return id === selectedList.id;
              }) === selected.length - 1 ? 'disabled' : '',
              children: /*#__PURE__*/_jsx(Icon, {
                icon: chevronDown
              })
            })]
          })
        }, "selected-".concat(selectedList.id));
      })
    }), getAvailableLists().length > 0 && /*#__PURE__*/_jsxs("p", {
      className: "newspack__newsletter-list-control__lists",
      children: [selected.length > 0 ? /*#__PURE__*/_jsx("strong", {
        children: __('Add more lists:', 'newspack-plugin')
      }) : /*#__PURE__*/_jsx("strong", {
        children: __('Select lists:', 'newspack-plugin')
      }), ' ', getAvailableLists().map(function (list) {
        return /*#__PURE__*/_jsx(Button, {
          variant: "secondary",
          onClick: function onClick() {
            return _onChange([].concat(_toConsumableArray(selected), [{
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