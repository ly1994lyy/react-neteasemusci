import React from 'react'
import { Col } from 'antd'
import types from './index.module.less'

const ArtistListItem = (props) => {
  return (
      <Col md={6} lg={4} className={types.artistContainer}>
          <img className={types.artistImg} src={props.info.img1v1Url} alt={props.info.name}/>
          <div className={types.artistName}>{props.info.name}</div>
          <div className={types.artistAlbumSize}>单曲:{props.info.albumSize}</div>
      </Col>
  )
}

export default ArtistListItem
