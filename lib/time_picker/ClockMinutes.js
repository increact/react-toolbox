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

var _utils = require("../utils/utils");

var _ClockHand = _interopRequireDefault(require("./ClockHand"));

var _ClockFace = _interopRequireDefault(require("./ClockFace"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var minutes = (0, _utils.range)(0, 60, 5);
var step = 360 / 60;

var Minutes = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Minutes, _Component);

  var _super = _createSuper(Minutes);

  function Minutes() {
    var _this;

    (0, _classCallCheck2["default"])(this, Minutes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleHandMove", function (degrees) {
      _this.props.onChange(degrees / step);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseDown", function (event) {
      _this.handNode.mouseStart(event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTouchStart", function (event) {
      _this.handNode.touchStart(event);
    });
    return _this;
  }

  (0, _createClass2["default"])(Minutes, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ClockFace["default"], {
        onTouchStart: this.handleTouchStart,
        onMouseDown: this.handleMouseDown,
        numbers: minutes,
        spacing: this.props.spacing,
        radius: this.props.radius,
        active: this.props.selected,
        theme: this.props.theme,
        twoDigits: true
      }), /*#__PURE__*/_react["default"].createElement(_ClockHand["default"], {
        ref: function ref(node) {
          _this2.handNode = node;
        },
        className: minutes.indexOf(this.props.selected) === -1 ? this.props.theme.small : '',
        angle: this.props.selected * step,
        length: this.props.radius - this.props.spacing,
        onMove: this.handleHandMove,
        origin: this.props.center,
        theme: this.props.theme,
        step: step
      }));
    }
  }]);
  return Minutes;
}(_react.Component);

(0, _defineProperty2["default"])(Minutes, "propTypes", {
  center: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  }),
  onChange: _propTypes["default"].func,
  radius: _propTypes["default"].number,
  selected: _propTypes["default"].number,
  spacing: _propTypes["default"].number,
  theme: _propTypes["default"].shape({
    small: _propTypes["default"].string
  })
});
(0, _defineProperty2["default"])(Minutes, "defaultProps", {
  selected: 0,
  onChange: null
});
var _default = Minutes;
exports["default"] = _default;