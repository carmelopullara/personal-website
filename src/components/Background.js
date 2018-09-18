import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { Grid, Cube } from '../styled/Grid';


class Background extends Component {
  constructor(props) {
    super(props);
    const windowGlobal = typeof window !== 'undefined' && window;

    this.setGrid = (element) => {
      this.grid = element;
    };
    this.state = {
      grid: [],
      x: Math.floor(windowGlobal.innerWidth / 90),
      y: Math.floor(windowGlobal.innerHeight / 52),
    };

    this.buildGrid = this.buildGrid.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.handleResize, 100));
    const { x, y } = this.state;
    this.buildGrid(x, y);
  }

  handleResize() {
    const x = Math.floor(window.innerWidth / 90);
    const y = Math.floor(window.innerHeight / 52);

    this.buildGrid(x, y);
  }

  buildGrid(x, y) {
    const max = {
      x: x % 2 ? x - 1 : x,
      y: y % 2 ? y - 1 : y,
    };

    const items = [
      {
        id: 0,
        x: max.x / 2 - 4,
        y: 3,
        color: 'blue',
        big: true,
        delay: '0.6s',
        mediumX: max.x / 2 - 1,
        mediumY: 4,
        smallX: max.x / 2,
        smallY: max.y - 2,
      },
      {
        id: 1,
        x: max.x / 2 - 4.5,
        y: 3.5,
        color: 'red',
        delay: '0.3s',
        mediumX: max.x / 2 - 1.5,
        mediumY: 4.5,
        smallX: max.x / 2 + 0.5,
        smallY: max.y - 1.5,
      },
      {
        id: 3,
        x: max.x / 2 - 5,
        y: 4,
        color: 'green',
        small: true,
        delay: '0s',
        mediumX: max.x / 2 - 2,
        mediumY: 5,
        smallX: max.x / 2 - 0.5,
        smallY: max.y - 1.5,
      },
      {
        id: 4,
        x: max.x / 2 + 4,
        y: max.y - 2,
        color: 'green',
        big: true,
        delay: '3s',
        mediumX: max.x / 2 + 2,
        mediumY: max.y - 2,
      },
      {
        id: 5,
        x: max.x / 2 + 3.5,
        y: max.y - 1.5,
        color: 'red',
        delay: '2.5s',
        mediumX: max.x / 2 + 1.5,
        mediumY: max.y - 1.5,
      },
      {
        id: 6,
        x: max.x / 2 + 3,
        y: max.y - 1,
        color: 'blue',
        small: true,
        delay: '2s',
        mediumX: max.x / 2 + 1,
        mediumY: max.y - 1,
      },
    ];

    this.setState({
      grid: items,
    });
  }

  render() {
    const { grid } = this.state;
    return (
      <Grid ref={this.setGrid}>
        {grid.map(item => (
          <Cube
            key={item.id}
            color={item.color}
            x={item.x}
            y={item.y}
            mediumX={item.mediumX}
            mediumY={item.mediumY}
            smallX={item.smallX}
            smallY={item.smallY}
            big={item.big}
            small={item.small}
            delay={item.delay}
          >
            <span />
          </Cube>
        ))}
      </Grid>
    );
  }
}

export default Background;
