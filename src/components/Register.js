import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Input from './Input';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Registration = styled.div`
  width: 20%;
  margin: 0 auto;
  flex: 1;
  display: flex;
`;

export default class Register extends React.Component {
  render() {
    return (
      <Container>
        <Title>Welcome to Reactivate Quiz evening #1</Title>
        <Registration>
          <Input/>
        </Registration>
      </Container>
    );
  }
}
