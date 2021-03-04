import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
  padding: 8px 0;
`

interface BoxProps {
  children: React.ReactNode
}

export function Box({ children }: BoxProps): JSX.Element {
  return <StyledBox>{children}</StyledBox>
}
