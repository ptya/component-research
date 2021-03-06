import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highligthst'
import ReachAlert from './ReachAlert'

export default function Snackbars() {
  return (
    <>
      <h2 id="snackbars">Snackbars</h2>
      <FlexRowWrapper>
        <ReachAlert />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}
