import React, { Component } from 'react'
import './Inscripcion.css';

const lista_sedes= {
    basico: [
        {
            sede: "Universidad 1",
            link: null
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

export default class Inscripcion extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nivel:null, 
            sede:null
        }
    }
    render(){
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
                        <div className="form-group col-md-4">
                            <label htmlFor="nivel">Nivel</label>
                            <select id="nivel" className="form-control" onChange={(val) => this.setState({nivel:val.target.value})}>
                                <option defaultValue>Básico</option>
                                <option>Intermedio</option>
                                <option>Avanzado</option>
                            </select>
                            {"hola"+this.state.nivel }
                            { console.log(this.state.nivel)}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="sede">Sede</label>
                            <select id="sede" className="form-control">
                                <option defaultValue>Selecciona...</option>
                                {lista_sedes[basico].map((x,index) => {
                                    return (
                                    <option key={index}>{x.sede}</option>
                                    )
                                })}
                                <option>Sede 1</option>
                                <option>Sede 2</option>
                            </select>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    
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
                        <div className="form-group col-md-4">
                            <label htmlFor="rut">RUT</label>
                            <input type="text" className="form-control" id="rut" placeholder="12345678-9"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="genero">Género</label>
                            <select id="genero" className="form-control">
                                <option defaultValue>Femenino</option>
                                <option>Masculino</option>
                                <option>No informa</option>
                            </select>
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
                </form>
            </div>
        )
    }

}