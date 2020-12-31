import React, { Component } from 'react';
import './Informaciones.css';
import hall from './images/hall2.jpg';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron paralinfo" style={{ backgroundImage: `url(${hall})` }}>
                    <div className="container-fluid overlay">
                        <div className="container-informaciones-feria" >
                            <div className="row justify-content-between">
                                <div className="col-8">
                                    <div className="card special-card-informaciones">
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontSize: "2.0rem" }}>¿Qué puedes hacer en la <b>Feria de Software Virtual 2020</b>?</h5>
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5 className="card-title" >1. Visitar los stands de los Proyectos</h5>
                                                    <p className="card-text">
                                                        En los puestos de los proyectos podrás
                                                        ver todos los proyectos de este año, acceder
                                                        a su página oficial ,
                                                        y conectarte a la reunión en línea del proyecto que te interese.
                                                    </p>
                                                    <p>
                                                        En la reunión en línea podrás chatear con los
                                                        estudiantes a cargo y con los demás asistentes.
                                                        Cuando hayas visto todos los proyectos,
                                                        también podrás votar por tus 3 favoritos.
                                                    </p>
                                                    <div className="text-center">
                                                        <a href="/proyectos" className="btn btn-primary">Ir con los proyectos<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="card-title" >2. Visitar los stands de los Auspiciadores</h5>
                                                    <p className="card-text">
                                                        En los puestos de los auspiciadores podrás
                                                        conocer más sobre las empresas que hacen
                                                        posible el evento de Feria de Software.
                                                        Allí habrá un chat en línea para poder
                                                        conversar con ellos cuando estén disponibles
                                                        y de esta manera puedas expresar tus dudas
                                                        referentes a la empresa de tu interés.
                                                    </p>
                                                    <p>
                                                        También podrás visitar sus respectivas páginas
                                                        presionando el botón de visitar sitio web.
                                                    </p>
                                                    <div className="text-center">
                                                        <a href="/auspiciadores" className="btn btn-warning btn-orange">Ir con los auspiciadores<i className="fas fa-chevron-right icono"></i></a>
                                                    </div>
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
                                                <a href="https://www.feriadesoftware.cl/" target={"_blank"} className="btn btn-warning btn-yellow">Ir a la página de Feria<i className="fas fa-chevron-right icono"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: "40px", marginBottom: "60px" }}>
                    <h1 className="display-4" style={{ fontSize: "2.5rem" }}>Cronograma Feria de Software 2020</h1>
                    <hr></hr>
                    <p><span className="font-weight-light">(12:00 a 12:30)</span> <b>Ceremonia inaugural</b> (on-line) en <a href="/">Hall Central</a>.</p>
                    <p><span className="font-weight-light">(12:30 a 18:30)</span> <b>Exposición Proyectos de Feria 2020</b> (on-line) en los <a href="/proyectos">stands de proyectos</a>: un total de 20 productos desarrollados por estudiantes en Categoría Inteligencia Artificial y Ciencia de Datos (IA&CD) y Categoría Transformación Digital y Social (TD&S) </p>
                    <p><span className="font-weight-light">(12:30 a 18:30)</span> <b>Votación de los mejores proyectos</b> por parte del público (online) en <a href="/votacion">formulario de votación</a>.</p>
                    <p><span className="font-weight-light">(12:30 a 18:30)</span> <b>Charlas de Tecnología</b> de nuestros auspiciadores (on-line) en <a href="/">Hall Central</a>.</p>
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
                    <p><span className="font-weight-light">(18:30 a 19:00)</span> <b>Ceremonia de cierre y premiación</b> (on-line) en <a href="/">Hall Central</a>.</p>
                </div>
            </div >

        )
    }
}