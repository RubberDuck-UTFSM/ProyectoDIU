import React, { Component } from 'react';
import './Auspiciadores.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Redirect } from 'react-router';

import feria1 from './images/feria2.jpg';

import life from './logos/life.png';
import allegro from './logos/allegro.svg';
import artificial from './logos/artificial.png';
import DressUApp from './logos/DressUApp.png';
import neurile from './logos/neurile.png';
import OneCheck from './logos/onecheck.png';
import trainer from './logos/trainer.png';
import unveiled from './logos/Unveiled.png';
import weefly from './logos/weefly.png';
import dbarrio from './logos/dbarrio.webp';

import bookaro from './logos/Bookaro.png';
import dacot from './logos/dacot.png';
import ecos from './logos/ecos.png';
import empaty from './logos/empaty.png';
import eufoniapp from './logos/EufoniApp.png';
import tr3 from './logos/TR3.png';
import uassist from './logos/u-assist.png';
import vinculados from './logos/vinculados.png';
import vsc from './logos/VSC.png';
import vpositive from './logos/vpositive.png';

class CardStand extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center ">
                <div className="card card-stand" style={{ height: "350px", width: "250px", marginBottom: "1rem" }}>
                    <div style={{ width: "250px", height: "120px" }} >
                        <img href={this.props.puesto} src={this.props.logo} style={{ maxWidth: "200px", maxHeight: "120px", marginTop: this.props.marginTop, width: this.props.width, height: this.props.height, paddingTop: this.props.paddingTop, cursor: "pointer" }} alt="..." />
                    </div>
                    <div className="card-body " >
                        <p className="card-text text-left" style={{ fontSize: "0.8rem", marginBottom: "0px" }} >{this.props.descripcion}</p>
                        <a href={this.props.video} rel="noopener noreferrer" target="_blank" type="button" className="btn btn-link btn-sm align-end">video</a>
                        <a href={this.props.info} rel="noopener noreferrer" target="_blank" type="button" className="btn btn-link btn-sm align-end"><i className="icono fas fa-external-link-alt fa-sm"></i>más info</a>
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
        autoPlaySpeed={3000}
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
        <CardStand logo={life} titulo="+Life" descripcion="Sistema informático para la predicción de escasez sanguínea y la realización de tareas esenciales de los centros de transfusión de sangre." video="https://www.youtube.com/watch?v=iB697qEKB2U" info="https://life.feriadesoftware.cl/" puesto="." marginTop="15%" width="70%" />
        <CardStand logo={allegro} titulo="AllegroTraining" descripcion="Aplicación pensada para practicantes de guitarra y violín, ofreciendo varias herramientas útiles para una práctica efectiva." video="https://youtu.be/Qd3RmVLrAQg" info="https://allegrotraining.feriadesoftware.cl/" puesto="." height="187px" paddingTop="10px" marginTop="5%" />
        <CardStand logo={artificial} titulo="ArtificialInventory" descripcion="Aplicación que busca evitar quiebres de stock de productos y asegurar la distancia social a través de las cámaras de seguridad de locales comerciales." video="https://www.youtube.com/watch?v=L3-HR4Uq93w" info="https://artificialinventory.feriadesoftware.cl/#/" height="45%" marginTop="20%" puesto="." />
        <CardStand logo={DressUApp} titulo="DressUApp" descripcion="Aplicación móvil para formar una comunidad que brinde asesoramiento de imagen vía celular, con el fin de disminuir la indecisión al momento de vestirse." video="https://www.youtube.com/watch?v=r4rGf09XN7A" info="https://dressuapp.feriadesoftware.cl/" puesto="." paddingTop="20%" width="60%" />
        <CardStand logo={neurile} titulo="Neurile" descripcion="App móvil para detección de síntomas de la Enfermedad de Parkinson  de manera temprana mediante una suite de variados test científicamente validados." video="https://www.youtube.com/watch?v=9duGKz3hjTs" info="https://neurile.feriadesoftware.cl/" puesto="." paddingTop="20%" width="60%" />
        <CardStand logo={OneCheck} titulo="OneCheck" descripcion="Aplicación para corrección de evaluaciones, que reconoce y califica automáticamente respuestas de los estudiantes. Orientada a reducir la carga laboral de los profesores." video="https://www.youtube.com/watch?v=aNM-88gRVdk" info="https://onecheck.feriadesoftware.cl/" puesto="." paddingTop="20%" width="60%" />
        <CardStand logo={trainer} titulo="TrAIner" descripcion="Asistente virtual que mediante voz se encargará de motivar, aconsejar, acompañar y guiar a las personas durante los ejercicios en solitario." video="https://www.youtube.com/watch?v=A6pMJO2EFtI" info="https://trainer.feriadesoftware.cl/" puesto="." paddingTop="15%" />
        <CardStand logo={unveiled} titulo="Unveiled" descripcion="Sistema Web que detecta y levanta alertas automáticas para comportamientos anti-competitivos en el mercado a través de modelos matemáticos y algoritmos." video="https://www.youtube.com/watch?v=IQKVRmm0CZc" info="https://unveiled.feriadesoftware.cl/" puesto="." paddingTop="15%" />
        <CardStand logo={weefly} titulo="Weefly" descripcion="Aplicación Web que entrega herramientas a los clubes aéreos para mejorar la toma de decisiones, la gestión de sus recursos y la experiencia de los pilotos." video="https://www.youtube.com/watch?v=Ljt1_Ys2c7A" info="https://weefly.feriadesoftware.cl/" puesto="." width="70%" marginTop="10%" />
        <CardStand logo={dbarrio} titulo="dBarrio" descripcion="Aplicación móvil para promocionar productos de almacenes de barrio, ofreciendo al consumidor recomendaciones y seguimiento de productos." video="https://www.youtube.com/watch?v=K_c_7N2QIEs" info="https://dbarrio.feriadesoftware.cl/" puesto="." paddingTop="25%" width="65%" />
    </Carousel>

const carousel_TD =
    <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
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
        <CardStand logo={bookaro} titulo="Bookaro" descripcion="Aplicación enfocada hacia infantes con temática ‘storytelling’ con Realidad Aumentada, que enseña a través de sus cuentos la igualdad de género." video="https://www.youtube.com/watch?v=Qf4aj-bZiXc" info="https://bookaro.feriadesoftware.cl/" puesto="." marginTop="10%" />
        <CardStand logo={dacot} titulo="DACoT" descripcion="Plataforma web para gestión de datos, control y programación de los semáforos de la Unidad Operativa del Control de Tránsito de la Región Metropolitana." video="https://www.youtube.com/watch?v=s9ZIrkZ9NDY" info="https://dacot.feriadesoftware.cl/" puesto="." paddingTop="20%" width="50%" />
        <CardStand logo={ecos} titulo="Ecos" descripcion="Juego para que personas videntes y no videntes puedan jugar en igualdad de condiciones a través de diferentes salidas de video, sonido y vibración." video="https://www.youtube.com/watch?v=GVqZVAu1rVg" info="https://ecos.feriadesoftware.cl/" puesto="." paddingTop="20%" width="50%" />
        <CardStand logo={empaty} titulo="Empaty" descripcion="Aplicación para psicólogos que les permitirá realizar y organizar sesiones de terapia online de forma rápida y segura. Además de reportería para análisis de tratamientos." video="https://www.youtube.com/watch?v=mTOwdkjogHw" info="https://empaty.feriadesoftware.cl/" puesto="." paddingTop="15%" width="60%" />
        <CardStand logo={eufoniapp} titulo="EufoniApp" descripcion="Apliación que automatiza el Test de Articulación a la Repetición utilizado por fonoaudiólogos principalmente para evaluar a niñas y niños." video="https://www.youtube.com/watch?v=8SMLhoTa8Jw" info="https://eufoniapp.feriadesoftware.cl/" puesto="." paddingTop="15%" width="70%" />
        <CardStand logo={tr3} titulo="TuReciclaje" descripcion="Aplicación movil que pretende dar acceso rápido a toda la información necesaria para el proceso de reciclaje, que no siempre es clara." video="https://www.youtube.com/watch?v=fIrRHBSlr5Y" info="https://tureciclaje.feriadesoftware.cl/" puesto="." paddingTop="10%" />
        <CardStand logo={uassist} titulo="U-Assists" descripcion="Sistema web para mejorar comunicación entre cliente y ejecutivo de Contact Center, a través de un canal audiovisual para entrega de soporte de solicitudes." video="https://www.youtube.com/watch?v=xZYEAqQC6Ng" info="https://www.uassist.cl/" puesto="." paddingTop="20%" width="60%" />
        <CardStand logo={vinculados} titulo="Vinculados" descripcion="Plataforma Web que conecta las necesidades sociales con las capacidades multidisciplinarias de las instituciones, para llevar a cabo proyectos socio-ambientales." video="https://www.youtube.com/watch?v=w1Zq7pX4E_U" info="https://vinculados.feriadesoftware.cl/" puesto="." marginTop="25%" width="60%" />
        <CardStand logo={vsc} titulo="VitalSignsCheckUp" descripcion="Sistema integrado de sensores y una app para realizar chequeos médicos de manera remota y permitir a los familiares del paciente conocer su estado de salud." video="https://www.youtube.com/watch?v=lVtqkYMZ9KQ" info="https://vitalsignscheckup.feriadesoftware.cl/" puesto="." marginTop="25%" width="65%" />
        <CardStand logo={vpositive} titulo="Vpositive" descripcion="Juego en realidad virtual que ayuda a los niños a enfrentar situaciones de todo ámbito (positivas o negativas), y a encontrar el lado positivo de las circunstancias." video="https://www.youtube.com/watch?v=7qKBXzPllKk" info="https://vpositive.feriadesoftware.cl/" puesto="." paddingTop="5%" />
    </Carousel>

export default class Proyectos extends Component {
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