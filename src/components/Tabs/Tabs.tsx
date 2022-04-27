import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import MuiTabs from './MuiTabs'
import ReachTabs from './ReachTabs'
import ReactTabs from './ReactTabs'
import ReakitTabs from './ReakitTabs'

export default function Tabs() {
  return (
    <>
      <h2 id="tabs">Tabs</h2>
      <FlexRowWrapper>
        <ReachTabs />
        <ReakitTabs />
        <ReactTabs />
        <MuiTabs />
      </FlexRowWrapper>
    </>
  )
}
