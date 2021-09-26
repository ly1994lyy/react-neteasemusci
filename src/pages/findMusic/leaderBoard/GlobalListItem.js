import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons'
import {dealWithPlayCount} from '@/utils/playCount'

const playCountType = {
  fontSize: '12px',
  position: 'absolute',
  color: 'rgba(251,251,251)',
  top: '10px',
  right: '20px'
}

function GlobalListItem(props){
  const {list} = props
  return (
    <div style={{marginBottom:'50px'}}>
      <img className='wh-100 bd-5' src={list.coverImgUrl} alt=""/>
      <div style={playCountType}>
        <CaretRightOutlined />
        {dealWithPlayCount(list.playCount)}
      </div>
      <div>
        {list.name}
      </div>
    </div>
  )
}

export default GlobalListItem