import React from 'react'
import { IMaskMixin } from 'react-imask'
import { TextField } from './TextField'

export const MaskedField = IMaskMixin(({ inputRef, ...props }: any) => {
  const Component = TextField as any

  return <Component {...props} innerRef={inputRef} />
})
