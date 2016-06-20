import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  LeftArrow, RightArrow, TopArrow, BottomArrow,
  TopLeftArrow, TopRightArrow, BottomLeftArrow, BottomRightArrow,
} from './SvgArrows';

const propTypes = {
  title: PropTypes.string.isRequired, // e.g. "Top Left"
  expandable: PropTypes.bool.isRequired,
  expanded: PropTypes.bool.isRequired,
  allCB: PropTypes.func,
  expandCB: PropTypes.func,
  location: PropTypes.object.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  allCB: () => {},
  expandCB: () => {},
  style: {},
};

const arrows = {
  left: LeftArrow,
  right: RightArrow,
  top: TopArrow,
  bottom: BottomArrow,
  topLeft: TopLeftArrow,
  topRight: TopRightArrow,
  bottomRight: BottomRightArrow,
  bottomLeft: BottomLeftArrow,
};

function Corner({ title, expandable, expanded, allCB, expandCB, location, style }) {
  const id = title.toLowerCase().replace(/ /g, '-');

  function arrowOrder() {
    const [row, col] = id.split('-');
    const oppRow = row !== 'top' ? 'top' : 'bottom';
    const oppCol = col !== 'left' ? 'left' : 'right';
    return [
      [`${row}-${oppCol}`, arrows[oppCol]],
      [`${oppRow}-${col}`, arrows[oppRow]],
      [`${oppRow}-${oppCol}`, arrows[`${oppRow}${oppCol[0].toUpperCase()}${oppCol.slice(1)}`]],
    ];
  }

  function getArrows() {
    return arrowOrder().map((link, i) => {
      const Arrow = link[1];
      return (
        <Link
          key={i}
          to={`${location.pathname}#${link[0]}`}
          style={{ width: '21px', display: 'block', margin: 'auto', padding: '5px 0' }}
        >
          <Arrow style={{ display: 'block', margin: 'auto' }} />
        </Link>
      );
    });
  }

  return (
    <div
      id={id}
      style={Object.assign(style,
        { float: id.split('-')[1], height: `50%`, width: `50%` }
      )}
    >
      {expanded &&
        <Link to="/" style={{ display: 'block', position: 'absolute', margin: '5px 7px' }}>
          Home
        </Link>
      }
      <div
        style={{
          position: 'relative',
          top: '50%',
          transform: 'translate(0, -50%)',
          WebkitTransform: 'translate(0, -50%)',
          MozTransform: 'translate(0, -50%)',
          msTransform: 'translate(0, -50%)',
          textAlign: 'center',
          paddingBottom: '3vh',
        }}
      >
        <h2 style={{ fontSize: '20px', marginBottom: '3px' }}>
          <Link to={`${location.pathname}#${id}`} onClick={expandCB}>{title}</Link>
        </h2>
        {(expandable && expanded) &&
          <Link to={location.pathname} onClick={allCB} style={{ display: 'block' }}>All</Link>
        }
        {expanded && getArrows()}
      </div>
    </div>
  );
}

Corner.propTypes = propTypes;
Corner.defaultProps = defaultProps;

export default Corner;
