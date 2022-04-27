import React from 'react'

import InputUnstyled from '@mui/base/InputUnstyled'
import styled from 'styled-components'

// https://mui.com/base/react-input/
// input adornments are supported out of the box
// MUI exposes classes object from usntyled component which can be referenced easily in CSS-in-JS solutions

const StyledInputElement = styled.input`
  display: block;
`

export default function UnstyledInputBasic() {
  return (
    <div>
      <label htmlFor="mui-input">
        MUI Input
        <InputUnstyled id="mui-input" components={{ Input: StyledInputElement }} />
      </label>
    </div>
  )
}
