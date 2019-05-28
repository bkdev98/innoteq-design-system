import React from 'react'

import { Heading } from '../../atoms'

const HeroMainTitle = ({ children }) => (
  <Heading.h1 align='center' fontFamily='Innoteq' color='white'>
    {children}
  </Heading.h1>
)

export default HeroMainTitle