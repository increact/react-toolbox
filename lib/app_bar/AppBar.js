"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.appBarFactory = exports.AppBar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _IconButton = _interopRequireDefault(require("../button/IconButton"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(IconButton) {
  var AppBar = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(AppBar, _React$Component);

    var _super = _createSuper(AppBar);

    function AppBar() {
      var _this;

      (0, _classCallCheck2["default"])(this, AppBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        hidden: false,
        height: 0
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleScroll", function () {
        var scrollDiff = _this.curScroll - window.scrollY;

        _this.setState(function (state) {
          return {
            hidden: scrollDiff < 0 && window.scrollY !== undefined && window.scrollY > state.height
          };
        });

        _this.curScroll = window.scrollY;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initializeScroll", function () {
        window.addEventListener('scroll', _this.handleScroll);

        var _this$rootNode$getBou = _this.rootNode.getBoundingClientRect(),
            height = _this$rootNode$getBou.height;

        _this.curScroll = window.scrollY;

        _this.setState({
          height: height
        }); // eslint-disable-line react/no-unused-state

      });
      return _this;
    }

    (0, _createClass2["default"])(AppBar, [{
      key: "componentDidMount",
      value: // eslint-disable-line react/no-unused-state
      function componentDidMount() {
        if (this.props.scrollHide) {
          this.initializeScroll();
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.scrollHide && nextProps.scrollHide) {
          this.initializeScroll();
        }

        if (this.props.scrollHide && !nextProps.scrollHide) {
          this.endScroll();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.scrollHide) {
          this.endScroll();
        }
      }
    }, {
      key: "endScroll",
      value: function endScroll() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }, {
      key: "render",
      value: function render() {
        var _cn,
            _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            leftIcon = _this$props.leftIcon,
            onLeftIconClick = _this$props.onLeftIconClick,
            onRightIconClick = _this$props.onRightIconClick,
            rightIcon = _this$props.rightIcon,
            theme = _this$props.theme,
            title = _this$props.title;
        var className = (0, _classnames["default"])(theme.appBar, (_cn = {}, (0, _defineProperty2["default"])(_cn, theme.fixed, this.props.fixed), (0, _defineProperty2["default"])(_cn, theme.flat, this.props.flat), (0, _defineProperty2["default"])(_cn, theme.scrollHide, this.state.hidden), _cn), this.props.className);
        var renderedTitle = typeof title === 'string' ? /*#__PURE__*/_react["default"].createElement("h1", {
          className: (0, _classnames["default"])(theme.title)
        }, title) : title;

        var renderedLeftIcon = leftIcon && /*#__PURE__*/_react["default"].createElement(IconButton, {
          inverse: true,
          className: (0, _classnames["default"])(theme.leftIcon),
          onClick: onLeftIconClick,
          icon: leftIcon
        });

        var renderedRightIcon = rightIcon && /*#__PURE__*/_react["default"].createElement(IconButton, {
          inverse: true,
          className: (0, _classnames["default"])(theme.rightIcon),
          onClick: onRightIconClick,
          icon: rightIcon
        });

        return /*#__PURE__*/_react["default"].createElement("header", {
          className: className,
          "data-react-toolbox": "app-bar",
          ref: function ref(node) {
            _this2.rootNode = node;
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: theme.inner
        }, renderedLeftIcon, renderedTitle, children, renderedRightIcon));
      }
    }]);
    return AppBar;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(AppBar, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    fixed: _propTypes["default"].bool,
    flat: _propTypes["default"].bool,
    leftIcon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    onLeftIconClick: _propTypes["default"].func,
    onRightIconClick: _propTypes["default"].func,
    rightIcon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    scrollHide: _propTypes["default"].bool,
    theme: _propTypes["default"].shape({
      appBar: _propTypes["default"].string,
      fixed: _propTypes["default"].string,
      flat: _propTypes["default"].string,
      inner: _propTypes["default"].string,
      leftIcon: _propTypes["default"].string,
      rightIcon: _propTypes["default"].string,
      scrollHide: _propTypes["default"].string,
      title: _propTypes["default"].string
    }),
    title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
  });
  (0, _defineProperty2["default"])(AppBar, "defaultProps", {
    className: '',
    fixed: false,
    flat: false,
    scrollHide: false
  });
  return AppBar;
};

exports.appBarFactory = factory;
var AppBar = factory(_IconButton["default"]);
exports.AppBar = AppBar;

var _default = (0, _reactCssThemr.themr)(_identifiers.APP_BAR)(AppBar);

exports["default"] = _default;