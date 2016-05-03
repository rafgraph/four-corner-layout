import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { createHashHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import FourCornerScroll from './components/FourCornerScroll';
import FourCornerExpand from './components/FourCornerExpand';

///////////////////////////////////////////////////////////////////////////////
// redirect for github pages, b/c gh-pages are always availble at /my-repo-name
// https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/
// SET THIS: e.g. my-repo-name
const githubRepoName = 'four-corner-layout';
// the custom domain where the site is located
// SET THIS: e.g. http://subdomain.example.tld, or http://www.example.tld
const domain = `http://${githubRepoName}.${location.host.replace('www.', '')}`;
function redirectToDomain() {
  location.replace(domain)
}
///////////////////////////////////////////////////////////////////////////////


const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />

    <Route path='four-corner-scroll' component={FourCornerScroll} />
    <Route path='four-corner-expand' component={FourCornerExpand} />

    // redirect for github pages
    <Route path={githubRepoName} onEnter={redirectToDomain} />
  </Route>
);


render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root')
)
