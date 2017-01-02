import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import objectAssign from 'object-assign';
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
        <Interactive
          as={Link}
          key={i}
          to={`${location.pathname}#${link[0]}`}
          hover={{ fill: 'rgb(0, 144, 0)' }}
          active="hover"
          focusFromTab={{ outline: '2px solid rgb(0, 152, 0)', outlineOffset: '2px' }}
          style={{ width: '21px', display: 'block', margin: 'auto', padding: '5px 0' }}
        >
          <Arrow style={{ display: 'block', margin: 'auto' }} />
        </Interactive>
      );
    });
  }

  const linkStyle = {
    hover: { color: 'rgb(0, 144, 0)' },
    active: 'hover',
    focusFromTab: { outline: '2px solid rgb(0, 152, 0)', outlineOffset: '2px' },
  };

  return (
    <div style={objectAssign(style, { float: id.split('-')[1], height: '50%', width: '50%' })}>
      {expanded &&
        <Interactive
          as={Link}
          hover={{ color: 'rgb(0, 144, 0)' }}
          active="hover"
          focusFromTab={{ outline: '2px solid rgb(0, 152, 0)', outlineOffset: '2px' }}
          to="/"
          style={{ display: 'block', position: 'absolute', margin: '5px 7px' }}
        >
          Home
        </Interactive>
      }
      <div
        id={id}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            paddingBottom: '3vh',
          }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '3px' }}>
            <Interactive as={Link} to={`${location.pathname}#${id}`} onClick={expandCB} {...linkStyle}>
              {title}
            </Interactive>
          </h2>
          {(expandable && expanded) &&
            <Interactive as={Link} to={location.pathname} onClick={allCB} {...linkStyle}>
              All
            </Interactive>
          }
          {expanded && getArrows()}
        </div>
      </div>
    </div>
  );
}

Corner.propTypes = propTypes;
Corner.defaultProps = defaultProps;

export default Corner;
