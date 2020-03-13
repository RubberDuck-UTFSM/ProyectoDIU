import React from "react";

import { List, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { Meta } = Card;
const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];

class SectionList extends React.Component {
  render() {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <EditOutlined key="edit" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="/profile.png" />
                }
                title="Sección "
                description="Seccionamiento"
              />
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default SectionList;