import React from 'react'

import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip'

// https://reakit.io/docs/tooltip/
// consistent tooltip portal

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
