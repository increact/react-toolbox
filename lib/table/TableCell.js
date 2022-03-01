"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableCellFactory = exports["default"] = exports.TableCell = void 0;

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

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var _excluded = ["children", "className", "numeric", "row", "column", "sorted", "tagName", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ASC = 'asc';
var DESC = 'desc';

var factory = function factory(FontIcon) {
  var TableCell = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TableCell, _Component);

    var _super = _createSuper(TableCell);

    function TableCell() {
      var _this;

      (0, _classCallCheck2["default"])(this, TableCell);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
        var _this$props = _this.props,
            onClick = _this$props.onClick,
            row = _this$props.row,
            column = _this$props.column;
        if (onClick) onClick(event, column, row);
      });
      return _this;
    }

    (0, _createClass2["default"])(TableCell, [{
      key: "render",
      value: function render() {
        var _classnames;

        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            numeric = _this$props2.numeric,
            row = _this$props2.row,
            column = _this$props2.column,
            sorted = _this$props2.sorted,
            tagName = _this$props2.tagName,
            theme = _this$props2.theme,
            other = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);

        var _className = (0, _classnames3["default"])(theme.tableCell, (_classnames = {}, (0, _defineProperty2["default"])(_classnames, theme.headCell, tagName === 'th'), (0, _defineProperty2["default"])(_classnames, theme.rowCell, tagName === 'td'), (0, _defineProperty2["default"])(_classnames, theme.sorted, sorted), (0, _defineProperty2["default"])(_classnames, theme.numeric, numeric), _classnames), className);

        var props = _objectSpread(_objectSpread({}, other), {}, {
          className: _className,
          onClick: this.handleClick
        });

        return /*#__PURE__*/_react["default"].createElement(tagName, props, [sorted && /*#__PURE__*/_react["default"].createElement(FontIcon, {
          className: (0, _classnames3["default"])(theme.sortIcon, (0, _defineProperty2["default"])({}, theme.asc, sorted === ASC)),
          key: "icon",
          value: "arrow_downward"
        }), children]);
      }
    }]);
    return TableCell;
  }(_react.Component);

  (0, _defineProperty2["default"])(TableCell, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    column: _propTypes["default"].number,
    numeric: _propTypes["default"].bool,
    onClick: _propTypes["default"].func,
    row: _propTypes["default"].number,
    sorted: _propTypes["default"].oneOf([ASC, DESC]),
    tagName: _propTypes["default"].oneOf(['td', 'th']),
    theme: _propTypes["default"].shape({
      asc: _propTypes["default"].string,
      headCell: _propTypes["default"].string,
      numeric: _propTypes["default"].string,
      rowCell: _propTypes["default"].string,
      sorted: _propTypes["default"].string,
      sortIcon: _propTypes["default"].string,
      tableCell: _propTypes["default"].string
    })
  });
  (0, _defineProperty2["default"])(TableCell, "defaultProps", {
    children: _propTypes["default"].node,
    className: '',
    numeric: false,
    tagName: 'td'
  });
  return TableCell;
};

exports.tableCellFactory = factory;
var TableCell = factory(_FontIcon["default"]);
exports.TableCell = TableCell;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABLE)(TableCell);

exports["default"] = _default;