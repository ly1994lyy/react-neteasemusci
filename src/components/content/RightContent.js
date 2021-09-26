import React, { Fragment } from 'react'
import { Input, Layout } from 'antd'
import { CopyOutlined, MailOutlined, SearchOutlined, SettingOutlined, SkinOutlined } from '@ant-design/icons'
import HomeNav from '../../pages/findMusic/HomeNav'

const { Header, Content } = Layout

function RightContent (props) {
  const { parent } = props
  return (
    <Fragment>
      <Header style={{ width: '100%', background: 'red' }}>
        <div className="header-right">
          {
            parent === 'Home' ? <HomeNav/> : <Fragment/>
          }
          <div className="top-other">
            <Input className="input-btn" placeholder="搜索" allowClear prefix={<SearchOutlined/>}/>
            <SettingOutlined/>
            <MailOutlined/>
            <SkinOutlined/>
            <CopyOutlined/>
          </div>
        </div>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 280,
          margin: '16px 0',
        }}
      >
        {props.children}
      </Content>
    </Fragment>
  )
}

export default RightContent
