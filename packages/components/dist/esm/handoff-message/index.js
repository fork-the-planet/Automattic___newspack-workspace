import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * WordPress dependencies.
 */
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import { HANDOFF_KEY } from '../consts';
import { Notice } from '../';

/**
 * Handoff Message Component.
 */
import { jsx as _jsx } from "react/jsx-runtime";
export default function HandoffMessage() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    handoffMessage = _useState2[0],
    setHandoffMessage = _useState2[1];
  useEffect(function () {
    // Slight delay to allow for localStorage to be updated by RAS component.
    setTimeout(function () {
      var handoff = JSON.parse(localStorage.getItem(HANDOFF_KEY));
      if (handoff !== null && handoff !== void 0 && handoff.message) {
        setHandoffMessage(handoff.message);
      } else {
        setHandoffMessage(false);
      }

      // Clean up the notification if navigating away from the relevant page.
      if (handoff !== null && handoff !== void 0 && handoff.url && -1 === window.location.href.indexOf(handoff.url)) {
        window.localStorage.removeItem(HANDOFF_KEY);
        setHandoffMessage(false);
      }
    }, 100);
  }, []);
  if (!handoffMessage) {
    return null;
  }
  return /*#__PURE__*/_jsx(Notice, {
    isHandoff: true,
    isDismissible: false,
    rawHTML: true,
    noticeText: handoffMessage
  });
}