import '@reach/tooltip/styles.css'

import React from 'react'

import Tooltip from '@reach/tooltip'

// https://reach.tech/tooltip
// useTooltip, TooltipPopup can be used as lower level component to customize the popup component (like adding triangle)

export default function ReachTooltip() {
  return (
    <div>
      <Tooltip label="Notifications">
        <p>Reach Tooltip</p>
      </Tooltip>
    </div>
  )
}
