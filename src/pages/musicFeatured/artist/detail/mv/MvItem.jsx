import React from 'react'
import { Col } from 'antd'
import types from '@/pages/musicFeatured/artist/detail/albums/index.module.less'

const MvItem = (props) => {
  return (
        <Col md={8} lg={6} className={types.albumContainer}>
            <img className={types.img} src={props.info.imgurl16v9} />
            <div className={types.text}>
                <div className={types.albumName}>{props.info.name}</div>
                <div></div>
            </div>
        </Col>
  )
}

export default MvItem
