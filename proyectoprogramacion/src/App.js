import React from 'react';
import { Component } from 'react'
import Home from './views/Home';
import About from './views/About';
import Contenido from './views/Contenido';
import Material from './views/Material';
import Estudiantes from './views/Estudiantes';
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
    <div >
      <Router>
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
                  
                  <a className="navbar-brand" href="/"><i className="fas fa-code icono"></i>Página<b>Programación</b></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto " >
                      <li className="nav-item" >
                        <Link to="/"  className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                      </li>

                      <li className="nav-item">
                        <Link onClick={this.handleChangeBasico} className="nav-link" to="/estudiantes"><i className="icono fas fa-robot"></i>Estudiantes</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/material"><i className="icono fas fa-folder-open"></i>Material Docente</Link>
                      </li>
                      
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="fas icono fa-user-astronaut"></i> Ingreso Docentes</button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div> 
        </div>
  
        <div  >
          
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/material">
              <Material/>
            </Route>
            <Route path="/contenido/:nivel/:numero/:titulo/:color" children={<RedireccionarContenido/>}>
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
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
        <footer id="sticky-footer cuerpo" className="py-4 bg-dark text-white-50">
          <div className="container text-center ">
            <small>Desarrollado por <i className="fas icono fa-fish"></i>  María Paz Morales & <i className="fas icono fa-frog"></i> Gonzalo Fernández</small>
          </div>
        </footer>
      </Router>
    </div>

  );
}
}

export default App;

function RedireccionarContenido() {
  let { nivel,numero,titulo,color} = useParams();
  return (
    <Contenido titulo={titulo} numero={numero} color={color} nivel={nivel}/>
  );
}

