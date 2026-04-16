"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require("./"));
var _jsxRuntime = require("react/jsx-runtime");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

describe('ImageUpload', function () {
  it('should render an add image button', function () {
    var _render = (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {})),
      getByText = _render.getByText;
    expect(getByText('Upload')).toBeInTheDocument();
  });
  it('should render replace and remove buttons if there is an image provided', function () {
    var image = {
      id: 1234,
      url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
    };
    var _render2 = (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {
        image: image
      })),
      getByText = _render2.getByText,
      getByTestId = _render2.getByTestId;
    expect(getByText('Remove')).toBeInTheDocument();
    expect(getByText('Replace')).toBeInTheDocument();
    expect(getByTestId('image-upload')).toBeInTheDocument();
    expect(getByTestId('image-upload').getAttribute('src')).toEqual(image.url);
  });
});