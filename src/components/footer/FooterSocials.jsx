import { css, styled } from '../../../stitches.config';
import { Title } from '../title';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import tiktok from '../../assets/icons/tiktok.svg';

const socials = [
  { label: '@jfest', href: '', iconHref: instagram },
  { label: '@jfest.id', href: '', iconHref: facebook },
  { label: '@jfest-by-stikom', href: '', iconHref: tiktok },
];

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

export default function FooterSocials() {
  return (
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
  );
}
