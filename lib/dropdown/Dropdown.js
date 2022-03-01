"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownFactory = exports["default"] = exports.Dropdown = void 0;

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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Input = _interopRequireDefault(require("../input/Input"));

var _events = _interopRequireDefault(require("../utils/events"));

var _excluded = ["allowBlank", "auto", "labelKey", "required", "onChange", "onFocus", "onBlur", "source", "template", "theme", "valueKey"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(Input) {
  var Dropdown = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Dropdown, _Component);

    var _super = _createSuper(Dropdown);

    function Dropdown() {
      var _this;

      (0, _classCallCheck2["default"])(this, Dropdown);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        active: false,
        up: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getDocumentEvents", function () {
        return {
          click: _this.handleDocumentClick,
          touchend: _this.handleDocumentClick
        };
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getSelectedItem", function () {
        var _iterator = _createForOfIteratorHelper(_this.props.source),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (item[_this.props.valueKey] === _this.props.value) return item;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return !_this.props.allowBlank ? _this.props.source[0] : undefined;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (item, event) {
        if (_this.props.onBlur) _this.props.onBlur(event);

        if (!_this.props.disabled && _this.props.onChange) {
          if (_this.props.name) event.target.name = _this.props.name;

          _this.props.onChange(item, event);

          _this.close();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
        _this.open(event);

        _events["default"].pauseEvent(event);

        if (_this.props.onClick) _this.props.onClick(event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDocumentClick", function (event) {
        if (_this.state.active && !_events["default"].targetIsDescendant(event, _reactDom["default"].findDOMNode((0, _assertThisInitialized2["default"])(_this)))) {
          _this.setState({
            active: false
          });
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
        if (_this.state.active) {
          _this.setState({
            active: false
          });
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function (event) {
        if (_this.state.active) return;
        var client = event.target.getBoundingClientRect();
        var screenHeight = window.innerHeight || document.documentElement.offsetHeight;
        var up = _this.props.auto ? client.top > screenHeight / 2 + client.height : false;

        _this.setState({
          active: true,
          up: up
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (event) {
        event.stopPropagation();
        if (!_this.props.disabled) _this.open(event);
        if (_this.props.onFocus) _this.props.onFocus(event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (event) {
        event.stopPropagation();
        if (_this.state.active) _this.close();
        if (_this.props.onBlur) _this.props.onBlur(event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderValue", function (item, idx) {
        var _classnames;

        var _this$props = _this.props,
            labelKey = _this$props.labelKey,
            theme = _this$props.theme,
            valueKey = _this$props.valueKey;
        var className = (0, _classnames4["default"])((_classnames = {}, (0, _defineProperty2["default"])(_classnames, theme.selected, item[valueKey] === _this.props.value), (0, _defineProperty2["default"])(_classnames, theme.disabled, item.disabled), _classnames));
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: idx,
          className: className,
          onClick: !item.disabled ? _this.handleSelect.bind((0, _assertThisInitialized2["default"])(_this), item[valueKey]) : undefined
        }, _this.props.template ? _this.props.template(item) : item[labelKey]);
      });
      return _this;
    }

    (0, _createClass2["default"])(Dropdown, [{
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {
        if (!this.state.active && nextState.active) {
          _events["default"].addEventsToDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.active && !this.state.active) {
          _events["default"].removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.active) {
          _events["default"].removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: "renderTemplateValue",
      value: function renderTemplateValue(selected) {
        var _classnames2;

        var theme = this.props.theme;
        var className = (0, _classnames4["default"])(theme.field, (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, theme.errored, this.props.error), (0, _defineProperty2["default"])(_classnames2, theme.disabled, this.props.disabled), (0, _defineProperty2["default"])(_classnames2, theme.required, this.props.required), _classnames2));
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onClick: this.handleClick
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(theme.templateValue, " ").concat(theme.value)
        }, this.props.template(selected)), this.props.label ? /*#__PURE__*/_react["default"].createElement("label", {
          className: theme.label
        }, this.props.label, this.props.required ? /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.required
        }, " * ") : null) : null, this.props.error ? /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.error
        }, this.props.error) : null);
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames3;

        var _this$props2 = this.props,
            allowBlank = _this$props2.allowBlank,
            auto = _this$props2.auto,
            labelKey = _this$props2.labelKey,
            required = _this$props2.required,
            onChange = _this$props2.onChange,
            onFocus = _this$props2.onFocus,
            onBlur = _this$props2.onBlur,
            source = _this$props2.source,
            template = _this$props2.template,
            theme = _this$props2.theme,
            valueKey = _this$props2.valueKey,
            others = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
        var selected = this.getSelectedItem();
        var className = (0, _classnames4["default"])(theme.dropdown, (_classnames3 = {}, (0, _defineProperty2["default"])(_classnames3, theme.up, this.state.up), (0, _defineProperty2["default"])(_classnames3, theme.active, this.state.active), (0, _defineProperty2["default"])(_classnames3, theme.disabled, this.props.disabled), (0, _defineProperty2["default"])(_classnames3, theme.required, this.props.required), _classnames3), this.props.className);
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          "data-react-toolbox": "dropdown",
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          tabIndex: "-1"
        }, /*#__PURE__*/_react["default"].createElement(Input, (0, _extends2["default"])({}, others, {
          tabIndex: "0",
          className: theme.value,
          onClick: this.handleClick,
          required: this.props.required,
          readOnly: true,
          type: template && selected ? 'hidden' : null,
          theme: theme,
          themeNamespace: "input",
          value: selected && selected[labelKey] ? selected[labelKey] : ''
        })), template && selected ? this.renderTemplateValue(selected) : null, /*#__PURE__*/_react["default"].createElement("ul", {
          className: theme.values
        }, source.map(this.renderValue)));
      }
    }]);
    return Dropdown;
  }(_react.Component);

  (0, _defineProperty2["default"])(Dropdown, "propTypes", {
    allowBlank: _propTypes["default"].bool,
    auto: _propTypes["default"].bool,
    className: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    error: _propTypes["default"].string,
    label: _propTypes["default"].string,
    labelKey: _propTypes["default"].string,
    name: _propTypes["default"].string,
    onBlur: _propTypes["default"].func,
    onChange: _propTypes["default"].func,
    onClick: _propTypes["default"].func,
    onFocus: _propTypes["default"].func,
    required: _propTypes["default"].bool,
    source: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])).isRequired,
    template: _propTypes["default"].func,
    theme: _propTypes["default"].shape({
      active: _propTypes["default"].string,
      disabled: _propTypes["default"].string,
      dropdown: _propTypes["default"].string,
      error: _propTypes["default"].string,
      errored: _propTypes["default"].string,
      field: _propTypes["default"].string,
      label: _propTypes["default"].string,
      required: _propTypes["default"].string,
      selected: _propTypes["default"].string,
      templateValue: _propTypes["default"].string,
      up: _propTypes["default"].string,
      value: _propTypes["default"].string,
      values: _propTypes["default"].string
    }),
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    valueKey: _propTypes["default"].string
  });
  (0, _defineProperty2["default"])(Dropdown, "defaultProps", {
    auto: true,
    className: '',
    allowBlank: true,
    disabled: false,
    labelKey: 'label',
    required: false,
    valueKey: 'value'
  });
  return Dropdown;
};

exports.dropdownFactory = factory;
var Dropdown = factory(_Input["default"]);
exports.Dropdown = Dropdown;

var _default = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN)(Dropdown);

exports["default"] = _default;