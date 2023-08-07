import { css, styled } from '../../../stitches.config';

import { Text } from '../text';
import { Title } from '../title';

import logo from '../../assets/logo.svg';
import logoText from '../../assets/logo-text.svg';
import top from '../../assets/footer/top.png';
import topMobile from '../../assets/footer/top-mobile.png';

import bottomLeftMisc from '../../assets/footer/bottom-left-misc.png';
import bottomRightMisc from '../../assets/footer/bottom-right-misc.png';

import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import tiktok from '../../assets/icons/tiktok.svg';

const contacts = [
  { label: 'User (08177289910)', href: '', iconHref: whatsapp },
  { label: 'UserTwo (08177289910)', href: '', iconHref: whatsapp },
  { label: '@User', href: '', iconHref: telegram },
  { label: '@UserTwo', href: '', iconHref: telegram },
];

const socials = [
  { label: '@jfest', href: '', iconHref: instagram },
  { label: '@jfest.id', href: '', iconHref: facebook },
  { label: '@jfest-by-stikom', href: '', iconHref: tiktok },
];

const Container = styled('footer', {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '1rem',
  width: '100%',
  height: 'fit-content',
  padding: '0rem 5%',
  paddingTop: '10rem',
  paddingBottom: '7.5rem',
  backgroundColor: '$primary',
  backgroundPosition: 'top',
  backgroundSize: '100% auto',
  backgroundRepeat: 'no-repeat',
  '&::after, &::before': { zIndex: 1 },
  '&::after': {
    content: `url("${bottomRightMisc}")`,
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'block',
  },
  '&::before': {
    content: `url("${bottomLeftMisc}")`,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  '@desktop': { backgroundImage: `url("${top}")` },
  '@laptop': { backgroundImage: `url("${top}")` },
  '@tablet': { backgroundImage: `url("${top}")` },
  '@mobile': { backgroundImage: `url("${topMobile}")`, paddingTop: '8rem' },
});

const SocialLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1rem',
  color: '$white',
  fontFamily: '$main',
  fontSize: '1.3em',
  letterSpacing: 2,
  textDecoration: 'none',
  textDecorationColor: 'transparent',
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '$white',
  },
  '& > img': {
    width: '1.45rem',
  },
});

export default function Footer() {
  return (
    <Container>
      <section
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gridColumn: '1 / 7',
          gap: '2rem',
          zIndex: 2,
          '@tablet': { gridColumn: '1 / -1' },
          '@mobile': { gridColumn: '1 / -1' },
        }).toString()}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 'fit-content',
            width: 'fit-content',
            gap: '1.5rem',
          }).toString()}>
          <img
            className={css({
              width: 45,
              '@mobile': { width: 40 },
            }).toString()}
            src={logo}
            alt="JFest Logo"
          />
          <img
            className={css({
              height: 35,
              '@mobile': { height: 30 },
            }).toString()}
            src={logoText}
            alt="JFest Logo Text"
          />
        </div>
        <Text css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span>
            The festival is organized and supported by STIKOM Bali Institute of Technology and
            Business and is the only festival that promotes Japanese culture on campus and is
            regularly attended by the Consulate General of Japan in Denpasar.
          </span>
          <span>
            These factors make JFEST one of our means of introducing Japanese culture in a way that
            is fun and enjoyed by various groups both inside and outside the campus environment.
          </span>
        </Text>
      </section>
      <section
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gridColumn: '8 / 11',
          paddingTop: '5rem',
          gap: '1.5rem',
          zIndex: 2,
          '@tablet': { gridColumn: '1 / 7', paddingTop: '1.5rem' },
          '@mobile': { gridColumn: '1 / -1', paddingTop: '1.5rem' },
        }).toString()}>
        <Title order={2} css={{ fontSize: '1.25em' }}>
          Contact Us
        </Title>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }).toString()}>
          {contacts.map((contact) => (
            <SocialLink key={contact.id} href={contact.href}>
              <img src={contact.iconHref} alt={contact.label} />
              <span>{contact.label}</span>
            </SocialLink>
          ))}
        </div>
      </section>
      <section
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gridColumn: '11 / -1',
          paddingTop: '5rem',
          gap: '1.5rem',
          zIndex: 2,
          '@tablet': { gridColumn: '7 / -1', paddingTop: '1.5rem' },
          '@mobile': { gridColumn: '1 / -1', paddingTop: '1.5rem' },
        }).toString()}>
        <Title order={2} css={{ fontSize: '1.25em' }}>
          Social Media
        </Title>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }).toString()}>
          {socials.map((social) => (
            <SocialLink key={social.id} href={social.href}>
              <img src={social.iconHref} alt={social.label} />
              <span>{social.label}</span>
            </SocialLink>
          ))}
        </div>
      </section>
    </Container>
  );
}
