import { Layout, Menu } from 'antd'
import {
  LeftOutlined,
  RightOutlined,
  HeartOutlined,
  DownloadOutlined,
  YoutubeOutlined,
  TeamOutlined
} from '@ant-design/icons'
import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'

const { SubMenu } = Menu
const { Header, Sider, Footer } = Layout

function Main (props) {
  return (
    <Layout>
      <Layout>
        <Sider width={250} className="site-layout-background">
          <Header style={{ width: '100%', background: 'red' }}>
            <div className="header-left" style={{ width: '100%' }}>
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
                  <LeftOutlined/>
                </div>
                <div className="outline">
                  <RightOutlined/>
                </div>
              </div>
            </div>
          </Header>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            className="sider-box"
          >

            <Menu.Item key="5">
              <Link to='/home/index'>发现音乐</Link>
            </Menu.Item>
            <Menu.Item key="6">私人FM</Menu.Item>
            <Menu.Item key="7" icon={<YoutubeOutlined/>}>视频</Menu.Item>
            <Menu.Item key="8" icon={<TeamOutlined/>}>朋友</Menu.Item>
            <Menu.ItemGroup title="我的音乐">
              <Menu.Item key="1">ITunes音乐</Menu.Item>
              <Menu.Item key="2" icon={<DownloadOutlined/>}>下载管理</Menu.Item>
            </Menu.ItemGroup>
            <SubMenu
              key="sub3"
              title="创建的歌单"
            >
              <Menu.Item key="9" icon={<HeartOutlined/>}>我喜欢的音乐</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          {props.children}
        </Layout>
      </Layout>
      <Footer style={{ background: 'blue', height: '50px' }}>
      </Footer>
    </Layout>
  )
}

export default Main
