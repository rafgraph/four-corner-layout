import React from 'react';
import { Link } from 'react-router';


function Home() {

  const description = "Four presentation pages on a single web page, each presentation page is immersive and dynamically resizes to the size of the window — inspired by print media: a newspaper’s fold combined with a magazine’s left and right pages."

  return (
    <div>
      <h1>Four Corner Layout Concept</h1>
      <div>{description}</div>
      <ul>
        <li><Link to="/four-corner-scroll">Four corner scroll</Link></li>
        <li><Link to="/four-corner-expand">Four corner expand</Link></li>
      </ul>

    </div>
  )
}


export default Home;
