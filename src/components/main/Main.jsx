import { Layout, Menu, Breadcrumb,Input } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  MailOutlined,
  SkinOutlined,
  CopyOutlined
} from "@ant-design/icons";
import React from "react";
import './index.scss'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Main() {
  return (
    <Layout>
      <Header className="header">
        <div className="header-left">
          <div className="cicle-box">
            <div className="cicle flex-center">
              <div className="cicle-ico">x</div>
            </div>
            <div className="cicle flex-center">
              <div className="cicle-ico">-</div>
            </div>
            <div className="cicle flex-center">
              <div className="cicle-ico">o</div>
            </div>
          </div>
          <div className="outline-box flex-center">
            <div className="outline">
              <LeftOutlined />
            </div>
            <div className="outline">
              <RightOutlined />
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="top-nav-box">
            <div className="nav active">个性推荐</div>
            <div className="nav">歌单</div>
            <div className="nav">主播电台</div>
            <div className="nav">排行榜</div>
            <div className="nav">歌手</div>
            <div className="nav">最新音乐</div>
          </div>
          <div className="top-other">
            <Input placeholder="搜索" allowClear prefix={<SearchOutlined />} />
            <SettingOutlined />
            <MailOutlined />
            <SkinOutlined />
            <CopyOutlined />
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={250} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Main;
