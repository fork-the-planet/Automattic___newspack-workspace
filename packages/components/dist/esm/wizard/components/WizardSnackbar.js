import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "position", "type", "actions"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Snackbar.
 */

/**
 * WordPress dependencies.
 */
import { Snackbar as BaseComponent } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies.
 */
import { WIZARD_STORE_NAMESPACE } from '../store';
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WizardSnackbar component.
 *
 * @param {Object}      props          - The component props.
 * @param {Object[]}    props.actions  - The actions to display in the snackbar.
 * @param {JSX.Element} props.children - The component children.
 * @param {Object}      props.props    - The component props. See: https://wordpress.github.io/gutenberg/?path=/docs/components-snackbar--docs
 * @param {string}      props.position - The snackbar position.
 * @param {string}      props.type     - The snackbar type: 'info', 'success', 'warning', or 'error'.
 * @return {JSX.Element} The component.
 */
import { jsx as _jsx } from "react/jsx-runtime";
var WizardSnackbar = function WizardSnackbar(_ref) {
  var children = _ref.children,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'bottom-left' : _ref$position,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'info' : _ref$type,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    props = _objectWithoutProperties(_ref, _excluded);
  var className = classnames('newspack-wizard__snackbar', props.className, "newspack-wizard__snackbar--".concat(position), "newspack-wizard__snackbar--".concat(type));
  var _useDispatch = useDispatch(WIZARD_STORE_NAMESPACE),
    removeNotice = _useDispatch.removeNotice,
    resetNotices = _useDispatch.resetNotices;
  var onRemove = function onRemove() {
    if (props.onRemove) {
      props.onRemove();
    }
    if (props.id) {
      removeNotice(props.id);
    } else {
      resetNotices();
    }
  };
  return /*#__PURE__*/_jsx(BaseComponent, _objectSpread(_objectSpread({
    className: className
  }, props), {}, {
    onRemove: onRemove,
    actions: actions,
    children: children
  }));
};
export default WizardSnackbar;