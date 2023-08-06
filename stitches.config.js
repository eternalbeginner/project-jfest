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
  },
  media: {
    desktop: '(min-width: 769px)',
    mobile: '(max-width: 768px)',
  },
});
