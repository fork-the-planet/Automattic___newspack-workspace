"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWizardData = exports.createAction = void 0;
var _data = require("@wordpress/data");
var _ = require(".");
/**
 * WordPress dependencies.
 */

/**
 * Internal dependencies
 */

var createAction = exports.createAction = function createAction(type) {
  return function (payload) {
    return {
      type: type,
      payload: payload
    };
  };
};
var useWizardData = exports.useWizardData = function useWizardData(wizardName) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _data.useSelect)(function (select) {
    return select(_.WIZARD_STORE_NAMESPACE).getWizardAPIData(wizardName);
  }) || defaultValue;
};