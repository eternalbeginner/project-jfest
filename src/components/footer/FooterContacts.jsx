import { css, styled } from '../../../stitches.config';
import { Title } from '../title';

import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

const contacts = [
  { label: 'User (08177289910)', href: '', iconHref: whatsapp },
  { label: 'UserTwo (08177289910)', href: '', iconHref: whatsapp },
  { label: '@User', href: '', iconHref: telegram },
  { label: '@UserTwo', href: '', iconHref: telegram },
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

export default function FooterContacts() {
  return (
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
  );
}
