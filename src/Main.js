import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchLastSession } from './actions';

class Main extends React.Component {
  componentWillMount() {
    this.props.fetchLastSession();
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default withRouter(connect(null, (dispatch) => ({
  fetchLastSession: () => dispatch(fetchLastSession())
}))(Main));
