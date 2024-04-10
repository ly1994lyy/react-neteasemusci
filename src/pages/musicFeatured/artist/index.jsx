import React, { useEffect, useState } from 'react'
import { ARTIST_LANGUAGE_TYPE, ARTIST_TYPE } from '@/constants/index.js'
import types from './index.module.less'
import { Button, Col, Row } from 'antd'
import { getArtistList } from '@/apis/artist.js'
import ArtistListItem from '@/pages/musicFeatured/artist/ArtistListItem.jsx'

const Artist = () => {
  const [area, setArea] = useState('-1')
  const [type, setType] = useState('-1')
  const [artistList, setArtistList] = useState([])
  const queryArtistList = async () => {
    try {
      const res = await getArtistList({ area, type })
      setArtistList(res.artists)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    queryArtistList()
  }, [area, type])

  return (
        <div>
            <div className={types.typeContainer}>
                {ARTIST_LANGUAGE_TYPE.map(e => {
                  return (
                      <Button
                          className={`${types.typeItem} ${area === e.value ? types.active : ''}`}
                          key={e.value}
                          shape="round"
                          onClick={() => setArea(e.value)}
                      >
                          {e.label}
                      </Button>
                  )
                })}
            </div>
            <div className={types.typeContainer}>
                {
                    ARTIST_TYPE.map(e => {
                      return (
                          <Button
                              className={`${types.typeItem} ${type === e.value ? types.active : ''}`}
                              key={e.value}
                              shape="round"
                              onClick={() => setType(e.value)}
                          >
                              {e.label}
                          </Button>
                      )
                    })
                }
            </div>
            <Row>
                {artistList.map(e => {
                  return <ArtistListItem key={e.id} info={e} />
                })}
            </Row>
        </div>
  )
}

export default Artist
