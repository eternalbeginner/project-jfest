import { useWindowSize } from '@uidotdev/usehooks';

import { styled } from '../../../stitches.config';

const List = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  listStyleType: 'none',
  gap: '3.5rem',
});

const ListItem = styled('li', {
  display: 'block',
  height: 'fit-content',
  width: 'fit-content',
  fontFamily: 'dreadful',
  fontSize: '1.5em',
  color: '$white',
  cursor: 'unset',
});

const ListItemAnchor = styled('a', {
  color: '$white',
  textDecoration: 'none',
  textDecorationColor: 'transparent',
  '&:hover': {
    color: '$secondary',
    cursor: 'pointer',
  },
});

const menu = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/contact' },
  { label: 'Kegiatan', href: '/activities' },
].map((item, index) => ({ ...item, id: index + 1 }));

export default function NavbarMenu() {
  const { width } = useWindowSize();

  if (width <= 769) {
    return null;
  }

  return (
    <List>
      <ListItem>|</ListItem>
      {menu.map((item) => (
        <ListItem key={item.id}>
          <ListItemAnchor href={item.href}>{item.label}</ListItemAnchor>
        </ListItem>
      ))}
    </List>
  );
}
