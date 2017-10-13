import React, { Component } from 'react';
import logo from './logo.svg';

import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada/>
        <Guitarras/>
        <Footer/>
      </section>
    );
  }
}

export default App;
