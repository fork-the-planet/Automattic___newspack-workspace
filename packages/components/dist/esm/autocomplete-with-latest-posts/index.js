import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */
import debounce from 'lodash/debounce';

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { Button, CheckboxControl, FormTokenField, Spinner } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var AutocompleteWithLatestPosts = function AutocompleteWithLatestPosts(_ref) {
  var _ref$fetchSuggestions = _ref.fetchSuggestions,
    fetchSuggestions = _ref$fetchSuggestions === void 0 ? false : _ref$fetchSuggestions,
    _ref$help = _ref.help,
    help = _ref$help === void 0 ? __('Begin typing search term, click autocomplete result to select.', 'newspack-plugin') : _ref$help,
    _ref$hideHelp = _ref.hideHelp,
    hideHelp = _ref$hideHelp === void 0 ? true : _ref$hideHelp,
    _ref$hideFormTokenHel = _ref.hideFormTokenHelp,
    hideFormTokenHelp = _ref$hideFormTokenHel === void 0 ? true : _ref$hideFormTokenHel,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Search', 'newspack-plugin') : _ref$label,
    _ref$maxItemsToSugges = _ref.maxItemsToSuggest,
    maxItemsToSuggest = _ref$maxItemsToSugges === void 0 ? 0 : _ref$maxItemsToSugges,
    _ref$multiSelect = _ref.multiSelect,
    multiSelect = _ref$multiSelect === void 0 ? false : _ref$multiSelect,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? false : _ref$onChange,
    _ref$selectedItems = _ref.selectedItems,
    selectedItems = _ref$selectedItems === void 0 ? [] : _ref$selectedItems,
    _ref$suggestionsToFet = _ref.suggestionsToFetch,
    suggestionsToFetch = _ref$suggestionsToFet === void 0 ? 20 : _ref$suggestionsToFet;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoadingMore = _useState4[0],
    setIsLoadingMore = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    suggestions = _useState6[0],
    setSuggestions = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    maxSuggestions = _useState8[0],
    setMaxSuggestions = _useState8[1];
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    searchSuggestions = _useState0[0],
    setSearchSuggestions = _useState0[1];
  var _useState1 = useState({}),
    _useState10 = _slicedToArray(_useState1, 2),
    validValues = _useState10[0],
    setValidValues = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isSearching = _useState12[0],
    setIsSearching = _useState12[1];
  // Leaving this in here so we can expand to use different post types in the future; right now it defaults to 'post'.
  var postTypeToSearch = 'post';
  var classNames = ['newspack-autocomplete-with-latest-posts'];
  if (hideFormTokenHelp) {
    classNames.push('hide-form-token-help');
  }
  if (hideHelp) {
    classNames.push('hide-help');
  }

  /**
   * Debounced function to update search suggestions.
   */
  var debouncedUpdateSuggestions = debounce(function (input) {
    if (!input || input.length < 2) {
      setSearchSuggestions([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    handleFetchSuggestions(input, 0, postTypeToSearch).then(function (_suggestions) {
      setSearchSuggestions(_suggestions);
      // Update valid values for token conversion
      var newValidValues = _objectSpread({}, validValues);
      _suggestions.forEach(function (suggestion) {
        newValidValues[suggestion.value] = suggestion.label;
      });
      setValidValues(newValidValues);
    })["finally"](function () {
      return setIsSearching(false);
    });
  }, 500);

  /**
   * Fetch recent posts to show as suggestions.
   */
  useEffect(function () {
    setIsLoading(true);
    handleFetchSuggestions(null, 0, postTypeToSearch).then(function (_suggestions) {
      if (0 < _suggestions.length) {
        setSuggestions(_suggestions);
        // Update valid values for token conversion
        var newValidValues = _objectSpread({}, validValues);
        _suggestions.forEach(function (suggestion) {
          newValidValues[suggestion.value] = suggestion.label;
        });
        setValidValues(newValidValues);
      }
    })["finally"](function () {
      return setIsLoading(false);
    });
  }, []);

  /**
   * Fetch more suggestions.
   */
  useEffect(function () {
    if (isLoadingMore) {
      handleFetchSuggestions(null, suggestions.length, postTypeToSearch).then(function (_suggestions) {
        if (0 < _suggestions.length) {
          setSuggestions(suggestions.concat(_suggestions));
        }
      })["finally"](function () {
        return setIsLoadingMore(false);
      });
    }
  }, [isLoadingMore]);

  /**
   * If passed a `fetchSuggestions` prop, use that, otherwise, build it based on the selected post type.
   */
  var handleFetchSuggestions = fetchSuggestions ? fetchSuggestions : /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var search,
      offset,
      searchSlug,
      postTypeSlug,
      endpoint,
      response,
      total,
      posts,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          search = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
          offset = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
          searchSlug = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
          postTypeSlug = searchSlug || postTypeToSearch;
          endpoint = 'post' === postTypeSlug || 'page' === postTypeSlug ? postTypeSlug + 's' // Default post type endpoints are plural.
          : postTypeSlug; // Custom post type endpoints are singular.
          _context.n = 1;
          return apiFetch({
            parse: false,
            path: addQueryArgs('/wp/v2/' + endpoint, {
              search: search,
              offset: offset,
              per_page: suggestionsToFetch,
              _fields: 'id,title'
            })
          });
        case 1:
          response = _context.v;
          total = parseInt(response.headers.get('x-wp-total') || 0);
          _context.n = 2;
          return response.json();
        case 2:
          posts = _context.v;
          setMaxSuggestions(total);

          // Format suggestions for FormTokenField display.
          return _context.a(2, posts.reduce(function (acc, post) {
            acc.push({
              value: parseInt(post.id),
              label: decodeEntities(post === null || post === void 0 ? void 0 : post.title.rendered) || __('(no title)', 'newspack-plugin')
            });
            return acc;
          }, []));
      }
    }, _callee);
  }));

  /**
   * Get labels for token values.
   */
  var getLabelsForValues = function getLabelsForValues(values) {
    return values.reduce(function (accumulator, value) {
      if (!value) {
        return accumulator;
      }
      if (value.label) {
        return [].concat(_toConsumableArray(accumulator), [value.label]);
      }
      return validValues[value] ? [].concat(_toConsumableArray(accumulator), [validValues[value]]) : accumulator;
    }, []);
  };

  /**
   * Get values for token labels.
   */
  var getValuesForLabels = function getValuesForLabels(labels) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    return labels.reduce(function (acc, label) {
      Object.keys(validValues).forEach(function (key) {
        if (validValues[key] === label) {
          var value = isNaN(parseInt(key)) ? key.toString() : parseInt(key);
          acc.push({
            value: value,
            label: label
          });
        }
      });
      return acc;
    }, []);
  };

  /**
   * Handle FormTokenField onChange.
   */
  var handleTokenChange = function handleTokenChange(tokenStrings) {
    var newSelections = getValuesForLabels(tokenStrings);

    // If only allowing one selection, just return the one selected item.
    if (!multiSelect) {
      var newSelection = newSelections[newSelections.length - 1]; // Get the last selected item
      if (newSelection) {
        return onChange([_objectSpread(_objectSpread({}, newSelection), {}, {
          postType: postTypeToSearch
        })]);
      }
      return onChange([]);
    }

    // For multi-select, include currently selected post type in selection results.
    onChange(newSelections.map(function (selection) {
      return _objectSpread(_objectSpread({}, selection), {}, {
        postType: postTypeToSearch
      });
    }));
  };

  /**
   * Get tokens for FormTokenField.
   */
  var getTokens = function getTokens() {
    return getLabelsForValues(selectedItems);
  };

  /**
   * Render a single suggestion object that can be clicked to select it immediately.
   *
   * @param {Object} suggestion Suggestion object with value and label keys.
   */
  var renderSuggestion = function renderSuggestion(suggestion) {
    if (multiSelect) {
      var isSelected = !!selectedItems.find(function (_selection) {
        return parseInt(_selection.value) === parseInt(suggestion.value) && _selection.label === suggestion.label;
      });
      return /*#__PURE__*/_jsx(CheckboxControl, {
        checked: isSelected,
        onChange: function onChange() {
          // For multi-select, we need to toggle the selection
          var currentTokens = getTokens();
          var suggestionLabel = suggestion.label;
          if (isSelected) {
            // Remove the suggestion
            var newTokens = currentTokens.filter(function (token) {
              return token !== suggestionLabel;
            });
            handleTokenChange(newTokens);
          } else {
            // Add the suggestion
            handleTokenChange([].concat(_toConsumableArray(currentTokens), [suggestionLabel]));
          }
        },
        label: suggestion.label
      }, suggestion.value);
    }
    return /*#__PURE__*/_jsx(Button, {
      isLink: true,
      onClick: function onClick() {
        return handleTokenChange([].concat(_toConsumableArray(getTokens()), [suggestion.label]));
      },
      children: suggestion.label
    }, suggestion.value);
  };

  /**
   * Render a list of suggestions that can be clicked to select instead of searching by title.
   */
  var renderSuggestions = function renderSuggestions() {
    if (0 === suggestions.length) {
      return null;
    }
    var className = multiSelect ? 'newspack-autocomplete-with-latest-posts__search-suggestions-multiselect' : 'newspack-autocomplete-with-latest-posts__search-suggestions';
    return /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsxs("div", {
        className: "newspack-autocomplete-with-latest-posts__search-suggestions-container",
        children: [/*#__PURE__*/_jsx("p", {
          className: "newspack-autocomplete-with-suggestions__label",
          children: __('Latest Posts', 'newspack-plugin')
        }), /*#__PURE__*/_jsxs("div", {
          className: className,
          children: [suggestions.map(renderSuggestion), suggestions.length < (maxItemsToSuggest || maxSuggestions) && /*#__PURE__*/_jsx(Button, {
            disabled: isLoadingMore,
            isSecondary: true,
            onClick: function onClick() {
              return setIsLoadingMore(true);
            },
            children: isLoadingMore ? __('Loading…', 'newspack-plugin') : __('Load more', 'newspack-plugin')
          })]
        })]
      })
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    className: classNames.join(' '),
    children: [/*#__PURE__*/_jsxs("div", {
      className: "newspack-autocomplete-with-latest-posts__input-container",
      children: [/*#__PURE__*/_jsx(FormTokenField, {
        value: getTokens(),
        suggestions: searchSuggestions.map(function (suggestion) {
          return suggestion.label;
        }),
        onChange: handleTokenChange,
        onInputChange: debouncedUpdateSuggestions,
        label: label,
        help: !hideHelp && help,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), (isLoading || isSearching) && /*#__PURE__*/_jsx(Spinner, {})]
    }), renderSuggestions()]
  });
};
export default AutocompleteWithLatestPosts;