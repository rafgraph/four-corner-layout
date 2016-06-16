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

  return (
    <div>
      <h3>Arrow Test</h3>
      {Object.keys(unicodeArrows).map((key) => (
        <div key={key}>
          {unicodeArrows[key]}
        </div>
      ))}
    </div>
  );
}

export default ArrowTest;
