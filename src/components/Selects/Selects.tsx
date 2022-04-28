import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
import MuiSelect from './MuiSelect'
import ReachListbox from './ReachListbox'
import ReactSelect from './ReactSelect'

export default function Selects() {
  return (
    <>
      <h2 id="selects">Selects</h2>
      <FlexRowWrapper>
        <ReachListbox />
        <MuiSelect />
        <ReactSelect />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}
