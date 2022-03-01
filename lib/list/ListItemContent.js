"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemContentFactory = exports["default"] = exports.ListItemContent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemText = _interopRequireDefault(require("./ListItemText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var types = ['auto', 'normal', 'large'];

var factory = function factory(ListItemText) {
  var ListItemContent = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ListItemContent, _Component);

    var _super = _createSuper(ListItemContent);

    function ListItemContent() {
      (0, _classCallCheck2["default"])(this, ListItemContent);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(ListItemContent, [{
      key: "getType",
      value: function getType() {
        var _this$props = this.props,
            type = _this$props.type,
            children = _this$props.children,
            caption = _this$props.caption,
            legend = _this$props.legend;

        var count = _react["default"].Children.count(children);

        [caption, legend].forEach(function (s) {
          count += s ? 1 : 0;
        });
        var typeIndex = Math.min(count, types.length);
        return type || types[typeIndex];
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            caption = _this$props2.caption,
            legend = _this$props2.legend,
            theme = _this$props2.theme;
        var contentType = this.getType();
        var className = (0, _classnames2["default"])(theme.itemContentRoot, (0, _defineProperty2["default"])({}, theme[contentType], theme[contentType]));
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: className
        }, caption && /*#__PURE__*/_react["default"].createElement(ListItemText, {
          theme: theme,
          primary: true
        }, caption), legend && /*#__PURE__*/_react["default"].createElement(ListItemText, {
          theme: theme
        }, legend), children);
      }
    }]);
    return ListItemContent;
  }(_react.Component);

  (0, _defineProperty2["default"])(ListItemContent, "propTypes", {
    caption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    children: _propTypes["default"].node,
    legend: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    theme: _propTypes["default"].shape({
      auto: _propTypes["default"].string,
      itemContentRoot: _propTypes["default"].string,
      large: _propTypes["default"].string,
      normal: _propTypes["default"].string
    }),
    type: _propTypes["default"].oneOf(types)
  });
  return ListItemContent;
};

exports.listItemContentFactory = factory;
var ListItemContent = factory(_ListItemText["default"]);
exports.ListItemContent = ListItemContent;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemContent);

exports["default"] = _default;