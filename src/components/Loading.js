import React, { Component } from 'react';
import { LoadingScreen } from '../styled';
import logo from '../assets/images/logo-light.svg';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.loadingTimeout = setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  componentWillUnmount() {
    this.loadingTimeout = null;
  }

  render() {
    const { loading } = this.state;
    return (
      <LoadingScreen hidden={!loading}>
        <img src={logo} alt="" />
      </LoadingScreen>
    );
  }
}

export default Loading;
