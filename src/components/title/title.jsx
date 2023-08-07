import { styled } from '../../../stitches.config';

const BaseTitle = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  fontFamily: '$title',
  fontWeight: 700,
  letterSpacing: 7.5,
  variants: {
    color: {
      dark: { color: '$dark' },
      light: { color: '$white' },
      tertiary: { color: '$tertiary' },
    },
    order: [
      {
        '@desktop': { fontSize: '$title-desktop' },
        '@laptop': { fontSize: '$title-laptop' },
        '@tablet': { fontSize: '$title-tablet' },
        '@mobile': { fontSize: '$title-mobile', letterSpacing: 5 },
      },
    ],
  },
  defaultVariants: { color: 'light', order: 0 },
});

export default function Title({ children, ...props }) {
  return <BaseTitle {...props}>{children}</BaseTitle>;
}
