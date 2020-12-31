import React, { Component } from 'react';
import hall from './hall.png';
import estudiante from './images/estudiante.png';
import informaciones from './images/informaciones.png';
import auspiciadores from './images/auspiciadores.png';
import './Home.css';
import YouTube from '@u-wave/react-youtube';

export default class Home extends Component {
    render() {
        return (
            <section>
                <div className="jumbotron paralhome" style={{ backgroundImage: `url(${hall})` }}>
                    <div className="container-fluid overlay">
                        <div className="container-informaciones" >
                            <div className="row justify-content-between">
                                <div className="col-3">
                                    <div className="row">
                                        <div className="col-10">
                                            <div className="card special-card-left" style={{ width: "18rem" }}>
                                                <div className="card-body">
                                                    <h5 className="display-1" style={{ fontSize: "2.0rem" }}>Informaciones</h5>
                                                    <p className="card-text">¿Estás perdido? ¿no sabes a dónde ir? Ven a informarte sobre la Feria Visrtual de Software de este año. </p>
                                                    <div className="text-center">
                                                        <a href="/about" className="btn btn-warning btn-yellow">Ir a informaciones<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <img src={informaciones} className="informaciones" alt="" ></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 text-center">
                                    <YouTube
                                        video="DJU9an-ZFYE"
                                        autoplay={true}
                                        width={500}
                                        height={281}
                                        modestBranding={true}
                                        annotations={false}
                                        showRelatedVideos={false}
                                        showInfo={false}
                                    />
                                    <div className="row">
                                        <div className="col-10">
                                            <div className="card special-card-center" >
                                                <div className="card-body">
                                                    <h5 className="display-1" style={{ fontSize: "2.7rem" }}>Stands de los Proyectos</h5>
                                                    <p className="card-text">Ven a conocer los distintos proyectos de la Feria de Software 2020. Podrás hablar en vivo con los estudiantes expositores, hacer preguntas y votar por tus proyectos favoritos.</p>
                                                    <div className="text-center">
                                                        <a href="/about" className="btn btn-primary">Ir con los proyectos<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <img src={estudiante} className="estudiante" alt="" ></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 ">
                                    <div className="row">
                                        <div className="col-10">
                                            <div className="card special-card-right" style={{ width: "18rem" }}>
                                                <div className="card-body">
                                                    <h5 className="display-1" style={{ fontSize: "2.0rem" }}>Stands de los auspiciadores</h5>
                                                    <p className="card-text">Ven a conocer e interactuar con las empresas auspiciadoras que hicieron prosible este evento virtual. </p>
                                                    <div className="text-center">
                                                        <a href="/about" className="btn btn-warning btn-orange">Ir con los auspiciadores<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <img src={auspiciadores} className="auspiciadores" alt="" ></img>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
