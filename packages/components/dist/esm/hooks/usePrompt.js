// https://gist.github.com/sibelius/60a4e11da1f826b8d60dc3975a1ac805

/**
 * External dependencies.
 */
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import Router from '../proxied-imports/router';
var useHistory = Router.useHistory;
export default (function (when, message) {
  var history = useHistory();
  var self = useRef(null);
  var onWindowOrTabClose = function onWindowOrTabClose(event) {
    if (!when) {
      return;
    }
    if (typeof event === 'undefined') {
      event = window.event;
    }
    return message;
  };
  useEffect(function () {
    if (when) {
      self.current = history.block(message);
      window.addEventListener('beforeunload', onWindowOrTabClose);
    }
    return function () {
      if (self.current) {
        self.current();
      }
      window.removeEventListener('beforeunload', onWindowOrTabClose);
    };
  }, [message, when]);
  return self.current || function () {};
});