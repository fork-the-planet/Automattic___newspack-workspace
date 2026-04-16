"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withWizard;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _apiFetch = _interopRequireDefault(require("@wordpress/api-fetch"));
var _icons = require("@wordpress/icons");
var _ = require("../");
var _router = _interopRequireDefault(require("../proxied-imports/router"));
var _footer = _interopRequireDefault(require("../footer"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */
var Redirect = _router["default"].Redirect,
  Route = _router["default"].Route;

/**
 * Higher-Order Component to provide plugin management and error handling to Newspack Wizards.
 */
function withWizard(WrappedComponent, requiredPlugins) {
  return /*#__PURE__*/function (_Component) {
    function WrappedWithWizard(props) {
      var _this;
      (0, _classCallCheck2["default"])(this, WrappedWithWizard);
      _this = _callSuper(this, WrappedWithWizard, [props]);
      (0, _defineProperty2["default"])(_this, "componentDidMount", function () {
        // If there are no requiredPlugins, fire onWizardReady as soon as component mounts.
        if (!requiredPlugins) {
          var instance = _this.wrappedComponentRef.current;
          // eslint-disable-next-line no-unused-expressions
          instance && instance.onWizardReady && instance.onWizardReady();
        }
      });
      /**
       * Set the error. Called by Wizards when an error occurs.
       *
       * @return {Promise} Resolved after state update
       */
      (0, _defineProperty2["default"])(_this, "setError", function (error) {
        return new Promise(function (resolve) {
          _this.setState({
            error: error || null
          }, function () {
            return resolve();
          });
        });
      });
      /**
       * Render any errors that need rendering.
       *
       * @return {Component} Error UI
       */
      (0, _defineProperty2["default"])(_this, "getError", function () {
        var error = _this.state.error;
        if (!error) {
          return null;
        }
        var parsedError = _this.parseError(error);
        var level = parsedError.level;
        if ('fatal' === level) {
          return _this.getFatalError(parsedError);
        }
        return _this.getErrorNotice(parsedError);
      });
      /**
       * Get a notice-level error.
       *
       * @param {Error} error object already parsed by parseError
       * @return {Component} Error notice
       */
      (0, _defineProperty2["default"])(_this, "getErrorNotice", function (error) {
        var message = error.message;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
          isError: true,
          className: "newspack-wizard__above-header",
          noticeText: message,
          rawHTML: true
        });
      });
      /**
       * Get a fatal-level error.
       *
       * @param {Error} error object already parsed by parseError
       * @return {Component} React object
       */
      (0, _defineProperty2["default"])(_this, "getFatalError", function (error) {
        var fallbackURL = _this.getFallbackURL();
        if (!fallbackURL) {
          return null;
        }
        var message = error.message;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Modal, {
          title: (0, _i18n.__)('Unrecoverable error'),
          onRequestClose: function onRequestClose() {
            return window.location = fallbackURL;
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
            noticeText: message,
            isError: true,
            rawHTML: true
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Card, {
            buttonsCard: true,
            noBorder: true,
            className: "justify-end",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              isPrimary: true,
              href: fallbackURL,
              children: (0, _i18n.__)('Return to Dashboard', 'newspack-plugin')
            })
          })]
        });
      });
      /**
       * Get all the relevant info out of a raw API error response.
       *
       * @param {Object} error error object
       * @return {Object} Error object with relevant fields and defaults
       */
      (0, _defineProperty2["default"])(_this, "parseError", function (error) {
        var data = error.data,
          message = error.message,
          code = error.code;
        var level = 'fatal';
        if (!!data && 'level' in data) {
          level = data.level;
        } else if ('rest_invalid_param' === code) {
          level = 'notice';
        }
        return {
          message: message,
          level: level
        };
      });
      /**
       * Called when plugin installation is complete. Updates state and calls onWizardReady on the wrapped component.
       */
      (0, _defineProperty2["default"])(_this, "pluginInstallationStatus", function (_ref) {
        var complete = _ref.complete;
        if (_this.state.loading) {
          _this.doneLoading();
        }
        var instance = _this.wrappedComponentRef.current;
        _this.setState({
          complete: complete
        }, function () {
          // eslint-disable-next-line no-unused-expressions
          complete && instance && instance.onWizardReady && instance.onWizardReady();
        });
      });
      /**
       * Begin loading.
       */
      (0, _defineProperty2["default"])(_this, "startLoading", function (quiet) {
        if (quiet) {
          _this.setState(function (state) {
            return {
              quietLoading: state.quietLoading + 1
            };
          });
        } else {
          _this.setState(function (state) {
            return {
              loading: state.loading + 1
            };
          });
        }
      });
      /**
       * End loading.
       */
      (0, _defineProperty2["default"])(_this, "doneLoading", function (quiet) {
        if (quiet) {
          _this.setState(function (state) {
            return {
              quietLoading: state.quietLoading - 1
            };
          });
        } else {
          _this.setState(function (state) {
            return {
              loading: state.loading - 1
            };
          });
        }
      });
      /**
       * Replacement for core apiFetch that automatically manages wizard loading UI.
       */
      (0, _defineProperty2["default"])(_this, "wizardApiFetch", function (args) {
        var quiet = args.quiet;
        _this.startLoading(quiet);
        return new Promise(function (resolve, reject) {
          (0, _apiFetch["default"])(args).then(function (response) {
            _this.doneLoading(quiet);
            resolve(response);
          })["catch"](function (error) {
            _this.doneLoading(quiet);
            reject(error);
          });
        });
      });
      /**
       * Render a Route that checks for plugin installation requirements, and redirects to '/' when all are done.
       *
       * @return {void}
       */
      (0, _defineProperty2["default"])(_this, "pluginRequirements", function () {
        var complete = _this.state.complete;
        /* After all plugins are loaded, redirect to / (this could be configurable) */
        if (complete) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(Redirect, {
            from: "/plugin-requirements",
            to: "/"
          });
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(Route, {
          path: "/",
          render: function render() {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
              children: [complete !== null && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "newspack-wizard__header",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "newspack-wizard__header__inner",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "newspack-wizard__title",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                      isLink: true,
                      href: newspack_urls.dashboard,
                      label: (0, _i18n.__)('Return to Dashboard', 'newspack-plugin'),
                      showTooltip: true,
                      icon: _icons.category,
                      iconSize: 36,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.NewspackIcon, {
                        size: 36
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
                        children: requiredPlugins.length > 1 ? (0, _i18n.__)('Required plugins', 'newspack-plugin') : (0, _i18n.__)('Required plugin', 'newspack-plugin')
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "newspack-wizard newspack-wizard__content",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PluginInstaller, {
                  plugins: requiredPlugins,
                  onStatus: function onStatus(status) {
                    return _this.pluginInstallationStatus(status);
                  }
                })
              })]
            });
          }
        });
      });
      /**
       * Build a confirmation modal with the given title & message.
       * Execute {callback} if confirmed.
       *
       * @property {Object}   options             Options for the confirmation modal.
       * @property {string}   options.title       The title for the modal component.
       * @property {string}   options.message     The message for the modal component body.
       * @property {string}   options.confirmText The text for the confirmation button.
       * @property {string}   options.cancelText  The text for the cancel button.
       * @property {Function} options.callback    A function to call if the user confirms the action.
       */
      (0, _defineProperty2["default"])(_this, "confirmAction", function (options) {
        var modalOptions = _objectSpread({
          title: null,
          message: (0, _i18n.__)('Are you sure?', 'newpack-plugin'),
          confirmText: (0, _i18n.__)('OK', 'newspack-plugin'),
          cancelText: (0, _i18n.__)('Cancel', 'newspack-plugin'),
          callback: null
        }, options);
        _this.setState({
          confirmation: modalOptions
        });
      });
      /**
       * Show a confirmation modal with the given title & message.
       * Execute {callback} if confirmed.
       *
       * @return {Component} <Modal>
       */
      (0, _defineProperty2["default"])(_this, "getModal", function () {
        if (!_this.state.confirmation) {
          return null;
        }
        var _this$state$confirmat = _this.state.confirmation,
          title = _this$state$confirmat.title,
          message = _this$state$confirmat.message,
          confirmText = _this$state$confirmat.confirmText,
          cancelText = _this$state$confirmat.cancelText,
          callback = _this$state$confirmat.callback;
        return message && callback && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Modal, {
          size: "small",
          hideTitle: !title,
          title: title,
          onRequestClose: function onRequestClose() {
            return _this.setState({
              confirmation: null
            });
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: message
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Card, {
            buttonsCard: true,
            noBorder: true,
            className: "justify-end",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              variant: "secondary",
              onClick: function onClick() {
                return _this.setState({
                  confirmation: null
                });
              },
              children: cancelText
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              variant: "primary",
              onClick: function onClick() {
                _this.setState({
                  confirmation: null
                });
                callback();
              },
              children: confirmText
            })]
          })]
        });
      });
      (0, _defineProperty2["default"])(_this, "getFallbackURL", function () {
        if (typeof newspack_urls !== 'undefined') {
          return newspack_urls.dashboard;
        }
      });
      _this.state = {
        complete: null,
        error: null,
        loading: requiredPlugins && requiredPlugins.length > 0 ? 1 : 0,
        quietLoading: false,
        confirmation: null
      };
      _this.wrappedComponentRef = (0, _element.createRef)();
      return _this;
    }
    (0, _inherits2["default"])(WrappedWithWizard, _Component);
    return (0, _createClass2["default"])(WrappedWithWizard, [{
      key: "render",
      value:
      /**
       * Render.
       */
      function render() {
        var simpleFooter = this.props.simpleFooter;
        var _this$state = this.state,
          loading = _this$state.loading,
          quietLoading = _this$state.quietLoading,
          error = _this$state.error;
        var loadingClasses = [loading ? 'newspack-wizard__is-loading' : 'newspack-wizard__is-loaded'];
        if (quietLoading) {
          loadingClasses.push('newspack-wizard__is-loading-quiet');
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
          children: [this.getError(), this.getModal(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: loadingClasses.join(' '),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, _objectSpread({
              confirmAction: this.confirmAction,
              pluginRequirements: requiredPlugins && this.pluginRequirements(),
              clearError: this.clearError,
              getError: this.getError,
              errorData: error,
              setError: this.setError,
              isLoading: loading,
              startLoading: this.startLoading,
              doneLoading: this.doneLoading,
              wizardApiFetch: this.wizardApiFetch,
              ref: this.wrappedComponentRef
            }, this.props))
          }), !loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_footer["default"], {
            simple: simpleFooter
          })]
        });
      }
    }]);
  }(_element.Component);
}