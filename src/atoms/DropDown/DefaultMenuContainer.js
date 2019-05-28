import React from 'react'
import styled from 'styled-components'
import {
  top,
  left,
  right,
  bottom,
  zIndex,
  background,
} from 'styled-system'

import Card from '../Card'

const MenuContainer = styled(Card)`
  position: absolute;
  overflow: auto;
  ${left}
  ${top}
  ${right}
  ${bottom}
  ${zIndex}
  ${background}
`;

MenuContainer.defaultProps = {
  background: 'white',
  border: '1px solid #ccc',
  mt: '-1px',
  maxHeight: '200px',
  top: '100%',
  width: 1,
  zIndex: '100',
}

export default ({ isOpen, styleProps, children }) => (
  isOpen ? <MenuContainer {...styleProps}>{ children }</MenuContainer> : null
)
