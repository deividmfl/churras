import styled, { createGlobalStyle  } from 'styled-components';
import { Col as SCol } from '../../assets/grid/src';
import { Images, Colors } from '../../constants'

export const Col = styled(SCol)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  @media only screen and (min-width: 45em) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const Header = styled(Col)`
  background-image: url(${Images.headerBackground});
  width: 100%;
  margin: 0 0 -3em 0;
  padding: 4em 0;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 32px;
  text-align: center;
`;

export const Icon = styled.img`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 40px;
  height: 40px;
`;

export const NewEvent = styled(Col)`
  padding: 10px;
  margin: 1rem 0;
  height: 192px;
  max-height: 192px;
  background-color: #F1F1F1;
  border-radius: 2px;
  @media only screen and (min-width: 45em) {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 21px;
    margin: 0.5rem 2%;  
  }
  &:hover {
    cursor: pointer;
  }
`;

export const NewEventTitle = styled.div`
  font-weight: 700;
  font-size: 21px;
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.secondaryColor};
  }
`
