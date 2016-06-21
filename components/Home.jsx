import React from 'react';
import { Link } from 'react-router';


function Home() {
  const description =
    `Four presentation pages on a single web page. Each presentation page
    is immersive and dynamically resizes to fit the viewable area.`;

  return (
    <div
      className="home-page"
      style={{
        maxWidth: '350px',
        margin: 'auto',
        padding: '0 10px 25px 10px',
        position: 'relative',
        top: '50%',
        WebkitTransform: 'translate(0, -50%)',
        MozTransform: 'translate(0, -50%)',
        msTransform: 'translate(0, -50%)',
        transform: 'translate(0, -50%)',
      }}
    >
      <h1 style={{ fontSize: '24px', marginBottom: '15px' }}>Four Corner Layout Concept</h1>
      <p style={{ lineHeight: '1.4' }}>{description}</p>
      <ul style={{ margin: '20px 0' }}>
        <li style={{ margin: '10px 0' }}><Link to="/four-corner-scroll" className="hp-link">
          Four corner scroll
        </Link></li>
        <li style={{ margin: '10px 0' }}><Link to="/four-corner-expand" className="hp-link">
          Four corner expand
        </Link></li>
      </ul>
      <div style={{ color: '#A0A0A0', marginTop: '30px', fontSize: '14px' }}>
        <a
          href="http://www.rafrex.com" style={{ display: 'block', margin: '3px 0' }}
        >
          Concept and code by <span className="hp-link">Rafael Pedicini</span>
        </a>
        <a
          href="http://github.com/rafrex/four-corner-layout" style={{ display: 'block' }}
        >
          <span className="hp-link">Code</span> available on GitHub
        </a>
      </div>
    </div>
  );
}


export default Home;
