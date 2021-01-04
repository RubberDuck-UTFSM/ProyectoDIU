import React, { Component } from 'react'
import './Stand.css';
import YouTube from '@u-wave/react-youtube';
import { Redirect } from 'react-router';
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

export default class Stand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transmision: false,
            inputValue: "",
            texto: "",
            mensajes: [
                { nombre: "Juan Rodríguez", mensaje: "Hola! que buen proyecto :D", hora: "14:34", envia: false },
                { nombre: "Juan Rodríguez", mensaje: "Me gustó mucho la idea que tuvieron, se nota toda la dedicación que le pusieron.", hora: "14:35", envia: false },
                { nombre: "María José López", mensaje: "Hola! se ve todo muy bacán *-*", hora: "14:37", envia: false },
                { nombre: "Rodrigo Álvarez", mensaje: "Cómo planean dar soporte económico a su iniciativa?", hora: "14:39", envia: false }
            ]
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleInputMensaje = this.handleInputMensaje.bind(this);
        this.sendHandler = this.sendHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    sendHandler = () => {
        if (this.state.texto != "") {
            var hora = "";
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();

            hora += (h < 10) ? "0" + h : h;
            hora += (m < 10) ? ":0" + m : ":" + m;
            
            this.setState({
                mensajes: [...this.state.mensajes, { nombre: this.props.nombre + " " + this.props.apellido, mensaje: this.state.texto, hora: hora, envia: true }],
                texto: ""
            })
            useScrollToBottom();
        }
    }

    handleOnClick = () => {
        this.setState({ redirect: true });
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


    render() {
        if (this.state.redirect) {
            return <Redirect push to="/proyectos" />;
        }
        return (<>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-8 sin-bordes borde-derecha" style={{ backgroundColor: "rgb(239,235,235)" }}>
                        <div className="row justify-content-between" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <a style={{ paddingTop: "20px", marginLeft: "30px", cursor: "pointer" }} onClick={this.handleOnClick} className="float-right h6 font-weight-light text-dark ">
                                <u><i className="icono fas fa-chevron-left fa-sm"></i>volver a proyectos</u>
                            </a>
                            <div className="row" style={{ marginRight: "40px" }}>
                                <h1 className="display-4 chat" >Proyecto <b>{this.props.proyecto}</b> </h1>
                                <a style={{ paddingTop: "20px", marginLeft: "20px", cursor: "pointer" }} href={this.props.pagina} target={"_blank"} className="float-right h6 font-weight-light text-dark ">
                                    <u><i className="icono fas fa-external-link-alt fa-sm"></i>más info</u>
                                </a>
                            </div>
                        </div>
                        <YouTube
                            video={this.props.video}
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
                                    <input onKeyDown={this.handleKeyPress} className="form-control" onChange={this.handleInputMensaje} value={this.state.texto} placeholder="Escribe tu mensaje aquí..." id="exampleFormControlTextarea1"></input>
                                </div>
                                <div className="col-2" style={{ marginTop: "8px" }}>
                                    <button type="button" onClick={this.sendHandler} className="btn btn-sm sin-bordes"><i className="fas fa-arrow-right "></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

        )
    }

}