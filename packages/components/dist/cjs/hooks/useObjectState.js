"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _element = require("@wordpress/element");
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));
/**
 * WordPress dependencies
 */

/**
 * @typedef {Object} StateObjectUpdate
 * @property {Object.<string, any>} [update] The update object with key-value pairs to merge into the state.
 */

var mergeCustomizer = function mergeCustomizer(objValue, srcValue) {
  if ((0, _isArray["default"])(objValue)) {
    // If it's an array, replace it (instead of concatenating).
    return srcValue;
  }
};

/**
 * A useState for an object.
 * Nested objects will be nested, but arrays replaced.
 *
 * @template T
 * @param {T} initial Initial state object.
 * @return {[T, (keyOrUpdate: string | Partial<T>) => (value?: any) => void]} The state object and a function to update it.
 */
var _default = exports["default"] = function _default() {
  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useState = (0, _element.useState)(initial),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    stateObject = _useState2[0],
    setStateObject = _useState2[1];
  var runUpdate = function runUpdate(update) {
    return setStateObject(function (_stateObject) {
      return (0, _mergeWith["default"])({}, _stateObject, update, mergeCustomizer);
    });
  };
  var updateStateObject = function updateStateObject(keyOrUpdate) {
    if (typeof keyOrUpdate === 'string') {
      return function (value) {
        return runUpdate((0, _defineProperty2["default"])({}, keyOrUpdate, value));
      };
    }
    runUpdate(keyOrUpdate);
  };
  return [stateObject, updateStateObject];
};