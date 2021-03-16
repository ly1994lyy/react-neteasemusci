import { get } from '../utils/http'

// 获取首页banner图
export const getHomePage = () => {
  return get('homepage/block/page')
}

// 获取首页推荐MV
export const getRecommendMv=()=>{
  return get('personalized/mv')
}