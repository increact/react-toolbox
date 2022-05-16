"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Tabs = require("../Tabs");

var _Tab = require("../Tab");

var _TabContent = require("../TabContent");

var _themeModule = _interopRequireDefault(require("../theme.module.css"));

describe('Tabs', function () {
  var Composition =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Composition, _Component);

    function Composition() {
      var _this;

      (0, _classCallCheck2.default)(this, Composition);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Composition).call(this));
      _this.state = {
        index: 0
      };
      return _this;
    }

    (0, _createClass2.default)(Composition, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(_Tabs.Tabs, (0, _extends2.default)({
          index: this.state.index
        }, this.props), _react.default.createElement(_Tab.Tab, {
          label: "tab1"
        }, "tab1"), _react.default.createElement(_Tab.Tab, {
          label: "tab2"
        }, "tab2"));
      }
    }]);
    return Composition;
  }(_react.Component);

  it('defaults to only rendering the current tab', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(Composition, null));
    expect(wrapper.find(_TabContent.TabContent).length).toEqual(1);
    expect(wrapper.find(_TabContent.TabContent).first().prop('tabIndex')).toEqual(0);
    wrapper.instance().setState({
      index: 1
    });
    wrapper.update();
    expect(wrapper.find(_TabContent.TabContent).length).toEqual(1);
    expect(wrapper.find(_TabContent.TabContent).first().prop('tabIndex')).toEqual(1);
  });
  it('renders inactive tabs when hideMode is set to display', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(Composition, {
      hideMode: "display"
    }));
    expect(wrapper.find(_TabContent.TabContent).length).toEqual(2);
    expect(wrapper.find(_TabContent.TabContent).at(0).prop('hidden')).toEqual(false);
    expect(wrapper.find(_TabContent.TabContent).at(1).prop('hidden')).toEqual(true);
    wrapper.instance().setState({
      index: 1
    });
    wrapper.update();
    expect(wrapper.find(_TabContent.TabContent).length).toEqual(2);
    expect(wrapper.find(_TabContent.TabContent).at(0).prop('hidden')).toEqual(true);
    expect(wrapper.find(_TabContent.TabContent).at(1).prop('hidden')).toEqual(false);
  });
  describe('#render', function () {
    it('does not use fixed by default', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.Tabs, {
        theme: _themeModule.default
      }));
      expect(wrapper.find('div').first().prop('className')).not.toContain(_themeModule.default.fixed);
    });
    it('uses fixed when set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.Tabs, {
        fixed: true,
        theme: _themeModule.default
      }));
      expect(wrapper.find('div').first().prop('className')).toContain(_themeModule.default.fixed);
    });
    it('does not use inverse by default', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.Tabs, {
        theme: _themeModule.default
      }));
      expect(wrapper.find('div').first().prop('className')).not.toContain(_themeModule.default.inverse);
    });
    it('uses inverse when set', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.Tabs, {
        inverse: true,
        theme: _themeModule.default
      }));
      expect(wrapper.find('div').first().prop('className')).toContain(_themeModule.default.inverse);
    });
  });
});