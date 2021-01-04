import React, { Component } from 'react'
import './Expositores.css';
import hall from './images/hall2.jpg';
import YouTube from '@u-wave/react-youtube';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';

class Burbuja extends Component {
    render() {
        return (
            <div className="row align-items-end">
                <div className="col-10 burbuja">
                    <div className="card burbuja">
                        <div className="card-body">
                            <h5 className="card-title burbuja">{this.props.nombre}</h5>
                            <p className="card-text">
                                <small>
                                    {this.props.mensaje}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-2 burbuja">
                    <p className="hora">{this.props.hora}</p>
                </div>
            </div>
        )
    }
}

class BurbujaEnvio extends Component {
    render() {
        return (
            <div className="row align-items-end justify-content-end" style={{ marginRight: "5px" }}>
                <div className="col-2 burbuja">
                    <p className="hora2 ">{this.props.hora}</p>
                </div>
                <div className="col-10 burbuja">
                    <div className="card burbuja ">
                        <div className="card-body">
                            <h5 className="card-title burbuja">{this.props.nombre}</h5>
                            <p className="card-text">
                                <small>
                                    {this.props.mensaje}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/* { nombre: "Juan Rodríguez", mensaje: "Hola! que buen proyecto :D", hora: "14:34", envia: false },
{ nombre: "Juan Rodríguez", mensaje: "Me gustó mucho la idea que tuvieron, se nota toda la dedicación que le pusieron omg.", hora: "14:35", envia: false },
{ nombre: "María José López", mensaje: "Hola! se ve todo muy bacán *-*", hora: "14:37", envia: false },
{ nombre: "Rodrigo Álvarez", mensaje: "Cómo planean dar soporte económico a su iniciativa?", hora: "14:39", envia: false }*/

export default class Expositores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transmision: false,
            inputValue: "",
            texto: "",
            link:"",
            mensajes: [ ],
        }
        this.handleClickIniciar = this.handleClickIniciar.bind(this);
        this.handleClickFinalizar = this.handleClickFinalizar.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleInputMensaje = this.handleInputMensaje.bind(this);
        this.sendHandler = this.sendHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    sendHandler = () => {
        if(this.state.texto != ""){
            var hora = "";
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();

            hora += (h < 10) ? "0" + h : h;
            hora += (m < 10) ? ":0" + m : ":" + m;
            
            this.setState({
                mensajes: [...this.state.mensajes, { nombre: "Proyecto " + this.props.proyecto , mensaje: this.state.texto, hora: hora, envia: true }],
            texto: ""
            })
            useScrollToBottom();
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.sendHandler();
        }
    }

    handleInput = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    handleInputMensaje = (e) => {
        this.setState({ texto: e.target.value })
    }

    handleClickFinalizar() {
        this.setState({ transmision: false, link: ""});
    }

    handleClickIniciar() {
        if (this.state.inputValue == "") {
            alert("Debe rellenar el link del youtube.");
        }
        else {
        var streamID = this.state.inputValue.split('=')[1];
        this.setState({
            link: streamID,
            inputValue: "",
            transmision: true });
        }
    }

    render() {
        return (<>
            {this.state.transmision ? (
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-8 sin-bordes borde-derecha" style={{ backgroundColor: "rgb(239,235,235)" }}>
                            <div className="row justify-content-between" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                <h1 className="display-4 chat" style={{ marginLeft: "30px" }}>Proyecto <b>{this.props.proyecto}</b> </h1>
                                <button type="button" onClick={this.handleClickFinalizar} className="btn btn-danger btn-rounded" style={{ marginRight: "30px", marginTop: "8px", marginBottom: "8px" }}>Finalizar transmisión</button>
                            </div>
                            <YouTube
                                video={this.props.link}
                                autoplay={true}
                                width="100%"
                                height="86.5%"
                                modestBranding={true}
                                annotations={false}
                                showRelatedVideos={false}
                                showInfo={false}
                            />
                        </div>
                        <div className="col-4 sin-bordes" >
                            <div className="container borde-abajo" style={{ backgroundColor: "rgb(239,235,235)", paddingTop: "10px", paddingBottom: "10px" }}>
                                <div className="row justify-content-between" style={{ margin: "10px" }}>
                                    <div style={{ fontSize: "1.1rem" }}><i className="fas fa-users icono"></i> Participantes (15)</div>

                                </div>
                            </div>
                            <div className="container borde-abajo" style={{ backgroundColor: "rgb(239,235,235)", paddingTop: "10px", paddingBottom: "10px" }}>
                                <div className="row justify-content-between" style={{ margin: "10px" }}>
                                    <div style={{ fontSize: "1.1rem" }}><i className="fas fa-comments icono"></i> Chat</div>
                                    <i className="fas fa-ellipsis-v icono fa-lg" style={{ margin: "5px" }}></i>
                                </div>
                            </div>
                            <ScrollToBottom className="cont-mensajes" useAtEnd={false}>
                            <div className="container" style={{ height: "382px", paddingTop: "20px", paddingBottom: "10px" }}>
                                {this.state.mensajes.map((x, _) => {
                                    if (x.envia == true) {
                                        return (
                                            <BurbujaEnvio nombre={x.nombre} hora={x.hora} mensaje={x.mensaje} />
                                        )
                                    }
                                    else {
                                        return (
                                            <Burbuja nombre={x.nombre} hora={x.hora} mensaje={x.mensaje} />
                                        )
                                    }
                                })}
                            </div>
                        </ScrollToBottom>
                            <div className="container borde-arriba borde-abajo" style={{ paddingTop: "15px", paddingBottom: "15px", backgroundColor: "rgb(239,235,235)" }}>
                                <div className="row">
                                    <div className="col-10">
                                        <input onKeyDown={this.handleKeyPress} className="form-control" onChange={this.handleInputMensaje} value = {this.state.texto} placeholder="Escribe tu mensaje aquí..." id="exampleFormControlTextarea1"></input>
                                    </div>
                                    <div className="col-2" style={{ marginTop: "8px" }}>
                                        <button type="button" onClick={this.sendHandler} className="btn btn-sm sin-bordes"><i className="fas fa-arrow-right "></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
                :
                (
                    <div className="jumbotron paral-expositores" style={{ backgroundImage: `url(${hall})` }}>
                        <div className="container-fluid overlay">
                            <div className="row" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <div className="card special-card-expositores">
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10">
                                                        <div className="text-center">
                                                            <h5 className="card-title" style={{ fontSize: "2.0rem" }}>Iniciar transmisión </h5>
                                                        </div>
                                                        <p className="card-text">
                                                            Para iniciar la transmisión en vivo debe colocar el enlace al EN VIVO de Youtube.
                                                        </p>
                                                        <div className="mb-3">
                                                            <input onChange={this.handleInput} type="enlace" className="form-control" id="enlace" placeholder="Ingresar link de youtube..."></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1"></div>
                                                </div>
                                                <div align="center">
                                                    <button type="button" onClick={this.handleClickIniciar} className={"btn text-white btn-primary btn-rounded"}>Comenzar transmisión</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4"></div>
                            </div>
                        </div>
                    </div>

                )
            }
        </>

        )
    }

}