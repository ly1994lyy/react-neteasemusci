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

// 获取歌手的歌曲
export const getArtistMV = (params) => {
  return request({
    method: 'get',
    url: '/artist/mv',
    params
  })
}

// 获取歌手的歌手详情
export const getArtistDesc = (params) => {
  return request({
    method: 'get',
    url: '/artist/desc',
    params
  })
}

// 获取相似歌手
export const getArtistLikes = (params) => {
  return request({
    method: 'get',
    url: '/simi/artist',
    params
  })
}
