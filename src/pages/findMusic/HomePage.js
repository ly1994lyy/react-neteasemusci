import React, { useEffect, useState } from 'react'
import { getHomePage } from '../../api/homePage'
import Banner from './components/Banner'
import RecommendMv from './components/recommendMv/RecommendMv'
import NewMusic from './components/newMusic/NewMusic'

function HomePage () {

  const [bannerList, setBannerList] = useState([])
  useEffect(() => {
    getHomeData()
  }, [])

  const getHomeData = async () => {
    const res = await getHomePage()
    if (res.status === 200 && res.data.code === 200) {
      const bannerData = res.data.data.blocks.find(e => e.showType === 'BANNER')
      setBannerList(bannerData.extInfo.banners)
    }
  }

  return (
    <div style={{ margin: '0 auto', width: '60vw' }}>
      <Banner bannerList={bannerList}/>
      <NewMusic />
      <RecommendMv />
    </div>
  )
}

export default HomePage
