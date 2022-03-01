"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Tabs = require("../Tabs");

var _Tab = require("../Tab");

var _TabContent = require("../TabContent");

var _themeModule = _interopRequireDefault(require("../theme.module.css"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

describe('Tabs', function () {
  var Composition = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Composition, _Component);

    var _super = _createSuper(Composition);

    function Composition() {
      var _this;

      (0, _classCallCheck2["default"])(this, Composition);
      _this = _super.call(this);
      _this.state = {
        index: 0
      };
      return _this;
    }

    (0, _createClass2["default"])(Composition, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, (0, _extends2["default"])({
          index: this.state.index
        }, this.props), /*#__PURE__*/_react["default"].createElement(_Tab.Tab, {
          label: "tab1"
        }, "tab1"), /*#__PURE__*/_react["default"].createElement(_Tab.Tab, {
          label: "tab2"
        }, "tab2"));
      }
    }]);
    return Composition;
  }(_react.Component);

  it('defaults to only rendering the current tab', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(Composition, null));
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
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(Composition, {
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
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, {
        theme: _themeModule["default"]
      }));
      expect(wrapper.find('div').first().prop('className')).not.toContain(_themeModule["default"].fixed);
    });
    it('uses fixed when set', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, {
        fixed: true,
        theme: _themeModule["default"]
      }));
      expect(wrapper.find('div').first().prop('className')).toContain(_themeModule["default"].fixed);
    });
    it('does not use inverse by default', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, {
        theme: _themeModule["default"]
      }));
      expect(wrapper.find('div').first().prop('className')).not.toContain(_themeModule["default"].inverse);
    });
    it('uses inverse when set', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, {
        inverse: true,
        theme: _themeModule["default"]
      }));
      expect(wrapper.find('div').first().prop('className')).toContain(_themeModule["default"].inverse);
    });
  });
});