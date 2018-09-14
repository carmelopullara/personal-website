import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken, lighten } from 'polished';
import cubeAnimation from './Animations';

const getSize = (props) => {
  if (props.big) {
    return 'big';
  }
  if (props.small) {
    return 'small';
  }
  return 'default';
};

const animation = name => css`${name} 2s infinite`;
const gridX = 90;
const gridY = Math.round(gridX * 0.58);
const colors = {
  blue: lighten(0.35, '#0069ee'),
  red: '#FAAFAA',
  green: '#D9F6FE',
};

export const Grid = styled.div`
  background-image: linear-gradient(30deg, transparent 49%, rgba(0, 0, 0, 0.5) 50%, transparent 51%),
                    linear-gradient(330deg, transparent 49%, rgba(0, 0, 0, 0.5) 50%, transparent 51%);
  background-size: ${gridX}px ${gridY}px, ${gridX}px ${gridY}px;
  background-repeat: repeat;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 50vh;
  width: 100%;
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgb(27, 31, 39);
    background: radial-gradient(circle, rgba(2, 0, 36, 0) 0%, rgba(9, 9, 121, 0) 8%, #f6f6f6 100%),
                linear-gradient(180deg, #f6f6f6 0%, rgba(9, 9, 121, 0) 100%, rgba(2, 0, 36, 0) 100%),
                linear-gradient(360deg, #f6f6f6 0%, rgba(9, 9, 121, 0) 100%, rgba(2, 0, 36, 0) 100%);
  }
`;

export const Cube = styled.div`
  position: absolute;
  top: ${props => gridY * props.y + 5}px;
  left: ${props => gridX * props.x}px;
  animation: ${props => animation(cubeAnimation[getSize(props)].main)};
  animation-delay: ${props => props.delay || ''};
  z-index: 10;
  ${props => props.big && `
    top: ${gridY * props.y + 5 - 45}px;
  `}
  ${props => props.small && `
    top: ${gridY * props.y + 5 + 22.5}px;
  `}
  &:before, &:after {
    content: '';
  }
  &:before, &:after, & > span {
    position: absolute;
    width: 45px;
    height: 45px;
    transform-origin: 0 0;
  }
  &:before {
    transform: rotate(90deg) skewX(-30deg) scaleY(0.864);
    background: ${props => darken(0.05, colors[props.color])};
    animation: ${props => animation(cubeAnimation[getSize(props)].left)};
    animation-delay: ${props => props.delay || ''};
    ${props => props.big && `
      width: 90px;
    `}
    ${props => props.small && `
      width: 22.5px;
    `};
  }
  &:after {
    transform: rotate(-30deg) skewX(-30deg) scaleY(0.864);
    background: ${props => darken(0.1, colors[props.color])};
    animation: ${props => animation(cubeAnimation[getSize(props)].right)};
    animation-delay: ${props => props.delay || ''};
    ${props => props.big && `
      height: 90px;
    `}
    ${props => props.small && `
      height: 22.5px;
    `};
  }
  & > span {
    transform: rotate(210deg) skewX(-30deg) scaleY(0.864);
    background-color: ${props => colors[props.color]};
  }
`;

Cube.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  color: PropTypes.oneOf(['blue', 'red', 'green']),
};

Cube.defaultProps = {
  x: 3,
  y: 3,
  color: 'blue',
};
