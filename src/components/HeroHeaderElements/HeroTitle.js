import React from 'react'

import { Heading } from '../../atoms'

const HeroTitle = ({ children }) => (
  <Heading.h2
    lineHeight={0}
    letterSpacing='-1.1px'
    fontSize={5}
    mb={1}
    fontFamily='Innoteq'
    align='center'
    color='white'
  >
    {children}
  </Heading.h2>
)

export default HeroTitle