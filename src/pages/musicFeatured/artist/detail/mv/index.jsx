import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArtistMV } from '@/apis/artist.js'
import { Row } from 'antd'
import MvItem from './MvItem.jsx'

const ArtistMV = () => {
  const { id } = useParams()
  const [mvLists, setMvLists] = useState([])
  const queryMvLists = async () => {
    try {
      const res = await getArtistMV({ id })
      setMvLists(res.mvs)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    queryMvLists()
  }, [])
  return (
        <Row gutter={20}>
            {
                mvLists.map(e => {
                  return <MvItem key={e.id} info={e} />
                })
            }
        </Row>
  )
}

export default ArtistMV
