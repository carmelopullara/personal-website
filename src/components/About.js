import React from 'react';
import {
  AboutSection,
  Container,
  StyledLink,
  Heading,
} from '../styled';

const About = () => (
  <AboutSection>
    <Container>
      <Heading blue>Who I am</Heading>
      <p>
        I&apos;m a freelance Front-End Developer from
        {' '}
        <StyledLink
          href="https://goo.gl/maps/reqEn1so9oA2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Favara, Italy
        </StyledLink>
        . My passion is to build web, mobile applications and interactive websites with modern
        technologies.
      </p>
      <p>
        In my six years of professional experience I have worked with many languages, but now
        I&apos;m mainly focused on JavaScript.
      </p>
      <p>
        From 2014 to 2018, I have worked full-time as WordPress Developer on
        {' '}
        <StyledLink
          href="https://themeforest.net/user/hodylab/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThemeForest
        </StyledLink>
        , building premium themes that power more than 5000 websites around the world.
      </p>
      <p>
        In 2018 I joined
        {' '}
        <StyledLink
          href="https://www.toptal.com/resume/carmelo-pullara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toptal
        </StyledLink>
        , a network of freelancers where only 3% of applicants gets accepted. Here I have worked
        with companies of different sizes, providing front-end development services.
      </p>
    </Container>
  </AboutSection>
);

export default About;
