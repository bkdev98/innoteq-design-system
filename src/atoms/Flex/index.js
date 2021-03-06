import styled from 'styled-components';
import Box from './../Box';
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
} from 'styled-system';

const Flex = styled(Box)`
  display: flex;

  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${order}
`;

Flex.spaceBetween = styled(Flex)`
  justify-content: space-between;
`;

Flex.horizontallyCenter = styled(Flex)`
  justify-content: center;
`;

Flex.verticallyCenter = styled(Flex)`
  align-items: center;
`;

Flex.center = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

Flex.column = styled(Flex)`
  flex-direction: column;
`;

Flex.row = styled(Flex)`
  flex-direction: row;
`;

Flex.inline = styled(Flex)`
  display: inline-flex;
`;

export default Flex;
