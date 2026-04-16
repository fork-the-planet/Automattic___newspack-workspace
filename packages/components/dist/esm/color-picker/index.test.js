/**
 * External dependencies
 */
import { render, fireEvent } from '@testing-library/react';

/**
 * Internal dependencies
 */
import ColorPicker from './';
import { jsx as _jsx } from "react/jsx-runtime";
describe('ColorPicker', function () {
  it('should render the label', function () {
    var _render = render(/*#__PURE__*/_jsx(ColorPicker, {
        label: "Background color",
        onChange: function onChange() {}
      })),
      getByText = _render.getByText;
    expect(getByText('Background color')).toBeInTheDocument();
  });
  it('should render help text', function () {
    var _render2 = render(/*#__PURE__*/_jsx(ColorPicker, {
        label: "Background color",
        help: "Choose a color",
        onChange: function onChange() {}
      })),
      getByText = _render2.getByText;
    expect(getByText('Choose a color')).toBeInTheDocument();
  });
  it('should start collapsed', function () {
    var _render3 = render(/*#__PURE__*/_jsx(ColorPicker, {
        label: "Background color",
        onChange: function onChange() {}
      })),
      getByRole = _render3.getByRole;
    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'false');
  });
  it('should expand when the expander is clicked', function () {
    var _render4 = render(/*#__PURE__*/_jsx(ColorPicker, {
        label: "Background color",
        onChange: function onChange() {}
      })),
      getByRole = _render4.getByRole;
    var expander = getByRole('button');
    fireEvent.click(expander);
    expect(expander).toHaveAttribute('aria-expanded', 'true');
  });
  it('should associate label via aria-labelledby', function () {
    var _render5 = render(/*#__PURE__*/_jsx(ColorPicker, {
        label: "Background color",
        onChange: function onChange() {}
      })),
      getByRole = _render5.getByRole,
      getByText = _render5.getByText;
    var expander = getByRole('button');
    var label = getByText('Background color');
    expect(expander.getAttribute('aria-labelledby')).toBe(label.id);
  });
  it('should associate help text via aria-describedby when help is provided', function () {
    var _render6 = render(/*#__PURE__*/_jsx(ColorPicker, {
        label: "Background color",
        help: "Choose a color",
        onChange: function onChange() {}
      })),
      getByRole = _render6.getByRole,
      getByText = _render6.getByText;
    var expander = getByRole('button');
    var help = getByText('Choose a color');
    expect(expander.getAttribute('aria-describedby')).toBe(help.id);
  });
  it('should not set aria-describedby when no help is provided', function () {
    var _render7 = render(/*#__PURE__*/_jsx(ColorPicker, {
        label: "Background color",
        onChange: function onChange() {}
      })),
      getByRole = _render7.getByRole;
    expect(getByRole('button')).not.toHaveAttribute('aria-describedby');
  });
});