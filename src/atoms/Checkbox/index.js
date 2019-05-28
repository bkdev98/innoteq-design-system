import styled from 'styled-components'

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: 10px;
`

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  disabled: false,
  defaultChecked: false,
}

export default Checkbox
