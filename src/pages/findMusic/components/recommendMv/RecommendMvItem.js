import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons'

const nameStyle = {
  fontSize: '12px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}

const playCountType = {
  fontSize: '12px',
  position: 'absolute',
  color: 'rgba(251,251,251)',
  top: '10px',
  right: '20px'
}

function RecommendMvItem (props) {
  const { picUrl, artistName, playCount, name } = props
  return (
    <div>
      <img className='bd-5' src={picUrl} style={{ height: '100%', width: '100%', position: 'relative' }} alt={picUrl}/>
      <div style={playCountType}>
        <CaretRightOutlined/>
        {playCount}
      </div>
      <div style={nameStyle}>{name}</div>
      <div className="artist-name">{artistName}</div>
    </div>
  )
}

export default RecommendMvItem