import React from 'react';
import { Link } from 'react-router';

function FourCornerScroll(props) {

  return (
    <div style={{height: '200vh', width: '200vw'}}>
      <div id="tl" style={{height: '100vh', width: '100vw', float: 'left'}}>
        <div>Top left</div>
        <Link to={`/${props.route.path}#br`}>link to bottom right</Link>
      </div>
      <div id="tr" style={{height: '100vh', width: '100vw', float: 'right'}}>Top right</div>
      <div id="bl" style={{height: '100vh', width: '100vw', float: 'left'}}>Bottom left</div>
      <div id="br" style={{height: '100vh', width: '100vw', float: 'right'}}>Bottom right</div>
    </div>
  )
}

export default FourCornerScroll;
