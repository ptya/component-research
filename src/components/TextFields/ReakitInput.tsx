import React from 'react'

import { Input } from 'reakit/Input'

// https://reakit.io/docs/input/

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
