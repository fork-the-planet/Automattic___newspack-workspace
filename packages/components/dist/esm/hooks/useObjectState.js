import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';

/**
 * @typedef {Object} StateObjectUpdate
 * @property {Object.<string, any>} [update] The update object with key-value pairs to merge into the state.
 */

var mergeCustomizer = function mergeCustomizer(objValue, srcValue) {
  if (isArray(objValue)) {
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
export default (function () {
  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useState = useState(initial),
    _useState2 = _slicedToArray(_useState, 2),
    stateObject = _useState2[0],
    setStateObject = _useState2[1];
  var runUpdate = function runUpdate(update) {
    return setStateObject(function (_stateObject) {
      return mergeWith({}, _stateObject, update, mergeCustomizer);
    });
  };
  var updateStateObject = function updateStateObject(keyOrUpdate) {
    if (typeof keyOrUpdate === 'string') {
      return function (value) {
        return runUpdate(_defineProperty({}, keyOrUpdate, value));
      };
    }
    runUpdate(keyOrUpdate);
  };
  return [stateObject, updateStateObject];
});