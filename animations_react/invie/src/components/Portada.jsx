import React, {Component} from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Heart from './Heart';

// Aquí recibimos logo y menu como propiedades del componente Portada 
function mapStateToProps(state){
    return{
        logo: state.logoPortada,
        menu: state.menu,
        isAnimated: state.isAnimated
    }
}

class Portada extends Component {

    renderHeart(){
        // fill -> con qué llenar el array
        // Array(10) -> el array va a tener 10 elementos
        const hearts = new Array(100).fill({})
        return (
            // va a recibir un elemento y un index para la key
            // CADA ELEMENTO ITERABLE DEBERÍA TENER UN KEY
            hearts.map((element, index) => {
                const style = {
                    // index -> vaores de 0 a 9 
                    // left: index * 50 + "px"
                    left: Math.floor((Math.random() * (window.innerWidth - 0))) + 0 + "px",
                    animationDelay: Math.floor((Math.random() * (10000 - 0))) + 0 + "ms"
                }
                return(
                    <Heart key={index} style={style}/>
                );
            })
        );
    }

    render(){
        return(
            <section id="portada" className={`portada background ${this.props.isAnimated}`}>
                <header id="header" className="header contenedor">
                    <figure className="logotipo">
                        <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
                    </figure>
                    <nav className="menu">
                        <ul>
                            {this.props.menu.map((item) => {
                                return (
                                    <li>
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </header>
                <CSSTransitionGroup
                    transitionName="animationInOut"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}
                >
                    {
                        !this.props.isAnimated && 
                        // Key para que cambie cuando esto ocurra
                        <div className="contenedor" key="portada">
                            <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                            <h3 className="tittle-a"></h3>
                            <a className="button" href="#guitarras">Conoce más</a>
                        </div>
                    }
                </CSSTransitionGroup>
                {
                    this.props.isAnimated && 
                    this.renderHeart()
                }
            </section>
        );
    }
}

// mapStateToProps -> saca los datos del store
export default connect(mapStateToProps)(Portada);