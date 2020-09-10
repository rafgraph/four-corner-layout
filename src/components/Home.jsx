import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';


function Home() {
  const description =
    `Four presentation pages on a single web page. Each presentation page
    is immersive and dynamically resizes to fit the viewable area.`;

  const linkStyle = {
    normal: {
      borderBottom: '1px dotted rgb(0, 168, 0)',
    },
    hover: {
      borderBottom: '1px solid rgb(0, 168, 0)',
      color: 'black',
    },
    active: 'hover',
    touchActive: {
      borderBottom: '1px dashed rgb(0, 168, 0)',
      color: 'black',
    },
    focusFromTab: {
      outline: '2px solid rgb(0, 152, 0)',
      outlineOffset: '2px',
      color: 'black',
    },
    touchActiveTapOnly: true,
  };

  const childLinkStyle = {
    onParentNormal: linkStyle.normal,
    onParentHover: linkStyle.hover,
    onParentActive: linkStyle.active,
    onParentTouchActive: linkStyle.touchActive,
    onParentFocusFromTab: linkStyle.focusFromTab,
  };

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
            <Interactive as={Link} {...linkStyle} to="/four-corner-scroll">
              Four corner scroll
            </Interactive>
          </li>
          <li style={{ margin: '10px 0', paddingLeft: '18px', textIndent: '-15px' }}>
            <span style={{ paddingRight: '7px' }}>&ndash;</span>
            <Interactive as={Link} {...linkStyle} to="/four-corner-expand">
              Four corner expand
            </Interactive>
          </li>
        </ul>
        <div style={{ color: '#A0A0A0', marginTop: '30px', fontSize: '14px' }}>
          <div style={{ margin: '3px 0' }}>
            <Interactive
              as="a"
              interactiveChild
              focus={{}}
              touchActive={{}}
              touchActiveTapOnly
              href="https://rafaelpedicini.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Concept and code by <span {...childLinkStyle}>Rafael Pedicini</span>
            </Interactive>
          </div>
          <div>
            <Interactive
              as="a"
              interactiveChild
              focus={{}}
              touchActive={{}}
              touchActiveTapOnly
              href="https://github.com/rafgraph/four-corner-layout"
              target="_blank" rel="noreferrer noopener"
            >
              <span {...childLinkStyle}>Code</span> available on GitHub
            </Interactive>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
