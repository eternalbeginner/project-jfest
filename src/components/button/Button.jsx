import { styled } from '../../../stitches.config';

import dark from '../../assets/buttons/dark.png';
import light from '../../assets/buttons/light.png';

const BaseButton = styled('button', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontFamily: '$main',
  letterSpacing: 2,
  cursor: 'pointer',
  overflow: 'hidden',
  textDecoration: 'none',
  textDecorationColor: 'transparent',
  '&:hover': {
    color: '$secondary',
  },
  '@desktop': {
    height: '$button-desktop-height',
    width: '$button-desktop-width',
    fontSize: '$normal-desktop',
  },
  '@laptop': {
    height: '$button-laptop-height',
    width: '$button-laptop-width',
    fontSize: '$normal-laptop',
  },
  '@tablet': {
    height: '$button-tablet-height',
    width: '$button-tablet-width',
    fontSize: '$normal-tablet',
  },
  '@mobile': {
    height: '$button-mobile-height',
    width: '$button-mobile-width',
    fontSize: '$normal-mobile',
  },
  variants: {
    color: {
      dark: { backgroundImage: `url("${dark}")`, color: '$white' },
      light: { backgroundImage: `url("${light}")`, color: '$dark' },
    },
  },
  defaultVariants: { color: 'dark' },
});

export default function Button({ children, ...props }) {
  return (
    <BaseButton {...props} size={{ '@mobile': 'mobile' }}>
      {children}
    </BaseButton>
  );
}
