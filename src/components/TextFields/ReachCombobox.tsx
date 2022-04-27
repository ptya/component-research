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

// https://reach.tech/combobox
// customization seems enough

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
