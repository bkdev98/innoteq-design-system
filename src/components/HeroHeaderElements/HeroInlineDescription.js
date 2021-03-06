import React from 'react'

import { Flex } from '../../atoms'
import { P } from '../../molecules'

const HeroInlineDescription = ({ children }) => (
  <Flex.horizontallyCenter px={[2, 2, 0]} pb={1}>
    <P m={0} fontSize={'2rem'} lineHeight={3} color='white' align='center'>
      {children}
    </P>
  </Flex.horizontallyCenter>
)

export default HeroInlineDescription