"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snackbarFactory = exports["default"] = exports.Snackbar = void 0;

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

var _ActivableRenderer = _interopRequireDefault(require("../hoc/ActivableRenderer"));

var _Button = _interopRequireDefault(require("../button/Button"));

var _Portal = _interopRequireDefault(require("../hoc/Portal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(Button) {
  var Snackbar = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Snackbar, _Component);

    var _super = _createSuper(Snackbar);

    function Snackbar() {
      var _this;

      (0, _classCallCheck2["default"])(this, Snackbar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scheduleTimeout", function (props) {
        var onTimeout = props.onTimeout,
            timeout = props.timeout;
        if (_this.curTimeout) clearTimeout(_this.curTimeout);
        _this.curTimeout = setTimeout(function () {
          if (onTimeout) onTimeout();
          _this.curTimeout = null;
        }, timeout);
      });
      return _this;
    }

    (0, _createClass2["default"])(Snackbar, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.active && this.props.timeout) {
          this.scheduleTimeout(this.props);
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.active && nextProps.timeout) {
          this.scheduleTimeout(nextProps);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.curTimeout);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            action = _this$props.action,
            active = _this$props.active,
            children = _this$props.children,
            label = _this$props.label,
            onClick = _this$props.onClick,
            theme = _this$props.theme,
            type = _this$props.type;
        var className = (0, _classnames2["default"])([theme.snackbar, theme[type]], (0, _defineProperty2["default"])({}, theme.active, active), this.props.className);
        return /*#__PURE__*/_react["default"].createElement(_Portal["default"], {
          className: theme.portal
        }, /*#__PURE__*/_react["default"].createElement("div", {
          "data-react-toolbox": "snackbar",
          className: className
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.label
        }, label, children), action ? /*#__PURE__*/_react["default"].createElement(Button, {
          className: theme.button,
          label: action,
          onClick: onClick
        }) : null));
      }
    }]);
    return Snackbar;
  }(_react.Component);

  (0, _defineProperty2["default"])(Snackbar, "propTypes", {
    action: _propTypes["default"].string,
    active: _propTypes["default"].bool,
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    onClick: _propTypes["default"].func,
    onTimeout: _propTypes["default"].func,
    // eslint-disable-line
    theme: _propTypes["default"].shape({
      accept: _propTypes["default"].string,
      active: _propTypes["default"].string,
      button: _propTypes["default"].string,
      cancel: _propTypes["default"].string,
      label: _propTypes["default"].string,
      snackbar: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    timeout: _propTypes["default"].number,
    type: _propTypes["default"].oneOf(['accept', 'cancel', 'warning'])
  });
  return (0, _ActivableRenderer["default"])()(Snackbar);
};

exports.snackbarFactory = factory;
var Snackbar = factory(_Button["default"]);
exports.Snackbar = Snackbar;

var _default = (0, _reactCssThemr.themr)(_identifiers.SNACKBAR)(Snackbar);

exports["default"] = _default;