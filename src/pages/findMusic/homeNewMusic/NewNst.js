import React,{useState,useEffect} from 'react'
import { navList } from './navList'

function NewNst(){
  const [musciList, setMusicList] = useState([])
  const [type, setType] = useState('0')

  // const getMusicList = async () => {
  //   const res = await getNewMusic({ type })
  //   if (res.status === 200 && res.data.code === 200) {
  //     setMusicList(res.data.data)
  //   }
  // }
  const setTitleType = (val) => {
    setType(val)
  }
  return (
    <div>
      <div className='nav-header'>
        <div className='container'>
          {
            navList.map(nav => {
              return <div className={type === nav.type ? 'nav-title active' : 'nav-title'} key={nav.type}
                          onClick={() => setTitleType(nav.type)}>{nav.title}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NewNst