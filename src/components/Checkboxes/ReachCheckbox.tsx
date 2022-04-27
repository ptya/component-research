import '@reach/checkbox/styles.css'

import React from 'react'

import { CustomCheckbox } from '@reach/checkbox'

// https://reach.tech/checkbox
// there is a mixed checkbox for tri-state checkbox
// customizable with CustomCheckboxContainer and CustomCheckboxInput

function MyCheckbox({ children, ...props }: { children: React.ReactNode; value: string; name: string; color: string }) {
  return (
    <span className={`example-custom-checkbox ${props.value}`}>
      <label>
        <CustomCheckbox {...props} />
        {children}
      </label>
    </span>
  )
}

export default function ReachCheckbox() {
  return (
    <fieldset>
      <legend>Reach Checkbox</legend>
      <MyCheckbox name="favorite-fruit" value="apple" color="#B22222">
        Apple <span aria-hidden>🍎</span>
      </MyCheckbox>
      <MyCheckbox name="favorite-fruit" value="orange" color="#FF8C00">
        Orange <span aria-hidden>🍊</span>
      </MyCheckbox>
      <MyCheckbox name="favorite-fruit" value="banana" color="#FFD700">
        Banana <span aria-hidden>🍌</span>
      </MyCheckbox>
    </fieldset>
  )
}
