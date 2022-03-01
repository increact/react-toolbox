"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../../identifiers");

var _tooltip = require("../../tooltip");

var _Chip = require("../Chip");

var Avatar = function Avatar(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("span", null, title);
}; // eslint-disable-line react/prop-types


var Chip = (0, _reactCssThemr.themr)(_identifiers.CHIP)((0, _Chip.chipFactory)(Avatar));
describe('Chip', function () {
  describe('with avatar', function () {
    it('adds the avatar class to the element', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(Chip, {
        theme: {
          avatar: 'avatar-class'
        }
      }, /*#__PURE__*/_react["default"].createElement(Avatar, {
        title: "Test"
      }), /*#__PURE__*/_react["default"].createElement("span", null, "Test")));
      var chipNode = wrapper.find('div').instance();
      expect(chipNode.className).toMatch(/\bavatar-class\b/);
    });
    it('works with non-flat children', function () {
      var TooltippedChip = (0, _tooltip.tooltipFactory)()(Chip);
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(TooltippedChip, {
        theme: {
          avatar: 'avatar-class'
        },
        tooltip: "Test tooltip"
      }, /*#__PURE__*/_react["default"].createElement(Avatar, {
        title: "Test"
      }), /*#__PURE__*/_react["default"].createElement("span", null, "Test")));
      var chipNode = wrapper.find('div').instance();
      expect(chipNode.className).toMatch(/\bavatar-class\b/);
    });
  });
  describe('without avatar', function () {
    it('does not add avatar class to the element', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(Chip, {
        theme: {
          avatar: 'avatar-class'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Test")));
      var chipNode = wrapper.find('div').instance();
      expect(chipNode.className).not.toMatch(/\bavatar-class\b/);
    });
  });
});