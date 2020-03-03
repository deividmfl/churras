/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Images } from '../constants';

const List = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 21px;
  font-weight: 500;
  padding: 10px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Checked = styled.div`
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

const Icon = styled.img`
  width: 25px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default ({
  id,
  name,
  amount,
  checked,
  drink,
  onClick,
}) => (
  <div>
    <List>
      <Container>
        <Icon
          src={checked ? Images.circleBbq : Images.circleBorder }
          onClick={() => onClick.handleChecked({ id: id, checked: !checked })}
        />
        <div>{name}</div>
      </Container>
      <Checked checked={checked}>{`R$ ${amount}`}</Checked>
      <Container>
        <div>{drink ? 'Bebida(s)' : 'Bebida(n)'}</div>
        <div
          onClick={() => onClick.handleDelete(id)}
          style={{ paddingLeft: '10px', color: 'red', cursor: 'pointer' }}
        >x</div>
      </Container>
    </List>
    <hr style={{ color: 'rgba(229, 194, 49, 0.3)' }} />
  </div>
);
