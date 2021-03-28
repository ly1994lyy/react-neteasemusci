import React from 'react'

const titleType = {
  borderTop: '1px #eee solid',
  borderBottom: '1px #eee solid'
}

const title = {
  width: '150px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  border: '1px red solid'
}

function HomeNewMusic () {
  return (
    <div style={{ margin: '0 auto', width: '300px' }}>
      <div style={titleType} className='flex-center'>
        <div style={title}>新歌速递</div>
        <div style={title}>新碟上架</div>
      </div>
    </div>
  )
}

export default HomeNewMusic