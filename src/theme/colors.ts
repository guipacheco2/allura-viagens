// https://material.io/design/color/the-color-system.html

type Color = {
  light?: string
  main: string
  dark?: string
  contrastText: string
}

export type ColorKeys = 'primary' | 'secondary' | 'background' | 'surface'

export type Colors = Record<ColorKeys, Color>

export const light: Colors = {
  // A primary color is the color displayed most frequently across your app's screens and components.
  primary: {
    light: '#35B6FF',
    main: '#0094E8',
    contrastText: '#FFFFFF',
  },
  // A secondary color provides more ways to accent and distinguish your product.
  // Secondary colors are best for:
  //    Floating action buttons
  //    Selection controls, like sliders and switches
  //    Highlighting selected text
  //    Progress bars
  //    Links and headlines
  secondary: {
    main: '#F98B00',
    contrastText: '#FFFFFF',
  },
  // The background color appears behind scrollable content.
  background: {
    main: '#35B6FF ',
    contrastText: '#000000',
  },
  // Surface colors affect surfaces of components, such as cards, sheets, and menus.
  surface: {
    main: '#FFFFFF',
    contrastText: '#000000',
  },
}
