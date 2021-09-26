import { get } from '../utils/http'

// 获取首页banner图
export const getHomePage = () => {
  return get('homepage/block/page')
}

// 获取首页推荐MV
export const getRecommendMv = () => {
  return get('personalized/mv')
}

//获取排行榜
export const getLeaderBoard = () => {
  return get('toplist')
}

// 获取首页推荐MV
export const getDetailList = (params) => {
  return get('playlist/detail', params)
}
