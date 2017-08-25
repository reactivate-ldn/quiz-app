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

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/register" component={Register} />
      <Route path="/app/:step" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
