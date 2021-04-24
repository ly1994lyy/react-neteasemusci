import React from 'react'
import { timeConversion } from '@/utils/time'
import { Col, Row } from 'antd'

const picType = {
  width: '60px',
  height: '60px',
  borderRadius: '5px',
  margin: '0 10px'
}

const indexType = {
  margin: '0 15px',
  color: 'rgb(210,210,210)',
  fontSize: '10px'
}

const nameType = {
  fontSize: '12px',
  width: '50%'
}

function MusicItem (props) {
  const { name, artists, album, index, duration } = props

  return (
    <Row className="music-container" align='middle'>
      <Col span={1}>
        <span style={indexType}>{index + 1 >= 10 ? index + 1 : '0' + (index + 1)}</span>
      </Col>
      <Col span={2}>
        <img style={picType} src={album.blurPicUrl} alt=""/>
      </Col>
      <Col span={7}>
        <div style={nameType}>{name}</div>
      </Col>
      <Col span={7}>
        <div className="artist-name">{
          artists.length > 1 ? artists.reduce((name, e, index) => {
            return index === 0 ? name + e.name : name + '/' + e.name
          }, '') : artists[0].name
        }</div>
      </Col>
      <Col span={6}>
        <div className="artist-name">
          {album.name}
        </div>
      </Col>
      <Col span={1}>
        <div className="artist-name">
          {timeConversion(duration)}
        </div>
      </Col>
    </Row>
  )
}

export default MusicItem