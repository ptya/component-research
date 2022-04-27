import '@reach/tabs/styles.css'

import React from 'react'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs'

// https://reach.tech/tabs
// can be customized, by default everything is rendered but not visible tabs are hidden
// tab state can be controlled easily

export default function ReachTabs() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Reach</Tab>
          <Tab>Tabs</Tab>
          <Tab>Here</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
