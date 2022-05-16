"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _themeModule = _interopRequireDefault(require("../theme.module.css"));

var _DatePicker = require("../DatePicker");

describe('DatePickerDialog', function () {
  describe('#on mount', function () {
    it('passes value through to calendar if no maxDate/minDate specified', function () {
      var value = new Date(2016, 1, 1);
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
        theme: _themeModule.default,
        value: value
      }));
      expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(value);
    });
    describe('when minDate but not maxDate specified', function () {
      var minDate = new Date(2016, 1, 2);
      it('passes through a value after minDate', function () {
        var value = new Date(2016, 1, 3);
        var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
          theme: _themeModule.default,
          minDate: minDate,
          value: value
        }));
        expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(value);
      });
      it('sanitises a value before minDate to minDate', function () {
        var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
          theme: _themeModule.default,
          minDate: minDate,
          value: new Date(2016, 1, 1)
        }));
        expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(minDate);
      });
    });
    describe('when maxDate but not minDate specified', function () {
      var maxDate = new Date(2016, 1, 2);
      it('passes through a value before maxDate', function () {
        var value = new Date(2016, 1, 1);
        var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
          theme: _themeModule.default,
          maxDate: maxDate,
          value: value
        }));
        expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(value);
      });
      it('sanitises a value after maxDate to maxDate', function () {
        var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
          theme: _themeModule.default,
          maxDate: maxDate,
          value: new Date(2016, 1, 3)
        }));
        expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(maxDate);
      });
    });
    describe('if both minDate and maxDate are set', function () {
      var minDate = new Date(2016, 1, 2);
      var maxDate = new Date(2016, 1, 4);
      it('sanitises value to minDate if value is before minDate', function () {
        var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
          theme: _themeModule.default,
          minDate: minDate,
          maxDate: maxDate,
          value: new Date(2016, 1, 1)
        }));
        expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(minDate);
      });
      it('sanitises value to maxDate if value is after maxDate', function () {
        var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
          theme: _themeModule.default,
          minDate: minDate,
          maxDate: maxDate,
          value: new Date(2016, 1, 5)
        }));
        expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(maxDate);
      });
      it('doesn\'t sanitise when value is between maxDate/minDate', function () {
        var value = new Date(2016, 1, 3);
        var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.DatePickerDialog, {
          theme: _themeModule.default,
          minDate: minDate,
          maxDate: maxDate,
          value: value
        }));
        expect(wrapper.find(_DatePicker.Calendar).props().selectedDate).toBe(value);
      });
    });
  });
});