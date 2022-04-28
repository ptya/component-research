import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
import ReachCheckbox from './ReachCheckbox'
import ReakitCheckbox from './ReakitCheckbox'

export default function Checkboxes() {
  return (
    <>
      <h2 id="checkboxes">Checkboxes</h2>
      <FlexRowWrapper>
        <ReachCheckbox />
        <ReakitCheckbox />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}
