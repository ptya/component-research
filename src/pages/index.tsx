import * as React from 'react'

import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h1,h2,h3,p {
    padding: 0;
  }

  h1, h2, h3 {
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
`

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
  background-color: inherit;
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
      <GlobalStyle />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css"
        />
      </Helmet>
      <MenuWrapper>
        <h2>Available components</h2>
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
