import React from 'react'
import propTypes from 'prop-types'
import types from './index.module.less'
import { Col } from 'antd'
import { useNavigate } from 'react-router-dom'

const ArtistCover = (props) => {
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

ArtistCover.propTypes = {
  info: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    img1v1Url: propTypes.string,
    albumSize: propTypes.number
  })
}
export default ArtistCover
