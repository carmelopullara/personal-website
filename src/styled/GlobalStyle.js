import { createGlobalStyle } from 'styled-components';
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

  .typed-cursor {
    color: #f98177;
  }

  .cursor--hidden + .typed-cursor{
    opacity: 0;
  }

  a{
    color: ${blue};
    text-decoration: none;
  }
`;

export default GlobalStyle;
