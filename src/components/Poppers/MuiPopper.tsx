import React from 'react'

import PopperUnstyled from '@mui/base/PopperUnstyled'

// https://mui.com/base/react-popper/
// MUI exposes classes object from usntyled component which can be referenced easily in CSS-in-JS solutions

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
