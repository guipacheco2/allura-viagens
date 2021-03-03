import React from 'react'
import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../theme'

const StyledSurface = styled.div(({ theme }) => {
  return css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.surface.main};
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);

    ${breakpointsMedia({
      xs: css`
        padding: 12px 12px;
      `,
      sm: css`
        padding: 12px 24px;
      `,
      md: css`
        padding: 12px 48px;
      `,
      lg: css`
        padding: 12px 96px;
      `,
      xl: css`
        padding: 12px 192px;
      `,
    })}
  `
})

interface SurfaceProps {
  children?: React.ReactNode
}

export function Surface({ children }: SurfaceProps): JSX.Element {
  return <StyledSurface>{children}</StyledSurface>
}
