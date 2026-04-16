"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _SettingsCard = _interopRequireDefault(require("./SettingsCard"));
var _SettingsSection = _interopRequireDefault(require("./SettingsSection"));
var _MinMaxSetting = _interopRequireDefault(require("./MinMaxSetting"));
require("./style.scss");
var _default = exports["default"] = {
  SettingsCard: _SettingsCard["default"],
  SettingsSection: _SettingsSection["default"],
  MinMaxSetting: _MinMaxSetting["default"]
};