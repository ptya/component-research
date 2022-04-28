import React from 'react'

import Highlight from 'react-highlight'

import DisclosureBlock from '../ui/DisclosureBlock'

export default function Highlights() {
  return (
    <DisclosureBlock>
      <Highlight className="typescript">
        {`/* REACH UI */
import React from 'react'

import Alert from '@reach/alert'

export default function ReachAlert() {
  const [messages, setMessages] = React.useState<string[]>([])
  return (
    <div>
      <button
        onClick={() => {
          setMessages(prevMessages => prevMessages.concat([\`Message #\${prevMessages.length + 1}\`]))
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
            `}
      </Highlight>
    </DisclosureBlock>
  )
}
