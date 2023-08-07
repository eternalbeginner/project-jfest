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
        '@laptop': { fontSize: '$title-laptop', letterSpacing: 6 },
        '@tablet': { fontSize: '$title-tablet', letterSpacing: 5.5 },
        '@mobile': { fontSize: '$title-mobile', letterSpacing: 5 },
      },
      {
        '@laptop': { letterSpacing: 5 },
        '@tablet': { letterSpacing: 4.5 },
        '@mobile': { letterSpacing: 4 },
      },
      {
        '@laptop': { letterSpacing: 4 },
        '@tablet': { letterSpacing: 3.5 },
        '@mobile': { letterSpacing: 3 },
      },
      {
        '@laptop': { letterSpacing: 3 },
        '@tablet': { letterSpacing: 2.5 },
        '@mobile': { letterSpacing: 2 },
      },
    ],
  },
  defaultVariants: { color: 'light', order: 0 },
});

export default function Title({ children, ...props }) {
  return <BaseTitle {...props}>{children}</BaseTitle>;
}
