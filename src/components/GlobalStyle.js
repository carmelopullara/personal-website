import { createGlobalStyle } from 'styled-components';
import ApercuRegular from '../assets/fonts/Apercu-Regular.woff';
import ApercuRegular2 from '../assets/fonts/Apercu-Regular.woff2';
import ApercuBold from '../assets/fonts/Apercu-Bold.woff';
import ApercuBold2 from '../assets/fonts/Apercu-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apercu';
    src: url('https://git-merge.com/assets/fonts/relative-medium.woff2');
    src: url(${ApercuRegular2});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Apercu';
    src: url(${ApercuBold});
    src: url(${ApercuBold2});
    font-weight: 700;
  }

  *, *:before, *:after{
    box-sizing: border-box;
  }

  body{
    font-family: 'Apercu';
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
