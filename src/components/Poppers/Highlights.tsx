import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import '@reach/menu-button/styles.css'

import React from 'react'

import { Menu, MenuButton, MenuItem, MenuLink, MenuList } from '@reach/menu-button'

export default function ReachMenu() {
  return (
    <Menu>
      <MenuButton>
        Open Reach Menu <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
        <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
        <MenuItem onSelect={() => alert('Mark as Draft')}>Mark as Draft</MenuItem>
        <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
        <MenuLink as="a" href="https://reacttraining.com/workshops/">
          Attend a Workshop
        </MenuLink>
      </MenuList>
    </Menu>
  )
}
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REAKIT */
import React from 'react'

import { Popover, PopoverArrow, PopoverDisclosure, usePopoverState } from 'reakit/Popover'

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
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* MUI */
import React from 'react'

import PopperUnstyled from '@mui/base/PopperUnstyled'

export default function MuiPopper() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle MUI Popper
      </button>
      <PopperUnstyled id={id} open={open} anchorEl={anchorEl}>
        <div>The content of the Popper.</div>
      </PopperUnstyled>
    </div>
  )
}
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
