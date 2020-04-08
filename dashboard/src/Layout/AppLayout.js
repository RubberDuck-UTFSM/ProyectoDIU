import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  RightOutlined
} from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";
import "./applayout.css";

import SectionList from "../Components/SectionList.js";
import Login from "../Components/Login.js";
import axios from 'axios';

const { Header, Sider, Content } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false,
    cursoActual: "",
    tipoCurso: "",
    dataCurso: [{secciones: []}],
    seccionActual: [],
    editando: false,
    editId: 0,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleMenuClick = async (item, key, keyPath, domEvent) => {
    let data = item.key.split("/");
    let res = await axios.get(process.env.SERVER_URL + "/api/cursos/" + data[data.length-1]);

    console.log(res);
    this.setState({
      cursoActual: data[data.length - 1],
      tipoCurso: data[data.length - 2],
      dataCurso: (res.data.length == 0) ? [] : res.data,
      editando: false,

    }, () => {
      console.log(this.state);
    });
  };

  handleEdit = (state, id) => {
    this.setState({
      editando: state,
      editId: id
    });
  } 

  render() {
    return (
      <Layout>
        <Router>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              this.toggle();
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              this.toggle();
              console.log(collapsed, type);
            }}
            collapsed={this.state.collapsed}
          >
            <div className="logo">
              <h1 style={{ color: "white" }}>ProyectoProgramación</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]} onClick={this.handleMenuClick}>
              <Menu.Item key="/">
                <Link to="/panel/inicio">
                  <RightOutlined />
                  <span>Inicio</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/panel/inscritos">
                <Link to="/panel/inscritos">
                  <RightOutlined />
                  <span>Inscritos</span>
                </Link>
              </Menu.Item>

              <Menu.ItemGroup key="alumnos" title="Material Alumnos">
                <Menu.Item onClick={() => this.setState({cursoActual: "basico"})} key="/panel/material/alumnos/basico">
                  <Link to="/panel/material/alumnos/basico">
                    <RightOutlined />
                    <span>Básico</span>
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => this.setState({cursoActual: "intermedio"})} key="/panel/material/alumnos/intermedio">
                  <Link to="/panel/material/alumnos/intermedio">
                    <RightOutlined />
                    <span>Intermedio</span>
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => this.setState({cursoActual: "avanzado"})} key="/panel/material/alumnos/avanzado">
                  <Link to="/panel/material/alumnos/avanzado">
                    <RightOutlined />
                    <span>Avanzado</span>
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>

              <Menu.ItemGroup key="docentes" title="Material Docentes">
                <Menu.Item key="/panel/material/docentes/basico">
                  <Link to="/panel/material/docentes/basico">
                    <RightOutlined />
                    <span>Básico</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/panel/material/docentes/intermedio">
                  <Link to="/panel/material/docentes/intermedio">
                    <RightOutlined />
                    <span>Intermedio</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/panel/material/docentes/avanzado">
                  <Link to="/panel/material/docentes/avanzado">
                    <RightOutlined />
                    <span>Avanzado</span>
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24
              }}
            >
              <Switch>
                <Route path="/panel/material/alumnos/basico">
                  <SectionList
                    handleEdit={this.handleEdit}
                    data={this.state.dataCurso}
                    editando={this.state.editando}
                   />
                </Route>
                <Route path="/panel/material/alumnos/intermedio">
                  <SectionList
                    handleEdit={this.handleEdit}
                    data={this.state.dataCurso}
                    editando={this.state.editando}
                   />
                </Route>
                <Route path="/panel/material/alumnos/avanzado">
                  <SectionList
                    handleEdit={this.handleEdit}
                    data={this.state.dataCurso}
                    editando={this.state.editando}
                   />
                </Route>

                <Route path="/panel/material/docentes/basico">
                  <SectionList />
                </Route>
                <Route path="/panel/material/docentes/intermedio">
                  <SectionList />
                </Route>
                <Route path="/panel/material/docentes/avanzado">
                  <SectionList />
                </Route>
                <Route path="/panel/login">
                  <Login />
                </Route>
                <Route path="/panel">Ruta 0</Route>
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default AppLayout;
