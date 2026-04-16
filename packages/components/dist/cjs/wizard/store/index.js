"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WIZARD_STORE_NAMESPACE = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _set = _interopRequireDefault(require("lodash/set"));
var _get = _interopRequireDefault(require("lodash/get"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _apiFetch = _interopRequireDefault(require("@wordpress/api-fetch"));
var _data = require("@wordpress/data");
var _utils = require("./utils.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * External dependencies.
 */ /**
 * WordPress dependencies.
 */
var WIZARD_STORE_NAMESPACE = exports.WIZARD_STORE_NAMESPACE = 'newspack/wizards';
var DEFAULT_STATE = {
  headerData: {
    actions: [],
    backNav: '',
    badges: [],
    sectionDescription: '',
    sectionName: '',
    sectionTitle: ''
  },
  isLoading: false,
  isQuietLoading: false,
  apiData: {},
  notices: [],
  error: null
};

/**
 * wordpress/data does not trigger a component re-render
 * on deep state change (via lodash's set function)
 * unless the state was cloned first.
 */
var clone = function clone(objectToClone) {
  return JSON.parse(JSON.stringify(objectToClone));
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    _ref$payload = _ref.payload,
    payload = _ref$payload === void 0 ? {} : _ref$payload;
  switch (type) {
    case 'SET_HEADER_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        headerData: _objectSpread(_objectSpread({}, state.headerData), payload)
      });
    case 'RESET_HEADER_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        headerData: _objectSpread({}, DEFAULT_STATE.headerData)
      });
    case 'START_LOADING_DATA':
      if (payload.isQuietLoading) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isQuietLoading: true
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });
    case 'FINISH_LOADING_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        isQuietLoading: false
      });
    case 'SET_API_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        apiData: (0, _set["default"])(clone(state.apiData), [payload.slug], payload.data)
      });
    case 'UPDATE_WIZARD_SETTINGS':
      return _objectSpread(_objectSpread({}, state), {}, {
        apiData: (0, _set["default"])(clone(state.apiData), [payload.slug].concat((0, _toConsumableArray2["default"])(payload.path)), payload.value)
      });
    case 'ADD_NOTICE':
      return _objectSpread(_objectSpread({}, state), {}, {
        notices: [].concat((0, _toConsumableArray2["default"])(state.notices), [payload])
      });
    case 'REMOVE_NOTICE':
      return _objectSpread(_objectSpread({}, state), {}, {
        notices: state.notices.filter(function (notice) {
          return notice.id !== payload;
        })
      });
    case 'SET_ERROR':
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });
    case 'RESET_NOTICES':
      return _objectSpread(_objectSpread({}, state), {}, {
        notices: DEFAULT_STATE.notices
      });
    default:
      return state;
  }
};
var actions = {
  // Regular actions.
  setHeaderData: (0, _utils.createAction)('SET_HEADER_DATA'),
  resetHeaderData: (0, _utils.createAction)('RESET_HEADER_DATA'),
  startLoadingData: (0, _utils.createAction)('START_LOADING_DATA'),
  finishLoadingData: (0, _utils.createAction)('FINISH_LOADING_DATA'),
  fetchFromAPI: (0, _utils.createAction)('FETCH_FROM_API'),
  setAPIDataForWizard: (0, _utils.createAction)('SET_API_DATA'),
  updateWizardSettings: (0, _utils.createAction)('UPDATE_WIZARD_SETTINGS'),
  addNotice: (0, _utils.createAction)('ADD_NOTICE'),
  removeNotice: (0, _utils.createAction)('REMOVE_NOTICE'),
  resetNotices: (0, _utils.createAction)('RESET_NOTICES'),
  setError: (0, _utils.createAction)('SET_ERROR'),
  // Async actions. These will not show up in Redux devtools.
  saveWizardSettings: function saveWizardSettings(_ref2) {
    var slug = _ref2.slug,
      _ref2$section = _ref2.section,
      section = _ref2$section === void 0 ? '' : _ref2$section,
      _ref2$payloadPath = _ref2.payloadPath,
      payloadPath = _ref2$payloadPath === void 0 ? false : _ref2$payloadPath,
      _ref2$auxData = _ref2.auxData,
      auxData = _ref2$auxData === void 0 ? {} : _ref2$auxData,
      _ref2$updatePayload = _ref2.updatePayload,
      updatePayload = _ref2$updatePayload === void 0 ? null : _ref2$updatePayload;
    return /*#__PURE__*/_regenerator().m(function _callee() {
      var wizardState, data, updatedData;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!updatePayload) {
              _context.n = 1;
              break;
            }
            _context.n = 1;
            return actions.updateWizardSettings(_objectSpread({
              slug: slug
            }, updatePayload));
          case 1:
            wizardState = (0, _data.select)(WIZARD_STORE_NAMESPACE).getWizardAPIData(slug);
            data = payloadPath ? (0, _get["default"])(wizardState, payloadPath) : wizardState;
            _context.n = 2;
            return actions.fetchFromAPI({
              path: "/newspack/v1/wizard/".concat(slug, "/").concat(section),
              method: 'POST',
              data: _objectSpread(_objectSpread({}, data), auxData),
              isQuietFetch: true
            });
          case 2:
            updatedData = _context.v;
            if (!(!(0, _isEmpty["default"])(updatedData) && !updatedData.error)) {
              _context.n = 3;
              break;
            }
            return _context.a(2, actions.setAPIDataForWizard({
              slug: slug,
              data: updatedData
            }));
          case 3:
            return _context.a(2);
        }
      }, _callee);
    })();
  },
  wizardApiFetch: /*#__PURE__*/_regenerator().m(function wizardApiFetch(fetchConfig) {
    var result;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return actions.fetchFromAPI(fetchConfig);
        case 1:
          result = _context2.v;
          return _context2.a(2, result);
      }
    }, wizardApiFetch);
  })
};
var selectors = {
  getHeaderData: function getHeaderData(state) {
    return state.headerData;
  },
  isLoading: function isLoading(state) {
    return state.isLoading;
  },
  isQuietLoading: function isQuietLoading(state) {
    return state.isQuietLoading;
  },
  getWizardAPIData: function getWizardAPIData(state, slug) {
    return state.apiData[slug] || {};
  },
  getWizardData: function getWizardData(state, slug) {
    var _state$apiData$slug;
    return (_state$apiData$slug = state.apiData[slug]) !== null && _state$apiData$slug !== void 0 ? _state$apiData$slug : {};
  },
  getNotices: function getNotices(state) {
    return state.notices;
  },
  getError: function getError(state) {
    return state.error;
  }
};
var store = (0, _data.createReduxStore)(WIZARD_STORE_NAMESPACE, {
  reducer: reducer,
  actions: actions,
  selectors: selectors,
  controls: {
    FETCH_FROM_API: function FETCH_FROM_API(action) {
      var _action$payload = action.payload,
        _action$payload$isLoc = _action$payload.isLocalError,
        isLocalError = _action$payload$isLoc === void 0 ? false : _action$payload$isLoc,
        _action$payload$isQui = _action$payload.isQuietFetch,
        isQuietFetch = _action$payload$isQui === void 0 ? false : _action$payload$isQui;
      (0, _data.dispatch)(WIZARD_STORE_NAMESPACE).startLoadingData({
        isQuietLoading: Boolean(isQuietFetch)
      });
      return (0, _apiFetch["default"])(action.payload).then(function (data) {
        (0, _data.dispatch)(WIZARD_STORE_NAMESPACE).setError(null);
        return data;
      })["catch"](function (error) {
        if (isLocalError) {
          throw error;
        }
        (0, _data.dispatch)(WIZARD_STORE_NAMESPACE).setError(error);
      })["finally"](function (result) {
        (0, _data.dispatch)(WIZARD_STORE_NAMESPACE).finishLoadingData();
        return result;
      });
    }
  },
  resolvers: {
    getWizardAPIData: /*#__PURE__*/_regenerator().m(function getWizardAPIData(slug) {
      var data;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!slug) {
              _context3.n = 2;
              break;
            }
            _context3.n = 1;
            return actions.fetchFromAPI({
              path: "/newspack/v1/wizard/".concat(slug)
            });
          case 1:
            data = _context3.v;
            return _context3.a(2, actions.setAPIDataForWizard({
              slug: slug,
              data: data
            }));
          case 2:
            return _context3.a(2, actions.finishLoadingData());
        }
      }, getWizardAPIData);
    })
  }
});
var _default = exports["default"] = function _default() {
  return (0, _data.register)(store);
};