"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFactory = exports["default"] = exports.Input = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _utils = require("../utils/utils");

var _identifiers = require("../identifiers");

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var _excluded = ["children", "defaultValue", "disabled", "error", "floating", "hint", "icon", "name", "label", "maxLength", "multiline", "required", "role", "theme", "type", "value", "onKeyPress", "rows"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var factory = function factory(FontIcon) {
  var Input = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(Input, _React$Component);

    var _super = _createSuper(Input);

    function Input() {
      var _this;

      (0, _classCallCheck2["default"])(this, Input);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            multiline = _this$props.multiline,
            maxLength = _this$props.maxLength;
        var valueFromEvent = event.target.value; // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.

        var haveToTrim = multiline && maxLength && event.target.value.length > maxLength;
        var value = haveToTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent; // propagate to to store and therefore to the input

        if (onChange) onChange(value, event);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleAutoresize", function () {
        var element = _this.inputNode;
        var rows = _this.props.rows;

        if (typeof rows === 'number' && !Number.isNaN(rows)) {
          element.style.height = null;
        } else {
          // compute the height difference between inner height and outer height
          var style = getComputedStyle(element, null);
          var heightOffset = style.boxSizing === 'content-box' ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)) : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth); // resize the input to its content size

          element.style.height = 'auto';
          element.style.height = "".concat(element.scrollHeight + heightOffset, "px");
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyPress", function (event) {
        // prevent insertion of more characters if we're a multiline input
        // and maxLength exists
        var _this$props2 = _this.props,
            multiline = _this$props2.multiline,
            maxLength = _this$props2.maxLength,
            onKeyPress = _this$props2.onKeyPress;

        if (multiline && maxLength) {
          // check if smt is selected, in which case the newly added charcter would
          // replace the selected characters, so the length of value doesn't actually
          // increase.
          var isReplacing = event.target.selectionEnd - event.target.selectionStart;
          var value = event.target.value;

          if (!isReplacing && value.length === maxLength) {
            event.preventDefault();
            event.stopPropagation();
            return undefined;
          }
        }

        if (onKeyPress) onKeyPress(event);
        return undefined;
      });
      return _this;
    }

    (0, _createClass2["default"])(Input, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
          this.handleAutoresize();
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.multiline && nextProps.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
        } else if (this.props.multiline && !nextProps.multiline) {
          window.removeEventListener('resize', this.handleAutoresize);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        // resize the textarea, if nessesary
        if (this.props.multiline) this.handleAutoresize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.multiline) window.removeEventListener('resize', this.handleAutoresize);
      }
    }, {
      key: "blur",
      value: function blur() {
        this.inputNode.blur();
      }
    }, {
      key: "focus",
      value: function focus() {
        this.inputNode.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames2,
            _this2 = this;

        var _this$props3 = this.props,
            children = _this$props3.children,
            defaultValue = _this$props3.defaultValue,
            disabled = _this$props3.disabled,
            error = _this$props3.error,
            floating = _this$props3.floating,
            hint = _this$props3.hint,
            icon = _this$props3.icon,
            name = _this$props3.name,
            labelText = _this$props3.label,
            maxLength = _this$props3.maxLength,
            multiline = _this$props3.multiline,
            required = _this$props3.required,
            role = _this$props3.role,
            theme = _this$props3.theme,
            type = _this$props3.type,
            value = _this$props3.value,
            onKeyPress = _this$props3.onKeyPress,
            _this$props3$rows = _this$props3.rows,
            rows = _this$props3$rows === void 0 ? 1 : _this$props3$rows,
            others = (0, _objectWithoutProperties2["default"])(_this$props3, _excluded);
        var length = maxLength && value ? value.length : 0;
        var labelClassName = (0, _classnames4["default"])(theme.label, (0, _defineProperty2["default"])({}, theme.fixed, !floating));
        var className = (0, _classnames4["default"])(theme.input, (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, theme.disabled, disabled), (0, _defineProperty2["default"])(_classnames2, theme.errored, error), (0, _defineProperty2["default"])(_classnames2, theme.hidden, type === 'hidden'), (0, _defineProperty2["default"])(_classnames2, theme.withIcon, icon), _classnames2), this.props.className);
        var valuePresent = (0, _utils.isValuePresent)(value) || (0, _utils.isValuePresent)(defaultValue);

        var inputElementProps = _objectSpread(_objectSpread({}, others), {}, {
          className: (0, _classnames4["default"])(theme.inputElement, (0, _defineProperty2["default"])({}, theme.filled, valuePresent)),
          onChange: this.handleChange,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          role: role,
          name: name,
          defaultValue: defaultValue,
          disabled: disabled,
          required: required,
          type: type,
          value: value
        });

        if (!multiline) {
          inputElementProps.maxLength = maxLength;
          inputElementProps.onKeyPress = onKeyPress;
        } else {
          inputElementProps.rows = rows;
          inputElementProps.onKeyPress = this.handleKeyPress;
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-react-toolbox": "input",
          className: className
        }, /*#__PURE__*/_react["default"].createElement(multiline ? 'textarea' : 'input', inputElementProps), icon ? /*#__PURE__*/_react["default"].createElement(FontIcon, {
          className: theme.icon,
          value: icon
        }) : null, /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.bar
        }), labelText ? /*#__PURE__*/_react["default"].createElement("label", {
          className: labelClassName
        }, labelText, required ? /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.required
        }, " * ") : null) : null, hint ? /*#__PURE__*/_react["default"].createElement("span", {
          hidden: labelText,
          className: theme.hint
        }, hint) : null, error ? /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.error
        }, error) : null, maxLength ? /*#__PURE__*/_react["default"].createElement("span", {
          className: theme.counter
        }, "".concat(length, "/").concat(maxLength)) : null, children);
      }
    }]);
    return Input;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(Input, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    defaultValue: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    floating: _propTypes["default"].bool,
    hint: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    maxLength: _propTypes["default"].number,
    multiline: _propTypes["default"].bool,
    name: _propTypes["default"].string,
    onBlur: _propTypes["default"].func,
    onChange: _propTypes["default"].func,
    onFocus: _propTypes["default"].func,
    onKeyPress: _propTypes["default"].func,
    required: _propTypes["default"].bool,
    role: _propTypes["default"].string,
    rows: _propTypes["default"].number,
    theme: _propTypes["default"].shape({
      bar: _propTypes["default"].string,
      counter: _propTypes["default"].string,
      disabled: _propTypes["default"].string,
      error: _propTypes["default"].string,
      errored: _propTypes["default"].string,
      hidden: _propTypes["default"].string,
      hint: _propTypes["default"].string,
      icon: _propTypes["default"].string,
      input: _propTypes["default"].string,
      inputElement: _propTypes["default"].string,
      required: _propTypes["default"].string,
      withIcon: _propTypes["default"].string
    }),
    type: _propTypes["default"].string,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].object, _propTypes["default"].string])
  });
  (0, _defineProperty2["default"])(Input, "defaultProps", {
    className: '',
    hint: '',
    disabled: false,
    floating: true,
    multiline: false,
    required: false,
    role: 'input',
    type: 'text'
  });
  return Input;
};

exports.inputFactory = factory;
var Input = factory(_FontIcon["default"]);
exports.Input = Input;

var _default = (0, _reactCssThemr.themr)(_identifiers.INPUT)(Input);

exports["default"] = _default;