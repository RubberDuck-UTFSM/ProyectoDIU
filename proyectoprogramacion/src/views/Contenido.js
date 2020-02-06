import React, { Component } from 'react' 
import './Contenido.css';
import { MarkdownPreview } from "react-marked-markdown";
import 'katex/dist/katex.min.css';
//import { InlineMath, BlockMath } from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {agate as estiloCodigo} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactPlayer from 'react-player'
import imagen from './frog-solid.svg'
import imagen2 from './imagen.jpeg'
import { MarkdownInput } from 'react-marked-markdown/dist';
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
			<div className={"bs-callout bs-callout-"+this.props.color}>
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
		return(
			<div id={"section"+this.props.numero} style={{paddingTop:"5px"}}>
				<hr></hr>
				<h2 style={{marginTop:"25px",marginBottom:"15px"}}>{this.props.titulo}</h2>
				<Parrafo parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget risus. Integer aliquet quam ut elit suscipit, id interdum neque porttitor. Integer faucibus ligula."/>
				<Definicion titulo="Terminal" definicion="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."/>
				<Parrafo parrafo="Pulvinar leo id risus pellentesque vestibulum. Sed diam libero, sodales eget sapien vel, porttitor bibendum enim. Donec sed nibh vitae lorem porttitor blandit in nec ante. Pellentesque vitae metus ipsum. Phasellus sed nunc ac sem malesuada condimentum. Etiam in aliquam lectus. Nam vel sapien diam. Donec pharetra id arcu eget blandit. Proin imperdiet mattis augue in porttitor. Quisque tempus enim id lobortis feugiat. Suspendisse tincidunt risus quis dolor fringilla blandit. Ut sed sapien at purus lacinia porttitor. Nullam iaculis, felis a pretium ornare, dolor nisl semper tortor, vel sagittis lacus est consequat eros. Sed id pretium nisl. Curabitur dolor nisl, laoreet vitae aliquam id."/>
				<Video videolink='https://www.youtube.com/watch?v=proaHoj2_-g'/>
				<Parrafo parrafo="Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit at lacus blandit, commodo iaculis justo viverra. Etiam vitae est arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam tortor, commodo ac dui quis, bibendum viverra erat. Maecenas mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur et diam tristique, accumsan nunc eu, hendrerit tellus."/>
				<Ecuacion contenido = "En esta línea va una bella ecuación que contiene un $x^2$"/> 
				<Ecuacion contenido="$$\int_0^\infty x^2 dx$$"/>
				<Parrafo parrafo="Orci facilisis, dignissim tortor vitae, ultrices mi. Vestibulum a iaculis lacus. Phasellus vitae convallis ligula, nec volutpat tellus. Vivamus scelerisque mollis nisl, nec vehicula elit egestas a. Sed luctus metus id mi gravida, faucibus convallis neque pretium. Maecenas quis sapien ut leo fringilla tempor vitae sit amet leo. Donec imperdiet tempus placerat. Pellentesque pulvinar ultrices nunc sed ultrices. Morbi vel mi pretium, fermentum lacus et, viverra tellus. Phasellus sodales libero nec dui convallis, sit amet fermentum sapien auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu elementum nibh, quis varius libero."/>
				<Codigo lenguaje="java" codigo={'public class MyClass {\n  public static void main(String[] args) {\n    for (int i = 0; i < 10; i++) {\n      if (i == 4) {\n        continue;\n      }\n      System.out.println(i);\n    }  \n  }\n}'}/>			
				<Alerta color={this.props.color} titulo="Importante" contenido="En esta sección va algo muy importante que explica algún error común o algo por el estilo" />
				<Parrafo parrafo="Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat."/>
				<Frase autor="Pablo Picasso" frase="Las computadoras son inútiles. Sólo pueden darte respuestas."/>
				<Parrafo parrafo="Nam eget purus nec est consectetur vehicula. Nullam ultrices nisl risus, in viverra libero egestas sit amet. Etiam porttitor dolor non eros pulvinar malesuada. Vestibulum sit amet est mollis nulla tempus aliquet. Praesent luctus hendrerit arcu non laoreet. Morbi consequat placerat magna, ac ornare odio sagittis sed. Donec vitae ullamcorper purus. Vivamus non metus ac justo porta volutpat."/>
				<Imagen imagenLink={imagen2} />
				<Parrafo parrafo="Pulvinar leo id risus pellentesque vestibulum. Sed diam libero, sodales eget sapien vel, porttitor bibendum enim. Donec sed nibh vitae lorem porttitor blandit in nec ante. Pellentesque vitae metus ipsum. Phasellus sed nunc ac sem malesuada condimentum. Etiam in aliquam lectus. Nam vel sapien diam. Donec pharetra id arcu eget blandit. Proin imperdiet mattis augue in porttitor. Quisque tempus enim id lobortis feugiat. Suspendisse tincidunt risus quis dolor fringilla blandit. Ut sed sapien at purus lacinia porttitor. Nullam iaculis, felis a pretium ornare, dolor nisl semper tortor, vel sagittis lacus est consequat eros. Sed id pretium nisl. Curabitur dolor nisl, laoreet vitae aliquam id."/>
				<ul>{/*ol para numerada*/ }
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
					<li>Integer molestie lorem at massa</li>
					<li>Facilisis in pretium nisl aliquet</li>
				</ul>
				<Parrafo parrafo="Pulvinar leo id risus pellentesque vestibulum. Sed diam libero, sodales eget sapien vel, porttitor bibendum enim. Donec sed nibh vitae lorem porttitor blandit in nec ante. Pellentesque vitae metus ipsum. Phasellus sed nunc ac sem malesuada condimentum. Etiam in aliquam lectus. Nam vel sapien diam. Donec pharetra id arcu eget blandit. Proin imperdiet mattis augue in porttitor. Quisque tempus enim id lobortis feugiat. Suspendisse tincidunt risus quis dolor fringilla blandit. Ut sed sapien at purus lacinia porttitor. Nullam iaculis, felis a pretium ornare, dolor nisl semper tortor, vel sagittis lacus est consequat eros. Sed id pretium nisl. Curabitur dolor nisl, laoreet vitae aliquam id."/>
			</div>
		)
	}
}

export default class Contenido extends Component {
	constructor(props){
		super(props);
		this.state = {
            indice: ["1","2","3","4","5"]
        }
	}
    render(){
		const { indice } = this.state;
		//Recordar cambiar key por id unico. Parece ser un asunto de vida o muerte. 
		const indiceCompleto = indice.map((x,index) => {
			return (
			<a key={index} className="list-group-item list-group-item-action" href={"#section"+x}>Section {x}</a>
			)
		});
		const secciones = indice.map((x,index) => {
			return(
				<Subseccion key={index} numero={x} titulo={"Subsección "+x} color={this.props.color}/>
			)
		});
     	var Latex = require('react-latex');
        return(
        	<section>
				<ul className="nav nav-pills nav-fill mb-3 bg-light text-left">
                    <li className="nav-item niveles ">
                        <div className={"nav-link rounded-0 text-white active clearfix has-text-center align-items-center bg-"+this.props.color}>
                            <div className="container">
								<div className="float-left"> <i className="fas fa-terminal icono"></i>{this.props.nivel}</div>
								<a style={{paddingTop:"15px"}} className="float-right text-white h6 font-weight-light " href={"/estudiantes/"+this.props.nivel}>
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
									<a href="\estudiantes" className="text-muted small float-left">
									<i className="icono fas fa-chevron-left fa-sm"></i>sección anterior 
									</a>
									<a href="\estudiantes" className="text-muted small float-right">
										sección siguiente<i className="icono fas fa-chevron-right fa-sm"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm-9" >
							<h1 className="sicky-list display-4">{this.props.numero}. {this.props.titulo}</h1>
							{secciones}
						</div>
					</div>
				</div>
        	</section>
	    )
    };
}
