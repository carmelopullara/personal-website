import React from 'react';
import logo from '../assets/images/logo.svg';
import {
  Header, Container, Menu, HeaderWrap, Logo, MenuItem,
} from '../styled';

const Navbar = () => (
  <Header>
    <Container>
      <HeaderWrap>
        <Logo>
          <a href="/">
            <img src={logo} alt="Carmelo Pullara" />
          </a>
        </Logo>
        <Menu>
          <MenuItem href="#about">about</MenuItem>
          <MenuItem href="#works">works</MenuItem>
          <MenuItem href="#contact">contact</MenuItem>
        </Menu>
      </HeaderWrap>
    </Container>
  </Header>
);

export default Navbar;
