import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as SLink } from 'react-router-dom';
import { Col as SCol } from '../assets/grid/src'; 
import { Images } from '../constants';

const Link = styled(SLink)`
  text-decoration: none;
  color: #000;
`;

const Icon = styled.img`
  width: 18px;
  padding-right: 10px;
`;

const Col = styled(SCol)`
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Container = styled(Col)`
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin: 1rem 0;
  height: 192px;
  max-height: 192px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 16px;
  @media only screen and (min-width: 45em) {
    width: 40%;
    padding: 21px;
    margin: 0.5rem 2%;  
  }
`;

const Date = styled.div`
  font-weight: 800;
  font-size: 28px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 21px;  
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 21px;
`;

const propTypes = {
  col: PropTypes.string,
  id: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  guests: PropTypes.number,
  amount: PropTypes.number,
};

const defaultProps = {
  date: '00/00/00',
  title: 'Titulo do Evento',
  guests: 0,
  amount: 0,
};

const Event = (props) => {
  const {
    col,
    id,
    date,
    title,
    guests,
    amount,
  } = props;
  return (
    <Link to={`/event/${id}`}>
      <Container col={col}>
        <div>
          <Date>{date}</Date>
          <Title>{title}</Title>
        </div>
        <Infos>
          <Info>
            <Icon src={Images.iconPeople} />
            <Text>{guests}</Text>
          </Info>
          <Info>
            <Icon src={Images.iconMoney} />
            <Text>{`R$ ${amount}`}</Text>
          </Info>
        </Infos>
      </Container>
    </Link>
  );
}

Event.propTypes = propTypes;
Event.defaultProps = defaultProps;

export default Event;
