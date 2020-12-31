import React, { Component } from 'react'
import './Inscripcion.css';

const lista_sedes= {
    basico: [
        {
            sede: "Universidad 1",
            link: "https://docs.google.com/forms/d/1jrvd3F__Kz6r3Bg8xlroTHLnhJIiedAPYlECGbFwFxY/viewform?chromeless=1&edit_requested=true",
        },
        {
            sede: "Universidad 2",
            link: null
        },
        {
            sede: "Universidad 3",
            link: null
        }
    ],
    intermedio: [
        {
            sede: "Universidad 11",
            link: null
        },
        {
            sede: "Universidad 22",
            link: null
        },
        {
            sede: "Universidad 33",
            link: null
        }
    ],
    avanzado: [
        {
            sede: "Universidad 111",
            link: null
        },
        {
            sede: "Universidad 222",
            link: null
        },
        {
            sede: "Universidad 333",
            link: null
        }
    ]

}

function validacion(){
    var sede = document.getElementById("sede").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var rut = document.getElementById("rut").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var establecimiento = document.getElementById("nombres").value;
    var tipo = document.getElementById("tipo").value;
    if(sede == "default" || nombres == "" || apellidos == "" || rut == "" || genero == "default" || email == "" || establecimiento == "" || tipo == "default"){
        alert("Debe rellenar todos los campos del formulario para poder enviar la solicitud.");
        return false;
    }
    else{
        return true;
    }
}

export default class Inscripcion extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nivel: "basico", 
            sede:null,
            link:null,
            value: "default"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(val){
        this.setState({sede:val.target.value,value:val.target.value});
        if(val.target.value !== "default"){
            for(var i = 0; i < lista_sedes[this.state.nivel].length; i++) {
                if(lista_sedes[this.state.nivel][i].sede == val.target.value){
                    this.setState({link:lista_sedes[this.state.nivel][i].link});
                }
            }
        }
        else{
            this.setState({link:null});
        }
    }
    render(){
        let visibility_mask = {
            display: 'block'
        }
        let visibility_mask2 = {
            display: 'none'
        }
        if (this.state.link !== null) {
            visibility_mask['display'] = "none";
            visibility_mask2['display'] = "block"
        }
        
        return(
            <div className="container" style={{paddingTop:"40px",paddingBottom:"40px"}}>
                <form>
                <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h1 className="display-4" style={{fontSize:"2.5rem"}}>Formulario de Inscripción Talleres de Programación</h1>
                            <br></br>
                            <h5>Datos del Taller</h5>
                            <hr></hr>
                            <p>Selecciona el nivel del taller de programación (básico, medio o avanzado), y luego escoge en cuál de las sedes disponibles te quieres inscribir. </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2"></div>
                        <div className="form-group col-md-3">
                            <label htmlFor="nivel">Nivel</label>
                            <select id="nivel" className="form-control" onChange={(val) => this.setState({nivel:val.target.value,value:"default",sede:null,link:null})}>
                                <option defaultValue value="basico">Básico</option>
                                <option value="intermedio">Intermedio</option>
                                <option value="avanzado">Avanzado</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="sede">Sede</label>
                            <select value={this.state.value} id="sede" className="form-control"  onChange={this.handleChange}>
                                <option defaultValue value="default">Selecciona...</option>
                                {lista_sedes[this.state.nivel].map((x,index) => {
                                    return (
                                    <option key={index} value={x.sede}>{x.sede}</option>
                                    )
                                })}
                            </select>
                            {console.log(this.state.link)}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="datos_personales" style={visibility_mask}>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <h5>Datos Personales</h5>
                                <hr></hr>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="nombre">Nombres</label>
                                <input type="text" className="form-control" id="nombres" placeholder="Primer y segundo nombre"></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" className="form-control" id="apellidos" placeholder="Escribe ambos apellidos"></input>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-2">
                                <label htmlFor="rut">RUT</label>
                                <input type="text" pattern="[0-9]{7,8}[-][0-9]{1}" title="Debes poner el rut sin puntos y con guión." className="form-control" id="rut" placeholder="12345678-9"></input>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="genero">Género</label>
                                <select id="genero" className="form-control">
                                    <option defaultValue value="default">Selecciona...</option>
                                    <option>Femenino</option>
                                    <option>Masculino</option>
                                    <option>No informa</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Escribe tu correo electrónico" ></input>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="establecimiento">Establecimiento Educacional</label>
                                <input type="text" className="form-control" id="establecimiento" placeholder="Colegio o Institución"></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="tipo">Tipo de Establecimiento Educacional</label>
                                <select id="tipo" className="form-control">
                                    <option defaultValue value="default">Selecciona...</option>
                                    <option>Municipal</option>
                                    <option>Particular Subencionado</option>
                                    <option>Particular</option>
                                </select>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div align="center">
                            <button type="button" onClick={validacion} style={{paddingRight:"30px",marginTop:"20px"}} className={"btn text-white btn-danger"}><i className="fas icono fa-paper-plane"></i>Enviar</button>
                        </div>
                    </div>
                    <div style={visibility_mask2}>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="card  bg-light border-white" style={{marginTop:"30px",marginBottom:"30px"}}>
                                    <div className="card-body text-dark">
                                        <p className="card-text">Esta sede tiene un formulario propio. Si deseas inscribirte, debes dirigirte al siguiente enlace: </p>
                                        <div align="center">
                                            <a href={this.state.link} target="_blank"  rel="noopener noreferrer">
                                                <button type="button" className={"btn text-white btn-danger"}>Ir al formulario<i className="fas icono fa-chevron-right"></i></button>
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}