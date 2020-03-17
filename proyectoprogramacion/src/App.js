import React from 'react';
import { Component } from 'react'
import Home from './views/Home';
import About from './views/About';
import Contenido from './views/Contenido';
import Material from './views/Material';
import Estudiantes from './views/Estudiantes';
import Inscripcion from './views/Inscripcion';
import logo1 from './views/Mineduc.png';
import logo2 from './views/CentroInnovación.png'
import logo3 from './views/PNLD.png'
import logo4 from './views/logo-sccc.png'
import logo5 from './views/logo_OCI.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleChangeBasico = this.handleChangeBasico.bind(this);
    this.handleChangeIntermedio = this.handleChangeIntermedio.bind(this);
    this.handleChangeAvanzado = this.handleChangeAvanzado.bind(this);
    this.state = {basico: 'show active', intermedio: '',avanzado:''};
  }

  handleChangeBasico() {
    this.setState({basico:'show active',intermedio:'',avanzado:''});
  }
  handleChangeIntermedio() {
    this.setState({basico:'',intermedio:'show active',avanzado:''});
  }
  handleChangeAvanzado() {
    this.setState({basico:'',intermedio:'',avanzado:'show active'});
  }

  render(){
  return (
    <React.Fragment>
      <Router>
      <a id="arriba"></a>
        <div className=" container-fluid " >
          <div className="d-none d-lg-block ">
            <div className="row redes-sociales bg-dark clearfix">
              <div className="container" >
                <div className="text-light contenido float-left">
                    <i className="fas fa-envelope icono"></i> correo@gmail.com
                </div>
                <div className="text-light float-right contenido">
                <i className="fab fa-facebook-square icono"></i> ProyectoProgramación
                </div>
              </div>   
            </div>
          </div>
        
          <div className="row  bg-light" >
            <div className="container" style={{padding:"0px"}}>
              <div className="navbar-light bg-light ">
                <nav className="navbar navbar-expand-lg "> 
                  <a className="navbar-brand correccionTitulo" href="/"><i className="fas fa-code icono"></i>Página<b>Programación</b></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div  data-target="#navbarSupportedContent" className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto " >
                      <li className="nav-item" >
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                      </li>
                      <li className="nav-item">
                        <Link onClick={this.handleChangeBasico} className="nav-link" to="/estudiantes"><i className="icono fas fa-pen-alt"></i>Estudiantes</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/material"><i className="icono fas fa-folder-open"></i>Material Docente</Link>
                      </li> 
                    </ul>
                    <form className="form-inline my-2 my-lg-0" style={{marginRight:"14px"}}>
                      <Link to="/inscripcion"><button className="btn btn-primary my-2 my-sm-0 btn-rounded" type="submit"><i className="fas icono fa-robot"></i> Inscripción Talleres</button></Link>
                    </form>
                    <form className="form-inline my-2 my-lg-0">
                      <button className="btn btn-secondary my-2 my-sm-0 btn-rounded" type="submit"><i className="fas icono fa-user-astronaut"></i> Ingreso Docentes</button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div> 
        </div>
        <div >
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/material">
              <Material/>
            </Route>
            <Route path="/contenido/:id" children={<RedireccionarContenido/>}>
            </Route>
            <Route path="/estudiantes/Intermedio">
              <Estudiantes basico="" intermedio="show active" avanzado=""/>
            </Route>
            <Route path="/estudiantes/Avanzado">
              <Estudiantes basico="" intermedio="" avanzado="show active"/>
            </Route>
            <Route path="/estudiantes">
              <Estudiantes basico={this.state.basico} intermedio={this.state.intermedio} avanzado={this.state.avanzado}/>
            </Route>
            <Route path="/inscripcion">
              <Inscripcion />
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
        <footer id="sticky-footer cuerpo" className="">
        <div className="container-fluid bg-light text-secondary" >
            <div className="row  py-4 justify-content-center ">
              <div className="patrocinadores">
                <h5 className="display-4 align-self-center" style={{fontSize:"23px", paddingTop:"19px",paddingLeft:"16px"}}>Patrocinadores </h5>  
              </div>
              <img src={logo1} className="px-3 linea " alt="" height="70"></img>
              <img src={logo2} className="px-3"  alt="" height="70"></img>
              <img src={logo3} className="px-3"  alt="" height="70"></img>
              <img src={logo4} className="px-3"  alt="" height="70"></img>
              <img src={logo5} className="px-3"  alt="" height="55"></img>
            </div>
          </div>
          <div className="container-fluid bg-dark text-white-50 py-4 ">
            <div className="container">
              <div className="row informacion-footer">
                <div className="col-lg-8">
                  <div style={{fontSize:"25px"}}><i className="fas fa-code icono"></i>Página<b>Programación</b></div>
                </div>
                <div className="col-lg-4 columna-contacto">
                  <h5 className="display-4">Contáctanos</h5>  
                  <p><i className="icono fas fa-phone-alt fa-xs"></i> +562 2303 7200</p>
                  <p><i className="fas fa-envelope icono fa-xs"></i> correo@email.com</p>
                  <div style={{paddingTop:"10px"}}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="fab icono fa-facebook-square fa-lg" style={{color:"#4267b2"}}></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="fab icono fa-instagram fa-lg" style={{color:"#c13584"}}></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="fab icono fa-twitter fa-lg" style={{color:"rgba(29,161,242,1.00)"}}></a>
                  </div> 
                </div>
              </div>
            </div>
            <div className="container-fluid text-center " style={{paddingTop:"20px"}}>
              <small>Desarrollado por <i className="fas icono fa-fish"></i>  María Paz Morales & <i className="fas icono fa-frog"></i> Gonzalo Fernández</small>
            </div>
          </div>
         
        </footer>
      </Router>
    </React.Fragment>
  );
}
}
export default App;

function RedireccionarContenido() {
  let {id} = useParams();
  return (
    <Contenido id={id}/>
  );
}

