import React, { useEffect, useState } from 'react'
import { getArtistDetail } from '@/apis/artist.js'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'antd'
import { handleDuration } from '@/utils/handleTime.js'
import types from '../index.module.less'
import { usePlay } from '@/hooks/index.js'

const ArtistSongs = () => {
  const [songs, setSongs] = useState([])
  const { id } = useParams()

  const { setSongId } = usePlay()

  const querySongs = async () => {
    try {
      const res = await getArtistDetail({ id })
      setSongs(res.hotSongs)
    } catch (e) {
      console.log(e)
    }
  }

  const handleAr = (ar) => {
    return ar.reduce((result, item, index) => {
      return index === 0 ? result + item.name : result + '/' + item.name
    }, '')
  }

  const playMusic = (id) => {
    setSongId(id)
  }

  useEffect(() => {
    querySongs()
  }, [])
  return (
      <>
        <Row className={types.songsTableHeader}>
          <Col span={2}>#</Col>
          <Col span={6}>标题</Col>
          <Col span={6}>专辑</Col>
          <Col span={6}>喜欢</Col>
          <Col>时长</Col>
        </Row>
        {
          songs.map((e, i) => {
            return (
                <Row className={types.songsTable} key={e.id} align="middle" onDoubleClick={() => playMusic(e.id)}>
                  <Col span={2}>{i + 1 >= 10 ? i + 1 : '0' + (i + 1)}</Col>
                  <Col span={6}>
                    <div className={types.title}>
                      <img src={e.al.picUrl} className={types.authorImg} alt={e.name}/>
                      <div className={types.info}>
                        <div>{e.name}</div>
                        <div>{handleAr(e.ar || [])}</div>
                      </div>
                    </div>
                  </Col>
                  <Col span={6}>{e.al.name}</Col>
                  <Col span={6}>喜欢</Col>
                  <Col>{handleDuration((e.dt))}</Col>
                </Row>

            )
          })
        }
      </>
  )
}

export default ArtistSongs
