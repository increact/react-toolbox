"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _time = _interopRequireDefault(require("../utils/time"));

var _CalendarDay = _interopRequireDefault(require("./CalendarDay"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Month = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Month, _Component);

  var _super = _createSuper(Month);

  function Month() {
    var _this;

    (0, _classCallCheck2["default"])(this, Month);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDayClick", function (day) {
      if (_this.props.onDayClick) _this.props.onDayClick(day);
    });
    return _this;
  }

  (0, _createClass2["default"])(Month, [{
    key: "isDayDisabled",
    value: function isDayDisabled(date) {
      var _this$props = this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          enabledDates = _this$props.enabledDates,
          disabledDates = _this$props.disabledDates;

      var compareDate = function compareDate(compDate) {
        return date.getTime() === compDate.getTime();
      };

      var dateInDisabled = disabledDates.filter(compareDate).length > 0;
      var dateInEnabled = enabledDates.filter(compareDate).length > 0;
      return _time["default"].dateOutOfRange(date, minDate, maxDate) || enabledDates.length > 0 && !dateInEnabled || dateInDisabled;
    }
  }, {
    key: "renderWeeks",
    value: function renderWeeks() {
      var _this2 = this;

      var days = (0, _utils.range)(0, 7).map(function (d) {
        return _time["default"].getDayOfWeekLetter(d, _this2.props.locale);
      });
      var source = this.props.sundayFirstDayOfWeek ? days : [].concat((0, _toConsumableArray2["default"])(days.slice(1)), [days[0]]);
      return source.map(function (day, i) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          key: i
        }, day);
      }); // eslint-disable-line
    }
  }, {
    key: "renderDays",
    value: function renderDays() {
      var _this3 = this;

      return (0, _utils.range)(1, _time["default"].getDaysInMonth(this.props.viewDate) + 1).map(function (i) {
        var date = new Date(_this3.props.viewDate.getFullYear(), _this3.props.viewDate.getMonth(), i);
        return /*#__PURE__*/_react["default"].createElement(_CalendarDay["default"], {
          key: i,
          day: i,
          disabled: _this3.isDayDisabled(date),
          onClick: _this3.handleDayClick,
          selectedDate: _this3.props.selectedDate,
          theme: _this3.props.theme,
          viewDate: _this3.props.viewDate,
          sundayFirstDayOfWeek: _this3.props.sundayFirstDayOfWeek
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var fullMonth = _time["default"].getFullMonth(this.props.viewDate, this.props.locale);

      var fullYear = this.props.viewDate.getFullYear();
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-react-toolbox": "month",
        className: this.props.theme.month
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: this.props.theme.title
      }, "".concat(fullMonth, " ").concat(fullYear)), /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.theme.week
      }, this.renderWeeks()), /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.theme.days
      }, this.renderDays()));
    }
  }]);
  return Month;
}(_react.Component);

(0, _defineProperty2["default"])(Month, "propTypes", {
  disabledDates: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(Date)),
  enabledDates: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(Date)),
  locale: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  onDayClick: _propTypes["default"].func,
  selectedDate: _propTypes["default"].instanceOf(Date),
  sundayFirstDayOfWeek: _propTypes["default"].bool,
  theme: _propTypes["default"].shape({
    days: _propTypes["default"].string,
    month: _propTypes["default"].string,
    title: _propTypes["default"].string,
    week: _propTypes["default"].string
  }),
  viewDate: _propTypes["default"].instanceOf(Date)
});
(0, _defineProperty2["default"])(Month, "defaultProps", {
  disabledDates: [],
  enabledDates: []
});
var _default = Month;
exports["default"] = _default;