import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import '@reach/combobox/styles.css'

import React from 'react'

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
  ComboboxPopover,
} from '@reach/combobox'

export default function ReachCombobox() {
  return (
    <div>
      <label htmlFor="reach-combobox">
        Reach Combobox
        <Combobox onSelect={item => console.log(item)}>
          <ComboboxInput
            id="reach-combobox"
            placeholder="Placeholder"
            onChange={event => console.log(event.target.value)}
          />
          <ComboboxPopover>
            <ComboboxList>
              <ComboboxOption value="Apple">
                🍎 <ComboboxOptionText />
              </ComboboxOption>
              <ComboboxOption value="Banana">
                🍌 <ComboboxOptionText />
              </ComboboxOption>
              <ComboboxOption value="Orange">
                🍊 <ComboboxOptionText />
              </ComboboxOption>
              <ComboboxOption value="Pineapple">
                🍍 <ComboboxOptionText />
              </ComboboxOption>
              <ComboboxOption value="Kiwi">
                🥝 <ComboboxOptionText />
              </ComboboxOption>
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </label>
    </div>
  )
}
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REAKIT */
import React from 'react'

import { Input } from 'reakit/Input'

export default function ReakitInput() {
  return (
    <div>
      <label htmlFor="reakit-input">
        Reakit input
        <Input style={{ display: 'block' }} id="reakit-input" placeholder="input" />
      </label>
    </div>
  )
}
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* MUI */
import React from 'react'

import InputUnstyled from '@mui/base/InputUnstyled'
import styled from 'styled-components'

const StyledInputElement = styled.input\`
  display: block;
\`

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
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
