import React, { Component } from 'react';
import hall from './images/hall.png';
import estudiante from './images/estudiante.png';
import informaciones from './images/informaciones.png';
import auspiciadores from './images/auspiciadores.png';
import './Home.css';
import YouTube from '@u-wave/react-youtube';
import { Redirect } from 'react-router';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectInfo: false,
            redirectProy: false,
            redirectAusp: false
        }
    }

    handleOnClickInfo = () => {
        this.setState({ redirectInfo: true });
    }

    handleOnClickProy = () => {
        this.setState({ redirectProy: true });
    }

    handleOnClickAusp = () => {
        this.setState({ redirectAusp: true });
    }
    
    render() {
        if (this.state.redirectInfo) {
            return <Redirect push to="/informaciones" />;
        }
        else if(this.state.redirectProy){
            return <Redirect push to="/proyectos" />;
        }
        else if(this.state.redirectAusp){
            return <Redirect push to="/auspiciadores" />;
        }
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
                                                    <p className="card-text">¿Estás perdido? ¿no sabes a dónde ir? Ven a informarte sobre la Feria Virtual de Software de este año. Podrás revisar el cronograma y conocer las distintas actividades. </p>
                                                    <div className="text-center">
                                                        <a onClick={this.handleOnClickInfo} href="#up" className="btn btn-warning btn-yellow">Ir a informaciones<i className="fas fa-chevron-right icono"></i></a>
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
                                                        <a onClick={this.handleOnClickProy} href="#up" className="btn btn-primary text-white">Ir con los proyectos<i className="fas fa-chevron-right icono"></i></a>
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
                                                        <a onClick={this.handleOnClickAusp} href="#up" className="btn btn-warning btn-orange">Ir con los auspiciadores<i className="fas fa-chevron-right icono"></i></a>
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
