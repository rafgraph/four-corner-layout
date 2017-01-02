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
        style={{
          maxWidth: '350px',
          margin: '4vh 10px 10vh 10px',
        }}
      >
        <h1 style={{ fontSize: '24px', marginBottom: '15px' }}>Four Corner Layout Concept</h1>
        <p style={{ lineHeight: '1.4' }}>{description}</p>
        <ul style={{ margin: '20px 0', listStyle: 'none' }}>
          <li style={{ margin: '10px 0', paddingLeft: '18px', textIndent: '-15px' }}>
            <span style={{ paddingRight: '7px' }}>&ndash;</span>
            <Link to="/four-corner-scroll">
              Four corner scroll
            </Link>
          </li>
          <li style={{ margin: '10px 0', paddingLeft: '18px', textIndent: '-15px' }}>
            <span style={{ paddingRight: '7px' }}>&ndash;</span>
            <Link to="/four-corner-expand">
              Four corner expand
            </Link>
          </li>
        </ul>
        <div style={{ color: '#A0A0A0', marginTop: '30px', fontSize: '14px' }}>
          <div style={{ margin: '3px 0' }}>
            <a href="http://www.rafaelpedicini.com" target="_blank" rel="noreferrer noopener">
              Concept and code by <span>Rafael Pedicini</span>
            </a>
          </div>
          <div>
            <a href="http://github.com/rafrex/four-corner-layout" target="_blank" rel="noreferrer noopener">
              <span>Code</span> available on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
