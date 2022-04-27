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
