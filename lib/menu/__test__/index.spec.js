"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _IconMenu = require("../IconMenu");

var _Menu = require("../Menu");

var _MenuItem = require("../MenuItem");

describe('IconMenu', function () {
  describe('#on mount', function () {
    describe('when \'active\' prop is not set', function () {
      it('sets \'active\' Menu prop correctly', function () {
        var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_IconMenu.IconMenu, null));
        expect(wrapper.find('Menu').props().active).toBe(false);
      });
    });
    describe('when \'active\' prop is set to false', function () {
      it('sets \'active\' Menu prop correctly', function () {
        var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_IconMenu.IconMenu, {
          active: false
        }));
        expect(wrapper.find('Menu').props().active).toBe(false);
      });
      it('sets \'active\' Menu prop correctly after IconButton click', function () {
        var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_IconMenu.IconMenu, {
          active: false
        }));
        wrapper.find('IconButton').simulate('click');
        expect(wrapper.find('Menu').props().active).toBe(true);
      });
      it('sets \'active\' Menu prop correctly when prop is set after IconButton click', function () {
        var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_IconMenu.IconMenu, {
          active: false
        }));
        wrapper.find('IconButton').simulate('click');
        wrapper.setProps({
          active: false
        });
        expect(wrapper.find('Menu').props().active).toBe(false);
      });
    });
    describe('when \'active\' prop is set to true', function () {
      it('sets \'active\' Menu prop correctly', function () {
        var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_IconMenu.IconMenu, {
          active: true
        }));
        expect(wrapper.find('Menu').props().active).toBe(true);
      });
      it('sets \'active\' Menu prop correctly after IconButton click', function () {
        var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_IconMenu.IconMenu, {
          active: true
        }));
        wrapper.find('IconButton').simulate('click');
        expect(wrapper.find('Menu').props().active).toBe(false);
      });
      it('sets \'active\' Menu prop correctly when prop is set after IconButton click', function () {
        var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_IconMenu.IconMenu, {
          active: true
        }));
        wrapper.find('IconButton').simulate('click');
        wrapper.setProps({
          active: true
        });
        expect(wrapper.find('Menu').props().active).toBe(true);
      });
    });
  });
});
describe('MenuItem', function () {
  describe('#onClick', function () {
    it('passes to listener the event', function () {
      var onClick = jest.fn();
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Menu.Menu, null, /*#__PURE__*/_react["default"].createElement(_MenuItem.MenuItem, {
        key: "1",
        onClick: onClick
      })));
      wrapper.find(_MenuItem.MenuItem).first().simulate('click', {
        persist: function persist() {}
      });
      expect(onClick).toHaveBeenCalled();
    });
  });
});