import React from 'react'

import ModalUnstyled from '@mui/base/ModalUnstyled'

// https://mui.com/base/react-modal/
// MUI exposes classes object from usntyled component which can be referenced easily in CSS-in-JS solutions

const Backdrop = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div style={{ zIndex: -1, position: 'fixed', right: 0, bottom: 0, top: 0, left: 0 }} ref={ref} {...props} />
})
Backdrop.displayName = 'Backdrop'

export default function MuiModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open MUI modal
      </button>
      <ModalUnstyled
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <div>
          <h2 id="unstyled-modal-title">Text in a modal</h2>
          <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
        </div>
      </ModalUnstyled>
    </div>
  )
}
