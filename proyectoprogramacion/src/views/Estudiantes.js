import React, { Component } from 'react'
import './Estudiantes.css';

export default class Estudiantes extends Component{
    render(){
        return(
            <div>
               
                <ul className="nav nav-pills nav-fill mb-3 bg-light" id="pills-tab" role="tablist">
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
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="jumbotron paral paralbackground">
                            <div className="overlay">
                                <h1 className="display-3">Material de Programación</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat. Integer eu imperdiet justo. Fusce tempor mi nec tellus dignissim, vel lacinia lectus egestas. Duis mollis dui metus, ac egestas libero facilisis a. Mauris aliquet vestibulum justo in placerat. Proin congue tortor id nunc aliquet dapibus. Cras pharetra nisl in nulla tempor, nec commodo magna tristique. Mauris eget vehicula elit. Praesent tincidunt arcu tempor, volutpat enim ac, placerat lorem.
                                </p>
                            </div>
	                    </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        ...2
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        ...3
                    </div>
                </div>
                            
                                

            </div>
        )
    }

}