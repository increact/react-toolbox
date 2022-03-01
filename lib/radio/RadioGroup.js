"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioGroupFactory = exports["default"] = exports.RadioGroup = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _isComponentOfType = _interopRequireDefault(require("../utils/is-component-of-type"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(RadioButton) {
  var RadioGroup = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RadioGroup, _Component);

    var _super = _createSuper(RadioGroup);

    function RadioGroup() {
      var _this;

      (0, _classCallCheck2["default"])(this, RadioGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (value, event) {
        if (_this.props.onChange) _this.props.onChange(value, event);
      });
      return _this;
    }

    (0, _createClass2["default"])(RadioGroup, [{
      key: "renderRadioButtons",
      value: function renderRadioButtons() {
        var _this2 = this;

        return _react["default"].Children.map(this.props.children, function (child) {
          return !(0, _isComponentOfType["default"])(RadioButton, child) ? child : /*#__PURE__*/_react["default"].cloneElement(child, {
            checked: child.props.value === _this2.props.value,
            disabled: _this2.props.disabled || child.props.disabled,
            onChange: _this2.handleChange.bind(_this2, child.props.value)
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-react-toolbox": "radio-group",
          className: this.props.className
        }, this.renderRadioButtons());
      }
    }]);
    return RadioGroup;
  }(_react.Component);

  (0, _defineProperty2["default"])(RadioGroup, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    onChange: _propTypes["default"].func,
    value: _propTypes["default"].string
  });
  (0, _defineProperty2["default"])(RadioGroup, "defaultProps", {
    className: '',
    disabled: false
  });
  return RadioGroup;
};

exports.radioGroupFactory = factory;
var RadioGroup = factory(_RadioButton["default"]);
exports.RadioGroup = RadioGroup;

var _default = (0, _reactCssThemr.themr)(_identifiers.RADIO)(RadioGroup);

exports["default"] = _default;