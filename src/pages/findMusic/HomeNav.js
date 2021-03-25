import React, { Fragment } from 'react'

function HomeNav () {
  return (
    <Fragment>
      <div className="top-nav-box">
        <div className="nav active">个性推荐</div>
        <div className="nav">歌单</div>
        <div className="nav">主播电台</div>
        <div className="nav">排行榜</div>
        <div className="nav">歌手</div>
        <div className="nav">最新音乐</div>
      </div>
    </Fragment>
  )
}

export default HomeNav