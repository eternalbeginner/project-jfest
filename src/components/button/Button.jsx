import { styled } from '../../../stitches.config';

import dark from '../../assets/buttons/dark.svg';
import light from '../../assets/buttons/light.svg';

const BaseButton = styled('button', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  minWidth: 250,
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  fontFamily: '$main',
  letterSpacing: 2,
  cursor: 'pointer',
  overflow: 'hidden',
  textDecoration: 'none',
  textDecorationColor: 'transparent',
  '&:hover': {
    color: '$secondary',
  },
  '& > span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    height: 'inherit',
    width: '80%',
    color: '$white',
    backgroundColor: '$dark',
    transition: 'all .2s ease-in',
    transitionProperty: 'color',
    zIndex: 1,
  },
  '& > span:hover': { color: '$secondary' },
  '@desktop': { height: '$button-desktop-height', fontSize: '$normal-desktop' },
  '@laptop': { height: '$button-laptop-height', fontSize: '$normal-laptop' },
  '@tablet': { height: '$button-tablet-height', fontSize: '$normal-tablet' },
  '@mobile': { height: '$button-mobile-height', fontSize: '$normal-mobile' },
  variants: {
    color: {
      dark: { color: '$white' },
      light: { color: '$dark', '& > span': { color: '$dark', backgroundColor: '$white' } },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },
  defaultVariants: { color: 'dark' },
});

const LeftBorder = styled('img', {
  position: 'absolute',
  left: 0,
  height: '110%',
});

const RightBorder = styled('img', {
  position: 'absolute',
  right: 0,
  height: '110%',
});

export default function Button({ color = 'dark', children, ...props }) {
  const selectedBorder = color.toLowerCase() === 'dark' ? dark : light;
  return (
    <BaseButton color={color} {...props} size={{ '@mobile': 'mobile' }}>
      <LeftBorder src={selectedBorder} />
      <span>{children}</span>
      <RightBorder src={selectedBorder} />
    </BaseButton>
  );
}
