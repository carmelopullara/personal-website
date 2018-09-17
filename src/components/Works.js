import React from 'react';
import LinkIcon from 'react-feather/dist/icons/external-link';
import {
  WorkSection, Container, WorkNav, WorkItem, Heading,
} from '../styled';

const Works = () => (
  <WorkSection>
    <Container>
      <Heading>Some recent works</Heading>
      <WorkNav>
        <div>
          <WorkItem href="http://themes.hody.co/bezel" target="_blank">
            <span>Bezel</span>
            <span>creative WP theme.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="http://themes.hody.co/comet" target="_blank">
            <span>Comet</span>
            <span>multi-purpose WP theme.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="http://themes.hody.co/dylan" target="_blank">
            <span>Dylan</span>
            <span>multi-concept WP theme.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://plentix.io" target="_blank">
            <span>Plentix</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
        </div>
        <div>
          <WorkItem href="https://traidia.io" target="_blank">
            <span>Traidia</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://healthgates.com/" target="_blank">
            <span>Healthgates</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://token.theheartbit.com/" target="_blank">
            <span>Heartbit</span>
            <span>ICO landing page.</span>
            <LinkIcon />
          </WorkItem>
          <WorkItem href="https://sindric.io/" target="_blank">
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
