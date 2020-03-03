import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Row } from '../../assets/grid/src';
import Footer from '../Footer/Footer';

// styled
import {
  Container,
  GlobalStyle,
  Col,
  Title,
  LoginForm,
  LoginInput,
  LoginInputTitle,
  LoginButton,
} from './StyledComponents'; 

const Home = () => {

  const [redirect, setRedirect] = useState(false);

  if(redirect) {
    return <Redirect to="/events" />
  }

  return (
    <Container>
      <GlobalStyle />
      <Row>
        <Col col="12" style={{ marginTop: '0', padding: '2em 0' }}>
          <Title>Agenda de Churras</Title>
        </Col>
        <Col col="12">
          <LoginForm onSubmit={() => setRedirect(true)}>
            <div style={{ paddingBottom: '1em' }}>
              <LoginInputTitle>Login</LoginInputTitle>
              <LoginInput type="email" placeholder="e-mail" required />
            </div>
            <div>
              <LoginInputTitle>Senha</LoginInputTitle>
              <LoginInput type="password" placeholder="senha" required />
            </div>
            <Col col="12">
              <LoginButton type="submit">Entrar</LoginButton>
            </Col>
          </LoginForm>
        </Col>
      </Row>
      <Col col="12" style={{ marginBottom: '2em' }}>
        <Footer />
      </Col>
    </Container>
  );
}

export default Home;
