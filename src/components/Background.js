import React, { Component } from 'react';
import { Grid, Cube } from '../styled/Grid';

class Background extends Component {
  constructor(props) {
    super(props);
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
        id: 1,
        x: max.x / 2,
        y: max.y - 2,
        small: true,
        color: 'green',
        delay: '0s',
      },
      {
        id: 2,
        x: max.x / 2 - 3,
        y: max.y - 3,
        color: 'red',
        big: true,
        delay: '0.5s',
      },
      {
        id: 3,
        x: max.x / 2 - 3,
        y: max.y - 1,
        color: 'blue',
        delay: '1s',
      },
      {
        id: 4,
        x: max.x / 2 - 5,
        y: max.y - 2,
        color: 'green',
        small: true,
        delay: '1.5s',
      },
      {
        id: 5,
        x: max.x / 2 + 3,
        y: max.y - 3,
        color: 'blue',
        big: true,
        delay: '2s',
      },
      {
        id: 6,
        x: max.x / 2 + 3,
        y: max.y - 1,
        color: 'red',
        delay: '2.5s',
      },
      {
        id: 7,
        x: max.x / 2 + 5,
        y: max.y - 2,
        color: 'green',
        small: true,
        delay: '3s',
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
