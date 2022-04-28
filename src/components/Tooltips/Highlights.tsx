import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import '@reach/tooltip/styles.css'

import React from 'react'

import Tooltip from '@reach/tooltip'

export default function ReachTooltip() {
  return (
    <div>
      <Tooltip label="Notifications">
        <p>Reach Tooltip</p>
      </Tooltip>
    </div>
  )
}
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REAKIT */
import React from 'react'

import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip'

export default function ReakitTooltip() {
  const tooltip = useTooltipState({ placement: 'right-end' })
  return (
    <div>
      <TooltipReference {...tooltip} as="p">
        Reakit Tooltip
      </TooltipReference>
      <Tooltip {...tooltip}>Tooltip</Tooltip>
    </div>
  )
}
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
