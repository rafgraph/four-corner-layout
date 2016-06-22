import React from 'react';
import { Link } from 'react-router';


function Home() {
  const description =
    `Four presentation pages on a single web page. Each presentation page
    is immersive and dynamically resizes to fit the viewable area.`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        minWidth: '100%',
        backgroundColor: '#F0F0F0',
      }}
    >
      <div
        className="home-page"
        style={{
          maxWidth: '350px',
          margin: '4vh 10px 10vh 10px',
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
          <div style={{ margin: '3px 0' }}><a href="http://www.rafrex.com">
            Concept and code by <span className="hp-link">Rafael Pedicini</span>
          </a></div>
          <div><a href="http://github.com/rafrex/four-corner-layout">
            <span className="hp-link">Code</span> available on GitHub
          </a></div>
        </div>
      </div>
    </div>
  );
}


export default Home;
