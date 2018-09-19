import styled from 'styled-components';
import { Grid, Cube, Hero } from './Grid';
import {
  firstGlitch,
  secondGlitch,
  thirdGlitch,
  loadingAnimation,
  slideLeft,
} from './Animations';

export const black = '#151d25';
export const blue = '#308bff';

export const Header = styled.header`
  position: absolute;
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

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: ${black};
  font-size: 15px;
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: -10px;
    height: 2px;
    width: 0;
    background-color: ${black};
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover{
    color: ${black};
    &:after {
      opacity: 1;
      left: 0;
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 52px;
  margin: 0;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 40px;
  }
`;

export const TitleWrapper = styled.span`
  display: inline-block;
  animation: ${slideLeft} 1s forwards;
  animation-delay: 3.5s;
  opacity: 0;
`;

export const Heading = styled.h2`
  font-size: 24px;
  display: inline-block;
  position: relative;
  font-weight: 400;
  &:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 10px;
    background-color: ${props => (props.blue ? blue : '#000')};
    opacity: ${props => (props.blue ? 0.5 : 0.15)};
    width: 100%;
    z-index: -1;
  }
`;

export const Glitch = styled.span`
  display: inline-block;
  position: relative;
  font-weight: 700;
  > span {
    display: inline-block;
    animation: ${firstGlitch} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
  &:before,
  &:after {
    content: 'Carmelo';
    position: absolute;
    top: 0;
    left: 0;
  }
  &:before {
    color: #ff6565;
    animation: ${secondGlitch} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    z-index: -1;
  }
  &:after {
    color: #63ead2;
    animation: ${thirdGlitch} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    z-index: -2;
  }
`;

export const Footer = styled.footer`
  background-color: ${black};
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  color: #fff;
  h3{
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 0;
    a {
      color: #fff;
      display: block;
      span{
        margin-left: 5px;
      }
    }
  }
`;

export const Socials = styled.nav`
  margin: 25px 0;
  > a {
    color: #fff;
    display: inline-block;
    font-weight: bold;
    margin: 0 10px;
    transition: all .3s ease;
    &:hover{
      color: ${blue};
    }
  }
`;

export const FooterCopy = styled.p`
  font-size: 13px;
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
  background-color: ${black};
  visibility: ${props => (props.hidden ? 'hidden' : '')};
  transition: all 0.5s ease;
  transition-delay: 0.5s;
  z-index: 1000;
  img {
    width: 80px;
    animation: ${loadingAnimation} 1.5s;
    visibility: ${props => (props.hidden ? 'hidden' : '')};
    transform: ${props => (props.hidden ? 'scale(0)' : '')};
    transition: all 0.5s ease;
  }
`;

export const AboutSection = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  > ${Container} {
    max-width: 760px;
  }
  p {
    font-size: 17px;
  }
`;

export const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  color: ${black};
  &:hover{
    color: ${black};
    &:before{
      transform: rotate(4deg) scale(1.2);
    }
  }
  &:before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(249, 255, 159, 0.9);
    z-index: -1;
    transform: rotate(-4deg) scale(1.1);
    transition: all .3s ease;
  }
`;

export const Block = styled.blockquote`
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #2888ff;
  p{
    margin: 0;
  }
`;

export const Table = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TableTitle = styled.h5`
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.05em;
  flex-basis: 40%;
  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }
`;

export const TableList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  flex-basis: 30%;
  a {
    color: ${black};
    position: relative;
    &:hover:before{
      width: 100%;
    }
    &:before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: rgba(249, 255, 159, 0.9);
      transition: all .3s ease;
      z-index: -1;
    }
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin: 50px 0;
`;

export const WorkSection = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: ${blue};
  color: #fff;
  > ${Container} {
    max-width: 760px;
  }
`;

export const WorkNav = styled.nav`
  display: flex;
  justify-content: space-between;
  > div:first-child{
    padding-right: 10px;
  }
  > div:last-child{
    padding-left: 10px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    > div:first-child, > div:last-child {
      padding: 0;
    }
  }
`;

export const WorkItem = styled.a`
  position: relative;
  margin: 20px 0;
  display: flex;
  align-items: center;
  color: #9ac7ff;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
  > svg {
    height: 16px;
    width: 16px;
    margin-left: 10px;
    opacity: 0;
    color: #fff;
    transform: translateX(-10px);
    transition: all .3s;
  }
  span:first-child{
    position: relative;
    display: inline-block;
    color: #fff;
    padding: 0 5px;
    margin-right: 5px;
    font-size: 22px;
    font-weight: bold;
    transition: all .3s ease;
    transition-delay: .5s;
    overflow: hidden;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: -1;
      transform: translate3d(-100%,0,0) translate3d(-1px,0,0);
      transition: transform 0.5s;
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }
    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: #fff;
      z-index: -1;
      transition: all .5s ease;
      transition-delay: .5s;
    }
  }
  span:nth-child(2){
    display: inline-block;
    transition-delay: .7s;
    transition: all .3s ease;
  }
  &:hover{
    span:first-child{
      color: ${blue};
      &:before{
        transform: translate3d(100%,0,0) translate3d(1px,0,0);
      }
      &:after{
        height: 100%;
      }
    }
    span:nth-child(2){
      color: #fff;
    }
    > svg {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media screen and (max-width: 767px) {
    span:nth-child(2){
      padding: 0 5px;
    }
    svg {
      position: absolute;
      right: 10px;
      top: 50%;
      opacity: 1;
      transform: none;
      margin-top: -16px;
    }
  }
`;

export {
  Grid, Cube, Hero,
};
