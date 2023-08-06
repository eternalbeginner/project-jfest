import { styled } from '../../../stitches.config';

import dark from '../../assets/buttons/dark.png';
import light from '../../assets/buttons/light.png';

const Base = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  height: 'fit-content',
  minWidth: 250,
  minHeight: 55,
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontFamily: '$main',
  fontSize: '1.5em',
  letterSpacing: 1.1,
  cursor: 'pointer',
  overflow: 'hidden',
  variants: {
    color: {
      dark: { backgroundImage: `url("${dark}")`, color: '$white' },
      light: { backgroundImage: `url("${light}")`, color: '$dark' },
    },
  },
  defaultVariants: {
    color: 'dark',
  },
});

const AnchorButton = styled(Base, {
  textDecoration: 'none',
  textDecorationColor: 'transparent',
});

export default function Button({ as = 'button', children, ...props }) {
  if (as === 'button') {
    return <Base {...props}>{children}</Base>;
  }

  return <AnchorButton {...props}>{children}</AnchorButton>;
}
