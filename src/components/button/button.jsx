import { styled } from '../../../stitches.config';

import dark from '../../assets/buttons/dark.png';
import light from '../../assets/buttons/light.png';

const Base = styled('button', {
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
  fontSize: '1.5em',
  letterSpacing: 1.1,
  cursor: 'pointer',
  overflow: 'hidden',
  variants: {
    color: {
      dark: { backgroundImage: `url("${dark}")`, color: '$white' },
      light: { backgroundImage: `url("${light}")`, color: '$dark' },
    },
    size: {
      desktop: {
        height: '$desktop-button-height',
        width: '$desktop-button-width',
        fontSize: '1.5em',
      },
      mobile: {
        height: '$mobile-button-height',
        width: '$mobile-button-width',
        fontSize: '1em',
      },
    },
  },
  defaultVariants: {
    color: 'dark',
    size: 'desktop',
  },
});

const AnchorButton = styled(Base, {
  textDecoration: 'none',
  textDecorationColor: 'transparent',
});

export default function Button({ as = 'button', children, ...props }) {
  const Wrapper = as === 'button' ? Base : AnchorButton;

  return (
    <Wrapper {...props} size={{ '@mobile': 'mobile' }}>
      {children}
    </Wrapper>
  );
}
