import React from 'react'
import { Col } from 'antd'
import types from './index.module.less'
import { useNavigate } from 'react-router-dom'

const ArtistListItem = (props) => {
  const navigate = useNavigate()
  const toArtistDetailPage = () => {
    navigate(`/artist/${props.info.id}`)
  }

  return (
      <Col md={6} lg={4} className={types.artistContainer} onClick={toArtistDetailPage}>
          <img className={types.artistImg} src={props.info.img1v1Url} alt={props.info.name}/>
          <div className={types.artistName}>{props.info.name}</div>
          <div className={types.artistAlbumSize}>单曲:{props.info.albumSize}</div>
      </Col>
  )
}

export default ArtistListItem
