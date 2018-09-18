import React from 'react';
import Github from 'react-feather/dist/icons/github';
import {
  Footer as StyledFooter, Container, FooterLogo, Socials, FooterCopy,
} from '../styled';
import logo from '../assets/images/logo-light.svg';

const year = new Date();

const Footer = () => (
  <StyledFooter id="contact">
    <Container>
      <FooterLogo src={logo} alt="Carmelo Pullara" />
      <Socials>
        <a href="https://github.com/carmelopullara" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://twitter.com/carmelopullara" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://linkedin.com/in/carmelopullara" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href="https://angel.co/carmelo" target="_blank" rel="noopener noreferrer">
          Angellist
        </a>
        <a href="mailto:carmelo@pullara.me" target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </Socials>
      <FooterCopy>
        &copy;
        {' '}
        {year.getFullYear()}
        {' '}
        Carmelo Pullara - VAT 02908650845
      </FooterCopy>
    </Container>
  </StyledFooter>
);

export default Footer;
