import React from 'react';
import logo from '../assets/images/logo.svg';
import {
  Header, Container, Menu, HeaderWrap, Logo, MenuItem,
} from '../styled';

const scroll = (e, section) => {
  e.preventDefault();
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

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
          <MenuItem href="#about" onClick={e => scroll(e, 'about')}>about</MenuItem>
          <MenuItem href="#works" onClick={e => scroll(e, 'works')}>works</MenuItem>
          <MenuItem href="#contact" onClick={e => scroll(e, 'contact')}>contact</MenuItem>
        </Menu>
      </HeaderWrap>
    </Container>
  </Header>
);

export default Navbar;
