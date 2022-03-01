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

var _time = _interopRequireDefault(require("../utils/time"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Day = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Day, _Component);

  var _super = _createSuper(Day);

  function Day() {
    var _this;

    (0, _classCallCheck2["default"])(this, Day);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      if (!_this.props.disabled && _this.props.onClick) {
        _this.props.onClick(_this.props.day);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Day, [{
    key: "dayStyle",
    value: function dayStyle() {
      if (this.props.day === 1) {
        var e = this.props.sundayFirstDayOfWeek ? 0 : 1;
        var firstDay = _time["default"].getFirstWeekDay(this.props.viewDate) - e;
        return {
          marginLeft: "".concat((firstDay >= 0 ? firstDay : 6) * (100 / 7), "%")
        };
      }

      return undefined;
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      var sameYear = this.props.viewDate.getFullYear() === this.props.selectedDate.getFullYear();
      var sameMonth = this.props.viewDate.getMonth() === this.props.selectedDate.getMonth();
      var sameDay = this.props.day === this.props.selectedDate.getDate();
      return sameYear && sameMonth && sameDay;
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var className = (0, _classnames2["default"])(this.props.theme.day, (_classnames = {}, (0, _defineProperty2["default"])(_classnames, this.props.theme.active, this.isSelected()), (0, _defineProperty2["default"])(_classnames, this.props.theme.disabled, this.props.disabled), _classnames));
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-react-toolbox": "day",
        className: className,
        style: this.dayStyle()
      }, /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this.handleClick
      }, this.props.day));
    }
  }]);
  return Day;
}(_react.Component);

(0, _defineProperty2["default"])(Day, "propTypes", {
  day: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  selectedDate: _propTypes["default"].instanceOf(Date),
  sundayFirstDayOfWeek: _propTypes["default"].bool,
  theme: _propTypes["default"].shape({
    active: _propTypes["default"].string,
    day: _propTypes["default"].string,
    disabled: _propTypes["default"].string
  }),
  viewDate: _propTypes["default"].instanceOf(Date)
});
var _default = Day;
exports["default"] = _default;