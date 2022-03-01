"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ProgressBar = require("../ProgressBar");

var _themeModule = _interopRequireDefault(require("../theme.module.css"));

describe('ProgressBar', function () {
  describe('#calculateRatio', function () {
    it('calculates the right ratio', function () {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        min: 100,
        max: 300,
        theme: _themeModule["default"]
      }));
      var progressBar = wrapper.instance();
      expect(progressBar.calculateRatio(150)).toEqual(0.25);
    });
    it('gets 0 when value is less than min', function () {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        min: 100,
        max: 300,
        theme: _themeModule["default"]
      }));
      var progressBar = wrapper.instance();
      expect(progressBar.calculateRatio(10)).toEqual(0);
    });
    it('gets 1 when value is more than max', function () {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        min: 100,
        max: 300,
        theme: _themeModule["default"]
      }));
      var progressBar = wrapper.instance();
      expect(progressBar.calculateRatio(400)).toEqual(1);
    });
  });
  describe('#render', function () {
    it('renders the value and buffer bars when it is linear', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        theme: _themeModule["default"]
      }));
      expect(wrapper.childAt(0).childAt(0).props().children.length).toEqual(2);
    });
    it('renders the value and buffer bars when it is linear', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        mode: "determinate",
        value: 30,
        buffer: 60,
        theme: _themeModule["default"]
      }));
      var buffer = wrapper.childAt(0).childAt(0).childAt(0);
      var value = wrapper.childAt(0).childAt(0).childAt(1);
      expect(buffer.props().style.transform).toEqual("scaleX(".concat(0.6, ")"));
      expect(value.props().style.transform).toEqual("scaleX(".concat(0.3, ")"));
    });
    it('renders the svg circle when it is circular', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        type: "circular",
        theme: _themeModule["default"]
      }));
      expect(wrapper.childAt(0).childAt(0).props().children.type).toEqual('circle');
    });
    it('renders the proper circle length style when it is circular and determinate', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        type: "circular",
        mode: "determinate",
        value: 30,
        theme: _themeModule["default"]
      }));
      var circle = wrapper.childAt(0).childAt(0).props().children;
      var strokeLength = 2 * Math.PI * circle.props.r * 0.3;
      expect(circle.props.style.strokeDasharray).toEqual("".concat(strokeLength, ", 400"));
    });
    it('contains className in its className', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_ProgressBar.ProgressBar, {
        className: "tight",
        mode: "determinate",
        theme: _themeModule["default"]
      }));
      expect(wrapper.props().className).toContain('tight');
    });
  });
});