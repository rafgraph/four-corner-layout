import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';

import App from './components/App';
import Home from './components/Home';

// use custom history to not have query string with hashHistory
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);


render(
  <Router history={appHistory}>{routes}</Router>,
  document.getElementById('root')
)
