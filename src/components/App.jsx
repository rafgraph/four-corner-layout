import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div
      style={{
        fontFamily: 'helvetica neue, helvetica, sans-serif',
        fontWeight: '300',
        fontSize: '16px',
        letterSpacing: '0.025em',
        height: '100%',
        WebkitTextSizeAdjust: 'none',
        MozTextSizeAdjust: 'none',
        msTextSizeAdjust: 'none',
        textSizeAdjust: 'none',
      }}
    >
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
