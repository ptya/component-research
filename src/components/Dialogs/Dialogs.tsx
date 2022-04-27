import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
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
        <ReactModal />
        <ReakitModal />
        <MuiModal />
      </FlexRowWrapper>
    </>
  )
}

export default Dialogs
