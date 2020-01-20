import React from 'react';
import Home from './views/Home';
import About from './views/About';
import Contenido from './views/Contenido';
import Material from './views/Material';
import Estudiantes from './views/Estudiantes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';




function App() {
  return (
    <div >
      <Router>
        <div className="container-fluid cuerpo">
          <div className="d-none d-lg-block">
          <div className="row bg-dark">
            <div className="col"></div>
            <div className="col-lg-5">
              <div className="text-light contenido">
                  <i className="fas fa-envelope icono"></i> correo@gmail.com
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-light text-right contenido">
              <i className="fab fa-facebook-square icono"></i> ProyectoProgramación
              </div>
            </div>
            <div className="col"></div>
          </div>
          </div>
          <div className="row bg-light">
            <div className="col"></div>
            <div className="col-lg-10 navbar-light bg-light ">
              <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#"><i className="fas fa-code icono"></i>Página<b>Programación</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto ">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/estudiantes">Estudiantes</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/material">Material</Link>
                    </li>
                    
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Ingreso Docentes</button>
                  
                  </form>
                  
                </div>
              </nav>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div className="cuerpo">
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/material">
              <Material/>
            </Route>

            <Route path="/contenido">
                <Contenido/>
            </Route>
            <Route path="/estudiantes">
              <Estudiantes/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
        <footer id="sticky-footer cuerpo" className="py-4 bg-dark text-white-50">
          <div className="container text-center">
            <small>Desarrollado por María Paz Morales & Gonzalo Fernández</small>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
