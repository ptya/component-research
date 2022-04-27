import * as React from 'react'

import styled from 'styled-components'

import Checkboxes from '../components/Checkboxes'
import Dialogs from '../components/Dialogs'
import Poppers from '../components/Poppers'
import Radios from '../components/Radios'
import Selects from '../components/Selects'
import Snackbars from '../components/Snackbars'
import Switches from '../components/Switches'
import Tabs from '../components/Tabs'
import TextFields from '../components/TextFields'
import Tooltips from '../components/Tooltips'

const PageWrapper = styled.div`
  margin: 20px;
  margin-left: 200px;

  * {
    box-sizing: border-box;
  }
`

const MenuWrapper = styled.aside`
  width: 170px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 10px;
  border-right: 1px solid #111;
`

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 4px;
  }
`

const Content = styled.main``

function IndexPage() {
  return (
    <PageWrapper>
      <MenuWrapper>
        <p>Available components</p>
        <MenuList>
          <li>
            <a href="#dialogs">Dialogs</a>
          </li>
          <li>
            <a href="#poppers">Poppers / Popovers</a>
          </li>
          <li>
            <a href="#tooltips">Tooltips</a>
          </li>
          <li>
            <a href="#snackbars">Snackbars / Alerts</a>
          </li>
          <li>
            <a href="#tabs">Tabs</a>
          </li>
          <li>
            <a href="#text_fields">TextFields</a>
          </li>
          <li>
            <a href="#selects">Selects</a>
          </li>
          <li>
            <a href="#checkboxes">Checkboxes</a>
          </li>
          <li>
            <a href="#radios">Radios</a>
          </li>
          <li>
            <a href="#switches">Switches</a>
          </li>
        </MenuList>
      </MenuWrapper>
      <Content>
        <h1>Component examples</h1>
        <Dialogs />
        <Poppers />
        <Tooltips />
        <Snackbars />
        <Tabs />
        <TextFields />
        <Selects />
        <Checkboxes />
        <Radios />
        <Switches />
      </Content>
    </PageWrapper>
  )
}

export default IndexPage
