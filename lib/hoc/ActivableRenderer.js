"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["delay"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ActivableRendererFactory = function ActivableRendererFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    delay: 500
  };
  return function (ActivableComponent) {
    var _class;

    return _class = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(ActivableRenderer, _Component);

      var _super = _createSuper(ActivableRenderer);

      function ActivableRenderer() {
        var _this;

        (0, _classCallCheck2["default"])(this, ActivableRenderer);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
          active: _this.props.active,
          rendered: _this.props.active
        });
        return _this;
      }

      (0, _createClass2["default"])(ActivableRenderer, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.active && !this.props.active) this.renderAndActivate();
          if (!nextProps.active && this.props.active) this.deactivateAndUnrender();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this.activateTimeout);
          clearTimeout(this.unrenderTimeout);
        }
      }, {
        key: "deactivateAndUnrender",
        value: function deactivateAndUnrender() {
          var _this2 = this;

          this.setState({
            rendered: true,
            active: false
          }, function () {
            _this2.unrenderTimeout = setTimeout(function () {
              _this2.setState({
                rendered: false
              });

              _this2.unrenderTimeout = null;
            }, _this2.props.delay);
          });
        }
      }, {
        key: "renderAndActivate",
        value: function renderAndActivate() {
          var _this3 = this;

          if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
          this.setState({
            rendered: true,
            active: false
          }, function () {
            _this3.activateTimeout = setTimeout(function () {
              return _this3.setState({
                active: true
              });
            }, 20);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              delay = _this$props.delay,
              others = (0, _objectWithoutProperties2["default"])(_this$props, _excluded); // eslint-disable-line no-unused-vars

          var _this$state = this.state,
              active = _this$state.active,
              rendered = _this$state.rendered;
          return rendered ? /*#__PURE__*/_react["default"].createElement(ActivableComponent, (0, _extends2["default"])({}, others, {
            active: active
          })) : null;
        }
      }]);
      return ActivableRenderer;
    }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
      active: _propTypes["default"].bool.isRequired,
      children: _propTypes["default"].node,
      delay: _propTypes["default"].number
    }), (0, _defineProperty2["default"])(_class, "defaultProps", {
      delay: options.delay
    }), _class;
  };
};

var _default = ActivableRendererFactory;
exports["default"] = _default;