import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Progress Bar
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ProgressBar = /*#__PURE__*/function (_Component) {
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);
    return _callSuper(this, ProgressBar, arguments);
  }
  _inherits(ProgressBar, _Component);
  return _createClass(ProgressBar, [{
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
      return /*#__PURE__*/_jsxs("div", {
        className: "newspack-progress-bar",
        children: [(label || displayFraction) && /*#__PURE__*/_jsxs("div", {
          className: "newspack-progress-bar__headings",
          children: [label && /*#__PURE__*/_jsx("h2", {
            children: label
          }), displayFraction && /*#__PURE__*/_jsx("p", {
            className: "is-dark",
            children: /*#__PURE__*/_jsxs("strong", {
              children: [cleanCompleted, "/", cleanTotal]
            })
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "newspack-progress-bar__container",
          children: /*#__PURE__*/_jsx("div", {
            className: "newspack-progress-bar__bar",
            style: barStyle,
            "data-testid": "progress-bar-indicator"
          })
        })]
      });
    }
  }]);
}(Component);
export default ProgressBar;