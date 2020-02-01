import React, { Component } from 'react'
import './Estudiantes.css';

function InformacionCurso(props){
    return(
        <div className="jumbotron paral2" style={{backgroundImage:"url("+props.image+")"}}>
            <div className="overlay">
                <h1 className="display-3">Nivel <strong className={"text-"+props.color}>{props.nombreCurso}</strong></h1>
                <p className="lead">{props.descripcion}</p>
            </div>
        </div>
    )
}

export default class Estudiantes extends Component{
    render(){
        return(
            <div className="bodyEstudiantes">
                <ul className="nav nav-pills nav-fill mb-3 bg-light" >
                    <li className="nav-item niveles">
                        <a className="nav-link rounded-0 text-white active bg-warning" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fas fa-terminal icono"></i>Básico
                        </a>
                    </li>
                    <li className="nav-item niveles">
                        <a className="nav-link rounded-0 text-white bg-success" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fas fa-terminal icono"></i>Intermedio
                        </a>
                    </li>
                    <li className="nav-item niveles">
                        <a className="nav-link rounded-0 text-white bg-primary" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <i className="fas fa-terminal icono"></i>Avanzado
                        </a>
                    </li>
                </ul>
                <div className="tab-content" style={{marginTop: "-16px"}}>
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <InformacionCurso nombreCurso="Básico" 
                        image="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat. Integer eu imperdiet justo. Fusce tempor mi nec tellus dignissim, vel lacinia lectus egestas. Duis mollis dui metus, ac egestas libero facilisis a. Mauris aliquet vestibulum justo in placerat. Proin congue tortor id nunc aliquet dapibus. Cras pharetra nisl in nulla tempor, nec commodo magna tristique. Mauris eget vehicula elit. Praesent tincidunt arcu tempor, volutpat enim ac, placerat lorem."
                        color="warning"/>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <InformacionCurso nombreCurso="Intermedio" 
                        image="https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat. Integer eu imperdiet justo. Fusce tempor mi nec tellus dignissim, vel lacinia lectus egestas. Duis mollis dui metus, ac egestas libero facilisis a. Mauris aliquet vestibulum justo in placerat. Proin congue tortor id nunc aliquet dapibus. Cras pharetra nisl in nulla tempor, nec commodo magna tristique. Mauris eget vehicula elit. Praesent tincidunt arcu tempor, volutpat enim ac, placerat lorem."
                        color="success"/>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <InformacionCurso nombreCurso="Avanzado"
                        image="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80"
                        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat. Integer eu imperdiet justo. Fusce tempor mi nec tellus dignissim, vel lacinia lectus egestas. Duis mollis dui metus, ac egestas libero facilisis a. Mauris aliquet vestibulum justo in placerat. Proin congue tortor id nunc aliquet dapibus. Cras pharetra nisl in nulla tempor, nec commodo magna tristique. Mauris eget vehicula elit. Praesent tincidunt arcu tempor, volutpat enim ac, placerat lorem."
                        color="primary"/>
                    </div>
                </div>         
            </div>
        )
    }

}