import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import '@reach/checkbox/styles.css'

import React from 'react'

import { CustomCheckbox } from '@reach/checkbox'

function MyCheckbox({ children, ...props }: { children: React.ReactNode; value: string; name: string; color: string }) {
  return (
    <span className={\`example-custom-checkbox \${props.value}\`}>
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
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REAKIT */
import React from 'react'

import { Checkbox, useCheckboxState } from 'reakit/Checkbox'

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
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
