import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* MUI */
import React from 'react'

import SwitchUnstyled from '@mui/base/SwitchUnstyled'
import styled from 'styled-components'


const Root = styled.span\`\`

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
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
