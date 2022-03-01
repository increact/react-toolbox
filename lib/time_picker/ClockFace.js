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

var _classnames2 = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Face = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Face, _Component);

  var _super = _createSuper(Face);

  function Face() {
    var _this;

    (0, _classCallCheck2["default"])(this, Face);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderNumber", function (number, idx) {
      var _this$props = _this.props,
          active = _this$props.active,
          radius = _this$props.radius,
          spacing = _this$props.spacing,
          theme = _this$props.theme,
          twoDigits = _this$props.twoDigits;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames2["default"])(theme.number, (0, _defineProperty2["default"])({}, theme.active, number === active)),
        style: _this.numberStyle(radius - spacing, idx + 1),
        key: number
      }, twoDigits ? "0".concat(number).slice(-2) : number);
    });
    return _this;
  }

  (0, _createClass2["default"])(Face, [{
    key: "numberStyle",
    value: function numberStyle(rad, num) {
      return {
        position: 'absolute',
        left: rad + rad * Math.sin(360 * (Math.PI / 180) / 12 * (num - 1)) + this.props.spacing,
        top: rad - rad * Math.cos(360 * (Math.PI / 180) / 12 * (num - 1)) + this.props.spacing
      };
    }
  }, {
    key: "faceStyle",
    value: function faceStyle() {
      return {
        height: this.props.radius * 2,
        width: this.props.radius * 2
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          numbers = _this$props2.numbers,
          onTouchStart = _this$props2.onTouchStart,
          onMouseDown = _this$props2.onMouseDown,
          theme = _this$props2.theme; // eslint-disable-line

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: theme.face,
        onTouchStart: onTouchStart,
        onMouseDown: onMouseDown,
        style: this.faceStyle()
      }, numbers.map(this.renderNumber));
    }
  }]);
  return Face;
}(_react.Component);

(0, _defineProperty2["default"])(Face, "propTypes", {
  active: _propTypes["default"].number,
  numbers: _propTypes["default"].arrayOf(_propTypes["default"].number),
  radius: _propTypes["default"].number,
  spacing: _propTypes["default"].number,
  theme: _propTypes["default"].shape({
    active: _propTypes["default"].string,
    face: _propTypes["default"].string,
    number: _propTypes["default"].string
  }),
  twoDigits: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Face, "defaultProps", {
  active: null,
  numbers: [],
  radius: 0,
  twoDigits: false
});
var _default = Face;
exports["default"] = _default;