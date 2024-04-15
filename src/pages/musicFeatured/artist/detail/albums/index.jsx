import React, { useEffect, useState } from 'react'
import { getArtistAlbums } from '@/apis/artist.js'
import { useParams } from 'react-router-dom'
import AlbumItem from '@/pages/musicFeatured/artist/detail/albums/AlbumItem.jsx'
import { Row } from 'antd'

const ArtistAlbums = () => {
  const { id } = useParams()
  const [albums, setAlbums] = useState([])
  const queryAlbums = async () => {
    try {
      const res = await getArtistAlbums({ id })
      setAlbums(res.hotAlbums)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    queryAlbums()
  }, [])
  return (
        <Row gutter={20}>
            {
                albums.map(e => {
                  return <AlbumItem key={e.id} info={e} />
                })
            }
        </Row>
  )
}

export default ArtistAlbums
