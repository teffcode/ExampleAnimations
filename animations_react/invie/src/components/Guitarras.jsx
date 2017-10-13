import React, {Component} from 'react';

class Guitarras extends Component {
    render(){
        return(
            <section id="guitarras" className="guitarras contenedor"> 
                <h2>Nuestra guitarras</h2>
                <div className="video-demo-contenedor">
                    <div className="video-demo">
                    <div className="video-responsive-contenedor">
                        <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                    <video src="video/320x240.ogg"></video> 
                <article className="guitarra"> 
                    <img className="derecha" data-src="images/invie-acustica.png|images/invie-acustica2x.png"  alt="Guitarra Invie Acustica" width="350"/>
                    <div className="contenedor-guitarra-a">
                    <h3 className="title-b">Invie Acustica</h3>
                    <ol>
                        <li>Estilo vintage</li>
                        <li>Madera pura</li>
                        <li>Incluye estuche invisible de aluminio</li>
                    </ol>
                    </div>
                </article>
                <article className="guitarra b"> 
                    <img className="izquierda" data-src="images/invie-classic.png|images/invie-classic2x.png" alt="Guitarra Invie Classic" width="350"/>
                    <div className="contenedor-guitarra-b">
                    <h3 className="title-b">Invie Classic</h3>
                    <ol>
                        <li>Estilo vintage</li>
                        <li>Liviana</li>
                        <li>Inicia tu camino como Rockstar</li>
                    </ol>
                    </div>
                </article>
            </section>
        );
    }
}

export default Guitarras;