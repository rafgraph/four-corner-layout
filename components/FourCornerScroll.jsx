import React from 'react';
import { Link } from 'react-router';

function FourCornerScroll(props) {

  if (props.location.hash) {
    // push onto callback queue so it runs after the DOM is updated
    // this is required when navigating from a different page so that
    // the element is redered on the page before trying to getElementById
    setTimeout(() => {
      let id = props.location.hash.replace("#", "");
      let element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }

  return (
    <div style={{height: '200vh', width: '200vw'}}>
      <div id="tl" style={{height: '100vh', width: '100vw', float: 'left'}}>
        <div>Top left</div>
        <Link to={'/' + props.route.path + '#br'}>link to bottom right</Link>
      </div>
      <div id="tr" style={{height: '100vh', width: '100vw', float: 'right'}}>Top right</div>
      <div id="bl" style={{height: '100vh', width: '100vw', float: 'left'}}>Bottom left</div>
      <div id="br" style={{height: '100vh', width: '100vw', float: 'right'}}>Bottom right</div>
    </div>
  )
}

export default FourCornerScroll;
