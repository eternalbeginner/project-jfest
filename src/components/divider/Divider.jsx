import { styled } from '../../../stitches.config';
import divider from '../../assets/icons/divider.svg';

const BaseDivider = styled('img', {
  display: 'block',
  width: 'fit-content',
  height: 10,
  objectFit: 'cover',
  objectPosition: 'center',
});

export default function Divider({ ...props }) {
  return <BaseDivider {...props} src={divider} />;
}
