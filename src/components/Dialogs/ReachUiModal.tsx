import '@reach/dialog/styles.css'

import React from 'react'

import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'

// https://reach.tech/dialog

function ReachUiModal() {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div>
      <button onClick={open}>Open Reach UI</button>
      <Dialog isOpen={showDialog} onDismiss={close} aria-label="my modal">
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  )
}

export default ReachUiModal
