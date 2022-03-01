"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.buttonFactory = exports.Button = void 0;

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

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _excluded = ["accent", "children", "className", "flat", "floating", "href", "icon", "inverse", "label", "mini", "neutral", "primary", "raised", "theme", "type"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(ripple, FontIcon) {
  var Button = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Button, _Component);

    var _super = _createSuper(Button);

    function Button() {
      var _this;

      (0, _classCallCheck2["default"])(this, Button);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getLevel", function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getShape", function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseUp", function (event) {
        _this.buttonNode.blur();

        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseLeave", function (event) {
        _this.buttonNode.blur();

        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      });
      return _this;
    }

    (0, _createClass2["default"])(Button, [{
      key: "render",
      value: function render() {
        var _classnames,
            _this2 = this;

        var _this$props = this.props,
            accent = _this$props.accent,
            children = _this$props.children,
            className = _this$props.className,
            flat = _this$props.flat,
            floating = _this$props.floating,
            href = _this$props.href,
            icon = _this$props.icon,
            inverse = _this$props.inverse,
            label = _this$props.label,
            mini = _this$props.mini,
            neutral = _this$props.neutral,
            primary = _this$props.primary,
            raised = _this$props.raised,
            theme = _this$props.theme,
            type = _this$props.type,
            others = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
        var element = href ? 'a' : 'button';
        var level = this.getLevel();
        var shape = this.getShape();
        var mouseEvents = {
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave
        };
        var classes = (0, _classnames2["default"])(theme.button, [theme[shape]], (_classnames = {}, (0, _defineProperty2["default"])(_classnames, theme[level], neutral), (0, _defineProperty2["default"])(_classnames, theme.mini, mini), (0, _defineProperty2["default"])(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _objectSpread(_objectSpread(_objectSpread({}, others), mouseEvents), {}, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          type: !href ? type : null,
          'data-react-toolbox': 'button'
        });

        var buttonElement = /*#__PURE__*/_react["default"].createElement(element, props, icon ? /*#__PURE__*/_react["default"].createElement(FontIcon, {
          className: theme.icon,
          value: icon
        }) : null, label, children);

        return others.onMouseEnter && this.props.disabled ? /*#__PURE__*/_react["default"].createElement("span", mouseEvents, buttonElement) : buttonElement;
      }
    }]);
    return Button;
  }(_react.Component);

  (0, _defineProperty2["default"])(Button, "propTypes", {
    accent: _propTypes["default"].bool,
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    flat: _propTypes["default"].bool,
    floating: _propTypes["default"].bool,
    href: _propTypes["default"].string,
    icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    inverse: _propTypes["default"].bool,
    label: _propTypes["default"].string,
    mini: _propTypes["default"].bool,
    neutral: _propTypes["default"].bool,
    onMouseLeave: _propTypes["default"].func,
    onMouseUp: _propTypes["default"].func,
    primary: _propTypes["default"].bool,
    raised: _propTypes["default"].bool,
    theme: _propTypes["default"].shape({
      accent: _propTypes["default"].string,
      button: _propTypes["default"].string,
      flat: _propTypes["default"].string,
      floating: _propTypes["default"].string,
      icon: _propTypes["default"].string,
      inverse: _propTypes["default"].string,
      mini: _propTypes["default"].string,
      neutral: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      raised: _propTypes["default"].string,
      rippleWrapper: _propTypes["default"].string,
      toggle: _propTypes["default"].string
    }),
    type: _propTypes["default"].string
  });
  (0, _defineProperty2["default"])(Button, "defaultProps", {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false,
    type: 'button'
  });
  return ripple(Button);
};

exports.buttonFactory = factory;
var Button = factory((0, _Ripple["default"])({
  centered: false
}), _FontIcon["default"]);
exports.Button = Button;

var _default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);

exports["default"] = _default;