import React, { Component } from 'react'
import './Expositores.css';
import hall from './images/hall3.jpg';

const lista_proyectos = {
    IA: ["+Life", "Allegro Training", "Artificial Inventory", "DressUAPP", "Neurile", "OneCheck", "TrAIner", "Unveiled", "Weefly", "dBarrio"],
    TD: ["Bookaro", "DACoT", "Ecos", "Empaty", "EufoniApp", "TuReciclaje", "U-Assist", "Vinculados", "Vital Signs CheckUp", "Vpositive"]
}

function validacion() {
    var primerIA = document.getElementById("primerIA").value;
    var segundoIA = document.getElementById("segundoIA").value;
    var terceroIA = document.getElementById("terceroIA").value;
    var primerTD = document.getElementById("primerTD").value;
    var segundoTD = document.getElementById("segundoTD").value;
    var terceroTD = document.getElementById("terceroTD").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    if (primerIA == "default" || segundoIA == "default" || terceroIA == "default" || primerTD == "default" || segundoTD == "default" || terceroTD == "default" || nombres == "" || apellidos == "" || email == "") {
        alert("Debe rellenar todos los campos del formulario para poder enviar la votación.");
        return false;
    }
    else {
        alert("Votación enviada exitosamente.");
        return true;
    }
}

export default class Expositores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formulario: true,
            proyecto: "",
            link_youtube: "",
        }
    }
    render() {
        return (<>
            {this.state.formulario ? (<div className="jumbotron paralhome" style={{ backgroundImage: `url(${hall})` }}>
                <div className="container-fluid overlay">
                    <div className="container-informaciones" >
                        xd
                </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <h1 className="display-4" style={{ fontSize: "2.5rem" }}> <i className="icono fas fa-award" style={{ marginRight: "10px" }}></i>Formulario de Votación Mejores Proyectos Feria de Software 2020</h1>
                            <p>En este formulario podrás votar por tus proyectos favoritos de las dos categorías. Te recomendamos visitar todos los stands de los proyectos antes de realizar tu votación.</p>
                            <hr></hr>
                            <h5>Información Personal</h5>
                            <p>Tu información personal servirá para verificar que cada persona vote una sola vez. El voto será completamente anónimo y tu información sólo se utilizará para validar el voto.</p>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="nombre">Nombres</label>
                                    <input type="text" className="form-control" id="nombres" placeholder="Primer y segundo nombre"></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="apellidos">Apellidos</label>
                                    <input type="text" className="form-control" id="apellidos" placeholder="Escribe ambos apellidos"></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Escribe tu correo electrónico" ></input>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <hr></hr>
                            <h5>Votación Proyectos Inteligencia Artificial y Ciencia de Datos</h5>
                            <p>Selecciona los tres mejores proyectos de la categoría de Inteligencia Artificial y Ciencia de Datos.</p>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="primerIA">Primer Lugar</label>
                                    <select id="primerIA" className="form-control" onChange={(val) => this.setState({ primerIA: val.target.value })}>
                                        <option defaultValue value="default">Selecciona...</option>
                                        {lista_proyectos["IA"].map((x, index) => {

                                            return (
                                                <option key={index} value={x}>{x}</option>
                                            )

                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="segundoIA">Segundo Lugar</label>
                                    <select id="segundoIA" className="form-control" onChange={(val) => this.setState({ segundoIA: val.target.value })}>
                                        <option defaultValue value="default">Selecciona...</option>
                                        {lista_proyectos["IA"].map((x, index) => {
                                            if (this.state.primerIA !== x) {
                                                return (
                                                    <option key={index} value={x}>{x}</option>
                                                )
                                            }
                                            return (<></>)
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="terceroIA">Tercer Lugar</label>
                                    <select id="terceroIA" className="form-control" onChange={(val) => this.setState({ tercerIA: val.target.value })}>
                                        <option defaultValue value="default">Selecciona...</option>
                                        {lista_proyectos["IA"].map((x, index) => {
                                            if (this.state.primerIA !== x && this.state.segundoIA !== x) {
                                                return (
                                                    <option key={index} value={x}>{x}</option>
                                                )
                                            }
                                            return (<></>)
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <hr></hr>
                            <h5>Votación Proyectos Transformación Digital y Social</h5>
                            <p>Selecciona los tres mejores proyectos de la categoría Transformación Digital y Social.</p>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="primerTD">Primer Lugar</label>
                                    <select id="primerTD" className="form-control" onChange={(val) => this.setState({ primerTD: val.target.value })}>
                                        <option defaultValue value="default">Selecciona...</option>
                                        {lista_proyectos["TD"].map((x, index) => {

                                            return (
                                                <option key={index} value={x}>{x}</option>
                                            )

                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="segundoTD">Segundo Lugar</label>
                                    <select id="segundoTD" className="form-control" onChange={(val) => this.setState({ segundoTD: val.target.value })}>
                                        <option defaultValue value="default">Selecciona...</option>
                                        {lista_proyectos["TD"].map((x, index) => {
                                            if (this.state.primerTD !== x) {
                                                return (
                                                    <option key={index} value={x}>{x}</option>
                                                )
                                            }
                                            return (<></>)
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="terceroTD">Tercer Lugar</label>
                                    <select id="terceroTD" className="form-control" onChange={(val) => this.setState({ tercerTD: val.target.value })}>
                                        <option defaultValue value="default">Selecciona...</option>
                                        {lista_proyectos["TD"].map((x, index) => {
                                            if (this.state.primerTD !== x && this.state.segundoTD !== x) {
                                                return (
                                                    <option key={index} value={x}>{x}</option>
                                                )
                                            }
                                            return (<></>)
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div align="center">
                        <button type="button" onClick={validacion} style={{ paddingRight: "30px", marginTop: "20px" }} className={"btn text-white btn-primary"}><i className="fas icono fa-paper-plane"></i>Enviar</button>
                    </div>

                </form>
            </div>
            ) : (<a> xd</a>
                )}
        </>

        )
    }

}