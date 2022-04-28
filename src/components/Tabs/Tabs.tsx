import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
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
        <MuiTabs />
        <ReactTabs />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}
