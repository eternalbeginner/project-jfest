import { useWindowSize } from '@uidotdev/usehooks';
import { styled } from '../../../stitches.config';

import { Navbar } from '../../components/navbar';

import backdropMobile from '../../assets/backdrop-mobile.png';
import backdrop from '../../assets/backdrop.png';

const Hero = styled('section', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: 'max-content',
  minHeight: 1024,
  backgroundColor: '$primary',
});

const HeroImage = styled('img', {
  display: 'block',
  alignSelf: 'flex-end',
  height: 'auto',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
});

export default function HomePage() {
  const { width } = useWindowSize();

  return (
    <>
      <Hero>
        <Navbar />
        <HeroImage src={width <= 769 ? backdropMobile : backdrop} width="100%" />
      </Hero>
    </>
  );
}
