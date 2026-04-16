"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _apiFetch = _interopRequireDefault(require("@wordpress/api-fetch"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _url = require("@wordpress/url");
var _ = require("../");
require("./style.scss");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _find = _interopRequireDefault(require("lodash/find"));
var _filter = _interopRequireDefault(require("lodash/filter"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Category Autocomplete
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */ /**
 * External dependencies
 */ /**
 * Category autocomplete field component.
 */
var CategoryAutocomplete = /*#__PURE__*/function (_Component) {
  /**
   * Class constructor.
   */
  function CategoryAutocomplete(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, CategoryAutocomplete);
    _this = _callSuper(this, CategoryAutocomplete, [props]);
    (0, _defineProperty2["default"])(_this, "state", {
      suggestions: {},
      allCategories: {},
      isLoading: false
    });
    /**
     * Prepare categories data for the API endpoint, call the change handler.
     *
     * @param {Array} tokens An array of category tokens.
     */
    (0, _defineProperty2["default"])(_this, "handleOnChange", function (tokens) {
      var onChange = _this.props.onChange;
      var suggestions = _this.state.suggestions;
      // Categories that are already will be objects, while new additions will be strings (the name).
      // allValues nomalizes the array so that they are all objects.
      var allValues = tokens.filter(function (token) {
        return 'undefined' !== typeof token;
      }) // Ensure each token is a valid value.
      .map(function (token) {
        return 'string' === typeof token ? suggestions[token] : token;
      }).filter(Boolean);
      onChange(allValues);
    });
    (0, _defineProperty2["default"])(_this, "getAvailableSuggestions", function () {
      var value = _this.props.value;
      var suggestions = _this.state.suggestions;
      var selectedIds = value.reduce(function (acc, item) {
        if (item !== null && item !== void 0 && item.id) {
          acc.push(item.id);
        }
        return acc;
      }, []);
      var availableSuggestions = (0, _filter["default"])(suggestions, function (_ref) {
        var id = _ref.id;
        return selectedIds.indexOf(id) === -1;
      });
      return availableSuggestions.map(function (v) {
        return v.name;
      });
    });
    _this.debouncedUpdateSuggestions = (0, _debounce["default"])(_this.updateSuggestions, 100);
    return _this;
  }
  (0, _inherits2["default"])(CategoryAutocomplete, _Component);
  return (0, _createClass2["default"])(CategoryAutocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.setState({
        isLoading: true
      });
      (0, _apiFetch["default"])({
        path: (0, _url.addQueryArgs)("/wp/v2/".concat(this.props.taxonomy), {
          per_page: -1,
          _fields: 'id,name'
        })
      }).then(function (categories) {
        return _this2.setState({
          allCategories: categories
        });
      })["finally"](function () {
        return _this2.setState({
          isLoading: false
        });
      });
    }

    /**
     * Clean up debounced suggestions method.
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.debouncedUpdateSuggestions.cancel();
    }

    /**
     * Refresh the autocomplete UI based on text that was typed.
     *
     * @param {string} search The typed text to search for.
     */
  }, {
    key: "updateSuggestions",
    value: function updateSuggestions(search) {
      var _this3 = this;
      this.setState({
        isLoading: true
      });
      (0, _apiFetch["default"])({
        path: (0, _url.addQueryArgs)("/wp/v2/".concat(this.props.taxonomy), {
          search: search,
          per_page: 20,
          _fields: 'id,name',
          orderby: 'count',
          order: 'desc'
        })
      }).then(function (categories) {
        _this3.setState({
          suggestions: categories.reduce(function (accumulator, category) {
            return _objectSpread(_objectSpread({}, accumulator), {}, (0, _defineProperty2["default"])({}, category.name, category));
          }, {})
        });
      })["finally"](function () {
        return _this3.setState({
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value:
    /**
     * Render the component.
     */
    function render() {
      var _this4 = this;
      var _this$props = this.props,
        className = _this$props.className,
        disabled = _this$props.disabled,
        description = _this$props.description,
        hideHelpFromVision = _this$props.hideHelpFromVision,
        hideLabelFromVision = _this$props.hideLabelFromVision,
        label = _this$props.label,
        value = _this$props.value;
      var _this$state = this.state,
        allCategories = _this$state.allCategories,
        isLoading = _this$state.isLoading;
      var classes = (0, _classnames["default"])('newspack-category-autocomplete', className);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classes,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.FormTokenField, {
          onInputChange: function onInputChange(input) {
            return _this4.debouncedUpdateSuggestions(input);
          },
          value: value.reduce(function (acc, item) {
            var categoryOrItem = typeof item === 'number' ? (0, _find["default"])(allCategories, ['id', item]) : item;
            if (categoryOrItem) {
              acc.push({
                id: categoryOrItem.term_id || categoryOrItem.id,
                value: categoryOrItem.value || categoryOrItem.name
              });
            }
            return acc;
          }, []),
          suggestions: this.getAvailableSuggestions(),
          onChange: this.handleOnChange,
          label: label,
          disabled: disabled,
          description: description,
          hideHelpFromVision: hideHelpFromVision,
          hideLabelFromVision: hideLabelFromVision
        }), isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "newspack-category-autocomplete__suggestions-spinner",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Spinner, {})
        }) : null]
      });
    }
  }]);
}(_element.Component);
CategoryAutocomplete.defaultProps = {
  taxonomy: 'categories'
};
var _default = exports["default"] = CategoryAutocomplete;