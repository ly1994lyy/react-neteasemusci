import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import types from './index.module.less'
import { Button } from 'antd'
import { CaretRightOutlined, PlusOutlined } from '@ant-design/icons'
import { getArtistDetail } from '@/apis/artist.js'
import { ARTIST_DETAIL_TAB } from '@/constants/index.js'

const ArtistDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [artistInfo, setArtistInfo] = useState({})
  const [tab, setTab] = useState('')

  const handleAlias = (alias) => {
    return alias.reduce((result, item, i) => {
      return i === 0 ? `${result}${item}` : `${result}/${item}`
    }, '')
  }

  const getArtistInfo = async () => {
    try {
      const res = await getArtistDetail({ id })
      setArtistInfo(res.artist)
    } catch (e) {
      console.log(e)
    }
  }

  const goArtistTab = (path) => {
    setTab(path)
    navigate(`/artist/${id}/${path}`, { state: { artistName: artistInfo.name } })
  }

  useEffect(() => {
    const defaultPath = ARTIST_DETAIL_TAB[0].path
    setTab(defaultPath)
    navigate(`/artist/${id}/${defaultPath}`)
    getArtistInfo()
  }, [])

  return (
        <div className={types.detailContainer}>
            <div className={types.headerContainer}>
                <img className={types.img} src={artistInfo.img1v1Url} alt={artistInfo.name} />
                <div className={types.rightContainer}>
                    <div className={types.name}>{artistInfo.name}</div>
                    <div className={types.alias}>{handleAlias(artistInfo.alias || [])}</div>
                    <div className={types.btn}>
                        <Button type="primary" icon={<CaretRightOutlined />} danger>播放全部</Button>
                        <Button icon={<PlusOutlined />}>关注</Button>
                    </div>
                </div>
            </div>
            <div className={types.tabs}>
                {
                    ARTIST_DETAIL_TAB.map(e => {
                      return <div
                          className={`${types.tabItem} ${tab === e.path ? types.active : ''}`}
                          key={e.path}
                          onClick={() => goArtistTab(e.path)}
                      >
                          {e.label}
                      </div>
                    })
                }
            </div>
            <div>
                <Outlet />
            </div>
        </div>
  )
}

export default ArtistDetail
