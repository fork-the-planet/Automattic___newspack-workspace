"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@testing-library/react");
var _ = _interopRequireDefault(require("./"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
describe('ProgressBar', function () {
  it('should render a progress indicator', function () {
    var _render = (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {
        completed: "1",
        total: "2"
      })),
      getByTestId = _render.getByTestId;
    var indicator = getByTestId('progress-bar-indicator');
    expect(indicator).toHaveAttribute('style', 'width: 50%;');
  });
  it('should render a label', function () {
    var label = 'test label';
    var _render2 = (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {
        completed: "1",
        total: "2",
        label: label
      })),
      getByText = _render2.getByText;
    expect(getByText(label)).toBeInTheDocument();
  });
  it('should render progress as a fraction', function () {
    var _render3 = (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {
        completed: "1",
        total: "2",
        displayFraction: true
      })),
      getByText = _render3.getByText;
    expect(getByText('1/2')).toBeInTheDocument();
  });
  it('should render with both label and fraction', function () {
    var label = 'test label';
    var _render4 = (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {
        completed: "1",
        total: "2",
        label: label,
        displayFraction: true
      })),
      getByText = _render4.getByText;
    expect(getByText(label)).toBeInTheDocument();
    expect(getByText('1/2')).toBeInTheDocument();
  });
  describe('should calculate progress correctly', function () {
    [{
      props: {
        completed: 1,
        total: 2
      },
      expectedWidth: 50
    }, {
      props: {
        completed: 2,
        total: 3
      },
      expectedWidth: 67
    }, {
      props: {
        completed: 6,
        total: 3
      },
      expectedWidth: 100
    }].forEach(function (_ref) {
      var props = _ref.props,
        expectedWidth = _ref.expectedWidth;
      it("with expected  progress of ".concat(expectedWidth), function () {
        var _render5 = (0, _react2.render)(/*#__PURE__*/(0, _react.createElement)(_["default"], _objectSpread(_objectSpread({}, props), {}, {
            key: expectedWidth
          }))),
          getByTestId = _render5.getByTestId;
        expect(getByTestId('progress-bar-indicator')).toHaveAttribute('style', "width: ".concat(expectedWidth, "%;"));
      });
    });
  });
  it('should handle non-numeric values in ProgressBar element', function () {
    var _render6 = (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {
        completed: "cats",
        total: "dogs",
        displayFraction: true
      })),
      getByText = _render6.getByText,
      getByTestId = _render6.getByTestId;
    expect(getByText('0/0')).toBeInTheDocument();
    expect(getByTestId('progress-bar-indicator')).toHaveAttribute('style', 'width: 100%;');
  });
  it('should handle non-logical values in ProgressBar element', function () {
    var _render7 = (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_["default"], {
        completed: "3",
        total: "-1",
        displayFraction: true
      })),
      getByText = _render7.getByText,
      getByTestId = _render7.getByTestId;
    expect(getByText('0/0')).toBeInTheDocument();
    expect(getByTestId('progress-bar-indicator')).toHaveAttribute('style', 'width: 100%;');
  });
});