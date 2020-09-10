# Four Corner Layout Concept

Four presentation pages on a single web page. Each presentation page is immersive and dynamically resizes to fit the viewable area.

[Live Concept](https://four-corner-layout.rafgraph.dev)

## Code Notes

#### Corner Component
- [Corner.jsx](https://github.com/rafgraph/four-corner-layout/blob/gh-pages/components/Corner.jsx)
- A single corner component that is a pure function of its props (stateless functional react component)
- Based on the props it receives it renders itself as either the top-left, top-right, bottom-left or bottom-right corner in expanded or non-expanded state

#### SVG Arrows
- [SvgArrows.jsx](https://github.com/rafgraph/four-corner-layout/blob/gh-pages/components/SvgArrows.jsx)
- Each svg arrow is wrapped in a stateless react component, which can optionally receive the following props (all have defaults that can be overwritten except for `className`, which is merged with the default value):
  - `width`
    - svg width attribute (not style attribute)
    - type: string, can be unit-less, e.g. `'20'`, `'20px'`, `'20vw'`, etc
  - `height`
    - svg height attribute (not style attribute)
    - type: string, can be unit-less, e.g. `'20'`, `'20px'`, `'20vw'`, etc
  - `scale`
    - multiplier to default (or supplied) unit-less width and height
    - type: number (width and height must be unit-less to use scale), e.g. `1.5`
  - `title`
    - svg title attribute, also used for the default `aria-label`
    - type: string, e.g. `'Go Left'`
  - `className`
    - classes to merge with default classes
    - default classes: `'arrow [direction]-arrow'` (defaults can't be overwritten)
    - type: string, e.g. `'go-left another-class'`
  - `style`
    - svg style attribute
    - type: react style object, e.g. `{ display: 'block', margin: 'auto' }`
    - note that the fill property is defined in css so it can be changed with css `:hover`/`:active` selectors
    - note that there is no default style object so it is added as part of `...other`
  - ... and every other prop you pass in, including `viewBox`

```javascript
import react, { PropTypes } from 'react';

const propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  scale: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string,
};

const defaultPropsHorizontalArrow = {
  width: '21',
  height: '7',
  scale: 1,
};

// note that default title is declared as a default attribute
// of the function (instead of as a default prop) because each arrow
// has it's own title but share default props
function LeftArrow({ width, height, scale, className, title = 'Left Arrow', ...other }) {
  return (
    <svg
      // merge classes
      className={`arrow left-arrow${className ? ` ${className}` : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      width={(width * scale) || width}
      height={(height * scale) || height}
      viewBox="0 0 900 300"
      aria-label={title}
      // by putting ...other last it will override any previously defined attributes
      {...other}
    >
      <title>{title}</title>
      <path d="M900 183.418H232.596V300L0 150 232.596 0v116.582H900v66.836z" />
    </svg>
  );
}

LeftArrow.propTypes = propTypes;
LeftArrow.defaultProps = defaultPropsHorizontalArrow;

export { LeftArrow };
```
