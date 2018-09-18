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
      <html lang="en" />
      <title>Carmelo Pullara — Front-End Developer</title>
      <meta
        name="description"
        content="Front-End Developer based in Italy. JavaScript enthusiast, with a passion for web, tech, startups and science."
      />
      <meta name="referrer" content="origin" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pullara.me" />
      <meta property="og:title" content="Carmelo Pullara — Front-End Developer" />
      <meta property="og:description" content="Personal website of Carmelo Pullara. Front-End Developer and digital entrepreneur from Italy." />
      <meta property="og:image" content="https://i.imgur.com/1ChWAdq.png" />
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
