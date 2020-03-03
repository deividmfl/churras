import styled from 'styled-components';
import { Images } from '../../constants';

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img.attrs({
  src: Images.iconTrinca,
  alt: 'icon trinca',
})`
  width: 48px;
  height: 48px;
`;
