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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "antd/dist/antd.css";
import "./applayout.css";

const { Header, Sider, Content } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

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
              <h1 style={{color: "white"}}>ProyectoProgramación</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
              <Menu.Item key="/">
                <Link to="/"><RightOutlined /><span>Inicio</span></Link>
              </Menu.Item>

              <Menu.ItemGroup key="alumnos" title="Material Alumnos">
                <Menu.Item key="/material/alumnos/basico">
                  <Link to="/material/alumnos/basico"><RightOutlined /><span>Básico</span></Link>
                </Menu.Item>
                <Menu.Item key="/material/alumnos/intermedio">
                  <Link to="/material/alumnos/intermedio"><RightOutlined /><span>Intermedio</span></Link>
                </Menu.Item>
                <Menu.Item key="/material/alumnos/avanzado">
                  <Link to="/material/alumnos/avanzado"><RightOutlined /><span>Avanzado</span></Link>
                </Menu.Item>
              </Menu.ItemGroup>

              <Menu.ItemGroup key="docentes" title="Material Docentes">
                <Menu.Item key="/material/docentes/basico">
                  <Link to="/material/docentes/basico"><RightOutlined /><span>Básico</span></Link>
                </Menu.Item>
                <Menu.Item key="/material/docentes/intermedio">
                  <Link to="/material/docentes/intermedio"><RightOutlined /><span>Intermedio</span></Link>
                </Menu.Item>
                <Menu.Item key="/material/docentes/avanzado">
                  <Link to="/material/docentes/avanzado"><RightOutlined /><span>Avanzado</span></Link>
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
                <Route path="/">
                  Ruta 0
                </Route>
                <Route path="/material/alumnos/basico">
                  Ruta 1
                </Route>
                <Route path="/material/alumnos/intermedio">
                  Ruta 2
                </Route>
                <Route path="/material/alumnos/avanzado">
                  Ruta 3
                </Route>
                
                <Route path="/material/docentes/basico">
                  Ruta 4
                </Route>
                <Route path="/material/docentes/intermedio">
                  Ruta 5
                </Route>
                <Route path="/material/docentes/avanzado">
                  Ruta 6
                </Route>
                
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default AppLayout;
