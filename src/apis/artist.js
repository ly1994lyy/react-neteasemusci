import request from '@/utils/request'

// 歌手分类列表
export const getArtistList = (params) => {
  return request({
    method: 'get',
    url: '/artist/list',
    params
  })
}

// 获取歌手部分信息
export const getArtistDetail = (params) => {
  return request({
    method: 'get',
    url: '/artists',
    params
  })
}

// 获取歌手的歌曲
export const getArtistSongs = (params) => {
  return request({
    method: 'get',
    url: '/artist/songs',
    params
  })
}

// 获取歌手的歌曲
export const getArtistAlbums = (params) => {
  return request({
    method: 'get',
    url: '/artist/album',
    params
  })
}
