"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Portal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Portal, _Component);

  var _super = _createSuper(Portal);

  function Portal() {
    (0, _classCallCheck2["default"])(this, Portal);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._renderOverlay();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this._overlayTarget && nextProps.container !== this.props.container) {
        this._portalContainerNode.removeChild(this._overlayTarget);

        this._portalContainerNode = getContainer(nextProps.container);

        this._portalContainerNode.appendChild(this._overlayTarget);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._renderOverlay();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unrenderOverlay();

      this._unmountOverlayTarget();
    }
  }, {
    key: "getMountNode",
    value: function getMountNode() {
      return this._overlayTarget;
    }
  }, {
    key: "getOverlayDOMNode",
    value: function getOverlayDOMNode() {
      if (!this.isMounted()) {
        // eslint-disable-line
        throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
      }

      if (this._overlayInstance) {
        if (this._overlayInstance.getWrappedDOMNode) {
          return this._overlayInstance.getWrappedDOMNode();
        }

        return _reactDom["default"].findDOMNode(this._overlayInstance);
      }

      return null;
    }
  }, {
    key: "_getOverlay",
    value: function _getOverlay() {
      if (!this.props.children) return null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className,
        style: this.props.style
      }, this.props.children);
    }
  }, {
    key: "_renderOverlay",
    value: function _renderOverlay() {
      var overlay = this._getOverlay();

      if (overlay !== null) {
        this._mountOverlayTarget();

        this._overlayInstance = _reactDom["default"].unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
      } else {
        this._unrenderOverlay();

        this._unmountOverlayTarget();
      }
    }
  }, {
    key: "_unrenderOverlay",
    value: function _unrenderOverlay() {
      if (this._overlayTarget) {
        _reactDom["default"].unmountComponentAtNode(this._overlayTarget);

        this._overlayInstance = null;
      }
    }
  }, {
    key: "_mountOverlayTarget",
    value: function _mountOverlayTarget() {
      if (!this._overlayTarget) {
        this._overlayTarget = document.createElement('div');
        this._portalContainerNode = getContainer(this.props.container);

        this._portalContainerNode.appendChild(this._overlayTarget);
      }
    }
  }, {
    key: "_unmountOverlayTarget",
    value: function _unmountOverlayTarget() {
      if (this._overlayTarget) {
        this._portalContainerNode.removeChild(this._overlayTarget);

        this._overlayTarget = null;
      }

      this._portalContainerNode = null;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Portal;
}(_react.Component);

(0, _defineProperty2["default"])(Portal, "propTypes", {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  container: _propTypes["default"].node,
  style: _reactStyleProptype["default"]
});
(0, _defineProperty2["default"])(Portal, "defaultProps", {
  className: ''
});

function getContainer(container) {
  var _container = typeof container === 'function' ? container() : container;

  return _reactDom["default"].findDOMNode(_container) || document.body;
}

var _default = Portal;
exports["default"] = _default;