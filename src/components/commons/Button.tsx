import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import {
  breakpointsMedia,
  ColorKeys,
  createBreakpoints,
  ResponsiveBreakpoints,
} from '../../theme'
import { Typography } from '../foundation'

const StyledIcon = styled.div(({ theme }) => {
  return css`
    width: 24px;
    height: 24px;
    margin: 0 8px;
    color: ${theme.colors.surface.contrastText};
  `
})

interface StyledButtonProps {
  size?: ResponsiveBreakpoints<'normal' | 'fullWidth'>
  color: ColorKeys
}

const StyledButton = styled.button<StyledButtonProps>(({ theme, color }) => {
  return css`
    background-color: ${theme.colors[color].light};
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 14px 37px;
    border-radius: 10px;
    display: inline-block;
    ${responsiveWidth}
    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
  `
})

interface ButtonProps extends StyledButtonProps {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  endIcon?: React.ReactNode
  children?: React.ReactNode
}

export function Button({
  size = 'normal',
  type,
  disabled,
  onClick,
  color = 'primary',
  endIcon,
  children,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      size={size}
      color={color}
    >
      <Typography onColor={color} variant="button">
        {children}
      </Typography>

      {endIcon && <StyledIcon>{endIcon}</StyledIcon>}
    </StyledButton>
  )
}

function responsiveWidth({
  size,
}: StyledButtonProps): FlattenSimpleInterpolation {
  if (!size) return []

  if (typeof size === 'string') {
    return css`
      width: ${size === 'fullWidth' ? '100%' : 'auto'};
    `
  }

  const breakpoints = createBreakpoints(
    size,
    (s) => css`
      width: ${s === 'fullWidth' ? '100%' : 'auto'};
    `,
  )

  return breakpointsMedia(breakpoints)
}
