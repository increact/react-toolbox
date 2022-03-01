"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableFactory = exports["default"] = exports.Table = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _filterReactChildren = _interopRequireDefault(require("../utils/filter-react-children"));

var _isComponentOfType = _interopRequireDefault(require("../utils/is-component-of-type"));

var _identifiers = require("../identifiers");

var _TableHead = _interopRequireDefault(require("./TableHead"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _excluded = ["className", "multiSelectable", "onRowSelect", "selectable", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(TableHead, TableRow) {
  var isTableHead = function isTableHead(child) {
    return (0, _isComponentOfType["default"])(TableHead, child);
  };

  var isTableRow = function isTableRow(child) {
    return (0, _isComponentOfType["default"])(TableRow, child);
  };

  var Table = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Table, _Component);

    var _super = _createSuper(Table);

    function Table() {
      var _this;

      (0, _classCallCheck2["default"])(this, Table);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getRowTuples", function () {
        return _react["default"].Children.toArray((0, _filterReactChildren["default"])(_this.props.children, isTableRow)).map(function (child, index) {
          return [index, Boolean(child.props.selected)];
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleHeadSelect", function (value) {
        if (_this.props.onRowSelect) {
          _this.props.onRowSelect(value ? _this.getRowTuples().map(function (item) {
            return item[0];
          }) : []);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRowSelect", function (idx) {
        if (_this.props.onRowSelect) {
          if (_this.props.multiSelectable) {
            var current = _this.getRowTuples().filter(function (item) {
              return item[1];
            }).map(function (item) {
              return item[0];
            });

            var rowIndex = current.indexOf(idx);
            var indexes = rowIndex !== -1 ? [].concat((0, _toConsumableArray2["default"])(current.slice(0, rowIndex)), (0, _toConsumableArray2["default"])(current.slice(rowIndex + 1))) : [].concat((0, _toConsumableArray2["default"])(current), [idx]);

            _this.props.onRowSelect(indexes);
          } else {
            _this.props.onRowSelect([idx]);
          }
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderHead", function () {
        var tuples = _this.getRowTuples();

        var selected = tuples.filter(function (item) {
          return item[1];
        }).length === tuples.length;
        return _react["default"].Children.map((0, _filterReactChildren["default"])(_this.props.children, isTableHead), function (child) {
          return /*#__PURE__*/(0, _react.cloneElement)(child, {
            selected: selected,
            multiSelectable: _this.props.multiSelectable,
            onSelect: _this.handleHeadSelect,
            selectable: _this.props.selectable
          });
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderRows", function () {
        return _react["default"].Children.map((0, _filterReactChildren["default"])(_this.props.children, isTableRow), function (child, idx) {
          return /*#__PURE__*/(0, _react.cloneElement)(child, {
            idx: idx,
            onSelect: _this.handleRowSelect,
            selectable: _this.props.selectable
          });
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(Table, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            multiSelectable = _this$props.multiSelectable,
            onRowSelect = _this$props.onRowSelect,
            selectable = _this$props.selectable,
            theme = _this$props.theme,
            rest = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
        return /*#__PURE__*/_react["default"].createElement("table", (0, _extends2["default"])({}, rest, {
          className: (0, _classnames["default"])(theme.table, className)
        }), /*#__PURE__*/_react["default"].createElement("thead", {
          className: theme.head
        }, this.renderHead()), /*#__PURE__*/_react["default"].createElement("tbody", null, this.renderRows()));
      }
    }]);
    return Table;
  }(_react.Component);

  (0, _defineProperty2["default"])(Table, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    multiSelectable: _propTypes["default"].bool,
    onRowSelect: _propTypes["default"].func,
    selectable: _propTypes["default"].bool,
    theme: _propTypes["default"].shape({
      head: _propTypes["default"].string,
      table: _propTypes["default"].string
    })
  });
  (0, _defineProperty2["default"])(Table, "defaultProps", {
    className: '',
    multiSelectable: false,
    selectable: true
  });
  return Table;
};

exports.tableFactory = factory;
var Table = factory(_TableHead["default"], _TableRow["default"]);
exports.Table = Table;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABLE)(Table);

exports["default"] = _default;