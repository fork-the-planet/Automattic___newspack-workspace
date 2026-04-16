/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Badge component
 */
var Badge = function Badge(_ref) {
  var text = _ref.text,
    _ref$level = _ref.level,
    level = _ref$level === void 0 ? 'default' : _ref$level;
  var classes = classnames('newspack-badge', "is-".concat(level));
  return /*#__PURE__*/_jsx("span", {
    className: classes,
    children: text
  });
};
export default Badge;