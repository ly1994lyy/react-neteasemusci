import React, { useState, useEffect } from 'react'
import { getNewMusic } from '../../../../api/musci'
import NewMusicItem from './NewMusicItem'

const musicContainerType = {
  display:"flex",
  flexDirection:'column',
  flexWrap:'wrap',
  width:'100%',
  height:'500px',
  alignContent:'space-between'
}

function NewMusic () {
  const [musicList, setMusicList] = useState([])
  const getMusicList = async () => {
    const res = await getNewMusic({ type: '0' })
    if (res.status === 200 && res.data.code === 200) {
      setMusicList(res.data.data)
    }
  }
  useEffect(() => {
    getMusicList()
  }, [])
  return (
    <div className="mt-50">
      <h3>最新音乐</h3>
      <div style={musicContainerType}>
        {
          musicList.map((item,index) => {
            if(index<=9){
              return (
                <NewMusicItem name={item.name} album={item.album} artists={item.artists} index={index} />
              )
            }
          })
        }
      </div>
    </div>
)
}

export default NewMusic