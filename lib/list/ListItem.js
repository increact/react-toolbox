"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemFactory = exports["default"] = exports.ListItem = void 0;

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

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemContent = _interopRequireDefault(require("./ListItemContent"));

var _ListItemLayout = _interopRequireDefault(require("./ListItemLayout"));

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _excluded = ["listItemIgnore"],
    _excluded2 = ["className", "ripple", "onClick", "onMouseDown", "onTouchStart", "theme", "to"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(ripple, ListItemLayout, ListItemContent) {
  var ListItem = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ListItem, _Component);

    var _super = _createSuper(ListItem);

    function ListItem() {
      var _this;

      (0, _classCallCheck2["default"])(this, ListItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
        if (_this.props.onClick && !_this.props.disabled) {
          _this.props.onClick(event);
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(ListItem, [{
      key: "groupChildren",
      value: function groupChildren() {
        var children = {
          leftActions: [],
          rightActions: [],
          ignored: []
        };

        _react["default"].Children.forEach(this.props.children, function (child, i) {
          if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
            return undefined;
          }

          var _child$props = child.props,
              listItemIgnore = _child$props.listItemIgnore,
              rest = (0, _objectWithoutProperties2["default"])(_child$props, _excluded);

          var strippedChild = _objectSpread(_objectSpread({}, child), {
            props: rest
          });

          if (listItemIgnore) {
            children.ignored.push(strippedChild);
            return undefined;
          }

          if (child.type === ListItemContent) {
            children.itemContent = strippedChild;
            return undefined;
          }

          var bucket = children.itemContent ? 'rightActions' : 'leftActions';
          children[bucket].push(_objectSpread(_objectSpread({}, strippedChild), {}, {
            key: i
          }));
          return undefined;
        });

        return children;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            hasRipple = _this$props.ripple,
            onClick = _this$props.onClick,
            onMouseDown = _this$props.onMouseDown,
            onTouchStart = _this$props.onTouchStart,
            theme = _this$props.theme,
            to = _this$props.to,
            other = (0, _objectWithoutProperties2["default"])(_this$props, _excluded2);
        var children = this.groupChildren();

        var content = /*#__PURE__*/_react["default"].createElement(ListItemLayout, (0, _extends2["default"])({
          theme: theme
        }, children, other));

        return /*#__PURE__*/_react["default"].createElement("li", {
          className: "".concat(theme.listItem, " ").concat(className),
          onClick: this.handleClick,
          onMouseDown: onMouseDown,
          onTouchStart: onTouchStart
        }, to ? /*#__PURE__*/_react["default"].createElement("a", {
          href: this.props.to
        }, content) : content, children.ignored);
      }
    }]);
    return ListItem;
  }(_react.Component);

  (0, _defineProperty2["default"])(ListItem, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    hasRipple: _propTypes["default"].bool,
    onClick: _propTypes["default"].func,
    onMouseDown: _propTypes["default"].func,
    onTouchStart: _propTypes["default"].func,
    ripple: _propTypes["default"].bool,
    theme: _propTypes["default"].shape({
      listItem: _propTypes["default"].string
    }),
    to: _propTypes["default"].string
  });
  (0, _defineProperty2["default"])(ListItem, "defaultProps", {
    className: '',
    disabled: false,
    ripple: false
  });
  return ripple(ListItem);
};

exports.listItemFactory = factory;
var ripple = (0, _Ripple["default"])({
  centered: false,
  listItemIgnore: true
});
var ListItem = factory(ripple, _ListItemLayout["default"], _ListItemContent["default"]);
exports.ListItem = ListItem;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItem);

exports["default"] = _default;