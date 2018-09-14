import { keyframes } from 'styled-components';

const cubeAnimation = {
  small: {
    main: keyframes`
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(20.5px);
      }
      100% {
        transform: translateY(0);
      }`,
    left: keyframes`
      0% {
        width: 22.5px;
      }
      50% {
        width: 2px;
      }
      100% {
        width: 22.5px;
      }`,
    right: keyframes`
      0% {
        height: 22.5px;
      }
      50% {
        height: 2px;
      }
      100% {
        height: 22.5px;
      }`,
  },
  default: {
    main: keyframes`
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(22.5px);
      }
      100% {
        transform: translateY(0);
      }`,
    left: keyframes`
      0% {
        width: 45px;
      }
      50% {
        width: 22.5px;
      }
      100% {
        width: 45px;
      }`,
    right: keyframes`
      0% {
        height: 45px;
      }
      50% {
        height: 22.5px;
      }
      100% {
        height: 45px;
      }`,
  },
  big: {
    main: keyframes`
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(45px);
      }
      100% {
        transform: translateY(0);
      }`,
    left: keyframes`
      0% {
        width: 90px;
      }
      50% {
        width: 45px;
      }
      100% {
        width: 90px;
      }`,
    right: keyframes`
      0% {
        height: 90px;
      }
      50% {
        height: 45px;
      }
      100% {
        height: 90px;
      }`,
  },
};

export default cubeAnimation;
