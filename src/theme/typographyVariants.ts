// https://material.io/design/typography/the-type-system.html#type-scale

import { CSSProperties } from 'styled-components'

type TypographyVariant = {
  fontFamily: string
  fontSize: string
  fontWeight: number
  letterSpacing?: number
  textTransform?: CSSProperties['textTransform']
}

export type TypographyVariantKeys =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'subtitle1'
  | 'subtitle2'
  | 'bodyText1'
  | 'bodyText2'
  | 'button'
  | 'caption'
  | 'overline'

export type TypographyVariants = Record<
  TypographyVariantKeys,
  TypographyVariant
>

export const typographyVariants: TypographyVariants = {
  headline1: {
    fontFamily: 'Pattaya, sans-serif',
    fontSize: '96px',
    fontWeight: 300,
    letterSpacing: -1.5,
  },
  headline2: {
    fontFamily: 'Pattaya, sans-serif',
    fontSize: '60px',
    fontWeight: 300,
    letterSpacing: -0.5,
  },
  headline3: {
    fontFamily: 'Pattaya, sans-serif',
    fontSize: '48px',
    fontWeight: 400,
  },
  headline4: {
    fontFamily: 'Pattaya, sans-serif',
    fontSize: '34px',
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  headline5: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '24px',
    fontWeight: 400,
  },
  headline6: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '20px',
    fontWeight: 500,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  bodyText1: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 0.5,
  },
  bodyText2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  button: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '10px',
    fontWeight: 400,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
}
