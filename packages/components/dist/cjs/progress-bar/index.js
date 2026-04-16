"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _element = require("@wordpress/element");
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Progress Bar
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */
var ProgressBar = /*#__PURE__*/function (_Component) {
  function ProgressBar() {
    (0, _classCallCheck2["default"])(this, ProgressBar);
    return _callSuper(this, ProgressBar, arguments);
  }
  (0, _inherits2["default"])(ProgressBar, _Component);
  return (0, _createClass2["default"])(ProgressBar, [{
    key: "getCompletionPercentage",
    value:
    /**
     * Get completion as a percentage.
     *
     * @param {number} completed The number of steps completed.
     * @param {number} total     The total number of steps.
     * @return {number} completion percentage
     */
    function getCompletionPercentage(completed, total) {
      if (!total) {
        return 100;
      }
      return Math.max(Math.min(Math.round(completed / total * 100), 100), 0);
    }

    /**
     * Render.
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        label = _this$props.label,
        completed = _this$props.completed,
        total = _this$props.total,
        displayFraction = _this$props.displayFraction;
      var cleanTotal = Math.max(0, parseInt(total) || 0);
      var cleanCompleted = Math.max(0, Math.min(parseInt(completed) || 0, parseInt(cleanTotal)));
      var barStyle = {
        width: this.getCompletionPercentage(cleanCompleted, cleanTotal) + '%'
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "newspack-progress-bar",
        children: [(label || displayFraction) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "newspack-progress-bar__headings",
          children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            children: label
          }), displayFraction && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "is-dark",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("strong", {
              children: [cleanCompleted, "/", cleanTotal]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "newspack-progress-bar__container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "newspack-progress-bar__bar",
            style: barStyle,
            "data-testid": "progress-bar-indicator"
          })
        })]
      });
    }
  }]);
}(_element.Component);
var _default = exports["default"] = ProgressBar;