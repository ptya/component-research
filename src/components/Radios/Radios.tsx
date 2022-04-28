import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
import ReakitRadios from './ReakitRadios'

export default function Radios() {
  return (
    <>
      <h2 id="radios">Radios</h2>
      <FlexRowWrapper>
        <ReakitRadios />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}
