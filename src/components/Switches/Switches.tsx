import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import MuiSwitches from './MuiSwitches'

export default function Switches() {
  return (
    <>
      <h2 id="switches">Switches</h2>
      <FlexRowWrapper>
        <MuiSwitches />
      </FlexRowWrapper>
    </>
  )
}
