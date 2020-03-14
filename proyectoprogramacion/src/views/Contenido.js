import React, { Component } from 'react';
import './Contenido.css';
import 'katex/dist/katex.min.css';
//import { InlineMath, BlockMath } from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
//import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {agate as estiloCodigo} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactPlayer from 'react-player';
import imagen from './frog-solid.svg';
import imagen2 from './imagen.jpeg';
import ScrollToTop from "react-scroll-up";

//agate
//androidstudio
//atomOneDarkReasonable
//hybrid
//monokaiSublime
//railscasts
//tomorrowNight
//,backgroundColor:"#343a40"

class Codigo extends Component{
	render(){
		return(
			<SyntaxHighlighter language={this.props.lenguaje} style={estiloCodigo} customStyle={{padding:"15px",borderRadius:".25rem",marginTop:"25px",marginBottom:"25px"}} >
				{this.props.codigo}
			</SyntaxHighlighter>
		)
	}
}

class Alerta extends Component{
	render(){
		return(
			<div className={"bs-callout shadow-sm bs-callout-"+this.props.color}>
				<h5>{this.props.titulo}</h5>
				<p>{this.props.contenido}</p>
			</div>
		)
	}
}

class Ecuacion extends Component{
	render(){
		var Latex = require('react-latex');
		return(
			<Latex>{this.props.contenido}</Latex>
		)
	}
}

class Video extends Component{
	render(){
		return(
			<div className="container-video"> 
				<div className='player-wrapper'>
					<ReactPlayer controls className='react-player' url={this.props.videolink} width='100%' height='100%'/>
				</div>
			</div>
		)
	}
}

class Imagen extends Component{
	render(){
		return(
			<div style={{marginBottom:"25px", marginTop:"25px"}}>
				<img style={{maxWidth:"100%"}} src={this.props.imagenLink} ></img> 
			</div>
		)
	}
}

class Definicion extends Component{
	render(){
		return(
			<div className="shadow-sm mb-3 rounded bg-light">
				<div className="card-body " >
					<h4 className="card-title">{this.props.titulo}</h4>
					<hr></hr>
					<div >
						<div className="row card-text">
							<div className="col-lg-1"><i className="fas icono fa-2x fa-terminal"></i></div>
							<div className="col"><p>{this.props.definicion}</p></div>
						</div>	
					</div>
				</div>
			</div>
		)
	}
}

class Frase extends Component{
	render(){
		return(
			<blockquote className="blockquote frase ">
				<p className="mb-0 ">
					<i className="fas fa-quote-left fa-xs" style={{paddingRight:"7px"}}></i>
					{this.props.frase}
					<i className="fas icono fa-quote-right fa-xs" style={{paddingLeft:"7px"}}></i>
				</p>
				<footer className="blockquote-footer">{this.props.autor}</footer>
			</blockquote>
		)
	}
}

class Parrafo extends Component{
	render(){
		return(
			<p>{this.props.parrafo}</p>
		)
	}
}

class Subseccion extends Component{
	render(){
		const contenidos = this.props.contenidos.map((x,index) => {
			if (x.tipo == "parrafo"){
				return(
					<Parrafo key={index} parrafo={x.descripcion}/>
				);
			}
			else if (x.tipo == "definicion"){
				return (
					<Definicion key={index} titulo={x.titulo} definicion={x.descripcion}/>
				);
			}
			else if (x.tipo == "video"){
				return(
					<Video key={index} videolink={x.link}/>
				);
			}
			else if (x.tipo == "ecuacion"){
				return(
					<Ecuacion key={index} contenido={x.contenido}/>
				);
			}
			else if (x.tipo == "codigo"){
				return(
					<Codigo key={index} lenguaje={x.lenguaje} codigo={x.codigo}/>			
				);
			}
			else if (x.tipo == "alerta"){
				return(
					<Alerta key={index} color={this.props.color} titulo={x.titulo}contenido={x.descripcion} />
				);
			}
			else if (x.tipo == "frase"){
				return(
					<Frase key={index} autor={x.autor} frase={x.descripcion}/>
				);
			}
			else if (x.tipo == "imagen"){
				return(
					<Imagen key={index} imagenLink={x.link} />
				);
			}
        });
		return(
			<div id={"section"+this.props.numero} style={{paddingTop:"5px"}}>
				<hr></hr>
				<h2 style={{marginTop:"25px",marginBottom:"15px"}}>{this.props.titulo}</h2>
				{contenidos}
				<ul>{/*ol para numerada*/ }
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
					<li>Integer molestie lorem at massa</li>
					<li>Facilisis in pretium nisl aliquet</li>
				</ul>
			</div>
		)
	}
}

const dataSeccion = {
	titulo: "Título del Primer Contenido",
	numero: 1,
	lista_secciones: ["Sección 1", "Sección 2", "Sección 3", "Sección 4", "Sección 5"],
	id_anterior: 11,
	id_siguiente: 13,
	nivel: "Básico",
    color: "warning",
    lista_contenidos:[
		[
			{
				tipo: "parrafo",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget risus. Integer aliquet quam ut elit suscipit, id interdum neque porttitor. Integer faucibus ligula."
			},
			{
				tipo: "definicion",
				titulo: "Terminal",
				descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
			} ,
			{
				tipo: "parrafo",
				descripcion: "Pulvinar leo id risus pellentesque vestibulum. Sed diam libero, sodales eget sapien vel, porttitor bibendum enim. Donec sed nibh vitae lorem porttitor blandit in nec ante. Pellentesque vitae metus ipsum. Phasellus sed nunc ac sem malesuada condimentum. Etiam in aliquam lectus. Nam vel sapien diam. Donec pharetra id arcu eget blandit. Proin imperdiet mattis augue in porttitor. Quisque tempus enim id lobortis feugiat. Suspendisse tincidunt risus quis dolor fringilla blandit. Ut sed sapien at purus lacinia porttitor. Nullam iaculis, felis a pretium ornare, dolor nisl semper tortor, vel sagittis lacus est consequat eros. Sed id pretium nisl. Curabitur dolor nisl, laoreet vitae aliquam id."
			},
			{
				tipo: "video",
				link: "'https://www.youtube.com/watch?v=proaHoj2_-g'"
			} ,
			{
				tipo: "parrafo",
				descripcion: "Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit at lacus blandit, commodo iaculis justo viverra. Etiam vitae est arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam tortor, commodo ac dui quis, bibendum viverra erat. Maecenas mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur et diam tristique, accumsan nunc eu, hendrerit tellus."
			},
			{
				tipo: "ecuacion",
				contenido: "En esta línea va una bella ecuación que contiene un $x^2$."
			} ,
			{
				tipo: "ecuacion",
				contenido: '$$\\int_0^ \\infty x^2 dx$$'
			},
			{
				tipo: "parrafo",
				descripcion: "Orci facilisis, dignissim tortor vitae, ultrices mi. Vestibulum a iaculis lacus. Phasellus vitae convallis ligula, nec volutpat tellus. Vivamus scelerisque mollis nisl, nec vehicula elit egestas a. Sed luctus metus id mi gravida, faucibus convallis neque pretium. Maecenas quis sapien ut leo fringilla tempor vitae sit amet leo. Donec imperdiet tempus placerat. Pellentesque pulvinar ultrices nunc sed ultrices. Morbi vel mi pretium, fermentum lacus et, viverra tellus. Phasellus sodales libero nec dui convallis, sit amet fermentum sapien auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu elementum nibh, quis varius libero."
			},
			{
				tipo: "codigo",
				lenguaje: "java",
				codigo: "public class MyClass {\n  public static void main(String[] args) {\n    for (int i = 0; i < 10; i++) {\n      if (i == 4) {\n        continue;\n      }\n      System.out.println(i);\n    }  \n  }\n}"
			},
			{
				tipo: "alerta",
				titulo: "Importante",
				descripcion: "En esta sección va algo muy importante que explica algún error común o algo por el estilo."
			},
			{
				tipo:"parrafo",
				descripcion:"Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat."
			},
			{
				tipo: "frase",
				autor: "Pablo Picasso",
				descripcion: "Las computadoras son inútiles. Sólo pueden darte respuestas."
			},
			{
				tipo:"parrafo",
				descripcion:"Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat."
			},
			{
				tipo: "imagen",
				link: imagen2
			},
			{
				tipo: "parrafo",
				descripcion: "Pulvinar leo id risus pellentesque vestibulum. Sed diam libero, sodales eget sapien vel, porttitor bibendum enim. Donec sed nibh vitae lorem porttitor blandit in nec ante. Pellentesque vitae metus ipsum. Phasellus sed nunc ac sem malesuada condimentum. Etiam in aliquam lectus. Nam vel sapien diam. Donec pharetra id arcu eget blandit. Proin imperdiet mattis augue in porttitor. Quisque tempus enim id lobortis feugiat. Suspendisse tincidunt risus quis dolor fringilla blandit. Ut sed sapien at purus lacinia porttitor. Nullam iaculis, felis a pretium ornare, dolor nisl semper tortor, vel sagittis lacus est consequat eros. Sed id pretium nisl. Curabitur dolor nisl, laoreet vitae aliquam id."
			},

		],
		[
			{
				tipo: "parrafo",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget risus. Integer aliquet quam ut elit suscipit, id interdum neque porttitor. Integer faucibus ligula."
			},
		],
		[
			{
				tipo: "parrafo",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget risus. Integer aliquet quam ut elit suscipit, id interdum neque porttitor. Integer faucibus ligula."
			},
		],
		[
			{
				tipo: "parrafo",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget risus. Integer aliquet quam ut elit suscipit, id interdum neque porttitor. Integer faucibus ligula."
			},
		],
		[
			{
				tipo: "parrafo",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget risus. Integer aliquet quam ut elit suscipit, id interdum neque porttitor. Integer faucibus ligula."
			},
		],
	]
};

export default class Contenido extends Component {
    render(){
		//Recordar cambiar key por id unico. Parece ser un asunto de vida o muerte. 
		const indiceCompleto = dataSeccion.lista_secciones.map((x,index) => {
			return (
			<a key={index} className="list-group-item list-group-item-action" href={"#section"+(index+1)}>{x}</a>
			)
		});
		const secciones = dataSeccion.lista_secciones.map((x,index) => {
			return(
				<Subseccion key={index} numero={index+1} titulo={x} color={dataSeccion.color} contenidos={(dataSeccion.lista_contenidos)[index]}/>
			)
		});
		var flechas = 
			<> 
				<a href={"/contenido/"+dataSeccion.id_anterior} className="text-muted small float-left">
					<i className="icono fas fa-chevron-left fa-sm"></i>sección anterior 
				</a>
				<a href={"/contenido/"+dataSeccion.id_siguiente} className="text-muted small float-right">
					sección siguiente<i className="icono fas fa-chevron-right fa-sm"></i>
				</a>
			</>;
		
		if (dataSeccion.id_anterior == null){
			flechas = 
			<> 
				<a href={"/contenido/"+dataSeccion.id_siguiente} className="text-muted small float-right">
					sección siguiente<i className="icono fas fa-chevron-right fa-sm"></i>
				</a>
			</>;
		}
		else if (dataSeccion.id_siguiente == null){
			flechas = 
			<> 
				<a href={"/contenido/"+dataSeccion.id_anterior} className="text-muted small float-left">
					<i className="icono fas fa-chevron-left fa-sm"></i>sección anterior 
				</a>
			</>;
		}
		
     	var Latex = require('react-latex');
        return(
        	<section>
				<ul className="nav nav-pills nav-fill mb-3 bg-light text-left">
                    <li className="nav-item niveles ">
                        <div className={"nav-link rounded-0 text-white active clearfix has-text-center align-items-center bg-"+ dataSeccion.color}>
                            <div className="container">
								<div className="float-left"> <i className="fas fa-terminal icono"></i>{dataSeccion.nivel}</div>
								<a style={{paddingTop:"15px"}} className="float-right text-white h6 font-weight-light " href={"/estudiantes/"+dataSeccion.nivel}>
									<i className="icono fas fa-chevron-left fa-sm"></i>volver a secciones
								</a>
							</div>
                        </div>
                    </li>
                </ul>
				<div className="container" style={{paddingTop:"18px"}}>
					<div className="row">
						<div className="col-sm-3" id="myScrollspy">
							<div className="list-group sticky-list">
								{indiceCompleto}
								<div className="clearfix" style={{marginTop:"10px",marginBottom:"25px"}}>
									{flechas}
								</div>
							</div>
						</div>
						<div className="col-sm-9" >
							<h1 className="sicky-list display-4">{dataSeccion.numero}. {dataSeccion.titulo}</h1>
							{secciones}
						</div>
					</div>
					
				</div>
				<div className="d-none d-lg-block ">
					<ScrollToTop showUnder={360} style={{bottom: "90px"}}>
						<span style={{color:"rgba(0,0,0,.5)"}} ><i className="fas fa-chevron-up fa-2x"></i></span>
					</ScrollToTop>
				</div>	
				<div className="jumbotron-fluid bg-light" style={{padding:"40px",marginTop:"60px"}}>
                    <div className="container">
                        <h3 className="display-4 achicar"><i className="fas icono fa-flip-horizontal fa-feather-alt"></i>Comentarios y Sugerencias </h3>
                        <p> Tu opinión es muy importante para nosotros. A través de este formulario puedes realizar sugerencias o comentarios respecto a los contenidos y ejercicios de las diferentes secciones ¡todo es bienvenido!
                            La información proporcionada no será compartida.
                        </p>
                        <hr className="my-4"></hr>
                        <form>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                            <label >Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" placeholder="Severus Snape"></input>
                            </div>
                            <div className="form-group col-md-4">
                            <label >Correo</label>
                            <input type="email" className="form-control" id="inputCorreo" placeholder="severus.snape@email.com"></input>
                            </div>
                            <div className="form-group col-md-4">
                            <label >Institución</label>
                            <input type="text" className="form-control" id="inputInstitucion" placeholder="Hogwarts"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label >Comentario</label>
                            <textarea className="form-control" id="inputComentario" rows="3" placeholder="Escribe aquí tus comentarios y sugerencias"></textarea>
                        </div>
                        <div>
                            <button type="submit" style={{paddingRight:"30px"}} className={"btn text-white btn-dark"}><i className="fas icono fa-paper-plane"></i>Enviar</button>
                        </div>
                        </form>
                    </div>  
                </div>   			
        	</section>
	    )
    };
}
