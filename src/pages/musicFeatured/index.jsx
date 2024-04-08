import React from 'react'
import { FEATURED_TYPE } from '@/constants/index.js'
import types from './index.module.less'
import { Outlet, useNavigate } from 'react-router-dom'

// 云音乐精选页面
const MusicFeatured = () => {
  const navigate = useNavigate()
  const toPage = (path) => {
    navigate(`/featured/${path}`)
  }
  return (
        <div className={types.featuredContainer}>
            <div className='flex'>
                {FEATURED_TYPE.map(e => {
                  return (
                        <h3 className={`cursor ${types.navType}`} key={e.path} onClick={() => toPage(e.path)}>{e.label}</h3>
                  )
                })}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
  )
}

export default MusicFeatured
