import React from 'react'

import SwitchUnstyled from '@mui/base/SwitchUnstyled'
import styled from 'styled-components'

// https://mui.com/base/react-switch/
// MUI exposes classes object from usntyled component which can be referenced easily in CSS-in-JS solutions

const Root = styled.span``

export default function MuiSwitches() {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } }

  return (
    <div>
      <p>MUI Switches</p>
      <SwitchUnstyled component={Root} {...label} defaultChecked />
      <SwitchUnstyled component={Root} {...label} />
      <SwitchUnstyled component={Root} {...label} defaultChecked disabled />
      <SwitchUnstyled component={Root} {...label} disabled />
    </div>
  )
}
