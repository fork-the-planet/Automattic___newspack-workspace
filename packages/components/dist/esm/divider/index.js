import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["alignment", "className", "marginBottom", "marginTop", "variant"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Divider
 */

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classNames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
var Divider = function Divider(_ref) {
  var _ref$alignment = _ref.alignment,
    alignment = _ref$alignment === void 0 ? 'none' : _ref$alignment,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? undefined : _ref$className,
    _ref$marginBottom = _ref.marginBottom,
    marginBottom = _ref$marginBottom === void 0 ? 64 : _ref$marginBottom,
    _ref$marginTop = _ref.marginTop,
    marginTop = _ref$marginTop === void 0 ? 64 : _ref$marginTop,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var classes = classNames('newspack-divider', className, alignment && "newspack-divider--alignment-".concat(alignment), variant && "newspack-divider--variant-".concat(variant));
  var style = {
    '--divider-margin-bottom': typeof marginBottom === 'number' ? "".concat(marginBottom, "px") : marginBottom,
    '--divider-margin-top': typeof marginTop === 'number' ? "".concat(marginTop, "px") : marginTop
  };
  return /*#__PURE__*/_jsx("hr", _objectSpread({
    className: classes,
    style: style
  }, otherProps));
};
export default Divider;