import React, { useContext } from 'react';
import { Container, Row } from '../../assets/grid/src';
import Footer from '../Footer/Footer'
import { Event } from '../../components';
import { Images } from '../../constants';
import { GlobalContext } from '../../context/GlobalState';

// styled
import {
  GlobalStyle,
  Col,
  Header,
  Title,
  Icon,
  NewEvent,
  NewEventTitle,
} from './StyledComponents'; 

const Events = () => {

  const { events, newEvent, users } = useContext(GlobalContext);
  
  const handleNewEvent = () => {
    newEvent({ id: Math.floor(Math.random() * 100000000) });
  }
  
  return (
    <Container full>
      <GlobalStyle />
      <Row>
        <Header col="12">
          <Title>Agenda de Churras</Title>
        </Header>
        <Container>
          <div>
            {events.map(e => {
              const u = users.filter(u => u.eventId === e.id);
              const amount = u.reduce(function (t, c) {
                return t + c.amount;
            }, 0);
        
              return <Event key={e.id} col="6" {...e} amount={amount} guests={u.length} />
            })}
            <NewEvent onClick={handleNewEvent} col="6">
              <div style={
                {
                  position: 'relative',
                  alignSelf: 'center',
                  backgroundImage: `url(${Images.circleBbq})`,
                  backgroundRepeat: 'no-repeat',
                  width: '90px',
                  height: '90px',
                }
              }
              >
                <Icon src={Images.iconBbq} />
              </div>
              <NewEventTitle>Adicionar Churras</NewEventTitle>
            </NewEvent>
          </div>
        </Container>
      </Row>
      <Col col="12" style={{ margin: '5em 2% 2em 2%' }}>
        <Footer />
      </Col>
    </Container>
  );
}

export default Events;
