import * as React from 'react'

import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabUnstyled from '@mui/base/TabUnstyled'

// https://mui.com/base/react-tabs/
// by default does not render content for unselected tabs
// MUI exposes classes object from usntyled component which can be referenced easily in CSS-in-JS solutions

export default function MuiTabs() {
  return (
    <div>
      <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled>
          <TabUnstyled>MUI</TabUnstyled>
          <TabUnstyled>Tabs</TabUnstyled>
          <TabUnstyled>Here</TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}>First page</TabPanelUnstyled>
        <TabPanelUnstyled value={1}>Second page</TabPanelUnstyled>
        <TabPanelUnstyled value={2}>Third page</TabPanelUnstyled>
      </TabsUnstyled>
    </div>
  )
}
