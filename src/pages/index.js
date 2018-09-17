import React, { Fragment } from 'react';
import 'normalize.css/normalize.css';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Footer from '../components/Footer';
import { GlobalStyle } from '../styled';

export default () => (
  <Fragment>
    <GlobalStyle />
    {/* <Loading /> */}
    <Navbar />
    <Home />
    <About />
    <Footer />
  </Fragment>
);
