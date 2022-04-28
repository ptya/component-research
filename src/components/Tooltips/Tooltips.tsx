import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
import ReachTooltip from './ReachTooltip'
import ReakitTooltip from './ReakitTooltip'

export default function Tooltips() {
  return (
    <>
      <h2 id="tooltips">Tooltips</h2>
      <FlexRowWrapper>
        <ReachTooltip />
        <ReakitTooltip />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}
