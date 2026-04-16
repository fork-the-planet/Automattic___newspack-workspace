"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buttonProps;
var _isFunction = _interopRequireDefault(require("lodash/isFunction"));
var _isObject = _interopRequireDefault(require("lodash/isObject"));
var _isString = _interopRequireDefault(require("lodash/isString"));
/**
 * Internal dependencies
 */

/**
 * Creates button props based on an action
 */
function buttonProps(action) {
  var props = {};
  if ((0, _isFunction["default"])(action)) {
    props.onClick = action;
  }
  if ((0, _isString["default"])(action)) {
    props.href = action;
  }
  if ((0, _isObject["default"])(action)) {
    if (action.handoff) {
      props.plugin = action.handoff;
      if (action.editLink) {
        props.editLink = action.editLink;
      }
    }
    if (action.onClick) {
      props.onClick = action.onClick;
    }
    if (action.href) {
      props.href = action.href;
    }
  }
  return props;
}