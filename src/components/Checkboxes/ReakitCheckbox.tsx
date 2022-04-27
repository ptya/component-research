import React from 'react'

import { Checkbox, useCheckboxState } from 'reakit/Checkbox'

// https://reakit.io/docs/checkbox/
// easy mixed states

export default function ReakitCheckbox() {
  const checkbox = useCheckboxState({ state: [] })
  return (
    <div>
      <p>Reakit Checkbox</p>
      <label htmlFor="apple">
        <Checkbox {...checkbox} value="apple" id="apple" />
        Apple
      </label>
      <label htmlFor="orange">
        <Checkbox {...checkbox} value="orange" id="orange" />
        Orange
      </label>
      <label htmlFor="watermelon">
        <Checkbox {...checkbox} value="watermelon" id="watermelon" />
        Watermelon
      </label>
    </div>
  )
}
