import React, { Component, Children } from 'react'
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

class Contenido extends Component{
    render(){
        return(
            <div className="col-md-6">
                <div className={"card tarjetaContenido  border-"+this.props.color+" rounded mb-5"}>
                    <div className="row no-gutters align-items-center justify-content-center">
                        <div className="col-md-4">
                            <img src={this.props.image} 
                            className="card-img" alt=""></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.numero}. {this.props.titulo} </h5>
                                <p className="card-text">{this.props.descripcion}</p>
                                <a href="\contenido"><button type="button" className={"text-white  btn btn-"+this.props.color}>Acceder <i className="fas fa-chevron-right icono"></i></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Curso extends Component{
    render(){
        return(
            <div>
                <InformacionCurso nombreCurso={this.props.nombreCurso}
                image={this.props.image}
                descripcion={this.props.descripcion}
                color={this.props.color}/>
                <div className="row corrector-estudiantes">
                    <div className="col"></div>
                    <div className="col-md-10">
                        <div className="container contenidos cuerpo-home">
                            <div className="row">
                                <Contenido color={this.props.color} numero="1"
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII="
                                titulo="Título Contenido"
                                descripcion="En este contenido se verá el contenido correspondiente al título del contenido a ver."/>
                                <Contenido color={this.props.color} numero="2"
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII="
                                titulo="Título Contenido"
                                descripcion="En este contenido se verá el contenido correspondiente al título del contenido a ver."/>
                                <Contenido color={this.props.color} numero="3"
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII="
                                titulo="Título Contenido"
                                descripcion="En este contenido se verá el contenido correspondiente al título del contenido a ver."/>
                                <Contenido color={this.props.color} numero="4"
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII="
                                titulo="Título Contenido"
                                descripcion="En este contenido se verá el contenido correspondiente al título del contenido a ver."/>
                                <Contenido color={this.props.color} numero="5"
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII="
                                titulo="Título Contenido"
                                descripcion="En este contenido se verá el contenido correspondiente al título del contenido a ver."/>
                                <Contenido color={this.props.color} numero="6"
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII="
                                titulo="Título Contenido"
                                descripcion="En este contenido se verá el contenido correspondiente al título del contenido a ver."/>
                                <Contenido color={this.props.color} numero="7"
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII="
                                titulo="Título Contenido"
                                descripcion="En este contenido se verá el contenido correspondiente al título del contenido a ver."/>                        </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
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
                        <Curso nombreCurso="Básico" 
                        image="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat. Integer eu imperdiet justo. Fusce tempor mi nec tellus dignissim, vel lacinia lectus egestas. Duis mollis dui metus, ac egestas libero facilisis a. Mauris aliquet vestibulum justo in placerat. Proin congue tortor id nunc aliquet dapibus. Cras pharetra nisl in nulla tempor, nec commodo magna tristique. Mauris eget vehicula elit. Praesent tincidunt arcu tempor, volutpat enim ac, placerat lorem."
                        color="warning"/>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Curso nombreCurso="Intermedio" 
                        image="https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat. Integer eu imperdiet justo. Fusce tempor mi nec tellus dignissim, vel lacinia lectus egestas. Duis mollis dui metus, ac egestas libero facilisis a. Mauris aliquet vestibulum justo in placerat. Proin congue tortor id nunc aliquet dapibus. Cras pharetra nisl in nulla tempor, nec commodo magna tristique. Mauris eget vehicula elit. Praesent tincidunt arcu tempor, volutpat enim ac, placerat lorem."
                        color="success"/>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <Curso nombreCurso="Avanzado"
                        image="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80"
                        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat. Integer eu imperdiet justo. Fusce tempor mi nec tellus dignissim, vel lacinia lectus egestas. Duis mollis dui metus, ac egestas libero facilisis a. Mauris aliquet vestibulum justo in placerat. Proin congue tortor id nunc aliquet dapibus. Cras pharetra nisl in nulla tempor, nec commodo magna tristique. Mauris eget vehicula elit. Praesent tincidunt arcu tempor, volutpat enim ac, placerat lorem."
                        color="primary"/>
                    </div>
                </div>         
            </div>
        )
    }

}