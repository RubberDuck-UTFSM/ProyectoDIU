import React from "react";

import { Layout, Form, Input, Button, Checkbox } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

const { Header, Sider, Content } = Layout;

class Login extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		}
	}

	onFinish = async (values) => {
	    console.log('Success:', values);
	    let res = await axios.post('http://localhost:9000/auth/login', values);
		if(res.hasOwnProperty("status") && res.status == 200) {
			localStorage.setItem("user", res.data);
			this.setState({redirect: true});
		}

	    console.log(res.data);
	};

	render() {
		return (
      <Layout>
      {this.state.redirect ? (
		<Redirect to="/panel/" />
      ) : (

            <Content
            >
      			<Form name="basic" initialValues={{ remember: true }} onFinish={this.onFinish}>
      				<Form.Item
      					label="Email"
      					name="email"
      					rules={[
      						{
      							required: true,
      							message: "Por favor ingrese su usuario"
      						}
      					]}
      				>
      					<Input />
      				</Form.Item>

      				<Form.Item
      					label="Contraseña"
      					name="password"
      					rules={[
      						{
      							required: true,
      							message: "Por favor ingrese su contraseña"
      						}
      					]}
      				>
      					<Input.Password />
      				</Form.Item>

      				{/*<Form.Item name="remember" valuePropName="checked">
      					<Checkbox>Remember me</Checkbox>
      				</Form.Item>*/}

      				<Form.Item>
      					<Button type="primary" htmlType="submit">
      						Submit
      					</Button>
      				</Form.Item>
      			</Form>
      	  </Content>

      )}
      </Layout>
		);
	}
}

export default Login;
