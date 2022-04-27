import React from 'react'

import { Dialog, DialogBackdrop, DialogDisclosure, useDialogState } from 'reakit/Dialog'

// https://reakit.io/docs/dialog/

function ReakitModal() {
  const dialog = useDialogState()

  return (
    <div>
      <DialogDisclosure {...dialog}>Open Reakit Modal</DialogDisclosure>
      <DialogBackdrop {...dialog}>
        <Dialog {...dialog} aria-label="Welcome">
          Welcome to Reakit!
          <button onClick={dialog.hide}>Close</button>
        </Dialog>
      </DialogBackdrop>
    </div>
  )
}

export default ReakitModal
