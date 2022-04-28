import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
import MuiPopper from './MuiPopper'
import ReachMenu from './ReachMenu'
import ReakitPopover from './ReakitPopover'

function Poppers() {
  return (
    <>
      <h2 id="poppers">Poppers / Popovers</h2>
      <FlexRowWrapper>
        <ReachMenu />
        <ReakitPopover />
        <MuiPopper />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}

export default Poppers
