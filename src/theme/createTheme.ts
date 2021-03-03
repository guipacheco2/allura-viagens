import { DefaultTheme } from 'styled-components'
import { breakpoints, Breakpoints } from './breakpoints'
import { Colors, light } from './colors'
import { typographyVariants, TypographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints
    colors: Colors
    typographyVariants: TypographyVariants
  }
}

const colors = { light }

export function createTheme(): DefaultTheme {
  return {
    breakpoints,
    colors: colors.light,
    typographyVariants,
  }
}
