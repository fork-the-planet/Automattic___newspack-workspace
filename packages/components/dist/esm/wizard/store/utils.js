/**
 * WordPress dependencies.
 */
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { WIZARD_STORE_NAMESPACE } from '.';
export var createAction = function createAction(type) {
  return function (payload) {
    return {
      type: type,
      payload: payload
    };
  };
};
export var useWizardData = function useWizardData(wizardName) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).getWizardAPIData(wizardName);
  }) || defaultValue;
};