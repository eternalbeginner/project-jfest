import { styled } from '../../../stitches.config';

import logo from '../../assets/logo.png';

const Logo = styled('img', {
  display: 'block',
  objectFit: 'cover',
  objectPosition: 'center',
  width: 50,
  '@mobile': { width: 40 },
});

export default function NavbarLogo() {
  return <Logo src={logo} alt="JFest Logo" />;
}
