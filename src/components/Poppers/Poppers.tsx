import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import MuiPopper from './MuiPopper'
import ReachMenu from './ReachMenu'
import ReakitPopover from './ReakitPopover'

function Poppers() {
  return (
    <>
      <h2 id="poppers">Poppers / Popovers</h2>
      <FlexRowWrapper>
        <ReakitPopover />
        <ReachMenu />
        <MuiPopper />
      </FlexRowWrapper>
    </>
  )
}

export default Poppers
