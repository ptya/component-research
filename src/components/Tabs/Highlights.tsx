import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import '@reach/tabs/styles.css'

import React from 'react'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs'

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
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REAKIT */
import React from 'react'

import { Tab, TabList, TabPanel, useTabState } from 'reakit/Tab'

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
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* MUI */
import React from 'react'

import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabUnstyled from '@mui/base/TabUnstyled'

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
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REACT TABS */
import 'react-tabs/style/react-tabs.css'

import React from 'react'

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

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
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
