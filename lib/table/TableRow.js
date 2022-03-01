"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableRowFactory = exports["default"] = exports.TableRow = void 0;

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

var _Checkbox = _interopRequireDefault(require("../checkbox/Checkbox"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _excluded = ["children", "className", "selectable", "idx", "selected", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(Checkbox, TableCell) {
  var TableRow = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TableRow, _Component);

    var _super = _createSuper(TableRow);

    function TableRow() {
      var _this;

      (0, _classCallCheck2["default"])(this, TableRow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (value) {
        var _this$props = _this.props,
            idx = _this$props.idx,
            onSelect = _this$props.onSelect;
        if (onSelect) onSelect(idx, value);
      });
      return _this;
    }

    (0, _createClass2["default"])(TableRow, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            selectable = _this$props2.selectable,
            idx = _this$props2.idx,
            selected = _this$props2.selected,
            theme = _this$props2.theme,
            other = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded); // eslint-disable-line

        var _className = (0, _classnames2["default"])(theme.row, (0, _defineProperty2["default"])({}, theme.selected, selectable && selected), className);

        return /*#__PURE__*/_react["default"].createElement("tr", (0, _extends2["default"])({}, other, {
          className: _className
        }), selectable && /*#__PURE__*/_react["default"].createElement(TableCell, {
          className: theme.checkboxCell
        }, /*#__PURE__*/_react["default"].createElement(Checkbox, {
          theme: theme,
          checked: selected,
          onChange: this.handleSelect
        })), _react["default"].Children.map(children, function (child, index) {
          if (!child) return null;
          return /*#__PURE__*/(0, _react.cloneElement)(child, {
            column: index,
            tagName: 'td'
          });
        }));
      }
    }]);
    return TableRow;
  }(_react.Component);

  (0, _defineProperty2["default"])(TableRow, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    idx: _propTypes["default"].number,
    onSelect: _propTypes["default"].func,
    selectable: _propTypes["default"].bool,
    selected: _propTypes["default"].bool,
    theme: _propTypes["default"].shape({
      checkboxCell: _propTypes["default"].string,
      row: _propTypes["default"].string,
      selected: _propTypes["default"].string
    })
  });
  return TableRow;
};

exports.tableRowFactory = factory;
var TableRow = factory(_Checkbox["default"], _TableCell["default"]);
exports.TableRow = TableRow;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABLE)(TableRow);

exports["default"] = _default;