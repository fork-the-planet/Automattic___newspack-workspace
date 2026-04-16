/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import ImageUpload from './';
import { jsx as _jsx } from "react/jsx-runtime";
describe('ImageUpload', function () {
  it('should render an add image button', function () {
    var _render = render(/*#__PURE__*/_jsx(ImageUpload, {})),
      getByText = _render.getByText;
    expect(getByText('Upload')).toBeInTheDocument();
  });
  it('should render replace and remove buttons if there is an image provided', function () {
    var image = {
      id: 1234,
      url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
    };
    var _render2 = render(/*#__PURE__*/_jsx(ImageUpload, {
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