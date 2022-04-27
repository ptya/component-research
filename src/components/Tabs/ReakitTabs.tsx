import React from 'react'

import { Tab, TabList, TabPanel, useTabState } from 'reakit/Tab'

// https://reakit.io/docs/tab/
// can be customized, by default everything is rendered but not visible tabs are hidden
// highly customizable

export default function ReakitTabs() {
  const tab = useTabState()
  return (
    <div>
      <TabList {...tab} aria-label="My tabs">
        <Tab {...tab}>Reakit </Tab>
        <Tab {...tab}>Tabs</Tab>
        <Tab {...tab}>Here</Tab>
      </TabList>
      <TabPanel {...tab}>
        <p>Tab 1</p>
      </TabPanel>
      <TabPanel {...tab}>
        <p>Tab 2</p>
      </TabPanel>
      <TabPanel {...tab}>
        <p>Tab 3</p>
      </TabPanel>
    </div>
  )
}
