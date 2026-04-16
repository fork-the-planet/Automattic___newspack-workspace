import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "borders", "columns", "gutter", "noMargin", "rowGap"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Grid
 */

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
var Grid = function Grid(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$borders = _ref.borders,
    borders = _ref$borders === void 0 ? false : _ref$borders,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 2 : _ref$columns,
    _ref$gutter = _ref.gutter,
    gutter = _ref$gutter === void 0 ? 32 : _ref$gutter,
    _ref$noMargin = _ref.noMargin,
    noMargin = _ref$noMargin === void 0 ? false : _ref$noMargin,
    _ref$rowGap = _ref.rowGap,
    rowGap = _ref$rowGap === void 0 ? 0 : _ref$rowGap,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var classes = classnames('newspack-grid', borders && 'newspack-grid__borders', noMargin && 'newspack-grid--no-margin', columns && 'newspack-grid__columns-' + columns, gutter && 'newspack-grid__gutter-' + gutter, rowGap && 'newspack-grid__row-gap-' + rowGap, className);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    className: classes
  }, otherProps));
};
export default Grid;