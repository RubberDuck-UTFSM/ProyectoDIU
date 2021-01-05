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
            texto: "",
            mensajes: [],
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
                mensajes: [...this.state.mensajes, { nombre: "Proyecto " + this.props.proyecto, mensaje: this.state.texto, hora: hora, envia: true }],
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

    handleReload = (e) => {
        window.location.reload(false);
    }

    render() {
        return (
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-8 sin-bordes borde-derecha" style={{ backgroundColor: "rgb(239,235,235)" }}>
                        <div className="row justify-content-between" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <h1 className="display-4 chat" style={{ marginLeft: "30px" }}>Proyecto <b>{this.props.proyecto}</b> </h1>
                            <button onClick={this.handleReload} className="btn btn-danger btn-rounded" style={{ marginRight: "30px", marginTop: "8px", marginBottom: "8px" }}>Finalizar transmisión</button>
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
        )
    }

}