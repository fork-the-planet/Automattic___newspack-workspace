"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _element = require("@wordpress/element");
var _router = _interopRequireDefault(require("../proxied-imports/router"));
// https://gist.github.com/sibelius/60a4e11da1f826b8d60dc3975a1ac805

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

var useHistory = _router["default"].useHistory;
var _default = exports["default"] = function _default(when, message) {
  var history = useHistory();
  var self = (0, _element.useRef)(null);
  var onWindowOrTabClose = function onWindowOrTabClose(event) {
    if (!when) {
      return;
    }
    if (typeof event === 'undefined') {
      event = window.event;
    }
    return message;
  };
  (0, _element.useEffect)(function () {
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
};