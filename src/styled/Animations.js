import { keyframes } from 'styled-components';

export const slideLeft = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideRight = keyframes`
  0% {
    transform: scaleX(1.3);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
`;

export const cubeAnimation = {
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
        transform: translateY(22px);
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

export const firstGlitch = keyframes`
  0% {
      transform: none;
      opacity: 1;
  }
  5% {
      transform: skew(-0.6deg, -1.2deg);
      opacity: 0.75;
  }
  10% {
      transform: none;
      opacity: 1;
  }
  15% {
      transform: none;
      opacity: 1;
  }
  20% {
      transform: skew(1deg, -0.3deg);
      opacity: 0.75;
  }
  25% {
      transform: none;
      opacity: 1;
  }
  30% {
      transform: none;
      opacity: 1;
  }
  35% {
      transform: skew(-1deg, 0.2deg);
      opacity: 0.75;
  }
  40% {
      transform: none;
      opacity: 1;
  }
  45% {
      transform: none;
      opacity: 1;
  }
  50% {
      transform: skew(1.2deg, 1.7deg);
      opacity: 0.75;
  }
  75% {
      transform: none;
      opacity: 1;
  }
  100% {
      transform: none;
      opacity: 1;
  }
`;

export const secondGlitch = keyframes`
  0% {
    transform: none;
    opacity: 1;
  }
  5% {
    transform: translate(-2px, -3px);
    opacity: 1;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  15% {
    transform: none;
    opacity: 1;
  }
  20% {
    transform: translate(-5px, -2px);
    opacity: 1;
  }
  25% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: none;
    opacity: 1;
  }
  35% {
    transform: translate(-5px, -1px);
    opacity: 1;
  }
  40% {
    transform: none;
    opacity: 1;
  }
  45% {
    transform: none;
    opacity: 1;
  }
  50% {
    transform: translate(-2px, -6px);
    opacity: 1;
  }
  75% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

export const thirdGlitch = keyframes`
  0% {
    transform: none;
    opacity: 0.75;
  }
  5% {
    transform: translate(2px, 3px);
    opacity: 1;
  }
  10% {
    transform: none;
    opacity: 0.75;
  }
  15% {
    transform: none;
    opacity: 0.75;
  }
  20% {
    transform: translate(5px, 2px);
    opacity: 1;
  }
  25% {
    transform: none;
    opacity: 0.75;
  }
  30% {
    transform: none;
    opacity: 0.75;
  }
  35% {
    transform: translate(5px, 1px);
    opacity: 1;
  }
  40% {
    transform: none;
    opacity: 0.75;
  }
  45% {
    transform: none;
    opacity: 0.75;
  }
  50% {
    transform: translate(2px, 6px);
    opacity: 1;
  }
  75% {
    transform: none;
    opacity: 0.75;
  }
  100% {
    transform: none;
    opacity: 0.75;
  }
`;

export const loadingAnimation = keyframes`
  0% {
    transform: translateY(-100px) rotate(180deg);
    opacity: 0;
  }
  25% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
  50% {
    transform: scale(.8);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1) rotate(0);
  }
`;
