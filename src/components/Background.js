import React, { Component } from 'react';
import { Grid, Cube } from '../styled/Grid';

class Background extends Component {
  constructor(props) {
    super(props);
    // this.handleResize = this.handleResize(this);

    // window.addEventListener('resize', this.handleResize);

    this.setGrid = (element) => {
      this.grid = element;
    };
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    const x = Math.floor(this.grid.clientWidth / 90);
    const y = Math.floor(this.grid.clientHeight / 52);

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
      },
      {
        id: 1,
        x: max.x / 2 - 4.5,
        y: 3.5,
        color: 'red',
        delay: '0.3s',
      },
      {
        id: 2,
        x: max.x / 2 - 5,
        y: 4,
        color: 'green',
        small: true,
        delay: '0s',
      },
      {
        id: 5,
        x: max.x / 2 + 4,
        y: max.y - 2,
        color: 'green',
        big: true,
        delay: '3s',
      },
      {
        id: 4,
        x: max.x / 2 + 3.5,
        y: max.y - 1.5,
        color: 'red',
        delay: '2.5s',
      },
      {
        id: 3,
        x: max.x / 2 + 3,
        y: max.y - 1,
        color: 'blue',
        small: true,
        delay: '2s',
      },
    ];

    const grid = items.filter(item => item.x < max.x && item.y < max.y);

    this.setState({
      grid,
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
