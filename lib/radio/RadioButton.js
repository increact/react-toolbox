"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioButtonFactory = exports["default"] = exports.RadioButton = void 0;

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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _excluded = ["checked", "children", "className", "disabled", "label", "name", "onChange", "onMouseEnter", "onMouseLeave", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(Radio) {
  var RadioButton = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RadioButton, _Component);

    var _super = _createSuper(RadioButton);

    function RadioButton() {
      var _this;

      (0, _classCallCheck2["default"])(this, RadioButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
        var _this$props = _this.props,
            checked = _this$props.checked,
            disabled = _this$props.disabled,
            onChange = _this$props.onChange;
        if (event.pageX !== 0 && event.pageY !== 0) _this.blur();
        if (!disabled && !checked && onChange) onChange(event, (0, _assertThisInitialized2["default"])(_this));
      });
      return _this;
    }

    (0, _createClass2["default"])(RadioButton, [{
      key: "blur",
      value: function blur() {
        if (this.inputNode) {
          this.inputNode.blur();
        }
      }
    }, {
      key: "focus",
      value: function focus() {
        if (this.inputNode) {
          this.inputNode.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            checked = _this$props2.checked,
            children = _this$props2.children,
            className = _this$props2.className,
            disabled = _this$props2.disabled,
            label = _this$props2.label,
            name = _this$props2.name,
            onChange = _this$props2.onChange,
            onMouseEnter = _this$props2.onMouseEnter,
            onMouseLeave = _this$props2.onMouseLeave,
            theme = _this$props2.theme,
            others = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);

        var _className = (0, _classnames["default"])(theme[this.props.disabled ? 'disabled' : 'field'], className);

        return /*#__PURE__*/_react["default"].createElement("label", {
          "data-react-toolbox": "radio-button",
          className: _className,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave
        }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, others, {
          checked: checked,
          className: theme.input,
          disabled: disabled,
          name: name,
          onChange: function onChange() {},
          onClick: this.handleClick,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          type: "radio"
        })), /*#__PURE__*/_react["default"].createElement(Radio, {
          checked: checked,
          disabled: disabled,
          theme: theme
        }), label ? /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.text
        }, label) : null, children);
      }
    }]);
    return RadioButton;
  }(_react.Component);

  (0, _defineProperty2["default"])(RadioButton, "propTypes", {
    checked: _propTypes["default"].bool,
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    name: _propTypes["default"].string,
    onBlur: _propTypes["default"].func,
    onChange: _propTypes["default"].func,
    onFocus: _propTypes["default"].func,
    onMouseEnter: _propTypes["default"].func,
    onMouseLeave: _propTypes["default"].func,
    theme: _propTypes["default"].shape({
      disabled: _propTypes["default"].string,
      field: _propTypes["default"].string,
      input: _propTypes["default"].string,
      text: _propTypes["default"].string
    }),
    value: _propTypes["default"].string
  });
  (0, _defineProperty2["default"])(RadioButton, "defaultProps", {
    checked: false,
    className: '',
    disabled: false
  });
  return RadioButton;
};

exports.radioButtonFactory = factory;
var Radio = (0, _Radio["default"])((0, _Ripple["default"])({
  centered: true,
  spread: 2.6
}));
var RadioButton = factory(Radio);
exports.RadioButton = RadioButton;

var _default = (0, _reactCssThemr.themr)(_identifiers.RADIO)(RadioButton);

exports["default"] = _default;