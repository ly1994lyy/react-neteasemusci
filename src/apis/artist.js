import request from '@/utils/request'

// 歌手分类列表
export const getArtistList = () => {
  return request({
    method: 'get',
    url: '/artist/list'
  })
}
