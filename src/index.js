import 'sanitize.css/sanitize.css';
import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import store from './store';
import Register from './components/Register';
import App from './components/App';
import Main from './Main';

const RouterApp = () => (
  <Router>
    <Main>
      <Route exact path="/" component={Register} />
      <Route path="/app/:step" component={App} />
    </Main>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <RouterApp/>
  </Provider>,
  document.getElementById('root')
);
