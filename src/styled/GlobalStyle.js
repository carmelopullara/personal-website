import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import ApercuRegular from '../assets/fonts/Apercu-Regular.woff';
import ApercuRegular2 from '../assets/fonts/Apercu-Regular.woff2';
import ApercuBold from '../assets/fonts/Apercu-Bold.woff';
import ApercuBold2 from '../assets/fonts/Apercu-Bold.woff2';
import { blue, black } from './index';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apercu';
    font-display: auto;
    src: url(${ApercuRegular});
    src: url(${ApercuRegular2});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Apercu';
    font-display: auto;
    src: url(${ApercuBold});
    src: url(${ApercuBold2});
    font-weight: 700;
  }

  *, *:before, *:after{
    box-sizing: border-box;
  }

  body{
    font-family: 'Apercu', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${black};
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{
    color: ${blue};
    text-decoration: none;
    transition: color .3s ease;
    &:hover{
      color: ${darken(0.1, blue)};
    }
  }

  .typed-cursor {
    color: #f98177;
  }

  .typed-el{
    white-space: pre;
    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
  }

  .cursor--hidden + .typed-cursor{
    opacity: 0;
  }
`;

export default GlobalStyle;
