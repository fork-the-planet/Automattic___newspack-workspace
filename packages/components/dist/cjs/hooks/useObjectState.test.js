"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _useObjectState3 = _interopRequireDefault(require("./useObjectState"));
var _jsxRuntime = require("react/jsx-runtime");
var INIT_STATE = {
  name: 'Foo',
  widgets: [1],
  attributes: {
    bar: 0,
    baz: 1
  }
};
var TestComponent = function TestComponent() {
  var _useObjectState = (0, _useObjectState3["default"])(INIT_STATE),
    _useObjectState2 = (0, _slicedToArray2["default"])(_useObjectState, 2),
    state = _useObjectState2[0],
    updateState = _useObjectState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      placeholder: "state",
      onChange: function onChange() {},
      value: JSON.stringify(state)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: function onClick() {
        return updateState({
          widgets: []
        });
      },
      children: "Remove widgets"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: function onClick() {
        return updateState({
          widgets: [1]
        });
      },
      children: "Add widget"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: function onClick() {
        return updateState({
          attributes: {
            bar: 2
          }
        });
      },
      children: "Nested update"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      value: state.name,
      onChange: function onChange(e) {
        return updateState({
          name: e.target.value
        });
      },
      placeholder: "name"
    })]
  });
};
describe('useObjectState', function () {
  var getState = function getState() {
    return JSON.parse(_react2.screen.getByPlaceholderText('state').getAttribute('value'));
  };
  beforeEach(function () {
    (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(TestComponent, {}));
  });
  it('updates arrays', function () {
    expect(getState()).toStrictEqual(INIT_STATE);
    (0, _react2.act)(function () {
      return _react2.screen.getByText('Remove widgets').click();
    });
    expect(getState()).toMatchObject({
      widgets: []
    });
    (0, _react2.act)(function () {
      return _react2.screen.getByText('Add widget').click();
    });
    expect(getState()).toMatchObject({
      widgets: [1]
    });
  });
  it('updates a simple value', function () {
    (0, _react2.act)(function () {
      return _react2.fireEvent.change(_react2.screen.getByPlaceholderText('name'), {
        target: {
          value: 'Ramon'
        }
      });
    });
    expect(getState()).toMatchObject({
      name: 'Ramon'
    });
  });
  it('updates a nested object', function () {
    (0, _react2.act)(function () {
      return _react2.screen.getByText('Nested update').click();
    });
    expect(getState()).toMatchObject({
      attributes: {
        bar: 2,
        baz: 1
      }
    });
  });
});