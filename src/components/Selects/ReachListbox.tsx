import '@reach/listbox/styles.css'

import React from 'react'

import { ListboxButton, ListboxInput, ListboxList, ListboxOption, ListboxPopover } from '@reach/listbox'

// https://reach.tech/listbox
// Listbox component can be used for simple select
// no multi select

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
