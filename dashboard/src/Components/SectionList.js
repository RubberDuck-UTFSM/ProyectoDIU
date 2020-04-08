import React from "react";

import { Form, Input, InputNumber, Button, List, Card, Avatar } from "antd";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import axios from "axios";
import SubseccionList from "./SubseccionList";

const { TextArea } = Input;
const { Meta } = Card;

class SectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secciones: [],
      editing: this.props.editando,
      editId: 0,
      sectionData: []
    };
  }

  setEditing = async (status, id) => {
    let res = { data: [] };
    console.log(id);
    if (status) {
      console.log(process.env.SERVER_URL + "/api/seccion/" + id.toString());
      res = await axios.get(
        process.env.SERVER_URL + "/api/seccion/" + id.toString()
      );
      console.log(res.data);
    }
    console.log(res.data);

    this.props.handleEdit(true, id);

    this.setState(
      {
        sectionData: res.data,
        editId: id
      },
      () => console.log(this.state)
    );
  };

  onFinish = async values => {
    console.log( {...values, curso_id: this.props.data[0].id});
    let res = await axios.post(process.env.SERVER_URL + "/api/seccion", {...values, curso_id: this.props.data[0].id});
    console.log(res.data);
    console.log(values);

  };

  render() {
    return this.props.editando ? (
      <SubseccionList 
      data={this.state.sectionData}
      editId={this.state.editId}
     />
    ) : (
      <React.Fragment>
        <h1>Agregar Sección</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish} >
          <Form.Item label="Titulo" name="titulo" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Color" name="color" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Numero" name="numero" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Url Imagen"
            name="url_imagen"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Descripción"
            name="descripcion"
            rules={[
              {
                required: true,
                message: "Por favor escriba algo"
              }
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <h1>Lista de Secciones actuales</h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.props.data[0].secciones}
          renderItem={item => (
            <List.Item>
              <Card
                cover={<img alt="example" src={item.url_imagen} />}
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => this.setEditing(true, item.id)}
                  />
                ]}
              >
                <Meta title={item.titulo} description={item.descripcion} />
              </Card>
            </List.Item>
          )}
        />
      </React.Fragment>
    );
  }
}

export default SectionList;
