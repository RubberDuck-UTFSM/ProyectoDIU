import React from 'react';
import { Component } from 'react'
import Home from './views/Home';
import About from './views/About';
import Material from './views/Material';
import Estudiantes from './views/Estudiantes';
import Votacion from './views/Votacion';
import logo1 from './views/images/logo_usm.png';
import logo2 from './views/images/logo_scotiabank.png'
import logo3 from './views/images/logo_ripley.png'
import logo4 from './views/images/logo_accenture.png'
import logo5 from './views/images/logo_firstjob.png'
import logo from './views/images/logo_feria.png'
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
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChangeNone = this.handleChangeNone.bind(this);
    this.state = { s1: ' active', s2: '', s3: '', s4: '', s5: '' };
  }

  handleChange1() {
    this.setState({ s1: ' active', s2: '', s3: '', s4: '', s5: '' });
  }
  handleChange2() {
    this.setState({ s1: '', s2: ' active', s3: '', s4: '', s5: '' });
  }
  handleChange3() {
    this.setState({ s1: '', s2: '', s3: ' active', s4: '', s5: '' });
  }
  handleChange4() {
    this.setState({ s1: '', s2: '', s3: '', s4: ' active', s5: '' });
  }
  handleChange5() {
    this.setState({ s1: '', s2: '', s3: '', s4: '', s5: ' active' });
  }
  handleChangeNone() {
    this.setState({ s1: '', s2: '', s3: '', s4: '', s5: '' });
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <a id="arriba"></a>
          <div className=" container-fluid ">
            <div className="row bg-custom" >
              <div className="container" style={{ padding: "0px" }}>
                <div className="navbar-dark bg-custom ">
                  <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand correccionTitulo" href="/"><img src={logo} className="px-3 linea " alt="" height="40"></img> Feria de <b>Software</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div data-target="#navbarSupportedContent" className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto " >
                        <li className={"nav-item" + this.state.s1} >
                          <Link onClick={this.handleChange1} to="/" className="nav-link">Hall Central</Link>
                        </li>
                        <li className={"nav-item" + this.state.s2}>
                          <Link onClick={this.handleChange2} className="nav-link" to="/about"><i className="icono fas fa-robot"></i>Stands IA</Link>
                        </li>
                        <li className={"nav-item" + this.state.s3}>
                          <Link onClick={this.handleChange3} className="nav-link" to="/estudiantes"><i className="icono fas fa-laptop-code"></i>Stands TD</Link>
                        </li>
                        <li className={"nav-item" + this.state.s4}>
                          <Link onClick={this.handleChange4} className="nav-link" to="/material"><i className="icono fas fa-user-tie"></i>Auspiciadores</Link>
                        </li>
                        <li className={"nav-item" + this.state.s5}>
                          <Link onClick={this.handleChange5} className="nav-link" to="/material">Informaciones</Link>
                        </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0" style={{ marginRight: "14px" }}>
                        <Link onClick={this.handleChangeNone} to="/votacion"><button className="btn btn-warning btn-yellow my-2 my-sm-0 btn-rounded" type="submit" style={{ color: "white" }}><i className="fas icono fa-award"></i> Vota por tus favoritos</button></Link>
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
              <Route path="/contenido" >
              </Route>
              <Route path="/estudiantes/Intermedio">
                <Estudiantes basico="" intermedio="show active" avanzado="" />
              </Route>
              <Route path="/estudiantes/Avanzado">
                <Estudiantes basico="" intermedio="" avanzado="show active" />
              </Route>
              <Route path="/estudiantes">
                <Estudiantes basico="show active" intermedio="" avanzado="" />
              </Route>
              <Route path="/votacion">
                <Votacion />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <footer id="sticky-footer cuerpo" className="">
            <div className="container-fluid bg-light text-secondary" >
              <div className="row  py-4 justify-content-center ">
                <div className="patrocinadores">
                  <h5 className="display-4 align-self-center" style={{ fontSize: "23px", paddingTop: "19px", paddingLeft: "16px" }}>Auspiciadores </h5>
                </div>
                <img src={logo1} className="px-3" alt="" height="80"></img>
                <img src={logo2} className="px-3" alt="" height="60"></img>
                <img src={logo3} className="px-3" alt="" height="60"></img>
                <img src={logo4} className="px-3" alt="" height="40"></img>
                <img src={logo5} className="px-3" alt="" height="70"></img>
              </div>
            </div>
            <div className="container-fluid bg-custom text-white-50 py-4 ">
              <div className="container">
                <div className="row informacion-footer">
                  <div className="col-lg-7">
                    <div className="row">
                      <img src={logo} className="px-3 linea " alt="" height="40"></img>
                      <h4> XXVIII Feria de Software Virtual </h4>
                    </div>
                    <br></br>
                    <p>© 2020</p>
                    <p className="font-weight-bold">Departamento de Informática</p>
                    <p>Universidad Técnica Federico Santa María</p>
                    <p><i className="fas fa-envelope icono fa-xs"></i>feria@inf.utfsm.cl</p>
                    <div style={{ paddingTop: "10px" }}>
                      <a href="https://www.facebook.com/feriadesoftwareutfsm/" target="_blank" rel="noopener noreferrer" className="fab icono fa-facebook-square fa-lg" style={{ color: "#4267b2" }}></a>
                      <a href="https://www.instagram.com/feriasoftware/" target="_blank" rel="noopener noreferrer" className="fab icono fa-instagram fa-lg" style={{ color: "#c13584" }}></a>
                      <a href="https://twitter.com/FeriaSoftware" target="_blank" rel="noopener noreferrer" className="fab icono fa-twitter fa-lg" style={{ color: "rgba(29,161,242,1.00)" }}></a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <h6>Campus Casa Central Valparaíso</h6>
                    <p><i className="icono fas fa-map-marker-alt fa-xs"></i>Av.España 1680, Valparaíso.</p>
                    <p><i className="icono fas fa-phone-alt fa-xs"></i>+56 (32) 2654242</p>
                    <br></br>
                    <h6>Campus Santiago San Joaquín </h6>
                    <p><i className="icono fas fa-map-marker-alt fa-xs"></i>Av. Vicuña Mackenna 3939, Santiago.</p>
                    <p><i className="icono fas fa-phone-alt fa-xs"></i>+56 (2) 2303 7200</p>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center " style={{ paddingTop: "20px" }}>
                <small>Desarrollado por <i className="fas icono fa-gem"></i>  Joaquín Castillo & <i className="fas icono fa-fish"></i> María Paz Morales & <i className="fas icono fa-crown"></i> Axel Reyes</small>
              </div>
            </div>

          </footer>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

