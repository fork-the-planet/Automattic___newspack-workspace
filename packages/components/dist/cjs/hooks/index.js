"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _element = require("@wordpress/element");
var _usePrompt = _interopRequireDefault(require("./usePrompt"));
var _useObjectState = _interopRequireDefault(require("./useObjectState"));
var _useOnClickOutside = _interopRequireDefault(require("./useOnClickOutside"));
var _useConfirmDialog = _interopRequireDefault(require("./use-confirm-dialog"));
/**
 * WordPress dependencies
 */

var useUniqueId = function useUniqueId(prefix) {
  var id = (0, _element.useRef)("".concat(prefix, "-").concat(Math.round(Math.random() * 99999)));
  return id.current;
};
var _default = exports["default"] = {
  usePrompt: _usePrompt["default"],
  useObjectState: _useObjectState["default"],
  useOnClickOutside: _useOnClickOutside["default"],
  useUniqueId: useUniqueId,
  useConfirmDialog: _useConfirmDialog["default"]
};