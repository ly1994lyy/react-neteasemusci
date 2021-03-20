import React, { useState } from 'react'
import { CaretRightOutlined } from '@ant-design/icons'

const nameStyle = {
  fontSize: '12px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}

const artistNameType = {
  fontSize: '12px',
  color: 'rgba(210,210,210)'
}

const artistHoverType = {
  fontSize: '12px',
  color: 'rgb(144 115 115)'
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
  const [isHover, setHover] = useState(false)
  return (
    <div>
      <img src={picUrl} style={{ height: '100%', width: '100%', position: 'relative' }} alt={picUrl}/>
      <div style={playCountType}>
        <CaretRightOutlined/>
        {playCount}
      </div>
      <div style={nameStyle}>{name}</div>
      <div
        style={isHover ? artistHoverType : artistNameType}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>{artistName}</div>
    </div>
  )
}

export default RecommendMvItem