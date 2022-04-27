import 'react-tabs/style/react-tabs.css'

import React from 'react'

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

// https://github.com/reactjs/react-tabs
// by default does not render content for unselected tabs
// highly customizable

export default function ReactTabs() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>React</Tab>
          <Tab>Tabs</Tab>
          <Tab>Here</Tab>
        </TabList>

        <TabPanel>
          <p>Any content 1</p>
        </TabPanel>
        <TabPanel>
          <p>Any content 2</p>
        </TabPanel>
        <TabPanel>
          <p>Any content 3</p>
        </TabPanel>
      </Tabs>
    </div>
  )
}
