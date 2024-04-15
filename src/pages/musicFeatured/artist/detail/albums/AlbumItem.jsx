import React from 'react'
import { Col } from 'antd'
import types from './index.module.less'

const AlbumItem = (props) => {
  return (
        <Col md={6} lg={4} className={types.albumContainer}>
            <img className={types.img} src={props.info.picUrl} />
            <div className={types.text}>
                <div className={types.albumName}>{props.info.name}</div>
                <div></div>
            </div>
        </Col>
  )
}

export default AlbumItem
