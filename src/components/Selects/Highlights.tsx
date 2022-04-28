import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import '@reach/listbox/styles.css'

import React from 'react'

import { ListboxButton, ListboxInput, ListboxList, ListboxOption, ListboxPopover } from '@reach/listbox'

export default function ReachListbox() {
  const [value, setValue] = React.useState('default')

  return (
    <div>
      <p>Reach Listbox</p>
      <ListboxInput value={value} onChange={value => setValue(value)}>
        <ListboxButton arrow="▼" />
        <ListboxPopover>
          <ListboxList>
            <ListboxOption value="default">Choose a taco</ListboxOption>
            <ListboxOption value="asada">Carne Asada</ListboxOption>
            <ListboxOption value="pollo">Pollo</ListboxOption>
            <ListboxOption value="pastor">Pastor</ListboxOption>
            <ListboxOption value="lengua">Lengua</ListboxOption>
          </ListboxList>
          <div>
            <p>I really like tacos. I hope you enjoy them as well!</p>
          </div>
        </ListboxPopover>
      </ListboxInput>
    </div>
  )
}
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* MUI */
import React from 'react'

import OptionUnstyled from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import SelectUnstyled from '@mui/base/SelectUnstyled'
import styled from 'styled-components'

const StyledButton = styled.button\`\`
const StyledListbox = styled.ul\`\`
const StyledPopper = styled(PopperUnstyled)\`\`
const StyledOption = styled(OptionUnstyled)\`\`

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
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REACT SELECT */
import React from 'react'

import Select from 'react-select'

// https://github.com/JedWatson/react-select/tree/master/packages/react-select
//! no mention of accessibility !!

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default function ReactSelect() {
  const [value, setValue] = React.useState<null | typeof options[number]>(null)

  return (
    <div>
      <p>React Select</p>
      <Select value={value} onChange={option => setValue(option)} options={options} />
    </div>
  )
}
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
