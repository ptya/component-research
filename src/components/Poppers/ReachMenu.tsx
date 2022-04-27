import '@reach/menu-button/styles.css'

import React from 'react'

import { Menu, MenuButton, MenuItem, MenuLink, MenuList } from '@reach/menu-button'

// https://reach.tech/menu-button
// MenuPopover component can be used as a lower level component to customize the position and usage of the popover element

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
