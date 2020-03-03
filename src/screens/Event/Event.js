import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Container, Row } from '../../assets/grid/src';
import Footer from '../Footer/Footer'
import { Images } from '../../constants';
import { List } from '../../components';

// styled
import {
  GlobalStyle,
  Col,
  Container as StyledContainer,
  Icon,
  Input,
  Header,
  Title,
  Event as EventStyled,
  EventInfo,
  EventDate,
  EventTitle,
  EventText,
  NewUser,
} from './StyledComponents'; 

const Event = (props) => {

  const {
    events,
    updateEvent,
    newUser,
    updateUser,
    deleteUser,
    users,
  } = useContext(GlobalContext);
  const event = events.find(e => e.id === Number(props.match.params.id));
  const guests = users.filter(g => g.eventId === event.id);

  // amount
  const amount = guests && guests.reduce(function (t, c) {
      return t + c.amount;
  }, 0);

  // state
  const [edit, setEdit] = useState({
    title: false,
    date: false,
  })
  const [input, setInput] = useState({
    title: event && event.title,
    date: event && event.date,
  })
  const [user, setUser] = useState({
    name: '',
    amount: 0,
    drink: false,
  })

  const handleUpdateEvent = ({ event, isDate }) => {
    event.preventDefault();
    updateEvent(
      {
      id: Number(props.match.params.id),
      title: input.title,
      date: isDate ? event.target.value : input.date,
    });
    setEdit({ ...edit, title: false, date: false })
  }

  const handleNewUser = (event) => {
    event.preventDefault();
    newUser({
      id: Math.floor(Math.random() * 100000000),
      name: user.name,
      amount: user.drink ? Number(user.amount)+10 : Number(user.amount),
      drink: user.drink,
      eventId: Number(props.match.params.id),
    })
  }

  const handleChecked = (user) => updateUser({ id: user.id, checked: user.checked })

  const handleDelete = (user) => deleteUser(user);

  return (
    <Container full>
      <GlobalStyle />
      <Row>
        <Header col="12">
          <Title>Agenda de Churras</Title>
        </Header>
        <Container>
          <StyledContainer col="12">
            <EventStyled col="12">
              <EventInfo>
                {!edit.date && (
                  <EventDate
                    onClick={() => {
                      setEdit({ ...edit, date: true, title: false })
                      setInput(
                        { ...input, title: event && event.title }
                      )
                  }}
                  >{event && event.date ? event.date : 'Editar data'}</EventDate>
                )}
                {edit.date && (
                  <form onSubmit={handleUpdateEvent}>
                    <Input
                      type='date'
                      onChange={e => (
                        setInput({ ...input, date: e.target.value }),
                        handleUpdateEvent({ event: e, isDate: true }))}
                      placeholder='Editar data'
                    />
                  </form>
                )}
                {!edit.title && (
                  <EventTitle
                    onClick={() => {
                      setEdit({ ...edit, title: true, date: false }),
                      setInput(
                        { ...input, date: event && event.date }
                      )
                  }}
                  >{event && event.title ? event.title : 'Editar titulo'}</EventTitle>
                )}
                {edit.title && (
                  <form onSubmit={e => handleUpdateEvent({ event: e })}>
                    <Input
                      type='text'
                      onInput={e => setInput({ ...input, title: e.target.value })}
                      placeholder='Editar titulo'
                    />
                  </form>
                )}                
              </EventInfo>
              <EventInfo>
                <div style={{ display: 'flex' }}>
                  <Icon src={Images.iconPeople} />
                  <EventText>{guests.length}</EventText>
                </div>
                <div style={{ display: 'flex' }}>
                  <Icon src={Images.iconMoney} />
                  <EventText>{`R$ ${amount}`}</EventText>
                </div>
              </EventInfo>
            </EventStyled>
            <Col col="12" style={{ marginTop: '3em' }}>
              <form onSubmit={handleNewUser}>
                <NewUser>
                  <Input
                    type='text'
                    onInput={e => setUser({ ...user, name: e.target.value })}
                    placeholder="Nome"
                    required
                  />
                  <Input
                    style={{ width: '135px' }}
                    type='number'
                    onInput={e => setUser({ ...user, amount: e.target.value })}
                    placeholder="Dinheiro"
                  />
                  <div
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '28px',
                        fontWeight: '800',
                        paddingRight: '5px',
                        color: '#767676',
                      }}
                      htmlFor='drink'
                    >Bebida</label>         
                    <Input
                      style={{ width: 'max-content'}}
                      type='checkbox'
                      onInput={e => (setUser({ ...user, drink: !user.drink }))}
                      id="drink"
                      value={user.drink}
                      placeholder="Bebida"
                    />
                  </div>
                </NewUser>
                <input style={{ visibility: 'hidden' }} type="submit" />
              </form>
              {guests && guests.map(user =>(
                <List key={user.id} onClick={({ handleChecked, handleDelete })} {...user} />
              ))}
            </Col>
          </StyledContainer>
        </Container>
      </Row>
      <Col col="12" style={{ margin: '5em 2% 2em 2%' }}>
        <Footer />
      </Col>
    </Container>
  );
}

export default Event;
