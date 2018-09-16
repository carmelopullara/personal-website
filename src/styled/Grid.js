import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import { cubeAnimation, slideLeft, slideRight } from './Animations';

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
  blue: '#a2cbff',
  red: '#FAAFAA',
  green: '#D9F6FE',
};

export const Hero = styled.section`
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;
  background-image: linear-gradient(30deg, transparent 49%, rgba(0, 0, 0, 0.5) 50%, transparent 51%),
                    linear-gradient(330deg, transparent 49%, rgba(0, 0, 0, 0.5) 50%, transparent 51%);
  background-size: ${gridX}px ${gridY}px, ${gridX}px ${gridY}px;
  background-repeat: repeat;
  align-items: center;
  display: flex;
  z-index: 20;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: 20px solid #fff;
    background: rgb(27, 31, 39);
    background: radial-gradient(circle, rgba(2, 0, 36, 0) 0%, rgba(255, 255, 255, 0) 8%, #f5f5f5 100%),
                linear-gradient(180deg, #f5f5f5 0%, rgba(255, 255, 255, 0) 100%, rgba(2, 0, 36, 0) 100%),
                linear-gradient(360deg, #f5f5f5 0%, rgba(255, 255, 255, 0) 100%, rgba(2, 0, 36, 0) 100%);
    z-index: 0;                
  }
`;

export const Grid = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  animation: ${slideRight} 1s forwards;
  animation-delay: 3s;
  opacity: 0;
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
