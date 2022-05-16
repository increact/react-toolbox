"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = require("../Button");

var _themeModule = _interopRequireDefault(require("../theme.module.css"));

describe('Button', function () {
  describe('#render', function () {
    it('uses flat and neutral styles by default', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.Button, {
        theme: _themeModule.default
      }));

      var _wrapper$find$props = wrapper.find('button').props(),
          className = _wrapper$find$props.className;

      expect(className).toContain(_themeModule.default.flat);
      expect(className).toContain(_themeModule.default.neutral);
    });
    it('renders accent button with accent style', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.Button, {
        accent: true,
        theme: _themeModule.default
      }));

      var _wrapper$find$props2 = wrapper.find('button').props(),
          className = _wrapper$find$props2.className;

      expect(className).toContain(_themeModule.default.flat);
      expect(className).toContain(_themeModule.default.accent);
    });
    it('renders mini button with mini style', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.Button, {
        floating: true,
        mini: true,
        theme: _themeModule.default
      }));

      var _wrapper$find$props3 = wrapper.find('button').props(),
          className = _wrapper$find$props3.className;

      expect(className).toContain(_themeModule.default.floating);
      expect(className).toContain(_themeModule.default.neutral);
      expect(className).toContain(_themeModule.default.mini);
    });
    it('renders mini accented button with both styles', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.Button, {
        accent: true,
        mini: true,
        theme: _themeModule.default
      }));

      var _wrapper$find$props4 = wrapper.find('button').props(),
          className = _wrapper$find$props4.className;

      expect(className).toContain(_themeModule.default.flat);
      expect(className).toContain(_themeModule.default.accent);
      expect(className).toContain(_themeModule.default.mini);
    });
  });
});