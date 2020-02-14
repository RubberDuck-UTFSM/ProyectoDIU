import React, { Component } from 'react';
import './About.css';
import imagensantiago from './santiago.jpeg';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron paral3" style={{backgroundImage:"url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"}}>
                    <div className="overlay container-fluid">
                        <div className="container" style={{paddingTop:"40px"}}>
                            <h1 className="display-3">Quiénes somos</h1>
                            <p className="lead">Orci facilisis, dignissim tortor vitae, ultrices mi. Vestibulum a iaculis lacus. Phasellus vitae convallis ligula, nec volutpat tellus. Vivamus scelerisque mollis nisl, nec vehicula elit egestas a. Sed luctus metus id mi gravida, faucibus convallis neque pretium. Maecenas quis sapien ut leo fringilla tempor vitae sit amet leo. Donec imperdiet tempus placerat. Pellentesque pulvinar ultrices nunc sed ultrices. Morbi vel mi pretium, fermentum lacus et, viverra tellus. Phasellus sodales libero nec dui convallis, sit amet fermentum sapien auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu elementum nibh, quis varius libero.</p>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop:"70px",paddingBottom:"70px"}}>
                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className="display-3" style={{fontSize: "60px"}}>Nuestra Misión</h1>
                        </div>
                        <div className="col-lg-8">
                            <p>
                            Orci facilisis, dignissim tortor vitae, ultrices mi. Vestibulum a iaculis lacus. Phasellus vitae convallis ligula, nec volutpat tellus. Vivamus scelerisque mollis nisl, nec vehicula elit egestas a. Sed luctus metus id mi gravida, faucibus convallis neque pretium. Maecenas quis sapien ut leo fringilla tempor vitae sit amet leo. Donec imperdiet tempus placerat. Pellentesque pulvinar ultrices nunc sed ultrices. Morbi vel mi pretium, fermentum lacus et, viverra tellus. Phasellus sodales libero nec dui convallis, sit amet fermentum sapien auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu elementum nibh, quis varius libero.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={imagensantiago} className="img-fluid imagen-about" alt="Responsive image" ></img>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h1 className="display-4" style={{textAlign:"left",fontSize:"50px"}}>+30 ciudades</h1>
                                <p className="lead" style={{textAlign:"left"}}>a lo largo de todo Chile</p>
                            </div>
                            <div className="col-lg-4">
                                <h1 className="display-4" style={{textAlign:"left",fontSize:"50px"}}>+50 profesores</h1>
                                <p className="lead" style={{textAlign:"left"}}>realizando talleres en regiones</p>
                            </div>
                            <div className="col-lg-4">
                                <h1 className="display-4" style={{textAlign:"left",fontSize:"50px"}}>+100 sedes</h1>
                                <p className="lead" style={{textAlign:"left"}}>enseñando programación</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop:"30px",paddingBottom:"32px"}}>
                    <h1 className="display-3" style={{fontSize: "60px"}}>Nuestro Equipo</h1>
                    <p>
                    Orci facilisis, dignissim tortor vitae, ultrices mi. Vestibulum a iaculis lacus. Phasellus vitae convallis ligula, nec volutpat tellus. Vivamus scelerisque mollis nisl, nec vehicula elit egestas a. Sed luctus metus id mi gravida, faucibus convallis neque pretium. Maecenas quis sapien ut leo fringilla tempor vitae sit amet leo. Donec imperdiet tempus placerat. Pellentesque pulvinar ultrices nunc sed ultrices. Morbi vel mi pretium, fermentum lacus et, viverra tellus. Phasellus sodales libero nec dui convallis, sit amet fermentum sapien auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu elementum nibh, quis varius libero.
                    </p>
                    <div className="row personas d-flex justify-content-center">
						<div className="col" align="center">
                            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
							<h4>Federico Meza</h4>
							<p>
								Jefe de Proyecto
							</p>
						</div>
						<div className="col" align="center">
                            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
							<h4>Pedro Godoy</h4>
							<p>
								SubJefe de Proyecto 
							</p>
						</div>
						<div className="col" align="center">
                            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
							<h4>Gonzalo Fernández</h4>
                            <p>
                                Web Developer
							</p>
						</div>
					
                   
						<div className="col" align="center">
                            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
							<h4>María Paz Morales</h4>
							<p>
                                Web Developer
							</p>
						</div>
						<div className="col" align="center">
                            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
							<h4>Otra Persona</h4>
							<p>
							    Web Developer
							</p>
						</div>
                    </div>	
                </div>
            </div>

       )
    }
}