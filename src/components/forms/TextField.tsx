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
  `
}) as React.ComponentType<TypographyPropsGeneric<'input'>>

const StyledTextArea = styled(Typography)(({ theme }) => {
  return css`
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
  id: string
  label: string
  placeholder: string
  name: string
  type?: string
  multiline?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  value: string
}

export function TextField({
  id,
  label,
  type = 'text',
  placeholder,
  name,
  multiline,
  onChange,
  value,
}: TextFieldProps): JSX.Element {
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
          placeholder={placeholder}
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
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          variant="bodyText1"
          onColor="primary"
        />
      )}
    </StyledTextField>
  )
}
