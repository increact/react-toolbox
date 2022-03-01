"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuItemFactory = exports["default"] = exports.MenuItem = void 0;

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

var _FontIcon = require("../font_icon/FontIcon");

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _excluded = ["caption", "children", "disabled", "icon", "selected", "shortcut", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(ripple) {
  var MenuItem = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MenuItem, _Component);

    var _super = _createSuper(MenuItem);

    function MenuItem() {
      var _this;

      (0, _classCallCheck2["default"])(this, MenuItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
        if (_this.props.onClick && !_this.props.disabled) {
          _this.props.onClick(event, (0, _assertThisInitialized2["default"])(_this));
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(MenuItem, [{
      key: "render",
      value: function render() {
        var _classnames;

        var _this$props = this.props,
            caption = _this$props.caption,
            children = _this$props.children,
            disabled = _this$props.disabled,
            icon = _this$props.icon,
            selected = _this$props.selected,
            shortcut = _this$props.shortcut,
            theme = _this$props.theme,
            others = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
        var className = (0, _classnames2["default"])(theme.menuItem, (_classnames = {}, (0, _defineProperty2["default"])(_classnames, theme.selected, selected), (0, _defineProperty2["default"])(_classnames, theme.disabled, disabled), _classnames), this.props.className);
        return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({}, others, {
          "data-react-toolbox": "menu-item",
          className: className,
          onClick: this.handleClick
        }), icon ? /*#__PURE__*/_react["default"].createElement(_FontIcon.FontIcon, {
          value: icon,
          className: theme.icon
        }) : null, /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.caption
        }, caption), shortcut ? /*#__PURE__*/_react["default"].createElement("small", {
          className: theme.shortcut
        }, shortcut) : null, children);
      }
    }]);
    return MenuItem;
  }(_react.Component);

  (0, _defineProperty2["default"])(MenuItem, "propTypes", {
    caption: _propTypes["default"].string,
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    onClick: _propTypes["default"].func,
    selected: _propTypes["default"].bool,
    shortcut: _propTypes["default"].string,
    theme: _propTypes["default"].shape({
      caption: _propTypes["default"].string,
      disabled: _propTypes["default"].string,
      icon: _propTypes["default"].string,
      menuItem: _propTypes["default"].string,
      selected: _propTypes["default"].string,
      shortcut: _propTypes["default"].string
    })
  });
  (0, _defineProperty2["default"])(MenuItem, "defaultProps", {
    className: '',
    disabled: false,
    selected: false
  });
  return ripple(MenuItem);
};

exports.menuItemFactory = factory;
var MenuItem = factory((0, _Ripple["default"])({}));
exports.MenuItem = MenuItem;

var _default = (0, _reactCssThemr.themr)(_identifiers.MENU)(MenuItem);

exports["default"] = _default;