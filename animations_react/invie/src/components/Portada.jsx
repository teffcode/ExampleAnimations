import React, {Component} from 'react';
import { connect } from 'react-redux';


// Aquí recibimos logo y menu como propiedades del componente Portada 
function mapStateToProps(state){
    return{
        logo: state.logoPortada,
        menu: state.menu
    }
}

class Portada extends Component {

    render(){
        return(
            <section id="portada" className="portada background">
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
                <div className="contenedor">
                    <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                    <h3 className="tittle-a"></h3>
                    <a className="button" href="#guitarras">Conoce más</a>
                </div>
            </section>
        );
    }
}

// mapStateToProps -> saca los datos del store
export default connect(mapStateToProps)(Portada);