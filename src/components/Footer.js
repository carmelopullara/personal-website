import React from 'react';
import { Footer as StyledFooter, Container, FooterLogo } from '../styled';
import logo from '../assets/images/logo-light.svg';

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterLogo src={logo} alt="Carmelo Pullara" />
    </Container>
  </StyledFooter>
);

export default Footer;
