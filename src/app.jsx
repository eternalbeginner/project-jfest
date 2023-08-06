import { globalCss } from '../stitches.config';

import HomePage from './pages/home';

import dreadful from './assets/fonts/dreadful.otf';
import jack from './assets/fonts/jack-reacher.ttf';

const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'dreadful',
      src: `url("${dreadful}")`,
    },
    {
      fontFamily: 'jack',
      src: `url("${jack}")`,
    },
  ],
  '*, html': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    overflowX: 'hidden',
  },
  body: {
    fontFamily: '$main',
    letterSpacing: 1.1,
  },
});

export default function App() {
  globalStyles();

  return <HomePage />;
}
