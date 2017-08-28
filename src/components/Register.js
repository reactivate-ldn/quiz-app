import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import styled from 'styled-components';

import Title from './Title';
import Input from './Input';
import Button from './Button';

import { createUser } from '../actions';

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
  flex-direction: column;
  justify-content: center;
`;

class Register extends React.Component {
  state = {
    query: ''
  }

  onClickNext = () => {
    this.props.createUser(this.props.sessionId, this.state.query);
    this.props.history.push({ pathname: 'app/0' });
  }

  onType = (evt) => {
    this.setState({
      query: evt.target.value
    });
  }

  render() {
    const { query } = this.state;

    return (
      <Container>
        <Title>Welcome to Reactivate Quiz evening #1</Title>
        <Registration>
          <Input placeholder="Select a username" onChange={this.onType} value={query}/>
          <Button onClick={this.onClickNext}>
            Start Quiz
          </Button>
        </Registration>
      </Container>
    );
  }
}

export default connect((state) => ({
  sessionId: state.session.id
}), (dispatch) => ({
  createUser: (sessionId, name) => dispatch(createUser(sessionId, name))
}))(withRouter(Register));
