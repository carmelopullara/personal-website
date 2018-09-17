import React from 'react';
import Background from './Background';
import Typed from './Typed';
import {
  Hero, Container, Title, TitleWrapper, Glitch,
} from '../styled';

const Home = () => (
  <Hero>
    <Background />
    <Container>
      <Title>
        <TitleWrapper>
          Hey, my name is
          {' '}
          <Glitch>
            <span>Carmelo</span>
          </Glitch>
          {'. '}
        </TitleWrapper>
        <br />
        <Typed
          strings={['Front-End Developer.', 'Digital Entrepreneur.', 'JavaScript Enthusiast.']}
        />
      </Title>
    </Container>
  </Hero>
);

export default Home;
