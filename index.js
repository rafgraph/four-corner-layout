import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import Home from './components/Home';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);

render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
)
