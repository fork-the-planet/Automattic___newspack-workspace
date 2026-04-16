"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _element = require("@wordpress/element");
var _components = require("@wordpress/components");
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * External dependencies
 */ /**
 * WordPress dependencies
 */ /**
 * Internal dependencies
 */ /**
 * An multi-selecting, api-driven autocomplete input suitable for use in block attributes.
 */
var AutocompleteTokenField = /*#__PURE__*/function (_Component) {
  function AutocompleteTokenField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AutocompleteTokenField);
    _this = _callSuper(this, AutocompleteTokenField, [props]);
    /**
     * If the component has tokens passed in props, it should fetch info after it mounts.
     */
    (0, _defineProperty2["default"])(_this, "isFetchingInfoOnLoad", function () {
      var _this$props = _this.props,
        tokens = _this$props.tokens,
        fetchSavedInfo = _this$props.fetchSavedInfo;
      return Boolean(tokens.length && fetchSavedInfo);
    });
    _this.state = {
      suggestions: [],
      validValues: {},
      loading: _this.isFetchingInfoOnLoad()
    };
    _this.debouncedUpdateSuggestions = (0, _debounce["default"])(_this.updateSuggestions, 500);
    return _this;
  }
  (0, _inherits2["default"])(AutocompleteTokenField, _Component);
  return (0, _createClass2["default"])(AutocompleteTokenField, [{
    key: "componentDidMount",
    value:
    /**
     * When the component loads, fetch information about the tokens so we can populate
     * the tokens with the correct labels.
     */
    function componentDidMount() {
      var _this2 = this;
      if (this.isFetchingInfoOnLoad()) {
        var _this$props2 = this.props,
          tokens = _this$props2.tokens,
          fetchSavedInfo = _this$props2.fetchSavedInfo;
        fetchSavedInfo(tokens).then(function (results) {
          var validValues = _this2.state.validValues;
          results.forEach(function (suggestion) {
            validValues[suggestion.value] = suggestion.label;
          });
          _this2.setState({
            validValues: validValues,
            loading: false
          });
        });
      }
    }

    /**
     * When the component updates, fetch information about the tokens so we can populate
     * the tokens with the correct labels.
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;
      var _this$props3 = this.props,
        tokens = _this$props3.tokens,
        fetchSavedInfo = _this$props3.fetchSavedInfo;
      if (tokens !== prevProps.tokens && this.isFetchingInfoOnLoad()) {
        fetchSavedInfo(tokens).then(function (results) {
          var validValues = _this3.state.validValues;
          results.forEach(function (suggestion) {
            validValues[suggestion.value] = suggestion.label;
          });
          _this3.setState({
            validValues: validValues,
            loading: false
          });
        });
      }
    }

    /**
     * Clean up any unfinished autocomplete api call requests.
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.suggestionsRequest;
      this.debouncedUpdateSuggestions.cancel();
    }

    /**
     * Get a list of labels for input values.
     *
     * @param {Array} values Array of values (ids, etc.).
     * @return {Array} array of valid labels corresponding to the values.
     */
  }, {
    key: "getLabelsForValues",
    value: function getLabelsForValues(values) {
      var validValues = this.state.validValues;
      return values.reduce(function (accumulator, value) {
        if (!value) {
          return accumulator;
        }
        if (value.label) {
          return [].concat((0, _toConsumableArray2["default"])(accumulator), [value.label]);
        }
        return validValues[value] ? [].concat((0, _toConsumableArray2["default"])(accumulator), [validValues[value]]) : accumulator;
      }, []);
    }

    /**
     * Get a list of values for input labels.
     *
     * @param {Array} labels Array of labels from the tokens.
     * @return {Array} Array of valid values corresponding to the labels.
     */
  }, {
    key: "getValuesForLabels",
    value: function getValuesForLabels(labels) {
      var returnFullObjects = this.props.returnFullObjects; // If this prop is passed, return both the value and label. Otherwise, return just the label.
      var validValues = this.state.validValues;
      if (returnFullObjects) {
        return labels.reduce(function (acc, label) {
          Object.keys(validValues).forEach(function (key) {
            if (validValues[key] === label) {
              // Preserve numeric or string type of values. Object.keys will convert numbers to strings.
              var value = /^\d+$/.test(key.toString()) ? parseInt(key) : key.toString();
              acc.push({
                value: value,
                label: label
              });
            }
          });
          return acc;
        }, []);
      }
      return labels.map(function (label) {
        return Object.keys(validValues).map(function (key) {
          return /^\d+$/.test(key.toString()) ? parseInt(key) : key.toString();
        }).find(function (key) {
          return validValues[key] === label;
        });
      });
    }

    /**
     * Refresh the autocomplete dropdown.
     *
     * @param {string} input Input to fetch suggestions for
     */
  }, {
    key: "updateSuggestions",
    value: function updateSuggestions(input) {
      var _this4 = this;
      var fetchSuggestions = this.props.fetchSuggestions;
      if (!fetchSuggestions) {
        return;
      }
      this.setState({
        loading: true
      }, function () {
        var request = fetchSuggestions(input);
        request.then(function (suggestions) {
          // A fetch Promise doesn't have an abort option. It's mimicked by
          // comparing the request reference in on the instance, which is
          // reset or deleted on subsequent requests or unmounting.
          if (_this4.suggestionsRequest !== request) {
            return;
          }
          var validValues = _this4.state.validValues;
          var currentSuggestions = (0, _toConsumableArray2["default"])(suggestions);
          suggestions.forEach(function (suggestion) {
            validValues[suggestion.value] = suggestion.label;
          });
          _this4.setState({
            suggestions: currentSuggestions,
            validValues: validValues,
            loading: false
          });
        })["catch"](function () {
          if (_this4.suggestionsRequest === request) {
            _this4.setState({
              loading: false
            });
          }
        });
        _this4.suggestionsRequest = request;
      });
    }

    /**
     * When a token is selected, we need to convert the string label into a recognized value suitable for saving as an attribute.
     *
     * @param {Array} tokenStrings An array of token label strings.
     */
  }, {
    key: "handleOnChange",
    value: function handleOnChange(tokenStrings) {
      var onChange = this.props.onChange;
      onChange(this.getValuesForLabels(tokenStrings));
    }

    /**
     * To populate the tokens, we need to convert the values into a human-readable label.
     *
     * @return {Array} An array of token label strings.
     */
  }, {
    key: "getTokens",
    value: function getTokens() {
      var tokens = this.props.tokens;
      return this.getLabelsForValues(tokens);
    }

    /**
     * Render.
     */
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$props4 = this.props,
        help = _this$props4.help,
        _this$props4$label = _this$props4.label,
        label = _this$props4$label === void 0 ? '' : _this$props4$label,
        _this$props4$placehol = _this$props4.placeholder,
        placeholder = _this$props4$placehol === void 0 ? '' : _this$props4$placehol,
        maxLength = _this$props4.maxLength,
        style = _this$props4.style,
        __next40pxDefaultSize = _this$props4.__next40pxDefaultSize;
      var _this$state = this.state,
        suggestions = _this$state.suggestions,
        loading = _this$state.loading;
      var classNames = ['newspack-autocomplete-tokenfield__input-container'];
      if (label) {
        classNames.push('has-label');
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "newspack-autocomplete-tokenfield",
        style: style,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: classNames.join(' '),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormTokenField, {
            value: this.getTokens(),
            suggestions: suggestions.map(function (suggestion) {
              return suggestion.label;
            }),
            onChange: function onChange(tokens) {
              return _this5.handleOnChange(tokens);
            },
            onInputChange: function onInputChange(input) {
              return _this5.debouncedUpdateSuggestions(input);
            },
            label: label,
            maxLength: maxLength,
            placeholder: placeholder,
            __next40pxDefaultSize: __next40pxDefaultSize
          }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Spinner, {})]
        }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "newspack-autocomplete-tokenfield__help",
          children: help
        })]
      });
    }
  }]);
}(_element.Component);
var _default = exports["default"] = AutocompleteTokenField;