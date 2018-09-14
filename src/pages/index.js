import React, { Fragment, Component } from 'react';
import 'normalize.css/normalize.css';
import {
  Header, GlobalStyle, Grid, Cube, Container, Title,
} from '../components';

class index extends Component {
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
        x: max.x / 2,
        y: max.y / 2 + 1,
        small: true,
        color: 'green',
        delay: '0s',
      },
      {
        x: max.x / 2 - 3,
        y: max.y / 2,
        color: 'red',
        big: true,
        delay: '0.5s',
      },
      {
        x: max.x / 2 - 3,
        y: max.y / 2 + 2,
        color: 'blue',
        delay: '1s',
      },
      {
        x: max.x / 2 - 5,
        y: max.y / 2 + 1,
        color: 'green',
        small: true,
        delay: '1.5s',
      },
      {
        x: max.x / 2 + 3,
        y: max.y / 2,
        color: 'blue',
        big: true,
        delay: '2s',
      },
      {
        x: max.x / 2 + 3,
        y: max.y / 2 + 2,
        color: 'red',
        delay: '2.5s',
      },
      {
        x: max.x / 2 + 5,
        y: max.y / 2 + 1,
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
      <Fragment>
        <GlobalStyle />
        <Header>
          <Grid ref={this.setGrid}>
            {grid.map(item => (
              <Cube
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
          <Container>
            <Title>
              Hello! My name is Carmelo,
              {' '}
              <br />
              {' '}
              I'm a Front-End Developer
            </Title>
          </Container>
        </Header>
        <section />
      </Fragment>
    );
  }
}

export default index;
