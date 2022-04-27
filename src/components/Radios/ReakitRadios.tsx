import React from 'react'

import { Radio, RadioGroup, useRadioState } from 'reakit/Radio'

// https://reakit.io/docs/radio/

export default function ReakitRadios() {
  const radio = useRadioState()
  return (
    <div>
      <p>Reakit Radios</p>
      <RadioGroup {...radio} aria-label="fruits">
        <label htmlFor="r-apple">
          <Radio {...radio} value="apple" id="r-apple" /> apple
        </label>
        <label htmlFor="r-orange">
          <Radio {...radio} value="orange" id="r-orange" /> orange
        </label>
        <label htmlFor="r-watermelon">
          <Radio {...radio} value="watermelon" id="r-watermelon" /> watermelon
        </label>
      </RadioGroup>
    </div>
  )
}
