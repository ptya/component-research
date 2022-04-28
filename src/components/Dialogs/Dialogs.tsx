import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
import MuiModal from './MuiModal'
import ReachUiModal from './ReachUiModal'
import ReactModal from './ReactModal'
import ReakitModal from './ReakitModal'

function Dialogs() {
  return (
    <>
      <h2 id="dialogs">Dialogs</h2>
      <FlexRowWrapper>
        <ReachUiModal />
        <ReakitModal />
        <MuiModal />
        <ReactModal />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}

export default Dialogs
