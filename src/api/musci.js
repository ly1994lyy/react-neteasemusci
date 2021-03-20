import {get} from '../utils/http'

export const getNewMusic=(params)=>{
  return get('top/song',params)
}