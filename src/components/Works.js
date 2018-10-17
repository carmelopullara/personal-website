import React from 'react';
import LinkIcon from 'react-feather/dist/icons/external-link';
import {
  WorkSection, Container, WorkNav, WorkItem, Heading,
} from '../styled';

const Works = () => (
  <WorkSection id="works">
    <Container>
      <Heading>Some recent works</Heading>
      <WorkNav>
        <div>
          <WorkItem href="http://themes.hody.co/bezel" target="_blank" rel="noopener noreferrer">
            <span>Bezel</span>
            <span>creative WP theme.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="http://themes.hody.co/comet" target="_blank" rel="noopener noreferrer">
            <span>Comet</span>
            <span>multi-purpose WP theme.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="http://themes.hody.co/dylan" target="_blank" rel="noopener noreferrer">
            <span>Dylan</span>
            <span>multi-concept WP theme.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://github.com/carmelopullara/react-feather" target="_blank" rel="noopener noreferrer">
            <span>React Feather</span>
            <span>SVG icons for React.js</span>
            <LinkIcon />
          </WorkItem>
        </div>
        <div>
          <WorkItem href="https://plentix.io" target="_blank" rel="noopener noreferrer">
            <span>Plentix</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://healthgates.com/" target="_blank" rel="noopener noreferrer">
            <span>Healthgates</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://token.theheartbit.com/" target="_blank" rel="noopener noreferrer">
            <span>Heartbit</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://sindric.io/" target="_blank" rel="noopener noreferrer">
            <span>Sindric</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
        </div>
      </WorkNav>
    </Container>
  </WorkSection>
);

export default Works;
