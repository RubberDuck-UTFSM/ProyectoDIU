import React, { Component } from 'react';
import './Auspiciadores.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Redirect } from 'react-router';

import feria1 from './images/feria2.jpg';

import usm from './images/logo_usm.png';
import scotiabank from './images/logo_scotiabank.png';
import ripley from './images/logo_ripley.png';
import accenture from './images/logo_accenture.png';
import firstjob from './images/logo_firstjob.png';

class CardStand extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center ">
                <div className="card card-stand" style={{ height: "350px", width: "250px", marginBottom: "1rem" }}>
                    <div style={{ width: "250px", height: "120px" }} >
                        <img src={this.props.logo} style={{ maxWidth: "200px", maxHeight: "120px", marginTop: this.props.marginTop, width: this.props.width, height: this.props.height, paddingTop: this.props.paddingTop }} alt="..." />
                    </div>
                    <div className="card-body " >
                        <p className="card-text text-left" style={{ fontSize: "0.8rem", marginBottom: "0px" }} >Para conocer mas sobre <strong>{this.props.titulo}</strong> accede al sitio <a href={this.props.info} rel="noopener noreferrer" target="_blank" type="button" className=""><i className="icono fas fa-external-link-alt fa-sm"></i>más info</a>. </p>
                        <br></br>
                        <p className="card-text text-left" style={{ fontSize: "0.8rem", marginBottom: "0px" }} >Pronto estará disponible la presentación en vivo</p>
                        <div className="text-center" style={{ marginTop: "10px" }}>
                            <a className="btn btn-primary text-white disabled">Visitar stand<i className="fas fa-chevron-right icono"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const arrowleft = <button className="arrow arrow-left" ></button>
const arrowright = <button className="arrow arrow-right" ></button>
const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
    }
}

const carousel_IA =
    <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={6000}
        autoPlay={true}
        centerMode={false}
        containerclassName="react-multi-carousel-list "
        draggable
        focusOnSelect={false}
        infinite={true}
        keyBoardControl
        minimumTouchDrag={0}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        customLeftArrow={arrowleft}
        customRightArrow={arrowright}
        responsive={responsive}
        showDots={false}
        sliderclassName="react-multi-carousel-track"
        slidesToSlide={1}
        swipeable
    >
        <CardStand logo={usm} titulo="Admisión USM" info="https://usm.cl/admision/" puesto="." marginTop="15%" width="70%" />
        <CardStand logo={scotiabank} titulo="Scotiabank" info="https://scotiabank.trabajando.cl/home/" puesto="." paddingTop="10px" marginTop="15%" />
        <CardStand logo={ripley} titulo="Ripley tech" info="https://www.getonbrd.com/companies/ripley-cl" height="45%" marginTop="20%" puesto="." />
        <CardStand logo={accenture} titulo="accenture" info="https://www.accenture.com/cl-es" puesto="." paddingTop="20%" width="60%" />
        <CardStand logo={firstjob} titulo="firstjob" info="https://firstjob.me/" puesto="." paddingTop="20%" width="60%" />
    </Carousel>

export default class Auspiciadores extends Component {
    render() {
        return (
            <>
                <div className=" bg-light">
                    <div className="jumbotron paralProyectos" style={{ backgroundImage: `url(${feria1})` }}>
                        <div className="container-fluid overlay text-center">
                            <div className="container-proyectos " >
                                <h1 className="display-4 text-white text-left" style={{ fontSize: "3rem", marginLeft: "80px" }}>Auspiciadores <strong >Feria de Software 2020</strong></h1>
                                <br></br>
                                <br></br>
                                {carousel_IA}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}