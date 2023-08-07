import { createStitches } from '@stitches/react';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  prefix: 'jfest',
  theme: {
    colors: {
      primary: '#0d3b44',
      secondary: '#dd614b',
      tertiary: '#5988a8',
      dark: '#0b0b0b',
      white: '#ffffff',
    },
    fonts: {
      main: 'dreadful',
      title: 'jack',
    },
    fontSizes: {
      main: '1em',
      'normal-desktop': '1.5em',
      'normal-laptop': '1.40em',
      'normal-tablet': '1.25em',
      'normal-mobile': '1em',
      'title-desktop': '8em',
      'title-laptop': '7.25em',
      'title-tablet': '7em',
      'title-mobile': '5em',
    },
    sizes: {
      'button-desktop-height': '55px',
      'button-desktop-width': '230px',
      'button-laptop-height': '50px',
      'button-laptop-width': '250px',
      'button-tablet-height': '47.5px',
      'button-tablet-width': '215px',
      'button-mobile-height': '40px',
      'button-mobile-width': '185px',
    },
  },
  media: {
    desktop: '(min-width: 1366px)',
    laptop: '(min-width: 1025px) and (max-width: 1365px)',
    tablet: '(min-width: 769px) and (max-width: 1024px)',
    mobile: '(min-width: 319px) and (max-width: 768px)',
  },
});
