"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timePickerFactory = exports["default"] = exports.TimePicker = void 0;

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

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _events = _interopRequireDefault(require("../utils/events"));

var _time = _interopRequireDefault(require("../utils/time"));

var _Dialog = _interopRequireDefault(require("../dialog/Dialog"));

var _Input = _interopRequireDefault(require("../input/Input"));

var _TimePickerDialog = _interopRequireDefault(require("./TimePickerDialog"));

var _excluded = ["active", "onDismiss", "cancelLabel", "format", "inputClassName", "okLabel", "onEscKeyDown", "onOverlayClick", "readonly", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(TimePickerDialog, Input) {
  var TimePicker = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TimePicker, _Component);

    var _super = _createSuper(TimePicker);

    function TimePicker() {
      var _this;

      (0, _classCallCheck2["default"])(this, TimePicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        active: _this.props.active
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDismiss", function () {
        _this.setState({
          active: false
        });

        if (_this.props.onDismiss) {
          _this.props.onDismiss();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputFocus", function (event) {
        _events["default"].pauseEvent(event);

        _this.setState({
          active: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputBlur", function (event) {
        _events["default"].pauseEvent(event);

        _this.setState({
          active: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputClick", function (event) {
        _events["default"].pauseEvent(event);

        _this.setState({
          active: true
        });

        if (_this.props.onClick) _this.props.onClick(event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputKeyPress", function (event) {
        if (event.charCode === 13) {
          _events["default"].pauseEvent(event);

          _this.setState({
            active: true
          });
        }

        if (_this.props.onKeyPress) _this.props.onKeyPress(event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (value, event) {
        if (_this.props.onChange) _this.props.onChange(value, event);

        _this.setState({
          active: false
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(TimePicker, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.props.active && this.state.active !== nextProps.active) {
          this.setState({
            active: nextProps.active
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            active = _this$props.active,
            onDismiss = _this$props.onDismiss,
            cancelLabel = _this$props.cancelLabel,
            format = _this$props.format,
            inputClassName = _this$props.inputClassName,
            okLabel = _this$props.okLabel,
            onEscKeyDown = _this$props.onEscKeyDown,
            onOverlayClick = _this$props.onOverlayClick,
            readonly = _this$props.readonly,
            value = _this$props.value,
            others = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
        var formattedTime = value ? _time["default"].formatTime(value, format) : '';
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-react-toolbox": "time-picker",
          className: this.props.theme.container
        }, /*#__PURE__*/_react["default"].createElement(Input, (0, _extends2["default"])({}, others, {
          className: (0, _classnames2["default"])(this.props.theme.input, (0, _defineProperty2["default"])({}, inputClassName, inputClassName)),
          disabled: readonly,
          error: this.props.error,
          label: this.props.label,
          name: this.props.name,
          onKeyPress: this.handleInputKeyPress,
          onClick: this.handleInputClick,
          readOnly: true,
          type: "text",
          value: formattedTime
        })), /*#__PURE__*/_react["default"].createElement(TimePickerDialog, {
          active: this.state.active,
          cancelLabel: cancelLabel,
          className: this.props.className,
          format: format,
          name: this.props.name,
          okLabel: okLabel,
          onDismiss: this.handleDismiss,
          onEscKeyDown: onEscKeyDown || this.handleDismiss,
          onOverlayClick: onOverlayClick || this.handleDismiss,
          onSelect: this.handleSelect,
          theme: this.props.theme,
          value: this.props.value
        }));
      }
    }]);
    return TimePicker;
  }(_react.Component);

  (0, _defineProperty2["default"])(TimePicker, "propTypes", {
    active: _propTypes["default"].bool,
    cancelLabel: _propTypes["default"].string,
    className: _propTypes["default"].string,
    error: _propTypes["default"].string,
    format: _propTypes["default"].oneOf(['24hr', 'ampm']),
    inputClassName: _propTypes["default"].string,
    label: _propTypes["default"].string,
    name: _propTypes["default"].string,
    okLabel: _propTypes["default"].string,
    onChange: _propTypes["default"].func,
    onClick: _propTypes["default"].func,
    onDismiss: _propTypes["default"].func,
    onEscKeyDown: _propTypes["default"].func,
    onKeyPress: _propTypes["default"].func,
    onOverlayClick: _propTypes["default"].func,
    readonly: _propTypes["default"].bool,
    theme: _propTypes["default"].shape({
      container: _propTypes["default"].string,
      input: _propTypes["default"].string
    }),
    value: _propTypes["default"].instanceOf(Date)
  });
  (0, _defineProperty2["default"])(TimePicker, "defaultProps", {
    active: false,
    className: '',
    format: '24hr'
  });
  return TimePicker;
};

exports.timePickerFactory = factory;
var TimePickerDialog = (0, _TimePickerDialog["default"])(_Dialog["default"]);
var TimePicker = factory(TimePickerDialog, _Input["default"]);
exports.TimePicker = TimePicker;

var _default = (0, _reactCssThemr.themr)(_identifiers.TIME_PICKER)(TimePicker);

exports["default"] = _default;