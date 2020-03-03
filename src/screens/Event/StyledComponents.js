import styled, { createGlobalStyle  } from 'styled-components';
import { Col as SCol } from '../../assets/grid/src';
import { Images, Colors } from '../../constants'

export const Col = styled(SCol)`

`;

export const Icon = styled.img`
  width: 18px;
  padding-right: 10px;
`;

export const Input = styled.input`
  width: 230px;
  height: 30px;
  font-size: 28px;
  border: none;
  color: #000;
  font-weight: 800;
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

export const Container = styled(Col)`
  padding: 7px;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 16px;
  @media only screen and (min-width: 45em) {
    padding: 24px;
  }
`;

export const Event = styled(Col)`
  display: flex;
  justify-content: space-between;
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  max-height: max-content;
`;

export const EventDate = styled.div`
  font-weight: 800;
  font-size: 28px;
  max-width: 10ch;
  overflow: hidden;
  @media only screen and (min-width: 45em) {
    max-width: 30ch;
  }
`;

export const EventTitle = styled.div`
  font-weight: 500;
  font-size: 28px;
  max-width: 10ch;
  overflow: hidden;
  @media only screen and (min-width: 45em) {
    max-width: 30ch;
  }
`;

export const EventText = styled.div`
  font-weight: 500;
  font-size: 21px;
`;

export const NewUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2em;
  @media only screen and (min-width: 45em) {
    flex-direction: row;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.secondaryColor};
  }
`
