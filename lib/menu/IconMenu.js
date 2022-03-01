"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconMenuFactory = exports["default"] = exports.IconMenu = void 0;

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

var _IconButton = _interopRequireDefault(require("../button/IconButton"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _excluded = ["active", "children", "className", "icon", "iconRipple", "inverse", "menuRipple", "onHide", "onSelect", "onShow", "position", "selectable", "selected", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(IconButton, Menu) {
  var IconMenu = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(IconMenu, _Component);

    var _super = _createSuper(IconMenu);

    function IconMenu() {
      var _this;

      (0, _classCallCheck2["default"])(this, IconMenu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        active: _this.props.active
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleButtonClick", function (event) {
        _this.setState(function (state) {
          return {
            active: !state.active
          };
        });

        if (_this.props.onClick) _this.props.onClick(event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMenuHide", function () {
        _this.setState({
          active: false
        });

        if (_this.props.onHide) _this.props.onHide();
      });
      return _this;
    }

    (0, _createClass2["default"])(IconMenu, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (this.state.active !== nextProps.active) {
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
            children = _this$props.children,
            className = _this$props.className,
            icon = _this$props.icon,
            iconRipple = _this$props.iconRipple,
            inverse = _this$props.inverse,
            menuRipple = _this$props.menuRipple,
            onHide = _this$props.onHide,
            onSelect = _this$props.onSelect,
            onShow = _this$props.onShow,
            position = _this$props.position,
            selectable = _this$props.selectable,
            selected = _this$props.selected,
            theme = _this$props.theme,
            other = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
        return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, other, {
          className: (0, _classnames["default"])(theme.iconMenu, className)
        }), /*#__PURE__*/_react["default"].createElement(IconButton, {
          className: theme.icon,
          icon: icon,
          inverse: inverse,
          onClick: this.handleButtonClick,
          ripple: iconRipple
        }), /*#__PURE__*/_react["default"].createElement(Menu, {
          active: this.state.active,
          onHide: this.handleMenuHide,
          onSelect: onSelect,
          onShow: onShow,
          position: position,
          ripple: menuRipple,
          selectable: selectable,
          selected: selected,
          theme: theme
        }, children));
      }
    }]);
    return IconMenu;
  }(_react.Component);

  (0, _defineProperty2["default"])(IconMenu, "propTypes", {
    active: _propTypes["default"].bool,
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    iconRipple: _propTypes["default"].bool,
    inverse: _propTypes["default"].bool,
    menuRipple: _propTypes["default"].bool,
    onClick: _propTypes["default"].func,
    onHide: _propTypes["default"].func,
    onSelect: _propTypes["default"].func,
    onShow: _propTypes["default"].func,
    position: _propTypes["default"].string,
    selectable: _propTypes["default"].bool,
    selected: _propTypes["default"].node,
    theme: _propTypes["default"].shape({
      icon: _propTypes["default"].string,
      iconMenu: _propTypes["default"].string
    })
  });
  (0, _defineProperty2["default"])(IconMenu, "defaultProps", {
    active: false,
    className: '',
    icon: 'more_vert',
    iconRipple: true,
    menuRipple: true,
    position: 'auto',
    selectable: false
  });
  return IconMenu;
};

exports.iconMenuFactory = factory;
var IconMenu = factory(_IconButton["default"], _Menu["default"]);
exports.IconMenu = IconMenu;

var _default = (0, _reactCssThemr.themr)(_identifiers.MENU)(IconMenu);

exports["default"] = _default;