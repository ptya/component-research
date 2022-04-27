import React from 'react'

import OptionUnstyled from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import SelectUnstyled from '@mui/base/SelectUnstyled'
import styled from 'styled-components'

// https://mui.com/base/react-select/
// MUI exposes classes object from usntyled component which can be referenced easily in CSS-in-JS solutions
// The MultiSelectUnstyled component lets your users select multiple options - exported from SelectUnstyled as named export

const StyledButton = styled.button``
const StyledListbox = styled.ul``
const StyledPopper = styled(PopperUnstyled)``
const StyledOption = styled(OptionUnstyled)``

export default function MuiSelect() {
  return (
    <div>
      <p>MUI Select</p>
      <SelectUnstyled
        components={{ Root: StyledButton, Listbox: StyledListbox, Popper: StyledPopper }}
        defaultValue={10}
      >
        <StyledOption value={10}>Ten</StyledOption>
        <StyledOption value={20}>Twenty</StyledOption>
        <StyledOption value={30}>Thirty</StyledOption>
      </SelectUnstyled>
    </div>
  )
}
