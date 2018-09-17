import React from 'react';
import {
  AboutSection,
  Container,
  StyledLink,
  Table,
  TableList,
  TableTitle,
  Divider,
} from '../styled';

const About = () => (
  <AboutSection>
    <Container>
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
      <Divider />
      <Table>
        <TableTitle>My tech stack</TableTitle>
        <TableList>
          <li>React</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>Styled-Components</li>
          <li>Apollo</li>
        </TableList>
        <TableList>
          <li>Node.js</li>
          <li>Express</li>
          <li>GraphQL</li>
          <li>Firebase</li>
          <li>AWS</li>
        </TableList>
      </Table>
      <Table>
        <TableTitle>I have worked with</TableTitle>
        <TableList>
          <li>
            <a href="https://paramount.com" target="_blank" rel="noopener noreferrer">
              Paramount Pictures
            </a>
          </li>
          <li>
            <a href="https://dsire.com" target="_blank" rel="noopener noreferrer">
              dsire, Inc.
            </a>
          </li>
          <li>
            <a href="https://toptal.com" target="_blank" rel="noopener noreferrer">
              Toptal
            </a>
          </li>
        </TableList>
        <TableList>
          <li>
            <a href="https://nbc.com" target="_blank" rel="noopener noreferrer">
              NBC
            </a>
          </li>
          <li>
            <a href="https://envato.com" target="_blank" rel="noopener noreferrer">
              Envato
            </a>
          </li>
          <li>
            <a href="https://blockchainwarehouse.com" target="_blank" rel="noopener noreferrer">
              BlockchainWarehouse
            </a>
          </li>
        </TableList>
      </Table>
    </Container>
  </AboutSection>
);

export default About;
