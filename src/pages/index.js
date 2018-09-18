import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Works from '../components/Works';
import Footer from '../components/Footer';
import GlobalStyle from '../styled/GlobalStyle';

export default () => (
  <Fragment>
    <Helmet>
      <title>Carmelo Pullara — Front-End Developer</title>
      <meta name="description" content="Front-End Developer based in Italy. JavaScript enthusiast, with a passion for web, tech, startups and science." />
      <meta name="referrer" content="origin" />
      <html lang="en" />
    </Helmet>
    <GlobalStyle />
    <Loading />
    <Navbar />
    <Home />
    <About />
    <Works />
    <Footer />
  </Fragment>
);
