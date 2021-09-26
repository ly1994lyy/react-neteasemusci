import React, { Fragment, useState } from 'react'
import CityNav from './CityNav'
import './newMusic.less'
import NewNst from './NewNst'

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
  const [type, setType] = useState('newMusic')
  const changeType = (val) => {
    setType(val)
  }
  return (
    <Fragment>
      <div style={{ margin: '0 auto', width: '300px' }}>
        <div style={titleType} className='flex-center'>
          <div style={title} onClick={() => changeType('newMusic')}>新歌速递</div>
          <div style={title} onClick={() => changeType('newEst')}>新碟上架</div>
        </div>
      </div>
      <div style={{ margin: '0 auto', width: '60vw' }}>
        {
          type === 'newMusic' ? <CityNav/> : <NewNst />
        }
      </div>
    </Fragment>
  )
}

export default HomeNewMusic