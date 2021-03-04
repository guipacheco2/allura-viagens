import React from 'react'
import styled, { css } from 'styled-components'
import { Typography, TypographyPropsGeneric } from '../foundation'

const StyledTextField = styled.div`
  flex: 1;
  padding: 16px 0;
`

const StyledInput = styled(Typography)(({ theme }) => {
  return css`
    width: 100%;
    border: 1px solid ${theme.colors.primary.light};
    color: ${theme.colors.surface.contrastText};
    background-color: ${theme.colors.surface.main};
    padding: 12px 16px;
    margin: 4px 0;
    outline: 0;
    border-radius: 10px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
  `
}) as React.ComponentType<TypographyPropsGeneric<'input'>>

const StyledTextArea = styled(Typography)(({ theme }) => {
  return css`
    min-height: 50px;
    width: 100%;
    border: 1px solid ${theme.colors.primary.light};
    color: ${theme.colors.surface.contrastText};
    background-color: ${theme.colors.surface.main};
    padding: 12px 16px;
    margin: 4px 0;
    outline: 0;
    border-radius: 10px;
    resize: none;
  `
}) as React.ComponentType<TypographyPropsGeneric<'textarea'>>

interface TextFieldProps {
  label: string
  name: string
  type?: string
  multiline?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  value: string
  min?: string
  max?: string
  disabled?: boolean
}

export function TextField({
  label,
  type = 'text',
  name,
  multiline,
  onChange,
  value,
  min,
  max,
  disabled,
}: TextFieldProps): JSX.Element {
  const id = `TextField$${name}`

  return (
    <StyledTextField>
      <Typography
        as="label"
        htmlFor={id}
        variant="bodyText1"
        onColor="background"
      >
        {label}
      </Typography>

      {multiline ? (
        <StyledTextArea
          as="textarea"
          name={name}
          onChange={onChange}
          value={value}
          variant="bodyText1"
          id={id}
          onColor="primary"
          rows={3}
        />
      ) : (
        <StyledInput
          as="input"
          type={type}
          min={min}
          max={max}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          variant="bodyText1"
          disabled={disabled}
          onColor="primary"
        />
      )}
    </StyledTextField>
  )
}
