"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _utils = require("../utils/utils");

var _time = _interopRequireDefault(require("../utils/time"));

var _ClockHours = _interopRequireDefault(require("./ClockHours"));

var _ClockMinutes = _interopRequireDefault(require("./ClockMinutes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Clock = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Clock, _Component);

  var _super = _createSuper(Clock);

  function Clock() {
    var _this;

    (0, _classCallCheck2["default"])(this, Clock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      center: {
        x: null,
        y: null
      },
      radius: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleHourChange", function (hours) {
      if (_this.props.time.getHours() !== hours) {
        _this.props.onChange(_time["default"].setHours(_this.props.time, _this.adaptHourToFormat(hours)));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMinuteChange", function (minutes) {
      if (_this.props.time.getMinutes() !== minutes) {
        _this.props.onChange(_time["default"].setMinutes(_this.props.time, minutes));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCalculateShape", function () {
      var _this$placeholderNode = _this.placeholderNode.getBoundingClientRect(),
          top = _this$placeholderNode.top,
          left = _this$placeholderNode.left,
          width = _this$placeholderNode.width;

      _this.setState({
        center: {
          x: left + (width / 2 - window.pageXOffset),
          y: top + (width / 2 - window.pageXOffset)
        },
        radius: width / 2
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.handleCalculateShape);
      setTimeout(function () {
        _this2.handleCalculateShape();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleCalculateShape);
    }
  }, {
    key: "adaptHourToFormat",
    value: function adaptHourToFormat(hour) {
      if (this.props.format === 'ampm') {
        if (_time["default"].getTimeMode(this.props.time) === 'pm') {
          return hour < 12 ? hour + 12 : hour;
        }

        return hour === 12 ? 0 : hour;
      }

      return hour;
    }
  }, {
    key: "renderHours",
    value: function renderHours() {
      return /*#__PURE__*/_react["default"].createElement(_ClockHours["default"], {
        center: this.state.center,
        format: this.props.format,
        onChange: this.handleHourChange,
        radius: this.state.radius,
        selected: this.props.time.getHours(),
        spacing: this.state.radius * 0.18,
        onHandMoved: this.props.onHandMoved,
        theme: this.props.theme
      });
    }
  }, {
    key: "renderMinutes",
    value: function renderMinutes() {
      return /*#__PURE__*/_react["default"].createElement(_ClockMinutes["default"], {
        center: this.state.center,
        onChange: this.handleMinuteChange,
        radius: this.state.radius,
        selected: this.props.time.getMinutes(),
        spacing: this.state.radius * 0.18,
        onHandMoved: this.props.onHandMoved,
        theme: this.props.theme
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          display = _this$props.display,
          theme = _this$props.theme;
      var animation = display === 'hours' ? 'zoomOut' : 'zoomIn';
      var animationModule = (0, _utils.getAnimationModule)(animation, theme);
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-react-toolbox": "clock",
        className: theme.clock
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: theme.placeholder,
        style: {
          height: this.state.radius * 2
        },
        ref: function ref(node) {
          _this3.placeholderNode = node;
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.TransitionGroup, {
        component: null,
        childFactory: function childFactory(child) {
          return /*#__PURE__*/_react["default"].cloneElement(child, {
            classNames: animationModule
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
        mountOnEnter: true,
        unmountOnExit: true,
        key: display,
        classNames: animationModule,
        timeout: 500
      }, /*#__PURE__*/_react["default"].createElement("div", {
        key: display,
        className: theme.clockWrapper,
        style: {
          height: this.state.radius * 2
        }
      }, display === 'hours' ? this.renderHours() : null, display === 'minutes' ? this.renderMinutes() : null)))));
    }
  }]);
  return Clock;
}(_react.Component);

(0, _defineProperty2["default"])(Clock, "propTypes", {
  display: _propTypes["default"].oneOf(['hours', 'minutes']),
  format: _propTypes["default"].oneOf(['24hr', 'ampm']),
  onChange: _propTypes["default"].func,
  onHandMoved: _propTypes["default"].func,
  theme: _propTypes["default"].shape({
    clock: _propTypes["default"].string,
    clockWrapper: _propTypes["default"].string,
    placeholder: _propTypes["default"].string
  }),
  time: _propTypes["default"].instanceOf(Date)
});
(0, _defineProperty2["default"])(Clock, "defaultProps", {
  className: '',
  // eslint-disable-line react/default-props-match-prop-types
  display: 'hours',
  format: '24hr',
  time: new Date()
});
var _default = Clock;
exports["default"] = _default;