import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import '@reach/dialog/styles.css'

import React from 'react'

import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'

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
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REAKIT */
import React from 'react'

import { Dialog, DialogBackdrop, DialogDisclosure, useDialogState } from 'reakit/Dialog'


function ReakitModal() {
  const dialog = useDialogState()

  return (
    <div>
      <DialogDisclosure {...dialog}>Open Reakit Modal</DialogDisclosure>
      <DialogBackdrop {...dialog} style={{ position: 'fixed', top: '10%', left: '50%' }}>
        <Dialog {...dialog} aria-label="Welcome">
          Welcome to Reakit!
          <button onClick={dialog.hide}>Close</button>
        </Dialog>
      </DialogBackdrop>
    </div>
  )
}

export default ReakitModal
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* MUI */
import React from 'react'

import ModalUnstyled from '@mui/base/ModalUnstyled'

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
        style={{ position: 'fixed', top: '10%', left: '50%' }}
      >
        <div>
          <h2 id="unstyled-modal-title">Text in a modal</h2>
          <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
        </div>
      </ModalUnstyled>
    </div>
  )
}
            `}
      </Highlight>
      <Highlight className="typescript">
        {`/* REACT MODAL */
import React from 'react'

import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

function ReactModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <button onClick={openModal}>Open React Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  )
}

export default ReactModal
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
