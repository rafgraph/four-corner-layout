import React, { PropTypes } from 'react';
import Corner from './Corner';

const propTypes = {
  location: PropTypes.object.isRequired,
};


function FourCornerScroll({ location }) {
  return (
    <div style={{ height: '200%', width: '200%' }}>
      <Corner
        title="Top Left" expandable={false} expanded location={location}
        style={{ backgroundColor: '#D0D0D0' }}
      />
      <Corner
        title="Top Right" expandable={false} expanded location={location}
        style={{ backgroundColor: '#C0C0C0' }}
      />
      <Corner
        title="Bottom Left" expandable={false} expanded location={location}
        style={{ backgroundColor: '#B0B0B0' }}
      />
      <Corner
        title="Bottom Right" expandable={false} expanded location={location}
        style={{ backgroundColor: '#A0A0A0' }}
      />
    </div>
  );
}

FourCornerScroll.propTypes = propTypes;

export default FourCornerScroll;
