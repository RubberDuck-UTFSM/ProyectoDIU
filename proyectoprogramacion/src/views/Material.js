import React, { Component } from 'react';
import './Material.css';
import ScrollToTop from "react-scroll-up";
//<iframe src="file:///C:\Users\mauro\Documents\GitHub\ProyectoProgramacion\proyectoprogramacion\src\views\presentacion.pdf" width="100%" height="500px"></iframe>

class Planificacion extends Component{
	render(){
		return(
			<div>
				<h1 className="sicky-list display-4">Planificación Taller Básico</h1>
				<hr></hr>
				<p>Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat.</p>
				<table className="table table-bordered table-responsive">
					<thead className="thead-dark">
						<tr>
						<th style={{width: "1%"}} scope="col">#</th>
						<th style={{width: "28%"}} scope="col">Resultados Esperados</th>
						<th style={{width: "30%"}} scope="col">Contenidos</th>
						<th style={{width: "41%"}} scope="col">Actividades Sugeridas</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>
								<p>Quedar motivados para seguir el curso y avanzar en las distintas etapas de la programación.</p>
								<p>Ser capaces de usar la consola de Linux en forma básica.</p>
							</td>
							<td>
								<p>¿Qué es una terminal? </p>
								<p>Comandos básicos de la terminal de Linux: <code>cd</code>, <code>mkdir</code>, <code>cp</code>, <code>mv</code>, <code>rm</code>, <code>cat</code>, ejecución de programas (editores de texto), etc.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(30 min)</span> Bienvenida y (se sugiere) video de motivación Code.org + olimpiadas nacionales/internacionales y contexto de los talleres.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación </p>
								<p><span className="font-weight-light">(120 min)</span>	Taller de manejo de la consola de Linux básica.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>
								<p>Comprender el concepto de algoritmo y desarrollar intuiciones sobre sus características (terminación, correctitud, eficiencia).</p>
								<p>Comprender las etapas básicas del proceso de programar (comprensión del problema, diseño del algoritmo, codificación, compilación, ejecución y pruebas).</p>
							</td>
							<td>
								<p>Concepto de algoritmo.</p>
								<p>Proceso de programación.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(60 min)</span> Clase expositiva sobre el concepto de algoritmo: nivel de abstracción, nivel del lenguaje y características deseables: terminación, correctitud y eficiencia (intuiciones alegóricas).</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(120 min)</span>	Desarrollo de ejemplo introductorio <em>Hola Mundo</em> (edición, compilación y ejecución), modificaciones triviales del <em>Hola Mundo</em> y refuerzo del manejo del terminal en Linux.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>
								<p>Construir programas que involucren la declaración, lectura e impresión de valores enteros (en este taller, únicamente, se trabaja con variables de tipo entero -int-) y el uso de operadores aritméticos.</p>
							</td>
							<td>
								<p>Modelo simplificado de Von Neumann.</p>
								<p>Concepto de variable en programación, declaración de variables.</p>
								<p>Concepto y uso de operador aritmético (enfatizar en división y módulo).</p>
								<p>Salida por pantalla de mensajes de texto, lectura e impresión de valores de variables enteras.</p>
								<p>Desarrollo de ejercicios.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(90 min)</span> Clase expositiva sobre modelo de cómputo (Von Neumann simplificado), variables y operadores.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(60 min)</span> Solución de problemas simples sobre lectura, impresión y operaciones con enteros.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">4</th>
							<td>
								<p>Comprender el comportamiento de las estructuras de control condicionales.</p>
								<p>Comprender el uso de operadores lógicos.</p>
							</td>
							<td>
								<p>Estructuras de control condicional (<code>if</code>-<code>else</code>).</p>
								<p>Concepto de operador lógico.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(90 min)</span> Clase expositiva sobre estructuras de control condicional y operadores lógicos.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(60 min)</span> Solución de problemas simples sobre estructuras de control condicional y operadores lógicos.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">5</th>
							<td>
								<p>Desarrollar programas sencillos que requieran el uso de estructuras de control condicional, operadores aritméticos, lógicos y variables enteras.</p>
							</td>
							<td>
								<p>Estructuras de control condicional (<code>if</code> - <code>else</code>).</p>
								<p>Concepto de operador lógico.</p>
								<p>Construcción de condiciones compuestas.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(30 min)</span> Clase expositiva de repaso con ejemplos.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(120 min)</span> Solución de problemas simples sobre estructuras de control condicional y operadores lógicos.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">6</th>
							<td>
								<p>Comprender el comportamiento de las estructuras de control iterativas.</p>
							</td>
							<td>
								<p>Estructuras de control iterativas <code>while</code>.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(90 min)</span> Clase expositiva sobre estructuras de control iterativo.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(60 min)</span> Solución de problemas simples sobre estructuras de control iterativas.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">7</th>
							<td>
								<p>Desarrollar programas sencillos que requieran el uso de estructuras de control iterativas, operadores aritméticos, lógicos y variables enteras.</p>
							</td>
							<td>
								<p>Estructura de control iterativa <code>for</code> y contraste con el <code>while</code>.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(30 min)</span> Clase expositiva de repaso con ejemplos.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(120 min)</span> Solución de problemas simples sobre estructuras de control iterativas y operadores lógicos.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">8</th>
							<td>
								<p>Ser capaces de resolver problemas sencillos que requieran el uso de estructuras de control iterativas, condicionales, operadores aritméticos, lógicos y variables enteras en un juez virtual.</p>
							</td>
							<td>
								<p>Funcionamiento de un juez virtual.</p>
								<p>Envío de soluciones y depuración.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(30 min)</span> Clase expositiva sobre el empleo del juez en línea.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(120 min)</span> Solución de problemas simples sobre estructuras de control iterativas y operadores lógicos.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">9</th>
							<td>
								<p>Comprender qué son y cómo operar con arreglos unidimensionales estáticos.</p>
							</td>
							<td>
								<p>Arreglos unidimensionales estáticos.</p>
								<p>Declaración de arreglos estáticos de enteros.</p>
								<p>Operaciones de acceso y asignación en arreglos unidimensionales estáticos.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(90 min)</span> Clase expositiva sobre arreglos unidimensionales.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(60 min)</span> Solución de problemas simples sobre arreglos unidimensionales (declaración, indexado).</p>
							</td>
						</tr>
						<tr>
							<th scope="row">10</th>
							<td>
								<p>Ser capaces de realizar operaciones sencillas típicas sobre arreglos unidimensionales.</p>
							</td>
							<td>
								<p>Manipulación simple de índices en los arreglos.</p>
								<p>Búsqueda de elementos: numero de ocurrencias, devolver el índice de la primera/última ocurrencia.</p>
								<p>Devolver el índice del elemento mayor/menor.</p>
								<p>Ordenamiento cuadrático.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(90 min)</span> Clase expositiva sobre operaciones típicas sencillas en arreglos unidimensionales.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(60 min)</span> Implementación y verificación de los algoritmos vistos en clase.</p>
							</td>
						</tr>
						<tr>
							<th scope="row">11</th>
							<td>
								<p>Comprender los conceptos de función y parámetros y sus usos.</p>
								<p>Comprender cómo declar, implementar y usar funciones.</p>
							</td>
							<td>
								<p>Declaración de funciones.</p>
								<p>Paso de parámetros por valor y por referencia (intuición y dejar de lado aspectos técnicos).</p>
								<p> Uso de funciones ya implementadas.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(90 min)</span> Clase expositiva sobre funciones.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p style={{marginBottom:"0px"}}><span className="font-weight-light">(60 min)</span> Solución de problemas simples, cuya solución se facilite gracias al uso de funciones. Funciones sugeridas:</p>
								<ul>
										<li>Swap de elementos.</li>
										<li>Búsqueda de elementos en arreglo (retornando el índice).</li>
										<li>Búsqueda del elemento mayor/menor (retornando el índice).</li>
										<li>Ordenar un arreglo.</li>
										<li>Concatenar un arreglo</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th scope="row">12</th>
							<td>
								<p>Ser capaces de resolver problemas sencillos que requieran el uso de arreglos, estructuras de control iterativas, condicionales, operadores aritméticos, lógicos y variables enteras en un juez virtual.</p>
							</td>
							<td>
								<p>Selección de problemas sobre el uso de arreglos, estructuras de control iterativas, condicionales, operadores aritméticos, lógicos y variables enteras.</p>
							</td>
							<td>
								<p><span className="font-weight-light">(30 min)</span> Clase expositiva de repaso.</p>
								<p><span className="font-weight-light">(30 min)</span> Actividad de recreación y colación.</p>
								<p><span className="font-weight-light">(120 min)</span> Solución de problemas integradores simples sobre el uso de arreglos, estructuras de control iterativas, condicionales, operadores aritméticos, lógicos y variables enteras en un juez en línea. </p>
							</td>
						</tr>
					</tbody>
				</table>	
				<div className="d-none d-lg-block ">
						<ScrollToTop showUnder={360} style={{bottom: "90px"}}>
							<span style={{color:"rgba(0,0,0,.5)"}} ><i className="fas fa-chevron-up fa-2x"></i></span>
						</ScrollToTop>
				</div>
			</div>
		)
	}
}

class SeccionMaterial extends Component{
	render(){
		return(
			<div>
				<h1 className="sicky-list display-4">Material Digital</h1>
				<hr></hr>
				<p>Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat.</p>
				<div className="accordion" id="accordionExample">
					<div className="card">
						<div className="card-header" id="headingOne">
						<h5 className="mb-0">
							<button className="btn btn-link text-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							Collapsible Group Item #1
							</button>
						</h5>
						</div>
						<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						<div className="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingTwo">
						<h5 className="mb-0">
							<button className="btn btn-link text-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Collapsible Group Item #2
							</button>
						</h5>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						<div className="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingThree">
						<h5 className="mb-0">
							<button className="btn btn-link collapsed text-dark" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							Collapsible Group Item #3
							</button>
						</h5>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						<div className="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default class Material extends Component{
    render(){
        return(
        	<section>
				<div className="jumbotron paral paralbackground" >
					<div className="overlay container-fluid">
						<div className="container">
						<h1 className="display-3">Material<strong> Docente</strong></h1>
						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus purus velit, sed suscipit neque maximus eget. Sed malesuada tempor tellus ut pretium. Etiam lorem ante, convallis in est eget, tempor molestie felis. Maecenas vitae risus vestibulum, rhoncus velit at, tincidunt diam. Suspendisse auctor eget sapien nec convallis. Aliquam erat volutpat.</p>
						</div>
					</div>
				</div>
				<ul className="nav nav-material nav-pills nav-fill mb-3 bg-light" >
                    <li className="nav-item niveles">
                        <a className="nav-link rounded-0 text-white bg-warning active"id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fas fa-terminal icono"></i>Básico
                        </a>
                    </li>
                    <li className="nav-item niveles">
                        <a className="nav-link rounded-0 text-white bg-success" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fas fa-terminal icono"></i>Intermedio
                        </a>
                    </li>
                    <li className="nav-item niveles">
                        <a className="nav-link rounded-0 text-white bg-primary " id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <i className="fas fa-terminal icono"></i>Avanzado
                        </a>
                    </li>
                </ul>
				<div className="tab-content " style={{marginTop: "-16px"}}>
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
						<div className="container">
							<div className="row">
								<div className="col-md-2 ">
									<div className="nav flex-column nav-pills nav-material2 stiky-list" id="v-pills-tab" role="tablist" aria-orientation="vertical">
										<div className="link-material nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Planificación</div>
										<div className="link-material nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Material</div>
										<div className="link-material nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Consejos</div>
										<div className="link-material nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Actividades de Recreación</div>
									</div>
								</div>
								<div className="col-md-10" style={{paddingTop:"30px",paddingBottom:"30px"}}>
									<div className="tab-content" id="v-pills-tabContent">
										<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
											<Planificacion/>
										</div>
										<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
											<SeccionMaterial/>
											
										</div>
										<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...2</div>
										<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...3</div>
									</div>
								</div>
							</div>
						</div>	
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        2
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        3
                    </div>
                </div> 	
        	</section>
        )
    }

}