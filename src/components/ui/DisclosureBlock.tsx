import React from 'react'

import { Disclosure, DisclosureContent, useDisclosureState } from 'reakit/Disclosure'

import { FlexRowWrapper } from '../ui/Wrappers'

export default function DisclosureBlock({ children }: { children: React.ReactNode }) {
  const disclosure = useDisclosureState({ visible: false })
  return (
    <div style={{ marginTop: '2rem' }}>
      <Disclosure {...disclosure}>Toggle code preview</Disclosure>
      <DisclosureContent {...disclosure}>
        <FlexRowWrapper>{children}</FlexRowWrapper>
      </DisclosureContent>
    </div>
  )
}
