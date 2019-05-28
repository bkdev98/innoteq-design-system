'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Customize hovering color based on props.
// This will break the header / hero section button hover
var Button = _styledComponents2.default.button.withConfig({
  displayName: 'Button',
  componentId: 'sc-113kwvm-0'
})(['padding:1.8rem;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' &:disabled{opacity:0.2;}&:hover{background-color:', ';border-color:', ' cursor:pointer;}&:focus{outline:none;}'], _styledSystem.color, _styledSystem.border, _styledSystem.borderWidth, _styledSystem.borderStyle, _styledSystem.borderColor, _styledSystem.fontFamily, _styledSystem.fontSize, _styledSystem.space, _styledSystem.letterSpacing, _styledSystem.width, _styledSystem.height, _styledSystem.minWidth, function (props) {
  return props.disabled ? null : props.theme.colors.secondaryColor;
}, function (props) {
  return props.disabled ? null : props.theme.colors.secondaryColor;
});

Button.defaultProps = {
  width: '280px',
  color: 'white',
  bg: 'primaryColor',
  border: 'none',
  borderColor: 'primaryColor',
  fontFamily: 'Innoteq',
  fontSize: '3',
  letterSpacing: 'primaryBtn'
};

Button.displayName = 'Button';

exports.default = (0, _styledComponents.withTheme)(Button);