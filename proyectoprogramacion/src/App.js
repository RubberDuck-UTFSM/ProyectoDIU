import React from 'react';
import { Component } from 'react'
import Home from './views/Home';
import Informaciones from './views/Informaciones';
import Material from './views/Material';
import Estudiantes from './views/Estudiantes';
import Votacion from './views/Votacion';
import Expositores from './views/Expositores';
import Stand from './views/Stand';
import logo1 from './views/images/logo_usm.png';
import logo2 from './views/images/logo_scotiabank.png'
import logo3 from './views/images/logo_ripley.png'
import logo4 from './views/images/logo_accenture.png'
import logo5 from './views/images/logo_firstjob.png'
import logo from './views/images/logo_feria.png'
import logodi from './views/images/logo_di.png'
import hall from './views/images/hall3.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const lista_proyectos = ["+Life", "Allegro Training", "Artificial Inventory", "Bookaro", "DACoT", "dBarrio", "DressUAPP", "Ecos", "Empaty", "EufoniApp", "Neurile", "OneCheck", "TrAIner", "TuReciclaje", "Unveiled", "U-Assist", "Vinculados", "Vital Signs CheckUp", "Vpositive", "Weefly"]

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChangeNone = this.handleChangeNone.bind(this);
    this.handleClickFormulario = this.handleClickFormulario.bind(this);
    this.handleClickFormularioExpositor = this.handleClickFormularioExpositor.bind(this);
    this.handleClickExpositor = this.handleClickExpositor.bind(this);
    this.state = {
      s1: ' active',
      s2: '',
      s3: '',
      s4: '',
      s5: '',
      formulario: true,
      expositor: false,
      menu: true,
      proyecto: "default",
      clave:"",
      nombre:"",
      apellido:"",
      correo:""
    };
  }

  handleInput = (e) => {
    this.setState({ proyecto: e.target.value })
  }
  handleClave = (e) => {
    this.setState({ clave: e.target.value })
  }

  handleNombre = (e) => {
    this.setState({ nombre: e.target.value })
  }

  handleApellido = (e) => {
    this.setState({ apellido: e.target.value })
  }

  handleCorreo = (e) => {
    this.setState({ correo: e.target.value })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClickFormularioExpositor();
    }
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
  handleClickFormulario() {
    if(this.state.nombre == "" || this.state.apellido == "" || this.state.correo == ""){
      alert("Debe rellenar todos los campos para ingresar.");
    }
    else{
      this.setState({ formulario: false, menu: true });
    }
  }
  handleClickExpositor() {
    this.setState({ expositor: true });
  }

  handleClickFormularioExpositor() {
    if(this.state.proyecto == "default" || this.state.clave == ""){
      alert("Debe rellenar todos los campos para ingresar.");
    }
    else if(this.state.clave != "feria1234"){
      alert("Clave incorrecta.");
    }
    else{
      this.setState({ formulario: false, menu: false });
    }
  }

  render() {
    return (
      <>
        {this.state.formulario ?
          <div className="jumbotron container-home" style={{ backgroundImage: `url(${hall})` }}>
            <div className="container-fluid" style={{ background: "rgb(38, 38, 53)", minHeight: "110px" }}>
            </div>
            <div className="container-fluid overlay-formulario">
              <div className="row justify-content-center" style={{ marginTop: "20px" }}>
                <img src={logo} className="px-3 linea " alt="" height="60" style={{ marginRight: "60px" }}></img>
                <img src={logodi} className="px-3 linea " alt="" height="70"></img>
              </div>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                  {this.state.expositor ?
                    <div>
                      <div className="card card-formulario text-white" style={{ marginTop: "140px", paddingLeft: "20px", paddingRight: "20px" }}>
                        <div className="card-body">
                          <div className="text-center">
                            <h5 className="card-title" style={{ fontSize: "1.4rem" }}>Acceso Expositores</h5>
                          </div>
                          <div className="form-group ">
                            <label htmlFor="proyecto">Proyecto</label>
                            <select id="proyecto" className="form-control form-control-sm" onChange={this.handleInput} value = {this.state.proyecto}>
                              <option defaultValue value="default">Selecciona...</option>
                              {lista_proyectos.map((x, index) => {
                                return (
                                  <option key={index} value={x}>{x}</option>
                                )
                              })}
                            </select>
                          </div>
                          <form>
                            <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                              <input onKeyDown={this.handleKeyPress} onChange={this.handleClave} value={this.state.clave} type="password" class="form-control form-control-sm" id="exampleInputPassword1"></input>
                            </div>
                            <div className="text-center" style={{ marginTop: "30px" }}>
                              <a onClick={this.handleClickFormularioExpositor} className="btn btn-primary">Ingresar<i className="fas fa-chevron-right icono"></i></a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    :
                    <div className="card  card-formulario text-white" style={{ marginTop: "45px", paddingLeft: "20px", paddingRight: "20px" }}>
                      <div className="card-body">
                        <div className="text-center">
                          <h5 className="card-title" style={{ fontSize: "1.4rem" }}>Formulario de Inscripción Feria de Software 2020</h5>
                        </div>
                        <form>
                          <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input onChange={this.handleNombre} value={this.state.nombre} type="text" className="form-control form-control-sm" id="nombre" ></input>
                          </div>
                          <div className="mb-3">
                            <label for="apellido" className="form-label">Apellido</label>
                            <input onChange={this.handleApellido} value={this.state.apellido} type="text" className="form-control form-control-sm" id="apellido" ></input>
                          </div>
                          <div className="mb-3">
                            <label for="email" className="form-label">Correo</label>
                            <input onChange={this.handleCorreo} value={this.state.correo} type="email" className="form-control form-control-sm" id="email"></input>
                          </div>
                          <div className="text-center" style={{ marginTop: "30px", marginBottom: "30px" }}>
                            <a onClick={this.handleClickFormulario} className="btn btn-primary">Ingresar a la feria<i className="fas fa-chevron-right icono"></i></a>
                          </div>
                        </form>
                        <hr className="linea-blanca"></hr>
                        <div className="text-center">
                          <p className="card-text acceso-expositores">¿Eres expositor?</p>
                          <a onClick={this.handleClickExpositor} className="text-white btn-link " style={{ cursor: "pointer" }}><u>Acceso Expositores</u></a>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div className="col-4" style={{ borderColor: "white" }}></div>
              </div>
            </div>
          </div>
          :
          <React.Fragment>
            <Router>
              <a id="arriba"></a>
              <div className=" container-fluid ">
                <div className="row bg-custom" >
                  <div className="container" style={{ padding: "0px" }}>
                    <div className="navbar-dark bg-custom ">
                      <nav className="navbar navbar-expand-lg ">
                        <a><Link className="navbar-brand correccionTitulo" onClick={this.handleChange1} to="/"><img src={logo} className="px-3 linea " alt="" height="40"></img> Feria de <b>Software</b></Link></a>
                        {this.state.menu ?
                          <>
                            <div data-target="#navbarSupportedContent" className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto " >
                                <li className={"nav-item" + this.state.s1} >
                                  <Link onClick={this.handleChange1} to="/" className="nav-link">Hall Central</Link>
                                </li>
                                <li className={"nav-item" + this.state.s2}>
                                  <Link onClick={this.handleChange2} className="nav-link" to="/estudiantes">Stands Proyectos</Link>
                                </li>
                                <li className={"nav-item" + this.state.s4}>
                                  <Link onClick={this.handleChange4} className="nav-link" to="/material">Auspiciadores</Link>
                                </li>
                                <li className={"nav-item" + this.state.s5}>
                                  <Link onClick={this.handleChange5} className="nav-link" to="/informaciones">Informaciones</Link>
                                </li>
                              </ul>
                              <form className="form-inline my-2 my-lg-0" style={{ marginRight: "14px" }}>
                                <Link onClick={this.handleChangeNone} to="/votacion"><button className="btn btn-warning btn-yellow my-2 my-sm-0 btn-rounded" type="submit" style={{ color: "white" }}><i className="fas icono fa-award"></i> Vota por tus favoritos</button></Link>
                              </form>
                            </div>
                            <div style={{ cursor: "pointer" }}>
                              <i className="far fa-user-circle text-white fa-2x"></i>
                            </div>
                          </>
                          :
                          <>
                            <div data-target="#navbarSupportedContent" className="collapse navbar-collapse" id="navbarSupportedContent">

                            </div>
                            <h5 className="navbar-brand correccionTitulo" > Proyecto <b>{this.state.proyecto}</b></h5>
                            <div style={{ cursor: "pointer" }}>
                              <i className="far fa-user-circle text-white fa-2x"></i>
                            </div>
                          </>
                        }
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div >
                <Switch>
                  <Route path="/informaciones">
                    <Informaciones />
                  </Route>
                  <Route path="/material">
                    <Material />
                  </Route>
                  <Route path="/contenido" >
                  </Route>
                  <Route path="/estudiantes/Intermedio">
                    <Estudiantes basico="" intermedio="show active" avanzado="" />
                  </Route>
                  <Route path="/estudiantes/Avanzado">
                    <Estudiantes basico="" intermedio="" avanzado="show active" />
                  </Route>
                  <Route path="/estudiantes" onChange={this.handleClickFormulario}>
                    <Estudiantes basico="show active" intermedio="" avanzado="" />
                  </Route>
                  <Route path="/expositores">
                    <Expositores />
                  </Route>
                  <Route path="/votacion">
                    <Votacion />
                  </Route>
                  <Route path="/stand">
                    <Stand nombre={this.state.nombre} apellido={this.state.apellido} proyecto="dBarrio" video="K_c_7N2QIEs" pagina="https://dbarrio.feriadesoftware.cl/"/>
                  </Route>
                  <Route path="/">
                    {this.state.menu ? <Home /> : <Expositores proyecto={this.state.proyecto} />}
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
          </React.Fragment>}
      </>

    );
  }
}
export default App;

