"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabFactory = exports["default"] = exports.Tab = void 0;

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

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var _excluded = ["index", "onActive", "active", "activeClassName", "children", "className", "disabled", "hidden", "label", "icon", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(ripple, FontIcon) {
  var Tab = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Tab, _Component);

    var _super = _createSuper(Tab);

    function Tab() {
      var _this;

      (0, _classCallCheck2["default"])(this, Tab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
        if (!_this.props.disabled && _this.props.onClick) {
          _this.props.onClick(event, _this.props.index);
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(Tab, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!prevProps.active && this.props.active && this.props.onActive) {
          this.props.onActive();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames;

        var _this$props = this.props,
            index = _this$props.index,
            onActive = _this$props.onActive,
            active = _this$props.active,
            activeClassName = _this$props.activeClassName,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            hidden = _this$props.hidden,
            label = _this$props.label,
            icon = _this$props.icon,
            theme = _this$props.theme,
            other = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

        var _className = (0, _classnames2["default"])(theme.label, (_classnames = {}, (0, _defineProperty2["default"])(_classnames, theme.active, active), (0, _defineProperty2["default"])(_classnames, theme.hidden, hidden), (0, _defineProperty2["default"])(_classnames, theme.withText, label), (0, _defineProperty2["default"])(_classnames, theme.withIcon, icon), (0, _defineProperty2["default"])(_classnames, theme.disabled, disabled), (0, _defineProperty2["default"])(_classnames, activeClassName, active), _classnames), className);

        return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, other, {
          "data-react-toolbox": "tab",
          role: "tab",
          tabIndex: "0",
          className: _className,
          onClick: this.handleClick
        }), icon && /*#__PURE__*/_react["default"].createElement(FontIcon, {
          className: theme.icon,
          value: icon
        }), label, children);
      }
    }]);
    return Tab;
  }(_react.Component);

  (0, _defineProperty2["default"])(Tab, "propTypes", {
    active: _propTypes["default"].bool,
    activeClassName: _propTypes["default"].string,
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    hidden: _propTypes["default"].bool,
    icon: _propTypes["default"].node,
    index: _propTypes["default"].number,
    label: _propTypes["default"].node,
    onActive: _propTypes["default"].func,
    onClick: _propTypes["default"].func,
    theme: _propTypes["default"].shape({
      active: _propTypes["default"].string,
      disabled: _propTypes["default"].string,
      hidden: _propTypes["default"].string,
      label: _propTypes["default"].string,
      rippleWrapper: _propTypes["default"].string,
      withIcon: _propTypes["default"].string,
      withText: _propTypes["default"].string
    })
  });
  (0, _defineProperty2["default"])(Tab, "defaultProps", {
    active: false,
    className: '',
    disabled: false,
    hidden: false
  });
  return ripple(Tab);
};

exports.tabFactory = factory;
var Tab = factory((0, _Ripple["default"])({
  centered: false
}), _FontIcon["default"]);
exports.Tab = Tab;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABS)(Tab);

exports["default"] = _default;