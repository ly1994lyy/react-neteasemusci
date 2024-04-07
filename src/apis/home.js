import request from '@/utils/request'

// 获取首页banner图
export const getHomePage = () => {
  return request({
    method: 'get',
    url: 'homepage/block/page'
  })
}

// 获取首页推荐MV
export const getRecommendMv = () => {
  return request({
    method: 'get',
    url: 'personalized/mv'
  })
}

// 获取排行榜
export const getLeaderBoard = () => {
  return request({
    method: 'get',
    url: 'toplist'
  })
}

// 获取首页推荐MV
export const getDetailList = (params) => {
  return request({
    method: 'get',
    url: 'playlist/detail',
    params
  })
}
