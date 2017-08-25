import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Input from './Input';

const Registration = styled.div``;

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <Title>Welcome to Reactivate Quiz evening #1</Title>
        <Registration>
          <Input/>
        </Registration>
      </div>
    );
  }
}
