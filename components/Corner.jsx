import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  LeftArrow, RightArrow, TopArrow, BottomArrow,
  TopLeftArrow, TopRightArrow, BottomLeftArrow, BottomRightArrow,
} from './SvgArrows';

const propTypes = {
  title: PropTypes.string.isRequired, // e.g. "Top Left"
  expanded: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
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

function Corner({ title, expanded, location }) {
  const id = title.toLowerCase().replace(/ /g, '-');
  const size = expanded ? 100 : 25;

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
          <Arrow style={{ fill: 'green', display: 'block', margin: 'auto' }} />
        </Link>
      );
    });
  }

  return (
    <div id={id} style={{ height: `${size}vh`, width: `${size}vw` }}>
      <div>
        <h2>{title}</h2>
        {getArrows()}
      </div>
    </div>
  );
}

Corner.propTypes = propTypes;

export default Corner;
