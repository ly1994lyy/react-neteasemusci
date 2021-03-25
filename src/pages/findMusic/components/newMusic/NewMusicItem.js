import React from 'react'

const musicType = {
  width: '48%',
  height: '100px',
  borderBottom: '1px #eee solid',
  borderTop: '1px #eee solid',
  display: 'flex',
  alignItems: 'center'
}

const picType = {
  width: '80px',
  height: '80px'
}

const indexType = {
  margin: '0 15px',
  color: 'rgb(210,210,210)',
  fontSize: '10px'
}

function NewMusicItem (props) {
  const { name, album, artists, index } = props
  return (
    <div style={musicType}>
      <img style={picType} src={album.blurPicUrl} alt=""/>
      <span style={indexType}>{index + 1 >= 10 ? index + 1 : '0' + (index + 1)}</span>
      <div>
        <div>{name}</div>
        <div className="artist-name">{
          artists.length > 1 ? artists.reduce((name, e) => {
            return name + '/' + e.name
          }, '') : artists[0].name
        }</div>
      </div>
    </div>
  )
}

export default NewMusicItem