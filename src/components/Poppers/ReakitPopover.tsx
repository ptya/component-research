import React from 'react'

import { Popover, PopoverArrow, PopoverDisclosure, usePopoverState } from 'reakit/Popover'

// https://reakit.io/docs/popover/

export default function ReakitPopover() {
  const popover = usePopoverState({ placement: 'right-start' })
  return (
    <>
      <PopoverDisclosure {...popover}>Open Reakit Popover</PopoverDisclosure>
      <Popover {...popover} aria-label="Welcome">
        <PopoverArrow {...popover} />
        <p>Welcome to Reakit!</p>
      </Popover>
    </>
  )
}
