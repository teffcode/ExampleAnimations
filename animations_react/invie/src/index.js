import React from 'react';
import ReactDOM from 'react-dom';
import cheet from 'cheet.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import './index.css';
import './App.css';
import './css/animations.css';
import App from './App';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';

const initialState = {
    isAnimated: false,
    menu: [
            {
                href: 'index.html',
                title: 'Home'
            },
            {
                href: '#guitarras',
                title: 'Guitarras'
            },
            {
                href: 'precios.html',
                title: 'Precios'
            }
        ],
    logoPortada: logoPortada,
    guitarras: [
        {
            image: acustica,
            alt: 'Guitarra Invie Acustica',
            name: 'Invie Acustica',
            features: [
                'Estilo vintage',
                'Madera pura',
                'Incluye estuche invisible de aluminio'
            ]
        },
        {
            image: classic,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Classic',
            features: [
                'Estilo vintage',
                'Liviana',
                'Empieza tu camino'
            ]
        }
        ]
}

// conforme cambie la acción, yo debo hacer algo diferente
// QUÉ SE TIENE QUE CAMBIAR ? ALGO DE LA ACCIÓN
// me hace un estado nuevo con las propiedades que van a llegar desde la acción
function reducer(state, action){
    switch(action.type){
        case 'UPDATE_PROPS': { // cuando la acción sea de actualizar, cambia estado inicial
            const newProps = action.payload.props;
            // retorna un NUEVO ESTADO
            // el estado anterior "state" se combina con las nuevas propiedades "newProps"
            return { ...state, ...newProps }
        }
        default:
            return state
    }
}

// CREACIÓN DEL STORE
// requiere dos parámetros: 1. reducer 2. estado inicial
// REDUCER -> maneja el cambio de datos
// ESTADO INICIAL -> conjunto de propiedades con las que voy a arrancar dentro de mi Store
const store = createStore(reducer, initialState);

const easter = {
    isAnimated: 'is-animated',
    menu: [
            {
                href: 'index.html',
                title: 'Home'
            },
    ],
    guitarras: [
        {
            image: easterA,
            alt: 'Guitarra padre de familia',
            name: 'Invie Familiar',
            features: [
                'Lista para copiar a los Simpsons',
                'Aire Puro',
                'Chistes malos'
            ]
        },
        {
            image: easterB,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Classic',
            features: [
                'Estilo vintage',
                'Liviana',
                'Empieza tu camino'
            ]
        }
    ]
}

// YO CAMBIO ALGO DEL STORE CON EL MÉTODO DISPATCH
cheet('i n v i e', () => {
    //console.log('lo lograste, descubriste el easter egg');
    // Aquí estamos ENVIANDO
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: easter,
        }
    });
})

cheet('g o b a c k', () =>{
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: initialState,
        }
    })
})

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
