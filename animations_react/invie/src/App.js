import React, { Component } from 'react';

import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';

import logo from './logo.svg';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

import './App.css';

// const data = {
//   menu: [
//             {
//                 href: 'index.html',
//                 title: 'Home'
//             },
//             {
//                 href: '#guitarras',
//                 title: 'Guitarras'
//             },
//             {
//                 href: 'precios.html',
//                 title: 'Precios'
//             }
//         ],
//   logoPortada: logoPortada,
// }

// const guitarras = [
//   {
//       image: acustica,
//       alt: 'Guitarra Invie Acustica',
//       name: 'Invie Acustica',
//       features: [
//           'Estilo vintage',
//           'Madera pura',
//           'Incluye estuche invisible de aluminio'
//       ]
//   },
//   {
//       image: classic,
//       alt: 'Guitarra Invie Classic',
//       name: 'Invie Classic',
//       features: [
//           'Estilo vintage',
//           'Liviana',
//           'Empieza tu camino'
//       ]
//   }
// ]

class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/*<Portada menu={data.menu} logo={data.logoPortada}/>*/}
        <Portada/>
        {/*<Guitarras guitarras={guitarras}/>*/}
        <Guitarras/>
        <Footer/>
      </section>
    );
  }
}

export default App;
