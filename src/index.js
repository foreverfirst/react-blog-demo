import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Provider } from 'react-redux'

import App from './App';

import store from './store'

import { mainRouter } from './router';
import './index.css';

render(
  <Provider store={store}>
    <Router>
    <Switch>
      <Route path='/admin' component={App} />
      {
        mainRouter.map(route => {
          return <Route key={route.pathname} path={route.pathname} component={route.component} />
        })
      }
      <Redirect to='/admin' from='/' exact />
      <Redirect to='/404' />
    </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root')
)