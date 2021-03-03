import React from 'react'
import styled, { css } from 'styled-components'
import { Typography } from '../../foundation'
import { CreditCardIcon } from './CreditCardIcon'
import { MoneyTransferIcon } from './MoneyTransferIcon'
import { PayPalIcon } from './PayPalIcon'

const StyledUnorderedList = styled.ul(({ theme }) => {
  return css`
    list-style: none;
    border: 1px solid ${theme.colors.primary.light};
    border-radius: 10px;
    display: flex;
  `
})

interface StyledListItemProps {
  selected?: boolean
}

const StyledListItem = styled.li<StyledListItemProps>(({ theme, selected }) => {
  return css`
    flex: 1;
    display: flex;
    border-right: 1px solid ${theme.colors.primary.light};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    cursor: pointer;

    background-color: ${selected ? theme.colors.primary.light : 'transparent'};

    &:last-child {
      border-right: 0;
    }
  `
})

interface PaymentMethodSelectorProps {
  selected?: 'MoneyTransfer' | 'CreditCard' | 'PayPal'
  onClick: (method: PaymentMethodSelectorProps['selected']) => void
}

export function PaymentMethodSelector({
  selected,
  onClick,
}: PaymentMethodSelectorProps): JSX.Element {
  return (
    <StyledUnorderedList>
      <StyledListItem
        onClick={() => onClick('MoneyTransfer')}
        selected={selected === 'MoneyTransfer'}
      >
        <MoneyTransferIcon />
        <Typography
          onColor={selected === 'MoneyTransfer' ? 'primary' : 'surface'}
          variant="bodyText1"
        >
          Transferência
        </Typography>
      </StyledListItem>
      <StyledListItem
        onClick={() => onClick('CreditCard')}
        selected={selected === 'CreditCard'}
      >
        <CreditCardIcon />
        <Typography
          onColor={selected === 'CreditCard' ? 'primary' : 'surface'}
          variant="bodyText1"
        >
          Cartão
        </Typography>
      </StyledListItem>
      <StyledListItem
        onClick={() => onClick('PayPal')}
        selected={selected === 'PayPal'}
      >
        <PayPalIcon />
        <Typography
          onColor={selected === 'PayPal' ? 'primary' : 'surface'}
          variant="bodyText1"
        >
          PayPal
        </Typography>
      </StyledListItem>
    </StyledUnorderedList>
  )
}
