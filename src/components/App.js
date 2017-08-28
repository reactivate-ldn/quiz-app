import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  componentWillMount() {

  }
  
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  lastQuestion: state.questions[state.session.lastQuestion],
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
