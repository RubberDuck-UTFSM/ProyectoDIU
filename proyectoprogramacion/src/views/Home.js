import React, { Component } from 'react'
import './Home.css';


export default class Home extends Component{  
    render(){
        return(
            <section>
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img alt="" className="d-block w-100 " src="https://www.adslzone.net/app/uploads/2017/12/lenguajes-de-programaci%C3%B3n-empresas-2018.jpg" ></img>
                            <div id="overlay" className="overlay" >
						        <div className="carousel-caption text-left d-none d-md-block ">
                                    <h2>Noticia 1</h2>
                                    <p>Texto y descripción de la noticia 1. Texto y descripción de la noticia 1. Texto y descripción de la noticia 1. Texto y descripción de la noticia 1. Texto y descripción de la noticia 1. Texto y descripción de la noticia 1. Texto y descripción de la noticia 1.</p>
                                    
                                </div>
					        </div>  
                        </div>
                        <div className="carousel-item">
                            <img alt="" className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_960_720.jpg" ></img>
                            <div className="overlay" >
						        <div className="carousel-caption text-left d-none d-md-block ">
                                    <h2>Noticia 2</h2>
                                    <p>Texto y descripción de la noticia 2. Texto y descripción de la noticia 2. </p>
                                </div>
					        </div> 
                        </div>
                        <div className="carousel-item">
                        <img alt="" className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"></img>
                        <div className="overlay">
						        <div className="carousel-caption  text-left d-none d-md-block ">
                                    <h2>Noticia 3</h2>
                                    <p>Texto y descripción de la noticia 3. </p>
                                </div>
					        </div> 
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="cuerpo-home">
                    <div className="container" style={{marginBottom:"30px"}}>
                        <div className="row informacion1">
                            <div className="d-none d-lg-block col-md-3 text-center imagen-robot  ">
                                <i className="fas fa-robot fa-10x"></i>
                            </div>
                            <div className="col-md-9">
                                <div className="container ">
                                    <h2 className="display-4" style={{fontSize:"3rem"}}>Contenido para Estudiantes</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum viverra ligula. Duis facilisis ipsum arcu. Vivamus in ornare nulla. Nunc scelerisque rhoncus tempus. Duis varius mattis laoreet. Fusce condimentum, lacus quis accumsan gravida, elit ante tempor diam, vitae varius lorem velit quis orci. Donec nec vestibulum arcu. Vivamus a velit a ligula dignissim bibendum sit amet faucibus turpis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/estudiantes"><button type="button" className="btn btn-danger"><i className="fas fa-terminal icono"></i>A programar! </button></a>
                        </div>
                    </div>
                    <div className="container">
                        <hr></hr>  
                    </div>                          
                    <div  className="jumbotron bg-white" style={{margin:"0px",paddingTop:"10px",paddingBottom:"30px"}}>
                        <div className="container">
                            <h1  className="display-4" style={{fontSize:"3rem"}}>Herramientas Docentes</h1>
                            <p  className="lead ">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <div className="row">
                                <div className="col-md-6 caja1" style={{paddingRight:"40px",paddingLeft:"40px"}}>
                                    <h2> <i className="fas fa-chalkboard-teacher" style={{paddingRight:"20px"}}></i>Hello, world!</h2>
                                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-info text-white">Saber más <i className="fas fa-chevron-right icono"></i> </button>
                                    </div>
                                </div>
                                <div className="col-md-6 caja2" style={{paddingRight:"40px",paddingLeft:"40px"}}>
                                    <h2><i className="icono fas fa-folder-open" style={{paddingRight:"20px"}}></i>Hello, world!</h2>
                                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-info">Ir al repositorio <i className="fas fa-chevron-right icono"></i></button>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <div className="container-fluid" style={{backgroundColor:"#e9ecef"}}>
                        <div className="container text-center" style={{paddingTop:"1px",paddingBottom:"20px"}}>
                            <div className="container fotos mt-5">
                                <div className="row">
                                    <div className="col-lg-4 informaciones caja1" align="center">
                                        <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
                                        <h4>Informaciones</h4>
                                        <p>
                                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                        </p>
                                        <button type="button" className="btn btn-secondary">Saber más <i className="fas fa-chevron-right icono"></i></button>
                                    </div>
                                    <div className="col-lg-4 informaciones caja1 caja2" align="center">
                                        <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
                                        <h4>Informaciones</h4>
                                        <p>
                                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                        </p>
                                        <button type="button" className="btn btn-secondary" >Saber más <i className="fas fa-chevron-right icono"></i></button>
                                    </div>
                                    <div className="col-lg-4 informaciones caja2" align="center">
                                        <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
                                        <h4>Informaciones</h4>
                                        <p>
                                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                        </p>
                                        <button type="button" className="btn btn-secondary">Saber más <i className="fas fa-chevron-right icono"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
            </section>
        )
    }

}
