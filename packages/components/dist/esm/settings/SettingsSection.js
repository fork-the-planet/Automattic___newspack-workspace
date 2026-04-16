/**
 * Internal dependencies.
 */
import { Grid, InfoButton } from '../';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SettingSection = function SettingSection(_ref) {
  var title = _ref.title,
    description = _ref.description,
    children = _ref.children;
  return /*#__PURE__*/_jsxs(Grid, {
    columns: 1,
    gutter: 8,
    className: "newspack-settings__section",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "newspack-settings__section__title",
      children: [/*#__PURE__*/_jsx("span", {
        children: title
      }), description && /*#__PURE__*/_jsx(InfoButton, {
        text: description
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "newspack-settings__section__content",
      children: children
    })]
  });
};
export default SettingSection;