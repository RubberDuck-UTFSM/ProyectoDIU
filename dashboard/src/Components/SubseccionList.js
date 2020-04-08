import React from "react";

import { Form, Input, InputNumber, Button, List, Card, Avatar } from "antd";

import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import SubseccionForm from "./SubseccionForm";
import axios from "axios";

const { Meta } = Card;

class SubseccionList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			secciones: [],
			editing: false,
			editId: 0,
			editData: undefined,
			data: this.props.data
		};
	}

	editSubseccion = async (id) => {
		let res = await axios.get(
		  process.env.SERVER_URL + "/api/subseccion/" + id.toString()
		);
	
		this.setState({
			editData: res.data,
			editing: true
		});

		console.log(res.data)
	};

	addSubseccion = async () => {
		this.setState({
			editing: true,
			editData: undefined,
		})
	};

	stopEditing = () => {
		this.setState({editing: false, editData: undefined});
	};

	render() {
		return this.state.editing ? (
			<SubseccionForm
				data={this.state.editData}
				stopEditing={this.stopEditing}
				editId={this.props.editId}
			/>
		) : (
			<React.Fragment>
			<Button type="primary" size="large" onClick={this.addSubseccion}>
	          Agregar Nueva Subsección
	        </Button>
			<h1>Lista de Subsecciones</h1>
			<List
				itemLayout="horizontal"
				dataSource={this.props.data}
				renderItem={item => (

					<List.Item
						actions={[
							<a key="list-loadmore-edit" onClick={() => this.editSubseccion(item.id)}>edit</a>,
						]}
					>
						<List.Item.Meta
							title={
								<span>Subsección {item.numero}</span>
							}
							description={(item.cuerpo.toString().length > 100) ? (item.cuerpo.toString().substring(0, 100) + "...") : (item.cuerpo)}
						/>
					</List.Item>
				)}
			/>
			</React.Fragment>
		);
	}
}

export default SubseccionList;
