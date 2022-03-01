"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableHeadFactory = exports["default"] = exports.TableHead = void 0;

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

var _Checkbox = _interopRequireDefault(require("../checkbox/Checkbox"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _excluded = ["children", "displaySelect", "multiSelectable", "onSelect", "selectable", "selected", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(Checkbox, TableCell) {
  var TableHead = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TableHead, _Component);

    var _super = _createSuper(TableHead);

    function TableHead() {
      var _this;

      (0, _classCallCheck2["default"])(this, TableHead);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (value, event) {
        _this.props.onSelect(value, event);
      });
      return _this;
    }

    (0, _createClass2["default"])(TableHead, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            displaySelect = _this$props.displaySelect,
            multiSelectable = _this$props.multiSelectable,
            onSelect = _this$props.onSelect,
            selectable = _this$props.selectable,
            selected = _this$props.selected,
            theme = _this$props.theme,
            other = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
        return /*#__PURE__*/_react["default"].createElement("tr", other, selectable && /*#__PURE__*/_react["default"].createElement(TableCell, {
          className: theme.checkboxCell,
          tagName: "th"
        }, displaySelect && /*#__PURE__*/_react["default"].createElement(Checkbox, {
          checked: selected,
          disabled: !multiSelectable,
          onChange: this.handleSelect
        })), _react["default"].Children.map(children, function (child, index) {
          if (!child) return null;
          return /*#__PURE__*/(0, _react.cloneElement)(child, {
            column: index,
            tagName: 'th'
          });
        }));
      }
    }]);
    return TableHead;
  }(_react.Component);

  (0, _defineProperty2["default"])(TableHead, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    displaySelect: _propTypes["default"].bool,
    multiSelectable: _propTypes["default"].bool,
    onSelect: _propTypes["default"].func,
    selectable: _propTypes["default"].bool,
    selected: _propTypes["default"].bool,
    theme: _propTypes["default"].shape({
      checkboxCell: _propTypes["default"].string
    })
  });
  (0, _defineProperty2["default"])(TableHead, "defaultProps", {
    displaySelect: true
  });
  return TableHead;
};

exports.tableHeadFactory = factory;
var TableHead = factory(_Checkbox["default"], _TableCell["default"]);
exports.TableHead = TableHead;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABLE)(TableHead);

exports["default"] = _default;