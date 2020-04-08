import React from "react";

import { Layout, Form, Input, Button, Checkbox } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

class SubseccionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuerpo: ""
    };
  }

  onFinish = async values => {
    console.log("Success:", values);
    let res = {data: "error"};

    if(this.props.data === undefined) {
      res = await axios.post(
        process.env.SERVER_URL +
          "/api/subseccion/",
        {...values, seccion_id: this.props.editId}
      ); 
    } else {
      res = await axios.post(
        process.env.SERVER_URL +
          "/api/subseccion/" +
          this.props.data.id.toString(),
        values
      ); 
    }

    console.log(res.data);
  };

  render() {
    return (
      <React.Fragment>
            <Button onClick={this.props.stopEditing} type="danger" size="large">
              Volver
            </Button>

            <h1>
              {this.props.data !== undefined
                ? "Editando la Subsección"
                : "Creando una Subsección"}
            </h1>
            <Form
              name="basic"
              initialValues={this.props.data === undefined ? {} : {
                cuerpo: this.props.data.cuerpo,
                numero: this.props.data.numero
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                label="Numero"
                name="numero"
                rules={[
                  {
                    required: true,
                    message: "Por favor escriba algo"
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Cuerpo"
                name="cuerpo"
                rules={[
                  {
                    required: true,
                    message: "Por favor escriba algo"
                  }
                ]}
              >
                <TextArea rows={4}></TextArea>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
      </React.Fragment>
    );
  }
}

export default SubseccionForm;
