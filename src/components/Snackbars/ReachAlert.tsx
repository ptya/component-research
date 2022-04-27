import React from 'react'

import Alert from '@reach/alert'

// https://reach.tech/alert

export default function ReachAlert() {
  const [messages, setMessages] = React.useState<string[]>([])
  return (
    <div>
      <button
        onClick={() => {
          setMessages(prevMessages => prevMessages.concat([`Message #${prevMessages.length + 1}`]))
          setTimeout(() => {
            setMessages(prevMessages => prevMessages.slice(1))
          }, 5000)
        }}
      >
        Add a Reach Alert
      </button>
      <div>
        {messages.map((message, index) => (
          <Alert key={index}>{message}</Alert>
        ))}
      </div>
    </div>
  )
}
