import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { createHashHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import FourCornerScroll from './components/FourCornerScroll';
import FourCornerExpand from './components/FourCornerExpand';

// use custom history to not have query string with hashHistory
// useRouterHistory creates a composable higher-order function
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="four-corner-scroll" component={FourCornerScroll} />
    <Route path="four-corner-expand" component={FourCornerExpand} />
  </Route>
);


render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root')
)
