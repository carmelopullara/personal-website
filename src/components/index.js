import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Grid, Cube } from './Grid';

export const Header = styled.section`
  position: relative;
  height: 100vh;
  background-color: #f6f6f6;
  align-items: center;
  display: flex;
  z-index: 10;
`;

export const Container = styled.div`
  position: relative;
  max-width: 970px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 54px;
  margin: -150px 0 0;
  font-weight: 400;
  text-align: center;
`;

export { GlobalStyle, Grid, Cube };
