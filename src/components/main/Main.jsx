import { Layout, Menu, Input } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  MailOutlined,
  SkinOutlined,
  CopyOutlined,
  HeartOutlined,
  DownloadOutlined,
  YoutubeOutlined,
  TeamOutlined
} from "@ant-design/icons";
import React from "react";
import './index.scss'

const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

function Main(props) {
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
            className="sider-box"
          >
            <Menu.Item key="5">发现音乐</Menu.Item>
            <Menu.Item key="6">私人FM</Menu.Item>
            <Menu.Item key="7" icon={<YoutubeOutlined />}>视频</Menu.Item>
            <Menu.Item key="8" icon={<TeamOutlined />}>朋友</Menu.Item>
            <Menu.ItemGroup title="我的音乐">
              <Menu.Item key="1">ITunes音乐</Menu.Item>
              <Menu.Item key="2" icon={<DownloadOutlined />}>下载管理</Menu.Item>
            </Menu.ItemGroup>
            <SubMenu
              key="sub3"
              title="创建的歌单"
            >
              <Menu.Item key="9" icon={<HeartOutlined />}>我喜欢的音乐</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 280,
              margin: "16px 0",
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
      <Footer style={{background:"blue",height:"50px"}}>
      </Footer>
    </Layout>
  );
}

export default Main;
