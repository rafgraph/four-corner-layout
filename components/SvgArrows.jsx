import React, { PropTypes } from 'react';

const propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  scale: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string,
};

const defaultPropsVerticalArrow = {
  height: '21',
  width: '7',
  scale: 1,
};

const defaultPropsHorizontalArrow = {
  width: '21',
  height: '7',
  scale: 1,
};

const defaultPropsDiagonalArrow = {
  width: '15',
  height: '15',
  scale: 1,
};

function LeftArrow({ width, height, scale, className, title = 'Left Arrow', ...other }) {
  return (
    <svg
      {...other}
      className={`arrow left-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 900 300"
      aria-label={title}
    >
      <title>{title}</title>
      <path d="M900 183.418H232.596V300L0 150 232.596 0v116.582H900v66.836z" />
    </svg>
  );
}

function RightArrow({ width, height, scale, className, title = 'Right Arrow', ...other }) {
  return (
    <svg
      {...other}
      className={`arrow right-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 900 300"
      aria-label={title}
    >
      <title>{title}</title>
      <path d="M0 116.582h667.404V0L900 150 667.404 300V183.418H0v-66.836z" />
    </svg>
  );
}

function TopArrow({ width, height, scale, className, title = 'Top Arrow', ...other }) {
  return (
    <svg
      {...other}
      className={`arrow top-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 300 900"
      aria-label={title}
    >
      <title>{title}</title>
      <path d="M116.582 900V232.596H0L150 0l150 232.596H183.418V900h-66.836z" />
    </svg>
  );
}

function BottomArrow({ width, height, scale, className, title = 'Bottom Arrow', ...other }) {
  return (
    <svg
      {...other}
      className={`arrow bottom-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 300 900"
      aria-label={title}
    >
      <title>{title}</title>
      <path d="M183.418 0v667.404H300L150 900 0 667.404h116.582V0h66.836z" />
    </svg>
  );
}

function TopLeftArrow({ width, height, scale, className, title = 'Top Left Arrow', ...other }) {
  return (
    <svg
      {...other}
      className={`arrow top-left-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 660.026 660.026"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M612.766 660.026L140.84 188.1l-82.436 82.436L0 0l270.536
        58.404L188.1 140.84l471.926 471.926-47.26 47.26z"
      />
    </svg>
  );
}

function TopRightArrow({ width, height, scale, className, title = 'Top Right Arrow', ...other }) {
  return (
    <svg
      {...other}
      className={`arrow top-right-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 660.026 660.026"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M0 612.766L471.926 140.84 389.49 58.404 660.026 0l-58.404
        270.536-82.436-82.436L47.26 660.026 0 612.766z"
      />
    </svg>
  );
}

function BottomLeftArrow(
  { width, height, scale, className, title = 'Bottom Left Arrow', ...other }
) {
  return (
    <svg
      {...other}
      className={`arrow bottom-left-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 660.026 660.026"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M660.026 47.26L188.1 519.186l82.436 82.436L0 660.026 58.404
        389.49l82.436 82.436L612.766 0l47.26 47.26z"
      />
    </svg>
  );
}

function BottomRightArrow(
  { width, height, scale, className, title = 'Bottom Right Arrow', ...other }
) {
  return (
    <svg
      {...other}
      className={`arrow bottom-right-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg" width={width * scale} height={height * scale} viewBox="0 0 660.026 660.026"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M47.26 0l471.926 471.926 82.436-82.436 58.404
        270.536-270.536-58.404 82.436-82.436L0 47.26 47.26 0z"
      />
    </svg>
  );
}


LeftArrow.propTypes = propTypes;
LeftArrow.defaultProps = defaultPropsHorizontalArrow;
RightArrow.propTypes = propTypes;
RightArrow.defaultProps = defaultPropsHorizontalArrow;
TopArrow.propTypes = propTypes;
TopArrow.defaultProps = defaultPropsVerticalArrow;
BottomArrow.propTypes = propTypes;
BottomArrow.defaultProps = defaultPropsVerticalArrow;
TopLeftArrow.propTypes = propTypes;
TopLeftArrow.defaultProps = defaultPropsDiagonalArrow;
TopRightArrow.propTypes = propTypes;
TopRightArrow.defaultProps = defaultPropsDiagonalArrow;
BottomLeftArrow.propTypes = propTypes;
BottomLeftArrow.defaultProps = defaultPropsDiagonalArrow;
BottomRightArrow.propTypes = propTypes;
BottomRightArrow.defaultProps = defaultPropsDiagonalArrow;


export { LeftArrow, RightArrow, TopArrow, BottomArrow, TopLeftArrow,
  TopRightArrow, BottomLeftArrow, BottomRightArrow,
};
