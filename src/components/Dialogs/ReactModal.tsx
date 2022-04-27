import React from 'react'

import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

// https://github.com/reactjs/react-modal

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
