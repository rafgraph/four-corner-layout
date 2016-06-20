import React from 'react';
import { Link } from 'react-router';
import ArrowTest from './ArrowTest';
import Corner from './Corner';


function Home() {
  const description =
    `Four presentation pages on a single web page, each presentation page
    is immersive and dynamically resizes to the size of the
    window.`;

  return (
    <div>
      <h1>Four Corner Layout Concept</h1>
      <div>{description}</div>
      <ul>
        <li><Link to="/four-corner-scroll">Four corner scroll</Link></li>
        <li><Link to="/four-corner-expand">Four corner expand</Link></li>
      </ul>
      <h2>TESTs</h2>
      <Link to="/four-corner-scroll#tr">link four corner scroll top right</Link>
      <ArrowTest />
      <h2>corner:</h2>
      <Corner
        title="Top Left" location={{ pathname: '/' }}
        expandable expanded
        allCB={() => console.log('click all')}
        expandCB={() => console.log('click title')}
      />
    </div>
  );
}


export default Home;
