import React, { Component } from 'react';
import './Material.css';
import ScrollToTop from "react-scroll-up";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import ReactPlayer from 'react-player'
//target="_blank" rel="noopener noreferrer" Para abrir link de manera segura en nueva pestaña
//lead
class Planificacion extends Component{
	render(){
		return(
			<div>
				<h1 className="display-4">Planificación Taller Básico</h1>
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
	state = {
		expanded: [],
		presentacion:"",
		showPresentacion:"d-none",
		video:"",
		showVideo:"d-none",
	};
	render(){
		const nodes = [
			{value: '1',
			label: 'Sesión 1: Título Sesión 1',
			showCheckbox:false,
			children: [
				{ icon:<i className="fas fa-file-powerpoint text-dark"></i> ,value: "presentacion1", 
					label:<>Presentación Sesión 1 (<a href="#verpresentacion" onClick={() => this.setState({presentacion: "https://docs.google.com/presentation/d/e/2PACX-1vRbv-mC5vfe3HlNgt7VfRkxUaCHSNeIDppO2Gm-nNqahn0-19OLbUaNZcuIB5BbOFrM2_7gWjkf2WG7/embed?start=false&loop=false&delayms=3000",showPresentacion:"",showVideo:"d-none",video:""})}>Ver</a>)</>, showCheckbox:false,},
				{ icon:<i className="fas fa-external-link-alt text-dark"></i>, value: 'ejercicio11', 
					label:<a href="http://progra.usm.cl/apunte/ejercicios/1/saludo.html" target="_blank"  rel="noopener noreferrer">Ejercicio 1</a>, showCheckbox:false,},
				{ icon:<i className="fas fa-film text-dark"></i>, value: 'video11', 
					label:<>Video sobre algo (<a href="#vervideo" onClick={() => this.setState({presentacion: "", showPresentacion:"d-none",showVideo:"",video:"https://www.youtube.com/watch?v=6djggrlkHY8" })}>Ver</a>)</>, showCheckbox:false,}
			]},
			{value: '2',
			label: 'Sesión 2: Título Sesión 2',
			showCheckbox:false,
			children: [
				{ icon:<i className="fas fa-file-powerpoint text-dark"></i> ,value: "presentacion2", 
					label:<>Presentación Sesión 2 (<a href="#verpresentacion" onClick={() => this.setState({presentacion:"https://docs.google.com/presentation/d/e/2PACX-1vQmd9ccIvLLrAKufpz6GcVE2cn1YlejwiAXh9Jz3yDw33zufAtiMrw4n6LnbeXOl9fLKtRG59yBXVB9/embed?start=false&loop=false&delayms=3000",showPresentacion:"",showVideo:"d-none",video:""})}>Ver</a>)</>, showCheckbox:false,},
				{ value: 'archivo2', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '3',
			label: 'Sesión 3: Título Sesión 3',
			showCheckbox:false,
			children: [
				{ value: 'archivo3', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '4',
			label: 'Sesión 4: Título Sesión 4',
			showCheckbox:false,
			children: [
				{ value: 'archivo4', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '5',
			label: 'Sesión 5: Título Sesión 5',
			showCheckbox:false,
			children: [
				{ value: 'archivo5', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '6',
			label: 'Sesión 6: Título Sesión 6',
			showCheckbox:false,
			children: [
				{ value: 'archivo6', label:<a > Archivos </a>,showCheckbox:false, },			]},
			{value: '7',
			label: 'Sesión 7: Título Sesión 7',
			showCheckbox:false,
			children: [
				{ value: 'archivo7', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '8',
			label: 'Sesión 8: Título Sesión 8',
			showCheckbox:false,
			children: [
				{ value: 'archivo8', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '9',
			label: 'Sesión 9: Título Sesión 9',
			showCheckbox:false,
			children: [
				{ value: 'archivo9', label:<a > Archivos </a>,showCheckbox:false, },
			]},{value: '10',
			label: 'Sesión 10: Título Sesión 10',
			showCheckbox:false,
			children: [
				{ value: 'archivo10', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '11',
			label: 'Sesión 11: Título Sesión 11',
			showCheckbox:false,
			children: [
				{ value: 'archivo11', label:<a > Archivos </a>,showCheckbox:false, },
			]},
			{value: '12',
			label: 'Sesión 12: Título Sesión 12',
			showCheckbox:false,
			children: [
				{ value: 'archivo12', label:<a > Archivos </a>,showCheckbox:false, },
			]},
		];
		return(
			<div>
				<h1 className="display-4">Material Digital</h1>
				<hr></hr>
				<p>Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat.</p>
				<CheckboxTree
				iconsClassName="fa5"
                nodes={nodes}
				expanded={this.state.expanded}
                onExpand={expanded => this.setState({ expanded })}/>
				<div style={{paddingTop:"30px"}} className="d-flex">
					<iframe id="verpresentacion" className={this.state.showPresentacion} src={this.state.presentacion} frameBorder="0" width="800" height="479" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
				</div>
				<div className={'player-wrapper '+ this.state.showVideo} id="vervideo" style={{maxWidth:"800px"}}>
					<ReactPlayer controls className='react-player' url={this.state.video} width='100%' height='100%'/>
				</div>
			</div>
		)
	}
}

class Importante extends Component{
	render(){
		return(
			<div className={"bs-callout shadow-sm bs-callout-warning "+this.props.color}>
				<h5>{this.props.titulo}</h5>
				<p>{this.props.contenido}</p>
			</div>
		)
	}
}

class Recomendacion extends Component{
	render(){
		return(
			<div style={{marginBottom:"35px"}}>
			<hr></hr>
			<h2 style={{marginTop:"25px",marginBottom:"15px"}}>{this.props.titulo}</h2>
			<p>{this.props.contenido}</p>		
			<Importante color="warning" titulo="Importante" contenido="Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis." />
			</div>
		)
	}
}

class Recomendaciones extends Component{
	render(){
		return(
			<div>
				<h1 className="display-4 correccionCelular">Recomendaciones</h1>
				<hr></hr>
				<div className="row" style={{marginTop:"30px"}}>
					<div className="col-lg-3 text-center d-none d-lg-block">
						<i className="fas fa-7x fa-chalkboard-teacher"></i>
					</div>
					<div className="col-lg-9"> 
						<p className="lead" style={{fontSize:"1.1rem"}}>Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat.</p>
					</div>
				</div>
				<Recomendacion titulo="Recomendación 1" contenido="Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit at lacus blandit, commodo iaculis justo viverra. Etiam vitae est arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam tortor, commodo ac dui quis, bibendum viverra erat. Maecenas mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur et diam tristique, accumsan nunc eu, hendrerit tellus."/>
				<Recomendacion titulo="Recomendación 2" contenido="Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit at lacus blandit, commodo iaculis justo viverra. Etiam vitae est arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam tortor, commodo ac dui quis, bibendum viverra erat. Maecenas mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur et diam tristique, accumsan nunc eu, hendrerit tellus."/>
				<Recomendacion titulo="Recomendación 3" contenido="Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit at lacus blandit, commodo iaculis justo viverra. Etiam vitae est arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam tortor, commodo ac dui quis, bibendum viverra erat. Maecenas mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur et diam tristique, accumsan nunc eu, hendrerit tellus."/>
				<div className="d-none d-lg-block "></div>
				<div className="d-none d-lg-block ">
					<ScrollToTop showUnder={360} style={{bottom: "90px"}}>
						<span style={{color:"rgba(0,0,0,.5)"}} ><i className="fas fa-chevron-up fa-2x"></i></span>
					</ScrollToTop>
				</div>
			</div>
		)
	}
}

class Actividad extends Component{
	render(){
		return(
			<div style={{marginBottom:"30px"}}>
				<div className="shadow-sm mb-3 rounded bg-light">
					<div className="card-body" >
						<h4 className="card-title"><i className="fas icono fa-gamepad"></i> {this.props.titulo}</h4>
						<hr></hr>
						<div >
							<div className="row card-text">
								<div className="col-lg-3 " align="center">
								<img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
								</div>
								<div className="col"><p>{this.props.definicion}</p></div>
							</div>	
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

class Actividades extends Component{
	render(){
		return(
			<div>
				<h1 className="display-4 correccionCelular">Actividades de Recreación</h1>
				<hr></hr>
				<p style={{marginBottom:"30px"}}>Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat.</p>
				<Actividad titulo="Actividad 1" definicion="Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat."/>
				<Actividad titulo="Actividad 2" definicion="Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat."/>
				<Actividad titulo="Actividad 3" definicion="Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat."/>
				<div className="d-none d-lg-block ">
					<ScrollToTop showUnder={360} style={{bottom: "90px"}}>
						<span style={{color:"rgba(0, 0, 0, 0.5)"}} ><i className="fas fa-chevron-up fa-2x"></i></span>
					</ScrollToTop>
				</div>
			</div>
		)
	}
}

export default class Material extends Component{
    render(){
        return(
        	<section className="material">
				<div className="jumbotron-fluid paral paralbackground" >
					<div className="overlay ">
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
								<div className="col-lg-2 ">
									<div className="nav flex-column nav-pills nav-material2 stiky-list" id="v-pills-tab" role="tablist" aria-orientation="vertical">
										<a className="link-material nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Planificación</a>
										<a className="link-material nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Material</a>
										<a className="link-material nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Recomendaciones</a>
										<a className="link-material nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Actividades de Recreación</a>
									</div>
								</div>
								<div className="col-lg-10" style={{paddingTop:"30px",paddingBottom:"30px"}}>
									<div className="tab-content" id="v-pills-tabContent">
										<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
											<Planificacion/>
										</div>
										<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
											<SeccionMaterial s1="Nombre Sesión 1"/>
											
										</div>
										<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
											<Recomendaciones />
										</div>
										
										<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
											<Actividades />
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-contact-tab">
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