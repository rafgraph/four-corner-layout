import React from 'react';
import { Link } from 'react-router';

function FourCornerScroll() {
  return (
    <div>
      <div id="abc" style={{height: '100vh'}}>
        <Link to="#def">Four corner scroll</Link>
      </div>
      <div id="def" style={{height: '100vh'}}>Second section</div>
    </div>
  )
}

export default FourCornerScroll;
