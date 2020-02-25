import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component{  
    render(){
        return(
            <section>
                 <div className="jumbotron paralhome" style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_960_720.jpg)"}}>
                    <div className="container-fluid">
                        <div className="container " >
                            <h1 className="display-3"><strong>Aprende a <span className="text-light">programar</span> con un solo click</strong></h1>
                            <div style={{marginTop:"20px"}}>
                                <a href="/estudiantes"><button type="button" className="btn btn-lg btn-danger"><i className="fas fa-terminal icono"></i>A por ello! </button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{paddingBottom:"90px",paddingTop:"80px",backgroundColor:"#e9ecef"}}>                        
                    <div className="container ">
                        <h2 className="display-4" style={{fontSize:"3rem"}}>Herramientas <strong>Docentes</strong></h2>
                        <p  className="lead ">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr></hr>
                        <div className="row informacion1">
                            <div className="d-none d-lg-block col-md-3  imagen-robot" style={{paddingLeft:"55px"}}>
                                <i className="fas fa-folder-open fa-9x"></i>
                            </div>
                            <div className="col-md-9">
                                <div className="container ">
                                    <h2 className="display-4" style={{fontSize:"2.2rem"}}>Repositorio para profesores</h2>
                                    <p >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                    <div style={{marginTop:"0px"}}>
                                        <a href="/material"><button type="button" className="btn btn-info text-white">Ver el repositorio <i className="fas fa-chevron-right icono"></i> </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                                        
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
                <div className="container text-center container-informaciones">
                    <div className="container fotos mt-5">
                        <div className="row">
                            <div className="col-lg-4 informaciones caja1" align="center">
                                <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
                                <h4>Informaciones</h4>
                                <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                </p>
                                <button type="button" className="btn btn-danger">Saber más <i className="fas fa-chevron-right icono"></i></button>
                            </div>
                            <div className="col-lg-4 informaciones caja1 caja2" align="center">
                                <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
                                <h4>Informaciones</h4>
                                <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                </p>
                                <button type="button" className="btn btn-danger" >Saber más <i className="fas fa-chevron-right icono"></i></button>
                            </div>
                            <div className="col-lg-4 informaciones caja2" align="center">
                                <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
                                <h4>Informaciones</h4>
                                <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                </p>
                                <button type="button" className="btn btn-danger">Saber más <i className="fas fa-chevron-right icono"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
