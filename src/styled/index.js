import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Grid, Cube } from './Grid';
import { firstGlitch, secondGlitch, thirdGlitch, loadingAnimation } from './Animations';

export const Header = styled.header`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  height: 80px;
  z-index: 100;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  > a {
    height: 80px;
    display: flex;
    align-items: center;
  }
  img {
    width: 44px;
  }
`;

export const Hero = styled.section`
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;
  align-items: center;
  display: flex;
  z-index: 20;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.a`
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #151d25;
  font-size: 15px;
  &:after{
    content: "";
    position: absolute;
    bottom: -5px;
    left: -10px;
    height: 2px;
    width: 0;
    background-color: #151d25;
    opacity: 0;
    transition: all .3s ease;
  }
  &:hover:after{
    opacity: 1;
    left: 0;
    width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 52px;
  margin: -100px 0 0;
  font-weight: 400;
  text-align: center;
`;

export const Glitch = styled.span`
  display: inline-block;
  position: relative;
  font-weight: 700;
  >span{
    display: inline-block;
    animation: ${firstGlitch} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
  &:before, &:after{
    content: "Carmelo";
    position: absolute;
    top: 0;
    left: 0;
  }
  &:before{
    color: #ff6565;
    animation: ${secondGlitch} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    z-index: -1;
  }
  &:after{
    color: #63ead2;
    animation: ${thirdGlitch} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    z-index: -2;
  }
`;

export const Footer = styled.footer`
  background-color: #151d25;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
`;

export const FooterLogo = styled.img`
  width: 60px;
`;

export const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.hidden ? 0 : '100vw')};
  height: 100vh;
  background-color: #151d25;
  visibility: ${props => (props.hidden ? 'hidden' : '')};
  transition: all .5s ease;
  transition-delay: .5s;
  z-index: 1000;
  img {
    width: 80px;
    animation: ${loadingAnimation} 1.5s;
    visibility: ${props => (props.hidden ? 'hidden' : '')};
    transform: ${props => (props.hidden ? 'scale(0)' : '')};
    transition: all .5s ease;
  }  
`;

export {
  GlobalStyle,
  Grid,
  Cube,
};
