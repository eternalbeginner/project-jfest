import { styled } from '../../../stitches.config';

import { Navbar } from '../../components/navbar';

import backdropMobile from '../../assets/backdrop-mobile.png';
import backdrop from '../../assets/backdrop.png';

const Hero = styled('section', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '100%',
  backgroundColor: '$primary',
  '@desktop': { height: '155vh' },
  '@tablet': { height: '145vh' },
  '@mobile': { height: '135vh' },
});

const HeroImage = styled('div', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  backgroundPositionX: 'center',
  backgroundPositionY: 'bottom',
  backgroundRepeat: 'no-repeat',
  '@desktop': { backgroundImage: `url("${backdrop}")` },
  '@tablet': { backgroundImage: `url("${backdrop}")` },
  '@mobile': { backgroundImage: `url("${backdropMobile}")` },
});

export default function HomePage() {
  return (
    <>
      <Hero>
        <HeroImage />
        <Navbar />
      </Hero>
    </>
  );
}
