import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["message", "when"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * WordPress dependencies.
 */
import { useCallback, useRef, useState } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import ConfirmDialog from '../confirm-dialog';
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * A hook that encapsulates the ConfirmDialog component and provides a
 * `requestConfirm` function for imperative use.
 *
 * Calling `requestConfirm( callback )` will show a confirmation dialog.
 * If the user confirms, `callback` is invoked. If the user cancels, it is not.
 *
 * When `when` is explicitly `false`, `requestConfirm( callback )` calls
 * `callback` immediately without showing the dialog. This is useful for
 * guarding actions that are only destructive when there are unsaved changes
 * (e.g. `when={ isDirty }`). When `when` is omitted or `true`, the dialog
 * is always shown.
 *
 * The `confirmDialog` element must be rendered somewhere in the component's
 * JSX for the dialog to appear.
 */
function useConfirmDialog(options) {
  var message = options.message,
    when = options.when,
    dialogProps = _objectWithoutProperties(options, _excluded);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    pendingAction = _useState2[0],
    setPendingAction = _useState2[1];

  // Keep a ref so `requestConfirm` can always read the latest `when` value
  // without needing to be recreated on every render.
  var whenRef = useRef(when);
  whenRef.current = when;
  var requestConfirm = useCallback(function (callback) {
    if (whenRef.current !== false) {
      // Store as a thunk to opt out of React's functional-update interpretation.
      setPendingAction(function () {
        return callback;
      });
    } else {
      callback();
    }
  }, []);
  var confirmDialog = /*#__PURE__*/_jsx(ConfirmDialog, _objectSpread(_objectSpread({}, dialogProps), {}, {
    when: when,
    isOpen: !!pendingAction,
    onConfirm: function onConfirm() {
      pendingAction === null || pendingAction === void 0 || pendingAction();
      setPendingAction(null);
    },
    onCancel: function onCancel() {
      return setPendingAction(null);
    },
    children: message
  }));
  return {
    confirmDialog: confirmDialog,
    requestConfirm: requestConfirm
  };
}
export default useConfirmDialog;