'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = _styledComponents2.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: 'Checkbox',
  componentId: 'dlum03-0'
})(['margin-right:10px;']);

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  disabled: false,
  defaultChecked: false
};

exports.default = Checkbox;