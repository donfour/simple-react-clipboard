"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Clipboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Clipboard, _Component);

  function Clipboard() {
    _classCallCheck(this, Clipboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Clipboard).apply(this, arguments));
  }

  _createClass(Clipboard, [{
    key: "_copyToClipboard",
    value: function _copyToClipboard() {
      return document.execCommand('copy');
    }
  }, {
    key: "copy",
    value: function copy(text) {
      var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
      var fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

      fakeElem.style.fontSize = '12pt'; // Reset box model

      fakeElem.style.border = '0';
      fakeElem.style.padding = '0';
      fakeElem.style.margin = '0'; // Move element out of screen horizontally

      fakeElem.style.position = 'absolute';
      fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      fakeElem.style.top = "".concat(yPosition, "px");
      fakeElem.setAttribute('readonly', '');
      fakeElem.value = text;
      document.body.appendChild(fakeElem);
      fakeElem.select();
      var succeeded, error;

      try {
        succeeded = this._copyToClipboard();
      } catch (err) {
        succeeded = false;
        error = err;
      }

      document.body.removeChild(fakeElem);
      this.handleResult(succeeded, error);
    }
  }, {
    key: "handleResult",
    value: function handleResult(succeeded, error) {
      if (succeeded) {
        this.props.onSuccess && this.props.onSuccess();
      } else {
        this.props.onError && this.props.onError(error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          render = _this$props.render,
          text = _this$props.text,
          props = _this$props.props;
      return render(_objectSpread({}, props, {
        copy: function copy() {
          return _this.copy(text);
        }
      }));
    }
  }]);

  return Clipboard;
}(_react.Component);

Clipboard.propTypes = {
  render: _propTypes.default.func.isRequired,
  text: _propTypes.default.string.isRequired,
  props: _propTypes.default.object,
  onSuccess: _propTypes.default.func,
  onError: _propTypes.default.func
};
var _default = Clipboard;
exports.default = _default;