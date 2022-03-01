"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listFactory = exports["default"] = exports.List = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItem = _interopRequireDefault(require("./ListItem"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var mergeProp = function mergeProp(propName, child, parent) {
  return child[propName] !== undefined ? child[propName] : parent[propName];
};

var factory = function factory(ListItem) {
  var List = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(List, _Component);

    var _super = _createSuper(List);

    function List() {
      (0, _classCallCheck2["default"])(this, List);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(List, [{
      key: "renderItems",
      value: function renderItems() {
        var _this = this;

        return _react["default"].Children.map(this.props.children, function (item) {
          if (item === null || item === undefined) {
            return item;
          }

          if (item.type === ListItem) {
            var selectable = mergeProp('selectable', item.props, _this.props);
            var ripple = mergeProp('ripple', item.props, _this.props);
            return /*#__PURE__*/_react["default"].cloneElement(item, {
              selectable: selectable,
              ripple: ripple
            });
          }

          return /*#__PURE__*/_react["default"].cloneElement(item);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement("ul", {
          "data-react-toolbox": "list",
          className: (0, _classnames["default"])(this.props.theme.list, this.props.className)
        }, this.renderItems());
      }
    }]);
    return List;
  }(_react.Component);

  (0, _defineProperty2["default"])(List, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    ripple: _propTypes["default"].bool,
    // eslint-disable-line react/no-unused-prop-types
    selectable: _propTypes["default"].bool,
    // eslint-disable-line react/no-unused-prop-types
    theme: _propTypes["default"].shape({
      list: _propTypes["default"].string
    })
  });
  (0, _defineProperty2["default"])(List, "defaultProps", {
    className: '',
    ripple: false,
    selectable: false
  });
  return List;
};

exports.listFactory = factory;
var List = factory(_ListItem["default"]);
exports.List = List;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(List);

exports["default"] = _default;