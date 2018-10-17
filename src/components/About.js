import React from 'react';
import {
  AboutSection, Container, StyledLink, Heading, Block,
} from '../styled';

const About = () => (
  <AboutSection id="about">
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
        From 2014 to 2018, I have worked full-time as Elite author on
        {' '}
        <a
          href="https://themeforest.net/user/hodylab/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThemeForest
        </a>
        , building premium WordPress themes that power more than 5000 websites around the world.
      </p>
      <p>
        In 2018 I joined
        {' '}
        <a
          href="https://www.toptal.com/resume/carmelo-pullara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toptal
        </a>
        , a network of freelancers where only 3% of applicants gets accepted. Here I have worked
        with companies of different sizes, providing front-end development services.
      </p>
      <p>
        You can take a look at my resume
        {' '}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
      <Block>
        <p>
          I&apos;m currently taking new projects. If you want to work with, me feel free to
          {' '}
          <a href="mailto:carmelo@pullara.me" target="_blank" rel="noopener noreferrer">
            get in touch
          </a>
          .
        </p>
      </Block>
    </Container>
  </AboutSection>
);

export default About;
