import React from 'react'
import { IMaskMixin } from 'react-imask'
import { TextField } from './TextField'

export const MaskedField = IMaskMixin(({ inputRef, ...props }) => {
  return <TextField {...props} innerRef={inputRef} />
})
