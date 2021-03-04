import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  ColorKeys,
  createBreakpoints,
  propsToStyle,
  ResponsiveBreakpoints,
  TypographyVariantKeys,
} from '../../theme'

export interface StyledTypographyProps {
  htmlFor?: string
  variant:
    | TypographyVariantKeys
    | { xs: TypographyVariantKeys; md: TypographyVariantKeys }
  color?: ColorKeys
  onColor: ColorKeys
  textAlign?: ResponsiveBreakpoints<CSSProperties['textAlign']>
}

const StyledTypography = styled.span<StyledTypographyProps>(
  ({ variant, theme, color, onColor, textAlign }) => {
    return css`
      ${() => {
        if (typeof variant === 'string') {
          return theme.typographyVariants[variant]
        }

        return breakpointsMedia(
          createBreakpoints(variant, (v) => theme.typographyVariants[v]),
        )
      }}
      color: ${color
        ? theme.colors[color].main
        : theme.colors[onColor].contrastText};
      ${propsToStyle({ textAlign })}
    `
  },
)

interface TypographyProps<C extends React.ElementType = React.ElementType>
  extends StyledTypographyProps {
  children?: React.ReactNode
  as?: C
}

export type TypographyPropsGeneric<
  C extends React.ElementType
> = TypographyProps<C> & Omit<React.ComponentProps<C>, keyof TypographyProps>

export function Typography<C extends React.ElementType = 'span'>({
  as,
  variant,
  color,
  onColor,
  textAlign,
  children,
  htmlFor,
}: TypographyPropsGeneric<C>): JSX.Element {
  return (
    <StyledTypography
      as={as as never}
      variant={variant}
      htmlFor={htmlFor}
      onColor={onColor}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </StyledTypography>
  )
}
