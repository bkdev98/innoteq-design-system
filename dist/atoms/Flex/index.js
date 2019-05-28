'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./../Box');

var _Box2 = _interopRequireDefault(_Box);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)(_Box2.default).withConfig({
  displayName: 'Flex',
  componentId: 'lj68v7-0'
})(['display:flex;', ' ', ' ', ' ', ' ', ''], _styledSystem.alignItems, _styledSystem.flexDirection, _styledSystem.flexWrap, _styledSystem.justifyContent, _styledSystem.order);

Flex.spaceBetween = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__spaceBetween',
  componentId: 'lj68v7-1'
})(['justify-content:space-between;']);

Flex.horizontallyCenter = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__horizontallyCenter',
  componentId: 'lj68v7-2'
})(['justify-content:center;']);

Flex.verticallyCenter = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__verticallyCenter',
  componentId: 'lj68v7-3'
})(['align-items:center;']);

Flex.center = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__center',
  componentId: 'lj68v7-4'
})(['justify-content:center;align-items:center;']);

Flex.column = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__column',
  componentId: 'lj68v7-5'
})(['flex-direction:column;']);

Flex.row = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__row',
  componentId: 'lj68v7-6'
})(['flex-direction:row;']);

Flex.inline = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__inline',
  componentId: 'lj68v7-7'
})(['display:inline-flex;']);

exports.default = Flex;