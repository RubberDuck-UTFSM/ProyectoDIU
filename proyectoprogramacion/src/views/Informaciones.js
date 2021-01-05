import React, { Component } from 'react';
import './Informaciones.css';
import hall from './images/hall2.jpg';
import { Redirect } from 'react-router';

export default class Informaciones extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectProy: false,
            redirectAusp: false,
            redirectHome: false,
            redirectVot: false
        }
    }

    handleOnClickProy = () => {
        this.setState({ redirectProy: true });
    }

    handleOnClickAusp = () => {
        this.setState({ redirectAusp: true });
    }
    
    handleOnClickHome = () => {
        this.setState({ redirectHome: true });
    }

    handleOnClickVot = () => {
        this.setState({ redirectVot: true });
    }


    render() {
        if (this.state.redirectProy) {
            return <Redirect push to="/proyectos" />;
        }
        else if (this.state.redirectAusp) {
            return <Redirect push to="/auspiciadores" />;
        }
        else if (this.state.redirectHome) {
            return <Redirect push to="/" />;
        }
        else if (this.state.redirectVot) {
            return <Redirect push to="/votacion" />;
        }
        return (
            <div>
                <div className="jumbotron paralinfo" style={{ backgroundImage: `url(${hall})` }}>
                    <div className="container-fluid overlay">
                        <div className="container-informaciones-feria" >
                            <div className="row justify-content-between">
                                <div className="col-8">
                                    <div className="card special-card-informaciones">
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontSize: "2.0rem" }}>¿Qué puedes hacer en la <b>Feria de Software Virtual</b>?</h5>
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5 className="card-title" >1. Visitar los stands de los Proyectos</h5>
                                                    <p className="card-text">
                                                        En los stands de los proyectos podrás
                                                        ver todos los proyectos de este año, acceder
                                                        a sus páginas oficiales ,
                                                        y conectarte a las reuniones en línea.
                                                    </p>
                                                    <div className="text-center sin-borde">
                                                        <a onClick={this.handleOnClickProy} href="#up" className="btn btn-primary text-white">Ir con los proyectos<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
                                                    <br></br>
                                                    <h5 className="card-title" >2. Votar por tus proyectos favoritos.</h5>
                                                    <p className="card-text">
                                                        Luego de visitar los stands, puedes votar por tus proyectos favoritos de las dos categorías.
                                                    </p>
                                                    <div className="text-center" style={{ paddingTop: "-10px" }}>
                                                        <a onClick={this.handleOnClickVot} href="#up" className="btn btn-warning btn-yellow">Vota por tus favoritos<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="card-title" >3. Visitar los stands de los Auspiciadores</h5>
                                                    <p className="card-text">
                                                        En los puestos de los auspiciadores podrás
                                                        conocer más sobre las empresas que hacen
                                                        posible el evento de Feria de Software.
                                                    </p>
                                                    <div className="text-center" style={{ paddingTop: "-10px" }}>
                                                        <a onClick={this.handleOnClickAusp} href="#up" className="btn btn-warning btn-orange">Ir con los auspiciadores<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
                                                    <br></br>
                                                    <h5 className="card-title" >4. Asistir a las charlas en línea.</h5>
                                                    <p className="card-text">
                                                        Puedes asistir a las diferentes charlas de los auspiciadores que habrán a lo largo del día. Revisa el <b>cronograma</b> <a href="#cronograma">aquí.</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="card special-card-informaciones">
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontSize: "2.0rem" }}>Sobre la <b>Feria de Software</b></h5>
                                            <p className="card-text">
                                                Esta actividad se ha consolidado a lo
                                                largo del tiempo como una oportunidad
                                                en que los alumnos del Departamento
                                                de Informática de la Casa Central y del
                                                Campus Santiago de la Universidad
                                                Técnica Federico Santa María, muestran
                                                a la comunidad sus conocimientos,
                                                capacidad creativa, trabajo en equipo
                                                y emprendimiento.
                                            </p>
                                            <p>
                                                Para mayor información visite la página
                                                oficial.
                                            </p>
                                            <div className="text-center">
                                                <a href="https://www.feriadesoftware.cl/" target={"_blank"} className="btn btn-primary">Ir a la página de Feria<i className="fas fa-chevron-right icono"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: "40px", marginBottom: "60px" }}>
                    <a id="cronograma"></a>
                    <h1 className="display-4" style={{ fontSize: "2.5rem" }}>Cronograma Feria de Software 2020</h1>
                    <hr></hr>
                    <p><span className="font-weight-light">(12:00 a 12:30)</span> <b>Ceremonia inaugural</b> (on-line) en <a onClick={this.handleOnClickHome} href="#up">Hall Central</a>.</p>
                    <p><span className="font-weight-light">(12:30 a 18:30)</span> <b>Exposición Proyectos de Feria 2020</b> (on-line) en los <a onClick={this.handleOnClickProy} href="#up">stands de proyectos</a>: un total de 20 productos desarrollados por estudiantes en Categoría Inteligencia Artificial y Ciencia de Datos (IA&CD) y Categoría Transformación Digital y Social (TD&S) </p>
                    <p><span className="font-weight-light">(12:30 a 18:30)</span> <b>Votación de los mejores proyectos</b> por parte del público (online) en <a onClick={this.handleOnClickVot} href="#up">formulario de votación</a>.</p>
                    <p><span className="font-weight-light">(12:30 a 18:30)</span> <b>Charlas de Tecnología</b> de nuestros auspiciadores (on-line) en <a onClick={this.handleOnClickHome} href="#up" >Hall Central</a>.</p>
                    <ul>
                        <li>“CD4ML: Aplicando prácticas de ingeniería de software para lograr la entrega continua de modelos de machine learning”. Álvaro Hernández, consultor y desarrollador en ThoughtWorks.</li>
                        <li>"Incursionando tecnología y logística: algoritmos, problema del viajero, recorrido hormigas y problemas reales". Andrés Colonia, VP of engineering en Beetrack.</li>
                        <li>"La tecnología como facilitador de soluciones en las industrias". Inés Eusébio, Directora del área de Seguros y Tecnología y Socia en everis Chile.</li>
                        <li>"Quitando paradigmas del desarrollo profesional en Tecnología, en el sector financiero." Paola Tastets, Directora Ventas Digitales en Scotiabank Chile.</li>
                        <li>"Análisis Automático de Propaganda del Plebiscito en las radios". Sebastián Bustamante, Data Scientist en Unholster.</li>
                        <li>“Claves del éxito en el desarrollo de activos analíticos”. Andrés Gormaz, Gerente de Applied Intelligence y Daniel Irarrázabal Consultor de Applied Intelligence en Accenture Chile.</li>
                        <li>“Despegando con Ripleytech”. Manuel Pastene del Valle, Subgerente de Innovación y Desarrollo en Ripley.</li>
                        <li>“Futuro del trabajo en Tecnología”. Mario Mora, CEO & Founder FirstJob.</li>
                    </ul>
                    <p><span className="font-weight-light">(18:30 a 19:00)</span> <b>Ceremonia de cierre y premiación</b> (on-line) en <a onClick={this.handleOnClickHome} href="#up">Hall Central</a>.</p>
                </div>
            </div >

        )
    }
}