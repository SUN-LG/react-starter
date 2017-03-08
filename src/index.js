import React from 'react';
import { Router, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import createRoutes from './routes'
import createStore from './store/createStore'

const store = createStore()
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={createRoutes(store)}></Router>
  </Provider>,
  document.getElementById('root')
);
