import React, { Component } from 'react'
import './Inscripcion.css';

const lista_sedes= {
    basico: [
        {
            sede: "Universidad 1",
            id: 11,
        },
        {
            sede: "Universidad 2",
            id: 12
        },
        {
            sede: "Universidad 3",
            id: 13
        }
    ],
    intermedio: [
        {
            sede: "Universidad 11",
            id: 21
        },
        {
            sede: "Universidad 22",
            id: 22
        },
        {
            sede: "Universidad 33",
            id: 23
        }
    ],
    avanzado: [
        {
            sede: "Universidad 111",
            id: 31
        },
        {
            sede: "Universidad 222",
            id: 32
        },
        {
            sede: "Universidad 333",
            id: 33
        }
    ]

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
        
    }
    render(){
        let visibility_mask = {
            display: 'block'
        }
        if (this.state.link !== null) {
            visibility_mask['display'] = "none"
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
                            <select id="nivel" className="form-control" onChange={(val) => this.setState({nivel:val.target.value,value:"default",sede:null})}>
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
                            {console.log(this.state.sede)}
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
                                <input type="text" className="form-control" id="nombre" placeholder="Primer y segundo nombre"></input>
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
                                <input type="text" className="form-control" id="rut" placeholder="12345678-9"></input>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="genero">Género</label>
                                <select id="genero" className="form-control">
                                    <option defaultValue>Femenino</option>
                                    <option>Masculino</option>
                                    <option>No informa</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Escribe tu correo electrónico" ></input>
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
                                    <option defaultValue>Municipal</option>
                                    <option>Particular Subencionado</option>
                                    <option>Particular</option>
                                </select>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        
                        <div align="center">
                            <button type="submit" style={{paddingRight:"30px",marginTop:"20px"}} className={"btn text-white btn-danger"}><i className="fas icono fa-paper-plane"></i>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}