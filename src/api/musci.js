import { get } from '../utils/http'

//新歌速递接口
export const getNewMusic = (params) => {
  return get('top/song', params)
}