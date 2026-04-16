import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Category Autocomplete
 */

/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies.
 */
import { FormTokenField } from '../';
import './style.scss';

/**
 * External dependencies
 */
import debounce from 'lodash/debounce';
import find from 'lodash/find';
import filter from 'lodash/filter';
import classnames from 'classnames';

/**
 * Category autocomplete field component.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CategoryAutocomplete = /*#__PURE__*/function (_Component) {
  /**
   * Class constructor.
   */
  function CategoryAutocomplete(props) {
    var _this;
    _classCallCheck(this, CategoryAutocomplete);
    _this = _callSuper(this, CategoryAutocomplete, [props]);
    _defineProperty(_this, "state", {
      suggestions: {},
      allCategories: {},
      isLoading: false
    });
    /**
     * Prepare categories data for the API endpoint, call the change handler.
     *
     * @param {Array} tokens An array of category tokens.
     */
    _defineProperty(_this, "handleOnChange", function (tokens) {
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
    _defineProperty(_this, "getAvailableSuggestions", function () {
      var value = _this.props.value;
      var suggestions = _this.state.suggestions;
      var selectedIds = value.reduce(function (acc, item) {
        if (item !== null && item !== void 0 && item.id) {
          acc.push(item.id);
        }
        return acc;
      }, []);
      var availableSuggestions = filter(suggestions, function (_ref) {
        var id = _ref.id;
        return selectedIds.indexOf(id) === -1;
      });
      return availableSuggestions.map(function (v) {
        return v.name;
      });
    });
    _this.debouncedUpdateSuggestions = debounce(_this.updateSuggestions, 100);
    return _this;
  }
  _inherits(CategoryAutocomplete, _Component);
  return _createClass(CategoryAutocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.setState({
        isLoading: true
      });
      apiFetch({
        path: addQueryArgs("/wp/v2/".concat(this.props.taxonomy), {
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
      apiFetch({
        path: addQueryArgs("/wp/v2/".concat(this.props.taxonomy), {
          search: search,
          per_page: 20,
          _fields: 'id,name',
          orderby: 'count',
          order: 'desc'
        })
      }).then(function (categories) {
        _this3.setState({
          suggestions: categories.reduce(function (accumulator, category) {
            return _objectSpread(_objectSpread({}, accumulator), {}, _defineProperty({}, category.name, category));
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
      var classes = classnames('newspack-category-autocomplete', className);
      return /*#__PURE__*/_jsxs("div", {
        className: classes,
        children: [/*#__PURE__*/_jsx(FormTokenField, {
          onInputChange: function onInputChange(input) {
            return _this4.debouncedUpdateSuggestions(input);
          },
          value: value.reduce(function (acc, item) {
            var categoryOrItem = typeof item === 'number' ? find(allCategories, ['id', item]) : item;
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
        }), isLoading ? /*#__PURE__*/_jsx("span", {
          className: "newspack-category-autocomplete__suggestions-spinner",
          children: /*#__PURE__*/_jsx(Spinner, {})
        }) : null]
      });
    }
  }]);
}(Component);
CategoryAutocomplete.defaultProps = {
  taxonomy: 'categories'
};
export default CategoryAutocomplete;