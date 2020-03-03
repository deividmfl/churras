import styled, { createGlobalStyle  } from 'styled-components';
import { Container as SContainer, Col as SCol } from '../../assets/grid/src';
import { Images, Colors } from '../../constants'

export const Container = styled(SContainer)`
  margin-top: 2em;
`;

export const Col = styled(SCol)`
  display: flex;
  justify-content: center;
  margin-top: 5em;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 32px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginInput = styled.input`
  width: 282px;
  padding: 15px;
  font-size: 18px;
  font-style: italic;
  border: 0;
  border-radius: 2px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
`;

export const LoginInputTitle = styled.div`
  font-weight: 700;
  font-size: 21px;
  padding: 16px 0;
`;

export const LoginButton = styled.button`
  width: 282px;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #000;
  border: 0;
  border-radius: 18px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.primaryColor};
    background-image: url(${Images.loginBackground});
  }
`
