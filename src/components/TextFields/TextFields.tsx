import React from 'react'

import { FlexRowWrapper } from '../ui/Wrappers'
import Highlights from './Highlights'
import MuiInput from './MuiInput'
import ReachCombobox from './ReachCombobox'
import ReakitInput from './ReakitInput'

export default function TextFields() {
  return (
    <>
      <h2 id="text_fields">TextFields</h2>
      <FlexRowWrapper>
        <ReachCombobox />
        <ReakitInput />
        <MuiInput />
      </FlexRowWrapper>
      <Highlights />
    </>
  )
}
