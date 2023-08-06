import { styled } from '../../../stitches.config';

import NavbarCta from './navbar-cta';
import NavbarLogo from './navbar-logo';
import NavbarMenu from './navbar-menu';

const Container = styled('nav', {
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'max-content',
  width: '100%',
  padding: '1.75rem 5%',
  '& > .left': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '3rem',
    height: 'inherit',
    width: 'fit-content',
  },
  '& > .right': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 'inherit',
    width: 'fit-content',
  },
  defaultVariants: {
    px: 'desktop',
  },
});

export default function Navbar() {
  return (
    <Container>
      <div className="left">
        <NavbarLogo />
        <NavbarMenu />
      </div>
      <div className="right">
        <NavbarCta />
      </div>
    </Container>
  );
}
