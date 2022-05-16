"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

var Portal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Portal, _Component);

  function Portal() {
    (0, _classCallCheck2.default)(this, Portal);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Portal).apply(this, arguments));
  }

  (0, _createClass2.default)(Portal, [{
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

        return _reactDom.default.findDOMNode(this._overlayInstance);
      }

      return null;
    }
  }, {
    key: "_getOverlay",
    value: function _getOverlay() {
      if (!this.props.children) return null;
      return _react.default.createElement("div", {
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

        this._overlayInstance = _reactDom.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
      } else {
        this._unrenderOverlay();

        this._unmountOverlayTarget();
      }
    }
  }, {
    key: "_unrenderOverlay",
    value: function _unrenderOverlay() {
      if (this._overlayTarget) {
        _reactDom.default.unmountComponentAtNode(this._overlayTarget);

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

(0, _defineProperty2.default)(Portal, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  container: _propTypes.default.node,
  style: _reactStyleProptype.default
});
(0, _defineProperty2.default)(Portal, "defaultProps", {
  className: ''
});

function getContainer(container) {
  var _container = typeof container === 'function' ? container() : container;

  return _reactDom.default.findDOMNode(_container) || document.body;
}

var _default = Portal;
exports.default = _default;