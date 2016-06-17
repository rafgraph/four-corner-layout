import React from 'react';

function ArrowTest() {
  const unicodeArrows = {
    left: '\u2190',
    top: '\u2191',
    right: '\u2192',
    bottom: '\u2193',
    topLeft: '\u2196',
    topRight: '\u2197',
    bottomRight: '\u2198',
    bottomLeft: '\u2199',
  };

  const svgArrows = {
    left:
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 900 300">
        <path d="M900 183.418H232.596V300L0 150 232.596 0v116.582H900v66.836z" />
      </svg>,
    right:
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 900 300">
        <path d="M0 116.582h667.404V0L900 150 667.404 300V183.418H0v-66.836z" />
      </svg>,
    top:
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 300 900">
        <path d="M116.582 900V232.596H0L150 0l150 232.596H183.418V900h-66.836z" />
      </svg>,
    bottom:
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 300 900">
        <path d="M183.418 0v667.404H300L150 900 0 667.404h116.582V0h66.836z" />
      </svg>,
    topRight:
      <svg
        xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 660.026 660.026"
        style={{ margin: 'auto', display: 'block' }}
      >
        <path
          d="M0 612.766L471.926 140.84 389.49 58.404 660.026 0l-58.404
          270.536-82.436-82.436L47.26 660.026 0 612.766z"
        />
      </svg>,
    topLeft:
      <svg
        xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 660.026 660.026"
        style={{ margin: 'auto', display: 'block' }}
      >
        <path
          d="M612.766 660.026L140.84 188.1l-82.436 82.436L0 0l270.536
          58.404L188.1 140.84l471.926 471.926-47.26 47.26z"
        />
      </svg>,
    bottomRight:
      <svg
        xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 660.026 660.026"
        style={{ margin: 'auto', display: 'block' }}
      >
        <path
          d="M47.26 0l471.926 471.926 82.436-82.436 58.404
          270.536-270.536-58.404 82.436-82.436L0 47.26 47.26 0z"
        />
      </svg>,
    bottomLeft:
      <svg
        xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 660.026 660.026"
        style={{ margin: 'auto', display: 'block' }}
      >
        <path
          d="M660.026 47.26L188.1 519.186l82.436 82.436L0 660.026 58.404
          389.49l82.436 82.436L612.766 0l47.26 47.26z"
        />
      </svg>,
  };

  return (
    <div>
      <h3>Arrow Test</h3>
      {Object.keys(unicodeArrows).map((key) => (
        <div key={key}>
          {unicodeArrows[key]}
        </div>
      ))}
      {Object.keys(svgArrows).map((key) => (
        <div key={key} style={{ width: '20px', height: '20px', margin: '10px 0' }}>
          {svgArrows[key]}
        </div>
      ))}
    </div>
  );
}

export default ArrowTest;
